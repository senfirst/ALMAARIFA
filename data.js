/**
 * =========================================================
 * COUCHE DE DONNÉES DU SITE
 * =========================================================
 * Ce fichier centralise tout le contenu qui doit pouvoir être
 * modifié facilement (actualités, activités, bibliothèque...).
 *
 * Aujourd'hui : simples tableaux JavaScript.
 * Demain : ces mêmes tableaux pourront être remplacés par des
 * appels à Supabase / Firebase / une API REST sans changer le
 * reste du site (voir /src/services/README.md).
 *
 * IMPORTANT — IMAGES :
 * Chaque entrée référence un fichier dans /public/images/.
 * Tant que le fichier n'existe pas, le site affiche automatiquement
 * un emplacement réservé (voir assets/js/main.js -> renderImage()).
 * Aucune image n'est générée ni récupérée automatiquement.
 * ========================================================= */

const SITE_DATA = {

  // ---------------- ACTUALITÉS ----------------
  news: [
    {
      id: "actu-1",
      title: "Ouverture des inscriptions 2026–2027",
      category: "Annonce",
      date: "2026-09-01",
      image: "images/actualites/inscriptions-2026.jpg",
      summary: "Les inscriptions pour l'année scolaire 2026–2027 débutent le 15 septembre. Places limitées par niveau.",
      content: "Les inscriptions pour l'année scolaire 2026–2027 débutent le 15 septembre 2026. Les familles sont invitées à préparer les dossiers de leurs enfants dès maintenant. Le nombre de places est limité par niveau afin de garantir un encadrement de qualité. Rendez-vous sur la page Inscriptions pour remplir le formulaire en ligne ou contacter directement l'Institut."
    },
    {
      id: "actu-2",
      title: "Partenariat renforcé avec l'Institut Al-Azhar",
      category: "Partenariat",
      date: "2026-06-12",
      image: "images/actualites/partenariat-al-azhar.jpg",
      summary: "L'Institut Al Maarifa renforce ses échanges pédagogiques avec l'Institut Al-Azhar.",
      content: "Dans le cadre de son partenariat avec l'Institut Al-Azhar, l'Institut Al Maarifa poursuit le renforcement de son programme d'éducation islamique et d'apprentissage de la langue arabe, avec un accompagnement pédagogique adapté à chaque niveau."
    },
    {
      id: "actu-3",
      title: "Journée portes ouvertes",
      category: "Événement",
      date: "2026-05-20",
      image: "images/actualites/portes-ouvertes.jpg",
      summary: "Une matinée pour découvrir le centre, rencontrer l'équipe pédagogique et visiter les classes.",
      content: "L'Institut a organisé une journée portes ouvertes permettant aux familles de découvrir les infrastructures, de rencontrer l'équipe pédagogique et d'échanger sur les programmes proposés aux différents niveaux."
    }
  ],

  // ---------------- ACTIVITÉS ----------------
  activities: [
    {
      id: "act-1",
      title: "Concours de récitation coranique",
      type: "islamique",
      date: "2026-04-10",
      image: "images/activites/recitation-coran.jpg",
      description: "Compétition annuelle de mémorisation et de récitation du Coran entre élèves."
    },
    {
      id: "act-2",
      title: "Tournoi sportif inter-classes",
      type: "sportive",
      date: "2026-03-14",
      image: "images/activites/tournoi-sportif.jpg",
      description: "Football, athlétisme et jeux collectifs organisés entre les classes du primaire et du collège."
    },
    {
      id: "act-3",
      title: "Atelier calligraphie arabe",
      type: "culturelle",
      date: "2026-02-18",
      image: "images/activites/calligraphie.jpg",
      description: "Initiation à la calligraphie arabe animée par un enseignant spécialisé."
    },
    {
      id: "act-4",
      title: "Sortie pédagogique",
      type: "pedagogique",
      date: "2026-01-22",
      image: "images/activites/sortie-pedagogique.jpg",
      description: "Visite éducative destinée à compléter les apprentissages en sciences et en éveil."
    },
    {
      id: "act-5",
      title: "Cérémonie de fin d'année",
      type: "evenement",
      date: "2025-07-05",
      image: "images/activites/ceremonie-fin-annee.jpg",
      description: "Remise des attestations et célébration des réussites de l'année scolaire."
    }
  ],

  // ---------------- BIBLIOTHÈQUE NUMÉRIQUE ----------------
  library: [
    { id: "lib-1", title: "Le Saint Coran", category: "coran", lang: "Arabe / Français", file: "documents/coran.pdf" },
    { id: "lib-2", title: "Recueil de Hadiths choisis", category: "hadith", lang: "Arabe / Français", file: "documents/hadiths-choisis.pdf" },
    { id: "lib-3", title: "Manuel de Français — CE1", category: "francais", lang: "Français", file: "documents/francais-ce1.pdf" },
    { id: "lib-4", title: "Manuel d'Arabe — CP", category: "arabe", lang: "Arabe", file: "documents/arabe-cp.pdf" },
    { id: "lib-5", title: "Sciences d'observation — CM2", category: "sciences", lang: "Français", file: "documents/sciences-cm2.pdf" },
    { id: "lib-6", title: "Éducation islamique — Collège", category: "islamique", lang: "Français / Arabe", file: "documents/education-islamique-college.pdf" },
    { id: "lib-7", title: "Cahier d'exercices — Grammaire arabe", category: "arabe", lang: "Arabe", file: "documents/grammaire-arabe.pdf" },
    { id: "lib-8", title: "Livret pédagogique — Préscolaire", category: "pedagogique", lang: "Français", file: "documents/livret-prescolaire.pdf" }
  ],

  // ---------------- GALERIE ----------------
  gallery: [
    { id: "g1", title: "Bâtiment principal", category: "batiment", image: "images/galerie/batiment-1.jpg" },
    { id: "g2", title: "Cour de l'Institut", category: "batiment", image: "images/galerie/cour.jpg" },
    { id: "g3", title: "Salle de classe", category: "classes", image: "images/galerie/classe-1.jpg" },
    { id: "g4", title: "Salle de classe — Coranique", category: "classes", image: "images/galerie/classe-coranique.jpg" },
    { id: "g5", title: "Élèves en activité", category: "vie-scolaire", image: "images/galerie/eleves-1.jpg" },
    { id: "g6", title: "Bibliothèque", category: "batiment", image: "images/galerie/bibliotheque.jpg" },
    { id: "g7", title: "Activité sportive", category: "activites", image: "images/galerie/sport-1.jpg" },
    { id: "g8", title: "Cérémonie", category: "evenements", image: "images/galerie/ceremonie-1.jpg" }
  ],

  // ---------------- PROGRAMMES ----------------
  levels: [
    { name: "Préscolaire", tag: "Éveil", desc: "Premiers apprentissages, éveil sensoriel et introduction douce aux lettres, chiffres et versets courts." },
    { name: "CI", tag: "Primaire", desc: "Apprentissage de la lecture, de l'écriture et des bases du calcul en français et en arabe." },
    { name: "CP", tag: "Primaire", desc: "Consolidation de la lecture et introduction progressive de l'éducation islamique." },
    { name: "CE1", tag: "Primaire", desc: "Renforcement des fondamentaux et développement de l'autonomie de l'élève." },
    { name: "CE2", tag: "Primaire", desc: "Approfondissement du programme général et de la mémorisation coranique." },
    { name: "CM1", tag: "Primaire", desc: "Préparation méthodique à l'entrée au collège dans les deux langues." },
    { name: "CM2", tag: "Primaire", desc: "Année de consolidation avant l'entrée en 6ème, avec préparation aux examens." },
    { name: "Collège", tag: "Secondaire", desc: "Enseignement général complet, approfondissement de l'arabe et de l'éducation islamique." },
    { name: "Lycée", tag: "Secondaire", desc: "Orientation progressive et approfondissement disciplinaire pour préparer le Baccalauréat." },
    { name: "Terminale", tag: "Secondaire", desc: "Préparation intensive au Baccalauréat, avec un accompagnement personnalisé." }
  ],

  // ---------------- TARIFS ----------------
  pricing: {
    inscription: 20000,
    blouse: 5000,
    mensualite: 8000,
    currency: "F CFA"
  }
};
