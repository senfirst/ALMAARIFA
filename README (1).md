# Institut Al Maarifa Thierno Djibril Ousmane Ba — Site web

Site vitrine premium pour l'Institut Al Maarifa Thierno Djibril Ousmane Ba,
école franco-arabe à Bambilor – Darou Salam (partenaire : Institut Al-Azhar).

## Démarrer en local

```bash
npm install
npm run dev
```

Le site sera accessible sur http://localhost:5173

## Construire pour la mise en ligne

```bash
npm run build
```

Le résultat est généré dans le dossier `dist/`, prêt à être déployé sur
n'importe quel hébergement statique (Vercel, Netlify, OVH, o2switch, etc.).

## Structure du projet

```
public/
  logo.png              → logo officiel de l'Institut
  images/               → photos réelles de l'établissement
src/
  components/           → composants réutilisables (Header, Hero, About, ...)
  pages/
    Home.jsx            → assemble toutes les sections de la page d'accueil
  siteConfig.js          → coordonnées, tarifs, année scolaire (à modifier ici)
  lib/
    registrationService.js → logique d'envoi du formulaire d'inscription
```

## Modifier les informations du site

- **Téléphones, adresse, tarifs, date de rentrée des inscriptions** :
  tout se trouve dans `src/siteConfig.js`.
- **Textes des sections** : directement dans chaque fichier de
  `src/components/`.
- **Photos** : remplacez les fichiers dans `public/images/` en gardant
  les mêmes noms, ou mettez à jour les chemins dans les composants
  concernés (`Hero.jsx`, `About.jsx`, `Gallery.jsx`, `Leadership.jsx`,
  `Registration.jsx`).

## Brancher le formulaire d'inscription à une base de données

Le formulaire d'inscription (section "Inscriptions") est déjà prêt à être
connecté à **Firebase** ou **Supabase**. Toute la logique d'envoi est
centralisée dans `src/lib/registrationService.js` : il suffit de remplacer
le contenu de la fonction `submitRegistration` par un vrai appel à votre
backend (des exemples de code pour Firebase et Supabase sont donnés en
commentaire dans ce fichier).

## Notes sur les images

- Le logo (`logo.png`) est utilisé tel quel, sans aucune modification.
- La photo du responsable (`responsable.jpg`) est une photo réelle,
  recadrée à partir d'un support de communication existant, sans
  retouche ni transformation du visage.
- Les photos du bâtiment, de l'intérieur et des élèves sont les photos
  réelles fournies pour ce projet.
- Il n'y avait pas de photo dédiée pour une salle de classe ni
  d'illustration "éducation" ; la galerie et les sections utilisent les
  photos réelles disponibles (bâtiment, intérieur, élèves). Vous pouvez
  ajouter ces photos plus tard dans `public/images/` et les référencer
  dans `Gallery.jsx`.

## Administration (à venir)

Le projet est structuré pour accueillir facilement, dans une prochaine
itération : un tableau de bord admin, la gestion des inscriptions, des
élèves, des photos, des annonces, des tarifs et des messages — en
s'appuyant sur `src/lib/` pour la logique métier et un nouveau dossier
`src/pages/admin/` pour les écrans d'administration.
