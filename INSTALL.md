# ALMAARIFA AI — Installation (GitHub Pages + Cloudflare Workers)

Le site reste sur GitHub Pages. La clé API vit uniquement dans un relais gratuit Cloudflare Workers, jamais dans le dépôt.

## 1. Relais (dossier `worker/`) — ne le publiez PAS dans le dépôt du site
1. Créez un compte gratuit sur cloudflare.com, installez Node.js.
2. Dans `worker/`, éditez `wrangler.toml` : `ADMIN_EMAIL` (et `ALLOWED_ORIGINS` si votre domaine diffère).
3. Complétez `src/knowledge.js` (frais, documents, fournitures, horaires, adresse : lignes « NON DISPONIBLE »).
4. Terminal :
   - `npx wrangler login`
   - `npx wrangler secret put ANTHROPIC_API_KEY` (clé créée sur console.anthropic.com)
   - `npx wrangler secret put RESEND_API_KEY` (clé gratuite sur resend.com ; sans elle, les formulaires de rappel/message ne partent pas, le chat fonctionne)
   - `npx wrangler deploy` → vous obtenez une URL `https://almaarifa-ai.XXXX.workers.dev`
5. Protection anti-abus : dans le tableau de bord Cloudflare, ajoutez une règle de limitation de débit sur ce Worker, et fixez une limite de dépense dans la console du fournisseur IA.

## 2. Site (dépôt GitHub Pages)
1. Ouvrez `almaarifa-ai.js` et remplacez `VOTRE-COMPTE` (2 occurrences) par l'URL de votre Worker.
2. Ajoutez le dossier `almaarifa-ai/` (uniquement `almaarifa-ai.js`) à la racine du dépôt.
3. Sur chaque page, ajoutez avant `</body>` :
   `<script src="/almaarifa-ai/almaarifa-ai.js" defer></script>`
4. Poussez sur GitHub, attendez le déploiement, testez (FR/AR/EN, mobile, formulaire de rappel).

## Confidentialité
Aucune conversation n'est enregistrée : l'historique reste dans l'onglet du visiteur (sessionStorage). Les demandes de contact ne partent que par e-mail. Le texte des messages est transmis au fournisseur du modèle IA : mentionnez-le dans votre politique de confidentialité.
