# ALMAARIFA AI — Installation

## Ce que contient le dossier
- `almaarifa-ai.js` : widget (bouton flottant + fenêtre de chat). Aucune clé API dedans.
- `api/chat.php` : relais sécurisé vers le modèle IA (la clé reste sur le serveur).
- `api/contact.php` : renseignement / message / rappel, envoyés par e-mail à l'administration.
- `api/knowledge.txt` : informations officielles de l'école. **À compléter** (lignes « NON DISPONIBLE »).
- `api/config.example.php` : à copier en `config.php`.

## Étapes
1. Créez une clé API sur https://console.anthropic.com.
2. Envoyez le dossier `almaarifa-ai/` à la racine du site (à côté de `index.html`). Hébergement PHP 8+ avec cURL requis.
3. Dans `api/`, copiez `config.example.php` en `config.php`, puis renseignez la clé, l'e-mail de l'administration et le domaine.
4. Complétez `api/knowledge.txt` (frais, documents, fournitures, horaires, adresse précise).
5. Sur **chaque page** du site, ajoutez UNE ligne juste avant `</body>` (seule modification du site) :
   `<script src="/almaarifa-ai/almaarifa-ai.js" defer></script>`
6. Testez : question en français, arabe, anglais ; formulaire de rappel ; téléphone et ordinateur.

## Sécurité et confidentialité
- Clé API uniquement dans `config.php` (ou variable d'environnement), protégée par `.htaccess`. Sur Nginx, bloquez l'accès à `api/*.php` sauf `chat.php`/`contact.php` et à `api/*.txt`.
- Contrôle d'origine, limitation de débit par IP (12 messages/min, 150/jour) et anti-spam.
- Conservation : aucune conversation n'est enregistrée sur le serveur. L'historique reste dans l'onglet du visiteur (sessionStorage) et disparaît à sa fermeture. Les demandes de contact ne sont envoyées que par e-mail. Les compteurs anti-abus (IP hachée) sont supprimés après 2 jours.
- Le fournisseur du modèle reçoit le texte des messages pour générer la réponse : ajoutez une mention dans votre politique de confidentialité.
- Fixez une limite de dépense dans la console du fournisseur.

## Personnalisation
Avant le script, vous pouvez définir `window.ALMAARIFA_AI_CONFIG = { whatsapp: '221…', phone: '+221…' }`.
