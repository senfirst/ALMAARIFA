# Institut Al Maarifa Thierno Djibril Ousmane Ba — Site web

Site statique (HTML / CSS / JS, sans framework ni étape de build)
pour l'Institut Al Maarifa, école franco-arabe partenaire de
l'Institut Al-Azhar, à Bambilor - Darou Salam, Sénégal.

## Démarrer

Aucune installation n'est nécessaire. Deux options :

1. **Le plus simple** : ouvrez `index.html` dans un navigateur.
2. **Recommandé pour un rendu identique à la production** (certaines
   fonctions comme les filtres et les images fonctionnent mieux via un
   petit serveur local) :
   ```
   npx serve .
   ```
   ou, avec Python :
   ```
   python3 -m http.server 8080
   ```
   puis ouvrez `http://localhost:8080`.

## Ajouter vos images, votre logo et vos documents

- **Logo** : déposez votre fichier sous `/public/logo.png` (remplace le
  fichier `public/logo.png.README.txt`).
- **Photos** : voir `/public/images/README.txt` pour la liste exacte des
  noms de fichiers attendus par le site (bâtiment, responsable, classes,
  galerie, actualités, activités...).
- **Documents PDF (bibliothèque)** : voir `/public/documents/README.txt`.
- **Favicon** : voir `/public/icons/README.txt`.

Tant qu'un fichier n'est pas présent, le site affiche automatiquement un
emplacement réservé — **aucune image n'est générée ou récupérée
automatiquement**, conformément au cahier des charges.

## Modifier le contenu (actualités, activités, bibliothèque, galerie, niveaux)

Tout ce contenu est centralisé dans un seul fichier, pensé pour être
facilement remplacé plus tard par un vrai back-office :

```
/assets/js/data.js
```

Ajoutez, modifiez ou supprimez une entrée dans le tableau correspondant
(`news`, `activities`, `library`, `gallery`, `levels`) et la page
concernée se met à jour automatiquement.

## Structure du projet

```
/public
  /images        <- vos photos (voir README.txt)
  /documents     <- vos PDF pour la bibliothèque
  /icons         <- favicon
  logo.png       <- votre logo officiel

/assets
  /css/style.css <- design system (couleurs, typographie, composants)
  /js/data.js    <- contenu éditable (actualités, activités, bibliothèque...)
  /js/main.js    <- comportements (menu, filtres, galerie, formulaires...)

/src
  /services      <- couche prête pour Supabase / Firebase / API REST
  /components, /pages, /sections, /data  <- réservés à une future évolution
                                             (ex. migration vers un framework)

index.html, institut.html, centre.html, programmes.html, activites.html,
actualites.html, bibliotheque.html, galerie.html, tarifs.html,
inscriptions.html, contact.html
```

## Formulaires (inscriptions & contact)

Les deux formulaires valident les champs et affichent un message de
confirmation, mais n'envoient pas encore les données vers un serveur.
Voir `/src/services/README.md` pour l'exemple d'intégration (Supabase,
Firebase ou API REST) qui pourra être branché sans changer le HTML.

## Prochaines évolutions prévues

- Connexion des formulaires à une base de données.
- Espace administrateur pour gérer inscriptions, actualités, activités,
  galerie, bibliothèque, tarifs et messages.
- Ajout des vraies images, du logo officiel et des documents PDF fournis
  par l'Institut.
