# Couche de services (futur backend)

Ce dossier est réservé à la future intégration d'un backend
(**Supabase**, **Firebase** ou une **API REST**) pour :

- Gérer les inscriptions envoyées depuis `inscriptions.html`
- Gérer les messages envoyés depuis `contact.html`
- Permettre à un administrateur d'ajouter / modifier / supprimer :
  - des actualités
  - des activités
  - des photos de galerie
  - des documents de la bibliothèque numérique
  - les tarifs

## État actuel

Aujourd'hui, tout le contenu dynamique du site (actualités, activités,
bibliothèque, galerie, niveaux, tarifs) est centralisé dans un seul
fichier :

```
/assets/js/data.js
```

Chaque page lit ce fichier et affiche son contenu automatiquement.
C'est ce fichier qu'un futur back-office administrateur devra pouvoir
modifier (au lieu d'un simple fichier JavaScript statique).

Les deux formulaires du site (`inscriptions.html` et `contact.html`)
sont déjà fonctionnels côté interface (validation, message de
confirmation) mais n'envoient pas encore les données à un serveur —
voir le commentaire dans `assets/js/main.js` (`initForms`).

## Exemple d'intégration future (Supabase)

```js
// src/services/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'VOTRE_URL_SUPABASE',
  'VOTRE_CLE_PUBLIQUE'
);

// Exemple : enregistrer une inscription
export async function saveInscription(data) {
  const { error } = await supabase.from('inscriptions').insert([data]);
  if (error) throw error;
}

// Exemple : charger les actualités depuis la base au lieu de data.js
export async function loadNews() {
  const { data, error } = await supabase.from('news').select('*').order('date', { ascending: false });
  if (error) throw error;
  return data;
}
```

Il suffira alors de brancher `initForms()` (dans `assets/js/main.js`) et
les fonctions `renderNewsList()`, `renderGallery()`, etc. (dans les pages
concernées) sur ces fonctions de service, sans changer le HTML ni le CSS.

## Espace administrateur (à venir)

Le futur tableau de bord administrateur pourra être une application
séparée (ex. `/admin`) qui lit/écrit dans la même base de données que
ce site public, pour gérer : inscriptions, élèves, actualités, activités,
photos, galerie, bibliothèque, PDF, tarifs, messages et annonces.
