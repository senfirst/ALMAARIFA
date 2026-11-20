<?php
// Copiez ce fichier en « config.php » et renseignez les valeurs.
// Idéal : définir la clé dans une variable d'environnement ANTHROPIC_API_KEY (hébergeur) plutôt qu'ici.
// Ne publiez JAMAIS config.php (GitHub, etc.).
return [
    'api_key'       => getenv('ANTHROPIC_API_KEY') ?: 'COLLER_VOTRE_CLE_ICI',
    'model'         => 'claude-haiku-5-5',          // rapide et économique ; 'claude-sonnet-5-5' = réponses plus nuancées
    'admin_email'   => 'contact@institutalmaarifa.com', // À MODIFIER : e-mail qui reçoit les demandes
    'from_email'    => 'no-reply@institutalmaarifa.com',
    'allowed_hosts' => ['institutalmaarifa.com', 'www.institutalmaarifa.com'],
    'data_dir'      => __DIR__ . '/data',           // compteurs anti-abus uniquement (purgés automatiquement)
    'salt'          => 'CHANGEZ-MOI-chaine-aleatoire-longue',
];
