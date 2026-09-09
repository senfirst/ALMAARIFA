/* =========================================================================
   PROGRAMMES-DATA.JS — Institut Al Maarifa
   -------------------------------------------------------------------------
   Toutes les informations affichées sur la page "Programmes" viennent
   uniquement de cet objet : window.SITE_DATA.programmes

   STRUCTURE :
     cycles (Préscolaire / Élémentaire / Collège / Lycée)
       -> niveaux (ex : CM2, 3e, Terminale...)
            -> objectifs            (liste de textes)
            -> matieres              (liste de matières, chacune avec :
                    nom, icone, description, competences[], volumeHoraire)
            -> methodesPedagogiques (liste de textes)
            -> evaluation            (liste de textes)

   POUR MODIFIER UN NIVEAU (ex. CM2) :
     -> cherchez l'objet correspondant (id: "cm2") et modifiez ses champs.
     Aucune modification du HTML ou du JavaScript d'affichage n'est requise.

   POUR MODIFIER LES MATIÈRES D'UN CYCLE ENTIER :
     -> modifiez les constantes MATIERES_* ci-dessous : tous les niveaux
     de ce cycle qui utilisent cette constante seront mis à jour.
     Un niveau peut aussi recevoir sa PROPRE liste de matières si besoin
     (il suffit de lui donner un tableau "matieres" personnalisé au lieu
     de réutiliser la constante partagée).

   IMPORTANT : les volumes horaires et l'organisation présentés ici sont
   indicatifs et propres à l'organisation pédagogique interne de
   l'Institut Al Maarifa. Ils ne constituent pas le programme officiel
   du Ministère de l'Éducation nationale du Sénégal, ni celui de
   l'Institut Al-Azhar. Voir la mention en bas de page.
   ========================================================================= */

(function () {
  window.SITE_DATA = window.SITE_DATA || {};

  /* ------------------------------------------------------------------- */
  /* MATIÈRES PARTAGÉES PAR CYCLE                                        */
  /* ------------------------------------------------------------------- */

  const MATIERES_PRESCOLAIRE = [
    {
      nom: "Éveil et langage (français)",
      icone: "🇫🇷",
      description: "Premiers contacts avec la langue française : comptines, vocabulaire du quotidien, expression orale.",
      competences: ["S'exprimer par des phrases simples", "Enrichir son vocabulaire", "Écouter et comprendre une histoire courte"],
      volumeHoraire: "5h / semaine (indicatif)"
    },
    {
      nom: "Initiation à l'arabe",
      icone: "🇸🇦",
      description: "Découverte de l'alphabet arabe, des sons et des premiers mots par le jeu et la répétition.",
      competences: ["Reconnaître les lettres arabes", "Répéter des mots simples", "Associer un son à une lettre"],
      volumeHoraire: "3h / semaine (indicatif)"
    },
    {
      nom: "Initiation coranique et Tajwid",
      icone: "📖",
      description: "Écoute, répétition et mémorisation des sourates les plus courtes, adaptées à l'âge de l'enfant.",
      competences: ["Réciter de courtes sourates", "Reconnaître le son des lettres coraniques"],
      volumeHoraire: "2h / semaine (indicatif)"
    },
    {
      nom: "Éducation islamique adaptée",
      icone: "🌙",
      description: "Valeurs, politesse (adab) et petites histoires des prophètes adaptées aux tout-petits.",
      competences: ["Adopter les bonnes manières de base", "Connaître quelques invocations courtes"],
      volumeHoraire: "1h30 / semaine (indicatif)"
    },
    {
      nom: "Éveil scientifique et numération",
      icone: "🔢",
      description: "Découverte des formes, des couleurs, des nombres et du monde qui entoure l'enfant.",
      competences: ["Compter jusqu'à 10-20 selon la section", "Reconnaître formes et couleurs", "Classer et trier des objets"],
      volumeHoraire: "3h / semaine (indicatif)"
    },
    {
      nom: "Graphisme et pré-écriture",
      icone: "✏️",
      description: "Motricité fine préparant à l'écriture : traits, formes, premières lettres.",
      competences: ["Tenir correctement son crayon", "Tracer des lignes et des formes simples"],
      volumeHoraire: "2h / semaine (indicatif)"
    },
    {
      nom: "Motricité, jeux et EPS",
      icone: "⚽",
      description: "Jeux collectifs, motricité globale et activités physiques adaptées.",
      competences: ["Développer la coordination motrice", "Apprendre à jouer en groupe"],
      volumeHoraire: "2h / semaine (indicatif)"
    }
  ];

  const MATIERES_ELEMENTAIRE = [
    {
      nom: "Français",
      icone: "🇫🇷",
      description: "Lecture, compréhension, grammaire, conjugaison, orthographe, vocabulaire, expression orale et écrite.",
      competences: ["Lire couramment un texte adapté", "Rédiger un texte simple et structuré", "Maîtriser les règles de base de grammaire et conjugaison"],
      volumeHoraire: "6h / semaine (indicatif)"
    },
    {
      nom: "Arabe",
      icone: "🇸🇦",
      description: "Lecture, écriture, vocabulaire, grammaire, conjugaison, expression orale et écrite en langue arabe.",
      competences: ["Lire et écrire l'arabe couramment", "Construire des phrases correctes", "S'exprimer à l'oral en arabe"],
      volumeHoraire: "6h / semaine (indicatif)"
    },
    {
      nom: "Coran et Tajwid",
      icone: "📖",
      description: "Lecture, mémorisation progressive, révision régulière et règles de Tajwid.",
      competences: ["Mémoriser les sourates du programme", "Appliquer les règles de base du Tajwid", "Réviser régulièrement les sourates acquises"],
      volumeHoraire: "3h / semaine (indicatif)"
    },
    {
      nom: "Éducation islamique",
      icone: "🌙",
      description: "Tawhid, Fiqh, Hadith, Sîra, Akhlaq (comportement) et invocations quotidiennes.",
      competences: ["Connaître les piliers de l'Islam", "Réciter les invocations courantes", "Appliquer les bonnes manières (Akhlaq)"],
      volumeHoraire: "2h / semaine (indicatif)"
    },
    {
      nom: "Mathématiques",
      icone: "🔢",
      description: "Calcul, numération, géométrie, mesures et résolution de problèmes.",
      competences: ["Maîtriser les 4 opérations", "Résoudre des problèmes simples", "Reconnaître les figures géométriques de base"],
      volumeHoraire: "5h / semaine (indicatif)"
    },
    {
      nom: "Sciences et découverte du monde",
      icone: "🔬",
      description: "Sciences de la vie, environnement et premières notions scientifiques.",
      competences: ["Observer et décrire un phénomène simple", "Comprendre le corps humain et le vivant", "Adopter des gestes respectueux de l'environnement"],
      volumeHoraire: "2h / semaine (indicatif)"
    },
    {
      nom: "Histoire-Géographie et éducation civique",
      icone: "🌍",
      description: "Repères historiques, notions de géographie et éducation à la citoyenneté.",
      competences: ["Se repérer dans le temps et l'espace", "Connaître les grands repères de l'histoire", "Comprendre les règles de la vie collective"],
      volumeHoraire: "2h / semaine (indicatif)"
    },
    {
      nom: "Anglais",
      icone: "🇬🇧",
      description: "Initiation progressive : vocabulaire, expressions courantes, compréhension orale.",
      competences: ["Comprendre des mots et phrases simples", "Se présenter en anglais"],
      volumeHoraire: "1h30 / semaine (indicatif)"
    },
    {
      nom: "Informatique",
      icone: "💻",
      description: "Culture numérique de base et initiation à l'utilisation d'un ordinateur.",
      competences: ["Utiliser clavier et souris", "Découvrir les bases de la bureautique"],
      volumeHoraire: "1h / semaine (indicatif)"
    },
    {
      nom: "Éducation physique et sportive (EPS)",
      icone: "⚽",
      description: "Sport, jeux collectifs et développement de la condition physique.",
      competences: ["Participer à des jeux collectifs", "Développer son endurance et sa coordination"],
      volumeHoraire: "2h / semaine (indicatif)"
    }
  ];

  const MATIERES_COLLEGE = [
    {
      nom: "Français",
      icone: "🇫🇷",
      description: "Grammaire avancée, littérature, expression écrite argumentée et analyse de textes.",
      competences: ["Analyser un texte littéraire", "Rédiger un texte argumenté", "Maîtriser l'orthographe et la syntaxe avancées"],
      volumeHoraire: "5h / semaine (indicatif)"
    },
    {
      nom: "Arabe",
      icone: "🇸🇦",
      description: "Grammaire avancée, littérature arabe et expression écrite structurée.",
      competences: ["Analyser un texte en arabe", "Rédiger une composition en arabe", "Enrichir son vocabulaire littéraire"],
      volumeHoraire: "5h / semaine (indicatif)"
    },
    {
      nom: "Coran et Tajwid",
      icone: "📖",
      description: "Mémorisation avancée, révision structurée et approfondissement du Tajwid.",
      competences: ["Mémoriser un volume plus important de sourates/versets", "Maîtriser les règles avancées du Tajwid"],
      volumeHoraire: "3h / semaine (indicatif)"
    },
    {
      nom: "Éducation islamique",
      icone: "🌙",
      description: "Fiqh, Hadith, Sîra et Akhlaq approfondis, adaptés à l'âge de l'adolescent.",
      competences: ["Comprendre les fondements du Fiqh", "Analyser des enseignements tirés de la Sîra", "Adopter un comportement conforme à l'Akhlaq"],
      volumeHoraire: "2h / semaine (indicatif)"
    },
    {
      nom: "Mathématiques",
      icone: "🔢",
      description: "Algèbre, géométrie et premières notions de statistiques.",
      competences: ["Résoudre des équations simples", "Utiliser les théorèmes de géométrie", "Lire et interpréter des statistiques simples"],
      volumeHoraire: "5h / semaine (indicatif)"
    },
    {
      nom: "Sciences (SVT & Physique-Chimie)",
      icone: "🔬",
      description: "Sciences de la vie et de la terre, physique-chimie et démarche expérimentale.",
      competences: ["Mener une démarche scientifique simple", "Comprendre des phénomènes physiques de base", "Relier sciences et vie quotidienne"],
      volumeHoraire: "3h / semaine (indicatif)"
    },
    {
      nom: "Histoire-Géographie et éducation civique",
      icone: "🌍",
      description: "Approfondissement des grandes périodes historiques et des enjeux géographiques.",
      competences: ["Analyser un fait historique", "Interpréter une carte ou un document géographique", "Comprendre les institutions civiques"],
      volumeHoraire: "3h / semaine (indicatif)"
    },
    {
      nom: "Anglais",
      icone: "🇬🇧",
      description: "Grammaire, compréhension écrite/orale et expression en anglais.",
      competences: ["Comprendre un texte simple en anglais", "S'exprimer sur des sujets courants"],
      volumeHoraire: "3h / semaine (indicatif)"
    },
    {
      nom: "Informatique",
      icone: "💻",
      description: "Bureautique et initiation à la programmation.",
      competences: ["Utiliser un traitement de texte et un tableur", "Comprendre les bases de la logique de programmation"],
      volumeHoraire: "2h / semaine (indicatif)"
    },
    {
      nom: "Éducation physique et sportive (EPS)",
      icone: "⚽",
      description: "Sports collectifs, performance individuelle et esprit d'équipe.",
      competences: ["Progresser dans une discipline sportive", "Respecter les règles du jeu et l'esprit sportif"],
      volumeHoraire: "2h / semaine (indicatif)"
    }
  ];

  const MATIERES_LYCEE = [
    {
      nom: "Français",
      icone: "🇫🇷",
      description: "Littérature, dissertation et commentaire de texte.",
      competences: ["Rédiger une dissertation structurée", "Réaliser un commentaire de texte littéraire"],
      volumeHoraire: "4h / semaine (indicatif)"
    },
    {
      nom: "Arabe",
      icone: "🇸🇦",
      description: "Littérature arabe et expression écrite avancée.",
      competences: ["Analyser une œuvre littéraire arabe", "Rédiger une composition argumentée en arabe"],
      volumeHoraire: "4h / semaine (indicatif)"
    },
    {
      nom: "Coran et Tajwid",
      icone: "📖",
      description: "Mémorisation avancée et maîtrise experte du Tajwid, selon le parcours de l'élève.",
      competences: ["Consolider un large volume mémorisé", "Maîtriser le Tajwid de façon experte"],
      volumeHoraire: "2h / semaine (indicatif)"
    },
    {
      nom: "Éducation islamique",
      icone: "🌙",
      description: "Fiqh comparé, Hadith, Sîra et Akhlaq approfondis pour le jeune adulte.",
      competences: ["Argumenter sur des questions de Fiqh", "Relier les enseignements islamiques à la vie contemporaine"],
      volumeHoraire: "2h / semaine (indicatif)"
    },
    {
      nom: "Mathématiques",
      icone: "🔢",
      description: "Algèbre, fonctions, probabilités/statistiques et géométrie analytique.",
      competences: ["Étudier des fonctions", "Résoudre des problèmes de probabilités et statistiques", "Utiliser la géométrie analytique"],
      volumeHoraire: "5h / semaine (indicatif)"
    },
    {
      nom: "Sciences (Physique-Chimie & SVT)",
      icone: "🔬",
      description: "Approfondissement scientifique et démarche expérimentale rigoureuse.",
      competences: ["Modéliser un phénomène scientifique", "Mener une expérience et interpréter les résultats"],
      volumeHoraire: "4h / semaine (indicatif)"
    },
    {
      nom: "Histoire-Géographie et éducation civique",
      icone: "🌍",
      description: "Analyse critique des enjeux historiques, géopolitiques et citoyens.",
      competences: ["Construire une argumentation historique", "Analyser un enjeu géopolitique contemporain"],
      volumeHoraire: "3h / semaine (indicatif)"
    },
    {
      nom: "Anglais",
      icone: "🇬🇧",
      description: "Compréhension avancée, expression et initiation à des textes plus complexes.",
      competences: ["Comprendre un document authentique en anglais", "S'exprimer avec aisance à l'oral et à l'écrit"],
      volumeHoraire: "3h / semaine (indicatif)"
    },
    {
      nom: "Informatique",
      icone: "💻",
      description: "Bureautique avancée et initiation à la programmation.",
      competences: ["Produire des documents numériques complexes", "Comprendre des notions de base en programmation"],
      volumeHoraire: "2h / semaine (indicatif)"
    },
    {
      nom: "Éducation physique et sportive (EPS)",
      icone: "⚽",
      description: "Pratique sportive régulière et préparation physique.",
      competences: ["Maintenir une bonne condition physique", "Faire preuve d'esprit sportif et de discipline"],
      volumeHoraire: "2h / semaine (indicatif)"
    }
  ];

  /* ------------------------------------------------------------------- */
  /* MÉTHODES PÉDAGOGIQUES PARTAGÉES PAR CYCLE                           */
  /* ------------------------------------------------------------------- */

  const METHODES_PRESCOLAIRE = [
    "Pédagogie active centrée sur le jeu",
    "Ateliers de manipulation et de découverte",
    "Apprentissage par la répétition et la chanson",
    "Accompagnement individualisé selon le rythme de l'enfant"
  ];

  const METHODES_ELEMENTAIRE = [
    "Pédagogie active et ateliers de lecture",
    "Travaux individuels et travaux de groupe",
    "Supports visuels et exercices d'application réguliers",
    "Mémorisation coranique guidée et révision collective"
  ];

  const METHODES_COLLEGE = [
    "Cours magistraux associés à des travaux dirigés",
    "Exposés et travaux de recherche encadrés",
    "Débats encadrés pour développer l'esprit critique",
    "Séances régulières de mémorisation et récitation coranique"
  ];

  const METHODES_LYCEE = [
    "Cours magistraux, travaux dirigés et travaux pratiques",
    "Exposés, débats et exercices d'argumentation",
    "Tutorat individualisé pour les matières à examen",
    "Mémorisation coranique encadrée selon le niveau de l'élève"
  ];

  /* ------------------------------------------------------------------- */
  /* ÉVALUATION PARTAGÉE PAR CYCLE                                       */
  /* ------------------------------------------------------------------- */

  const EVAL_PRESCOLAIRE = [
    "Observation continue de l'enfant",
    "Fiches d'activités et portfolio de progrès",
    "Pas de notation chiffrée à ce stade",
    "Retour régulier aux familles"
  ];

  const EVAL_ELEMENTAIRE = [
    "Contrôles réguliers et devoirs à la maison",
    "Évaluations trimestrielles",
    "Livret scolaire remis aux familles",
    "Suivi de la mémorisation coranique"
  ];

  const EVAL_COLLEGE = [
    "Devoirs surveillés et interrogations",
    "Compositions trimestrielles",
    "Examen blanc du BFEM en classe de 3e",
    "Livret scolaire et bulletins trimestriels"
  ];

  const EVAL_LYCEE = [
    "Devoirs sur table et interrogations écrites",
    "Compositions trimestrielles",
    "Baccalauréat blanc en classe de Terminale",
    "Bulletins trimestriels détaillés"
  ];

  /* ------------------------------------------------------------------- */
  /* CYCLES ET NIVEAUX                                                    */
  /* ------------------------------------------------------------------- */

  window.SITE_DATA.programmes = {
    disclaimer:
      "Les objectifs, volumes horaires et modalités présentés ci-dessous correspondent à l'organisation pédagogique interne de l'Institut Al Maarifa. Ils sont donnés à titre indicatif et ne constituent pas, à eux seuls, le programme officiel du Ministère de l'Éducation nationale du Sénégal ni celui de l'Institut Al-Azhar.",
    cycles: [
      {
        id: "prescolaire",
        nom: "Préscolaire",
        tag: "🟢",
        couleur: "vert",
        description: "Éveil, langage, motricité et premiers repères, dans un cadre bienveillant et structurant.",
        niveaux: [
          {
            id: "ps",
            nom: "Petite Section",
            objectifs: [
              "Favoriser l'autonomie et la sociabilisation",
              "Développer le langage oral en français",
              "Découvrir les repères de temps et d'espace"
            ],
            matieres: MATIERES_PRESCOLAIRE,
            methodesPedagogiques: METHODES_PRESCOLAIRE,
            evaluation: EVAL_PRESCOLAIRE
          },
          {
            id: "ms",
            nom: "Moyenne Section",
            objectifs: [
              "Enrichir le vocabulaire en français et en arabe",
              "Développer le graphisme et la motricité fine",
              "Initier aux lettres et aux premiers chiffres"
            ],
            matieres: MATIERES_PRESCOLAIRE,
            methodesPedagogiques: METHODES_PRESCOLAIRE,
            evaluation: EVAL_PRESCOLAIRE
          },
          {
            id: "gs",
            nom: "Grande Section",
            objectifs: [
              "Préparer le déchiffrage (lecture) et l'écriture",
              "Consolider la numération jusqu'à 20",
              "Renforcer l'autonomie en vue de l'entrée au CI"
            ],
            matieres: MATIERES_PRESCOLAIRE,
            methodesPedagogiques: METHODES_PRESCOLAIRE,
            evaluation: EVAL_PRESCOLAIRE
          }
        ]
      },
      {
        id: "elementaire",
        nom: "École Élémentaire",
        tag: "🔵",
        couleur: "bleu",
        description: "Acquisition des fondamentaux : lecture, écriture, calcul, arabe et mémorisation coranique.",
        niveaux: [
          {
            id: "ci",
            nom: "CI (Cours d'Initiation)",
            objectifs: [
              "Apprendre à lire et écrire (méthode syllabique)",
              "Poser les bases du calcul",
              "Mémoriser les sourates les plus courtes"
            ],
            matieres: MATIERES_ELEMENTAIRE,
            methodesPedagogiques: METHODES_ELEMENTAIRE,
            evaluation: EVAL_ELEMENTAIRE
          },
          {
            id: "cp",
            nom: "CP (Cours Préparatoire)",
            objectifs: [
              "Consolider une lecture fluide",
              "Développer l'écriture cursive",
              "Maîtriser additions et soustractions simples"
            ],
            matieres: MATIERES_ELEMENTAIRE,
            methodesPedagogiques: METHODES_ELEMENTAIRE,
            evaluation: EVAL_ELEMENTAIRE
          },
          {
            id: "ce1",
            nom: "CE1",
            objectifs: [
              "Atteindre une lecture courante",
              "Découvrir les bases de la grammaire",
              "Initier aux tables de multiplication"
            ],
            matieres: MATIERES_ELEMENTAIRE,
            methodesPedagogiques: METHODES_ELEMENTAIRE,
            evaluation: EVAL_ELEMENTAIRE
          },
          {
            id: "ce2",
            nom: "CE2",
            objectifs: [
              "Consolider grammaire et conjugaison",
              "Résoudre des problèmes mathématiques simples",
              "Structurer l'expression écrite"
            ],
            matieres: MATIERES_ELEMENTAIRE,
            methodesPedagogiques: METHODES_ELEMENTAIRE,
            evaluation: EVAL_ELEMENTAIRE
          },
          {
            id: "cm1",
            nom: "CM1",
            objectifs: [
              "Approfondir grammaire, conjugaison et géométrie",
              "Introduire formellement l'histoire-géographie",
              "Débuter l'apprentissage de l'anglais"
            ],
            matieres: MATIERES_ELEMENTAIRE,
            methodesPedagogiques: METHODES_ELEMENTAIRE,
            evaluation: EVAL_ELEMENTAIRE
          },
          {
            id: "cm2",
            nom: "CM2",
            objectifs: [
              "Consolider l'ensemble des acquis de l'élémentaire",
              "Préparer les examens de fin de cycle (CFEE, entrée en 6e)",
              "Renforcer l'autonomie méthodologique de l'élève"
            ],
            matieres: MATIERES_ELEMENTAIRE,
            methodesPedagogiques: METHODES_ELEMENTAIRE,
            evaluation: EVAL_ELEMENTAIRE.concat(["Préparation ciblée à l'examen du CFEE"])
          }
        ]
      },
      {
        id: "college",
        nom: "Collège",
        tag: "🟠",
        couleur: "orange",
        description: "Approfondissement disciplinaire et développement de l'autonomie et de l'esprit d'analyse.",
        niveaux: [
          {
            id: "6e",
            nom: "6e",
            objectifs: [
              "Réussir la transition entre élémentaire et collège",
              "Consolider les fondamentaux en français, arabe et maths",
              "Développer des méthodes de travail autonomes"
            ],
            matieres: MATIERES_COLLEGE,
            methodesPedagogiques: METHODES_COLLEGE,
            evaluation: EVAL_COLLEGE
          },
          {
            id: "5e",
            nom: "5e",
            objectifs: [
              "Approfondir la grammaire et les mathématiques",
              "Développer l'argumentation à l'oral",
              "Renforcer la méthodologie de recherche documentaire"
            ],
            matieres: MATIERES_COLLEGE,
            methodesPedagogiques: METHODES_COLLEGE,
            evaluation: EVAL_COLLEGE
          },
          {
            id: "4e",
            nom: "4e",
            objectifs: [
              "Renforcer le raisonnement scientifique et mathématique",
              "Aborder des textes littéraires plus complexes",
              "Structurer une expression écrite argumentée"
            ],
            matieres: MATIERES_COLLEGE,
            methodesPedagogiques: METHODES_COLLEGE,
            evaluation: EVAL_COLLEGE
          },
          {
            id: "3e",
            nom: "3e",
            objectifs: [
              "Préparer activement le BFEM",
              "Amorcer une réflexion sur l'orientation scolaire",
              "Consolider l'ensemble du socle du collège"
            ],
            matieres: MATIERES_COLLEGE,
            methodesPedagogiques: METHODES_COLLEGE,
            evaluation: EVAL_COLLEGE
          }
        ]
      },
      {
        id: "lycee",
        nom: "Lycée",
        tag: "🔴",
        couleur: "rouge",
        description: "Préparation aux examens du secondaire et développement de l'autonomie intellectuelle.",
        niveaux: [
          {
            id: "2nde",
            nom: "Seconde",
            objectifs: [
              "Consolider les acquis du collège",
              "Découvrir les méthodologies de la dissertation et du commentaire",
              "Amorcer une orientation vers les filières (à titre indicatif)"
            ],
            matieres: MATIERES_LYCEE,
            methodesPedagogiques: METHODES_LYCEE,
            evaluation: EVAL_LYCEE
          },
          {
            id: "1ere",
            nom: "Première",
            objectifs: [
              "Approfondir les disciplines selon la filière suivie",
              "Préparer les épreuves anticipées (à titre indicatif)",
              "Renforcer l'argumentation écrite et orale"
            ],
            matieres: MATIERES_LYCEE,
            methodesPedagogiques: METHODES_LYCEE,
            evaluation: EVAL_LYCEE
          },
          {
            id: "terminale",
            nom: "Terminale",
            objectifs: [
              "Préparer activement le Baccalauréat",
              "Consolider l'ensemble des acquis du secondaire",
              "Développer autonomie et esprit critique"
            ],
            matieres: MATIERES_LYCEE,
            methodesPedagogiques: METHODES_LYCEE,
            evaluation: EVAL_LYCEE.concat(["Baccalauréat blanc et suivi individualisé renforcé"])
          }
        ]
      }
    ]
  };
})();
