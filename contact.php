<?php
declare(strict_types=1);
require __DIR__ . '/lib.php';

$in = guard();
rate_limit('contact', 4, 3600);

// Anti-spam : le champ « website » est invisible, un humain ne le remplit pas.
if (!empty($in['website'])) out(200, ['ok' => true]);

$types = ['info' => 'Demande de renseignement', 'message' => 'Message', 'callback' => 'Demande de rappel'];
$type  = $in['type'] ?? '';
if (!isset($types[$type])) out(400, ['error' => 'type']);

$clean = fn($v, int $n) => trim(preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F]/u', '', mb_substr((string) $v, 0, $n)));
$name  = $clean($in['name'] ?? '', 80);
$phone = $clean($in['phone'] ?? '', 30);
$msg   = $clean($in['message'] ?? '', 1000);
$lang  = in_array($in['lang'] ?? '', ['fr', 'ar', 'en'], true) ? $in['lang'] : 'fr';

if ($name === '' || strlen(preg_replace('/\D/', '', $phone)) < 8 || ($type !== 'callback' && $msg === '')) out(400, ['error' => 'fields']);
if (!preg_match('/^[+\d\s().-]+$/', $phone)) out(400, ['error' => 'phone']);

$c = cfg();
$subject = '[ALMAARIFA AI] ' . $types[$type] . ' - ' . str_replace(["\r", "\n"], ' ', $name);
$body = "Type : {$types[$type]}\nNom : $name\nTéléphone : $phone\nLangue : $lang\nDate : " . date('d/m/Y H:i') . "\n\nMessage :\n" . ($msg !== '' ? $msg : '(aucun message : rappel demandé)') . "\n";
$headers = "From: Site Institut Al Maarifa <{$c['from_email']}>\r\nContent-Type: text/plain; charset=UTF-8\r\nX-Mailer: almaarifa-ai";

// Rien n'est stocké sur le serveur : la demande est transmise par e-mail uniquement.
if (!@mail($c['admin_email'], '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers)) {
    error_log('[almaarifa-ai] mail() a échoué');
    out(500, ['error' => 'mail']);
}
out(200, ['ok' => true]);
