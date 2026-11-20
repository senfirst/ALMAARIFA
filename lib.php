<?php
declare(strict_types=1);

function cfg(): array {
    static $c = null;
    if ($c === null) {
        $f = __DIR__ . '/config.php';
        if (!is_file($f)) { out(500, ['error' => 'config']); }
        $c = require $f;
    }
    return $c;
}

function out(int $code, array $data): never {
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    header('X-Content-Type-Options: nosniff');
    header('Cache-Control: no-store');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

/** Accepte uniquement POST JSON venant du site lui-même. */
function guard(): array {
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') out(405, ['error' => 'method']);
    $src  = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');
    $host = strtolower((string) parse_url($src, PHP_URL_HOST));
    if ($host === '' || !in_array($host, cfg()['allowed_hosts'], true)) out(403, ['error' => 'origin']);
    $raw = file_get_contents('php://input', false, null, 0, 30000);
    $j = json_decode((string) $raw, true);
    if (!is_array($j)) out(400, ['error' => 'json']);
    return $j;
}

/** Limitation de débit par IP (fenêtre glissante, fichiers temporaires purgés automatiquement). */
function rate_limit(string $bucket, int $max, int $window): void {
    $dir = cfg()['data_dir'];
    if (!is_dir($dir)) @mkdir($dir, 0750, true);
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0';
    $f  = $dir . '/rl_' . $bucket . '_' . hash('sha256', $ip . cfg()['salt']) . '.json';
    $now = time();
    $fh = @fopen($f, 'c+');
    if (!$fh) return;
    flock($fh, LOCK_EX);
    $t = json_decode((string) stream_get_contents($fh), true);
    $t = is_array($t) ? array_values(array_filter($t, fn($x) => $x > $now - $window)) : [];
    if (count($t) >= $max) { flock($fh, LOCK_UN); fclose($fh); out(429, ['error' => 'rate']); }
    $t[] = $now;
    ftruncate($fh, 0); rewind($fh); fwrite($fh, json_encode($t));
    flock($fh, LOCK_UN); fclose($fh);
    // Conservation : on supprime les fichiers inactifs depuis plus de 2 jours
    if (random_int(1, 50) === 1) {
        foreach (glob($dir . '/rl_*.json') ?: [] as $old) { if (filemtime($old) < $now - 172800) @unlink($old); }
    }
}
