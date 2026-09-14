/* Contenu de démonstration réaliste pour la CESGUIT.
   Tout est editable ici : c'est la source unique du site. */

export const ASSO = {
  sigle: 'CESGUIT',
  nom: 'Communauté des Étudiants et Stagiaires Guinéens en Tunisie',
  depuis: 1991,
  devise: ['Travail', 'Justice', 'Solidarité'],
  slogan: 'Une communauté fière, unie et respectee',
  ville: 'Tunis, Tunisie',
  email: 'contact.cesguit@gmail.com',
  whatsapp: '+216 46 89 58 75',
  permanences: 'Mercredi & Samedi, 15h – 18h',
  reseaux: [
    { nom: 'Facebook', url: 'https://facebook.com' },
    { nom: 'TikTok', url: 'https://tiktok.com' },
    { nom: 'LinkedIn', url: 'https://linkedin.com' },
    { nom: 'WhatsApp', url: 'https://wa.me/21646895875' },
  ],
}

/* Photos Unsplash (toutes vérifiées : 200 + image/jpeg).
   Helper : construit une URL à la largeur voulue. */
export const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const MEDIA = {
  communaute: '1529156069898-49953e39b3ac', // groupe, bras sur les epaules
  amis_mur: '1517486808906-6ca8b3f04846', // 5 amis souriants
  cafe_amis: '1543269865-cbf427effbad', // discussion au cafe
  biblio: '1523240795612-9a054b0db644', // étude à la bibliotheque
  diplome: '1541339907198-e08756dedf3f', // remise de diplômes
  gala: '1531058020387-3be344556be6', // grande soirée
  laptops: '1522202176988-66273c2fd55f', // etudiantes, laptops
  classe: '1509062522246-3755977927d7', // salle de classe
  amphi: '1524178232363-1fb2b075b655', // atelier / réunion
  amphi_vide: '1519452575417-564c1401ecc0', // amphitheatre vide
  etudiante: '1571260899304-425eee4c7efc', // étudiante, rentrée
  portrait_wax: '1531123897727-8f129e1688ce', // portrait, tissu wax
  savane: '1489493887464-892be6d1daae', // savane d'Afrique, coucher de soleil
  entraide: '1593113630400-ea4288922497', // distribution / entraide
  benevole: '1559027615-cd4628902d4a', // benevole
  stade: '1522778119026-d647f0596c20', // stade de football
  velo: '1517649763962-0c623066013b', // course cycliste
  ingenierie: '1596496181848-3091d4878b24', // electronique / ingénierie
}

/* Navigation multipage (routes). */
export const NAV = [
  { to: '/a-propos', label: 'À propos' },
  { to: '/bureau', label: 'Le bureau' },
  { to: '/aide', label: 'Aide' },
  { to: '/guides', label: 'Guides' },
  { to: '/evenements', label: 'Événements' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/partenaires', label: 'Partenaires' },
]

/* Liens secondaires (pied de page). */
export const NAV_SECONDAIRE = [
  { to: '/actualites', label: 'Actualités' },
  { to: '/opportunites', label: 'Opportunités' },
]

/* Parcours rapides par profil (comme les sites publics : des chemins clairs). */
export const PATHWAYS = [
  {
    titre: "Je viens d'arriver",
    texte: 'Le guide de la rentrée, le logement, les démarches.',
    to: '#services',
    action: 'Commencer',
  },
  {
    titre: "J'ai besoin d'aide",
    texte: 'Santé, finances, administratif. En confiance et discret.',
    to: '#services',
    action: "Voir l'aide",
  },
  {
    titre: 'Je veux participer',
    texte: 'Événements, entraide, vie de la communauté.',
    to: '#événements',
    action: 'Les rendez-vous',
  },
  {
    titre: 'Je suis un partenaire',
    texte: 'Institutions et acteurs qui soutiennent les étudiants.',
    to: '#partenaires',
    action: 'Nous soutenir',
  },
]

export const STATS = [
  { valeur: 500, suffixe: '+', label: 'membres actifs' },
  { valeur: 50, suffixe: '+', label: 'universités tunisiennes' },
  { valeur: 33, suffixe: ' ans', label: 'de solidarité' },
  { valeur: 20, suffixe: '+', label: "événements par an" },
]

export const PILIERS = [
  {
    cle: 'Travail',
    couleur: 'var(--red)',
    texte:
      "On avance ensemble. Tutorat, partage de cours, orientation : la réussite de chacun tire toute la communauté vers le haut.",
  },
  {
    cle: 'Justice',
    couleur: 'var(--gold)',
    texte:
      "On défend les droits des étudiants. Face à l'administration, aux visas, au logement, personne ne reste seul devant un guichet.",
  },
  {
    cle: 'Solidarité',
    couleur: 'var(--green)',
    texte:
      "On répond présent. Urgence médicale, coup dur financier, mal du pays : la communauté est un filet sous chaque étudiant.",
  },
]

export const SERVICES = [
  {
    titre: 'Santé & urgences',
    texte: "Accompagnement en cas de maladie grave, orientation vers les soins, soutien pendant l'hospitalisation.",
    tag: 'Urgence',
  },
  {
    titre: 'Logement temporaire',
    texte: "Un toit d'urgence à l'arrivée ou après un imprévu, le temps de retrouver une solution stable.",
    tag: 'Accueil',
  },
  {
    titre: 'Aide financière',
    texte: "Un fonds de solidarité pour les coups durs : titre de séjour, billet de retour, dépense vitale.",
    tag: 'Fonds',
  },
  {
    titre: 'Démarches & visa',
    texte: "On démystifie les papiers : carte de séjour, inscription, équivalences. Un guide à chaque étape.",
    tag: 'Admin',
  },
  {
    titre: 'Écoute & conseil',
    texte: "Un espace confidentiel pour parler. Conseil juridique et soutien moral, sans jugement.",
    tag: 'Confidentiel',
  },
  {
    titre: 'Lien avec les familles',
    texte: "On rassure les proches restés au pays et on fait le pont quand la distance pèse trop lourd.",
    tag: 'Famille',
  },
]

export const ACTUS = [
  {
    cat: 'Académique',
    date: '3 sept. 2026',
    titre: "Rentrée 2026 : le guide complet de l'étudiant guinéen à Tunis",
    extrait:
      "Inscriptions, carte de séjour, logement, banque. Tout ce qu'il faut savoir pour bien démarrer l'année, réuni en un seul endroit.",
    img: MEDIA.etudiante,
  },
  {
    cat: 'Culturel',
    date: '28 août 2026',
    titre: "Nuit de la Guinée : la 12e édition affiche complet",
    extrait:
      "Musique, cuisine du pays et danse jusqu'au bout de la nuit. Retour en images sur une soirée qui a rassemble toute la diaspora.",
    img: MEDIA.gala,
  },
  {
    cat: 'Social',
    date: '15 août 2026',
    titre: "Fonds de solidarité : 14 étudiants soutenus ce semestre",
    extrait:
      "Grâce à vos cotisations, la communauté a répondu présent pour des urgences médicales et administratives. Le bilan en toute transparence.",
    img: MEDIA.entraide,
  },
  {
    cat: 'Sport',
    date: '2 août 2026',
    titre: "Tournoi inter-facs : les Éléphants de Tunis en finale",
    extrait:
      "Trois semaines de matchs, six universités, une seule ferveur. Récit d'un parcours qui a soudé les promotions.",
    img: MEDIA.stade,
  },
]

export const CATS_ACTU = ['Tout', 'Académique', 'Culturel', 'Social', 'Sport']

export const EVENTS = [
  {
    jour: '21',
    mois: 'SEP',
    titre: "Accueil des nouveaux arrivants",
    lieu: 'Maison des associations, Tunis',
    heure: '14h00',
    img: MEDIA.etudiante,
  },
  {
    jour: '05',
    mois: 'OCT',
    titre: "Forum des métiers & stages",
    lieu: 'Campus El Manar',
    heure: '09h30',
    img: MEDIA.ingenierie,
  },
  {
    jour: '18',
    mois: 'OCT',
    titre: "Atelier : réussir sa carte de séjour",
    lieu: 'En ligne (Google Meet)',
    heure: '18h00',
    img: MEDIA.amphi,
  },
  {
    jour: '09',
    mois: 'NOV',
    titre: "Dîner de la solidarité",
    lieu: 'Restaurant Le Baobab, La Marsa',
    heure: '19h30',
    img: MEDIA.gala,
  },
]

/* Images locales de la page d'accueil (vraies photos de la communaute). */
export const HOME_MEDIA = {
  hero: '/img/hero-accueil.jpg',
  apropos: '/img/qui-sommes-nous.jpg',
  aide: '/img/aide-solidaire.jpg',
}

/* La galerie : toutes les vraies photos de la CESGUIT (mosaique masonry).
   55 images servies depuis /public/img/galerie (g01.jpg ... g55.jpg). */
export const GALERIE = Array.from(
  { length: 55 },
  (_, i) => `/img/galerie/g${String(i + 1).padStart(2, '0')}.jpg`
)

export const OPPORTUNITES = [
  { type: 'Bourse', titre: "Bourse d'excellence 2026-2027", meta: 'Candidature avant le 30 sept.' },
  { type: 'Stage', titre: "Stage developpeur web (Tunis)", meta: '6 mois · gratifié' },
  { type: 'Emploi', titre: "Assistant.e de recherche, El Manar", meta: 'Temps partiel' },
  { type: 'Document', titre: "Modèle de convention de stage", meta: 'PDF · a télécharger' },
]

/* Partenaires (vrais logos fournis dans /public/img/partenaires). */
export const PARTENAIRES = [
  {
    nom: 'CEF Conseil',
    logo: '/img/partenaires/partenaire-1.jpg',
    desc: "Cabinet d'études, de formations et de conseils. Partenaire formation et accompagnement (CEF Akademy).",
    url: '',
  },
  {
    nom: 'FlowUp',
    logo: '/img/partenaires/partenaire-2.jpg',
    desc: "Accompagnement et montee en compétences des jeunes talents.",
    url: '',
  },
  {
    nom: 'FOCJA',
    logo: '/img/partenaires/partenaire-3.jpg',
    desc: "Réseau connectant la jeunesse et les acteurs africains.",
    url: '',
  },
  {
    nom: 'ILA Network',
    logo: '/img/partenaires/partenaire-4.jpg',
    desc: "Inspiring Leaders for Africa Network. Leadership et mentorat.",
    url: '',
  },
]

/* Partenaires & liens institutionnels (sans logo, cites dans les documents). */
export const PARTENAIRES_INSTIT = [
  'Ambassade de Guinée en Tunisie',
  'A.E.S.A.T (association faîtière)',
  'S.N.A.B.E (bourses)',
  'YTSuccess Lab',
  'FITA 2026',
]

export const TEMOIGNAGES = [
  {
    texte:
      "Je suis arrive sans connaître personne. En une semaine, la CESGUIT m'avait trouve un logement et deux amis. Aujourd'hui c'est moi qui accueille les nouveaux.",
    nom: 'Mamadou D.',
    detail: 'Ingénierie · INSAT · promo 2022',
  },
  {
    texte:
      "Quand je suis tombee malade, je n'etais pas seule. Quelqu'un etait à l'hôpital avec moi chaque jour. Ca, ca n'a pas de prix.",
    nom: 'Aissatou B.',
    detail: 'Médecine · El Manar · promo 2021',
  },
  {
    texte:
      "Le forum des stages m'a donne mon premier vrai contrat. La communauté ouvre des portes qu'on ne voit pas tout seul.",
    nom: 'Ibrahima S.',
    detail: 'Économie · Carthage · promo 2023',
  },
]

/* Le mot du président (remplace les temoignages : plus juste pour une asso).
   Citation tiree du plan d'action 2026. */
export const MOT_PRESIDENT = {
  nom: 'Ousmane Sacko',
  poste: 'Président de la CESGUIT',
  mandat: 'Mandat 2026',
  photo: '/img/bureau/2026/president.jpeg',
  message:
    "Nous avons un plan clair, réaliste et déjà structuré. En 8 mois, nous poserons les bases solides d'une CESGUIT qui protège, connecte et valorise chaque étudiant.",
  slogan: "La réfondation est acquise. L'élévation commence maintenant.",
}

/* Options du formulaire d'adhésion */
export const FORM = {
  universites: [
    'Université Tunis El Manar',
    'Université de Carthage',
    'INSAT',
    'Université de Tunis',
    'Université de la Manouba',
    'Autre',
  ],
  domaines: [
    'Médecine',
    'Ingénierie',
    'Informatique',
    'Économie',
    'Droit',
    'Architecture',
    'Sciences',
    'Lettres & Sciences humaines',
    'Autre',
  ],
  niveaux: ['BTS', 'L1', 'L2', 'L3', 'Master', 'Doctorat', 'Prépa', 'Stagiaire'],
  bourses: ['Bourse du gouvernement', 'Autre bourse', 'Sur fonds propres'],
}

/* ============================ LE BUREAU (par mandat, avec photos) ============================
   Chaque membre : { nom, role, photo }. Certains n'ont qu'un role (nom vide). */
export const BUREAU_INTRO =
  "Une équipe organisée en pôles, avec des responsabilités claires et des livrables à chaque étape."

export const MANDATS = [
  {
    id: '2026',
    label: 'Mandat 2026',
    actuel: true,
    membres: [
      { nom: 'Ousmane Sacko', role: 'Président', photo: '/img/bureau/2026/president.jpeg' },
      { nom: 'Camara Oumar', role: 'Vice-Président', photo: '/img/bureau/2026/vp.jpeg' },
      { nom: 'Elhadj Bailo Bah', role: 'Secrétaire Général', photo: '/img/bureau/2026/sg.jpeg' },
      { nom: 'Bienvenu Saoulomou', role: 'Secrétaire Général Adjoint', photo: '/img/bureau/2026/sg-adj.jpeg' },
      { nom: 'Saran Keita', role: 'Trésorière', photo: '/img/bureau/2026/tresoriere.jpeg' },
      { nom: 'Ibrahima S. Toure', role: 'Trésorier Adjoint', photo: '/img/bureau/2026/tresorier-adj.jpeg' },
      { nom: 'Souleymane Diakhaby', role: 'Chargé Communication', photo: '/img/bureau/2026/comm.jpeg' },
      { nom: 'Alpha Oumar Diallo', role: 'Chargé Communication Adjoint', photo: '/img/bureau/2026/comm-adj.jpeg' },
      { nom: 'Doumbouya Kabinet', role: 'Chargé Social', photo: '/img/bureau/2026/social.jpeg' },
      { nom: 'Ibrahima Barry', role: 'Chargé Relations Extérieures', photo: '/img/bureau/2026/rel-ext.jpeg' },
      { nom: 'Blaise Pascal Loua', role: 'Chargé Relations Extérieures Adjoint', photo: '/img/bureau/2026/rel-ext-adj.jpeg' },
      { nom: 'Mahmoud O. Camara', role: 'Chargé Sportif', photo: '/img/bureau/2026/sport.jpeg' },
      { nom: 'Mohamed Sacko', role: 'Chargé Sportif Adjoint', photo: '/img/bureau/2026/sport-adj.jpeg' },
      { nom: 'Zenab Diakite', role: 'Chargée Culturelle', photo: '/img/bureau/2026/culture.jpeg' },
      { nom: 'Abdourahmane Sall', role: 'Chargé Culturel Adjoint', photo: '/img/bureau/2026/culture-adj.jpeg' },
    ],
  },
  {
    id: '2025',
    label: 'Mandat 2025',
    actuel: false,
    membres: [
      { nom: 'Cisse Bilaly', role: 'Président', photo: '/img/bureau/2025/president.jpeg' },
      { nom: 'Ousmane Sacko', role: 'Vice-Président', photo: '/img/bureau/2025/vp.jpeg' },
      { nom: 'Mariama Keita', role: 'Secrétaire Générale', photo: '/img/bureau/2025/sg.jpeg' },
      { nom: '', role: 'Secrétaire Général Adjoint', photo: '/img/bureau/2025/sg-adj.jpeg' },
      { nom: 'Binta Balde', role: 'Trésorière', photo: '/img/bureau/2025/tresoriere.jpeg' },
      { nom: 'Souleymane Diakhaby', role: '1er Chargé aux Affaires Sociales', photo: '/img/bureau/2025/social.jpeg' },
      { nom: 'Cherif Haidara', role: 'Chargé à la Communication', photo: '/img/bureau/2025/comm.jpeg' },
      { nom: 'Mohamed Sandy Kaba', role: 'Chargé Sportif', photo: '/img/bureau/2025/sport.jpeg' },
      { nom: 'Elhadj Bailo Bah', role: '2eme Chargé aux Relations Extérieures', photo: '/img/bureau/2025/rel-ext.jpeg' },
      { nom: '', role: 'Président Commission Scientifique', photo: '/img/bureau/2025/comsci-pres.jpeg' },
      { nom: '', role: 'Membre de la Commission Scientifique', photo: '/img/bureau/2025/comsci-membre.jpeg' },
    ],
  },
]

/* Les 4 engagements concrets du mandat. */
export const ENGAGEMENTS = [
  {
    sigle: 'Plateforme',
    titre: 'Plateforme numérique CESGUIT',
    objectif: "Centraliser l'information et créer la mémoire commune.",
    detail: 'Site web fonctionnel et communautés actives (TikTok, Facebook, LinkedIn, WhatsApp).',
  },
  {
    sigle: 'C.A.B',
    titre: "Cellule d'Action Boursière",
    objectif: 'Accompagner et défendre chaque boursier.',
    detail: 'Référents dans chaque région et suivi personnalisé, avec le SNABE et notre Ambassade.',
  },
  {
    sigle: 'F.E.U',
    titre: "Fond d'Entraide et d'Urgence",
    objectif: 'Créer une solidarité financière active.',
    detail: 'Une caisse alimentée par les cotisations et les bonnes volontés, pour les urgences.',
  },
  {
    sigle: 'Alumni',
    titre: 'Réseau Alumni',
    objectif: 'Connecter les générations.',
    detail: 'Un pont entre les anciens et les nouveaux, avec un programme de mentorat.',
  },
]

/* Représentation institutionnelle. */
export const REPRESENTATION = [
  { nom: 'A.E.S.A.T', role: "Association des Étudiants et Stagiaires Africains en Tunisie (structuré faîtière)." },
  { nom: 'Ambassade & Consulat', role: 'Présenter nos actions et défendre les étudiants guinéens.' },
  { nom: 'S.N.A.B.E', role: 'Faciliter le suivi des bourses des étudiants.' },
  { nom: 'Partenaires & associations', role: 'Renforcer la coopération inter-africaine.' },
]

/* ============================ EVENEMENTS MAJEURS ============================ */
export const EVENEMENTS_MAJ = [
  {
    titre: 'Signature de partenariat CEF Akademy',
    date: '06 février 2025',
    cat: 'Partenariat',
    img: MEDIA.amphi,
    desc: "Convention avec un centre d'études offrant formations, assistance et accompagnement aux communautaires.",
    lien: '',
  },
  {
    titre: 'Conférence : Journée de la Femme',
    date: '08 mars 2025',
    cat: 'Conférence',
    img: MEDIA.laptops,
    desc: "Un panel pour honorer la femme et mettre en valeur tout ce qu'elle symbolise dans la société.",
    lien: '',
  },
  {
    titre: 'Afro Vibes',
    date: '2025',
    cat: 'Culturel',
    img: MEDIA.gala,
    desc: 'Une soirée culturelle festive : musique, cuisine et rencontres de toute la diaspora.',
    lien: '',
  },
  {
    titre: 'CANEST — Tournoi de football',
    date: 'Été 2025',
    cat: 'Sport',
    img: MEDIA.stade,
    desc: "Participation au tournoi inter-communautés, soutenue par un don de l'Ambassadeur.",
    lien: '',
  },
  {
    titre: "Fête de l'Indépendance de la Guinée",
    date: '02 octobre',
    cat: 'Culturel',
    img: MEDIA.communaute,
    desc: "Célébration de l'indépendance du 2 octobre 1958, dans la fierté et le partage.",
    lien: '',
  },
  {
    titre: 'Rupture collective (Ramadan)',
    date: 'Ramadan 2025',
    cat: 'Solidarité',
    img: MEDIA.entraide,
    desc: 'Un iftar communautaire : rompre le jeûne ensemble, loin de chez soi.',
    lien: '',
  },
]

/* Rendez-vous à venir (issus du plan d'action 2026). */
export const EVENTS_2026 = [
  "Journée d'intégration des nouveaux",
  'Journée culturelle guinéenne',
  'Conférences & formations',
  'Projet OIM (immigration clandestine)',
  'Participation FITA 2026',
  'Sommet des étudiants lauréats',
  'Bal de fin de cycle',
]

/* ============================ GUIDES PRATIQUES ============================ */
/* ============================ GUIDES (blog pratique) ============================
   Chaque article à un `slug` (l'URL /guides/<slug>) et un `contenu` en blocs.
   Pour ajouter un article : copier un bloc et changer les champs. */
export const CATS_GUIDES = ['Tout', 'Démarches', 'Logement', 'Santé', 'Bourse', 'Droits', 'Vie associative']

export const ARTICLES = [
  {
    slug: 'carte-de-sejour',
    cat: 'Démarches',
    date: '10 septembre 2026',
    lecture: '6 min',
    titre: 'Carte de séjour : le guide pas a pas',
    resume:
      "Le document le plus important de votre séjour. Voici comment l'obtenir et la renouveler sans stress.",
    img: '/img/guides/carte-sejour.jpg',
    contenu: [
      { type: 'p', text: "La carte de séjour est obligatoire pour tout étudiant étranger en Tunisie. Elle prouve que votre présence est régulière et conditionne beaucoup d'autres démarches (banque, logement, voyages)." },
      { type: 'h', text: 'Les documents a preparer' },
      { type: 'list', items: [
        'Passeport valide et attestation d\'inscription de l\'université',
        'Justificatif de logement (contrat ou attestation d\'hébergement)',
        'Justificatif de ressources ou attestation de bourse',
        'Photos d\'identite et formulaire rempli',
      ] },
      { type: 'h', text: 'Les étapes' },
      { type: 'p', text: "Déposez votre dossier au poste de police de votre lieu de résidence, dans les délais suivant votre arrivée. Gardez une copie de tout, et notez le récépissé qui atteste que la demande est en cours." },
      { type: 'p', text: "Pour les boursiers de l'interieur, la Cellule d'Action Boursière (C.A.B) de la CESGUIT vous accompagne et fait le lien avec les autorites. En cas de blocage, contactez-nous : personne ne reste seul devant un guichet." },
    ],
  },
  {
    slug: 'bourse-snabe',
    cat: 'Bourse',
    date: '5 septembre 2026',
    lecture: '4 min',
    titre: 'Bourse : bien la suivre avec le SNABE',
    resume: 'Comprendre le calendrier des bourses, les interlocuteurs, et qui appeler en cas de retard.',
    img: '/img/guides/bourse-detude.jpg',
    contenu: [
      { type: 'p', text: "La bourse suit un calendrier precis. Connaître les étapes vous evite les mauvaises surprises et vous permet d'anticiper." },
      { type: 'h', text: 'Vos interlocuteurs' },
      { type: 'list', items: [
        'Le SNABE pour le suivi officiel de la bourse',
        'La C.A.B de la CESGUIT, avec des référents dans chaque région',
        'L\'Ambassade pour les situations particulieres',
      ] },
      { type: 'p', text: "En cas de retard ou de difficulté, signalez-le tot à la C.A.B : nous centralisons les cas et faisons remonter l'information aux bons interlocuteurs." },
    ],
  },
  {
    slug: 'trouver-logement',
    cat: 'Logement',
    date: '30 août 2026',
    lecture: '5 min',
    titre: 'Trouver un logement à Tunis',
    resume: 'Quartiers, budget, pieges a eviter et solutions d\'urgence quand on vient d\'arriver.',
    img: '/img/guides/logement.jpg',
    contenu: [
      { type: 'p', text: "Se loger est souvent le premier défi à l'arrivée. Prenez le temps, ne signez rien dans la précipitation, et faites-vous accompagner." },
      { type: 'h', text: 'Nos conseils' },
      { type: 'list', items: [
        'Privilegiez les quartiers proches de votre campus',
        'Visitez avant de payer, et exigez un contrat ecrit',
        'Mefiez-vous des annonces trop belles pour être vraies',
        'Partagez un logement pour reduire le budget',
      ] },
      { type: 'p', text: "En depannage, la CESGUIT peut vous orienter vers un hébergement temporaire le temps de trouver une solution stable. N'hesitez pas a nous ecrire des votre arrivée." },
    ],
  },
  {
    slug: 'se-soigner',
    cat: 'Santé',
    date: '22 août 2026',
    lecture: '4 min',
    titre: 'Se soigner en Tunisie : ou aller',
    resume: 'Pharmacies, cliniques, urgences et assurance : les bons reflexes pour ne pas être pris au depourvu.',
    img: '/img/guides/soins.jpg',
    contenu: [
      { type: 'p', text: "Savoir ou aller avant d'en avoir besoin, c'est déjà se protéger. Gardez ces repères sous la main." },
      { type: 'list', items: [
        'Pharmacie de garde pour les besoins courants la nuit',
        'Centres de santé et cliniques universitaires',
        'Numeros d\'urgence a enregistrer des l\'arrivée',
        'Assurance : vérifiez votre couverture et vos justificatifs',
      ] },
      { type: 'p', text: "En cas de maladie grave, la CESGUIT accompagne : orientation vers les soins et présence a vos cotes pendant l'hospitalisation. Vous n'etes jamais seul." },
    ],
  },
  {
    slug: 'connaitre-ses-droits',
    cat: 'Droits',
    date: '14 août 2026',
    lecture: '5 min',
    titre: "Connaître ses droits d'étudiant étranger",
    resume: 'Ce a quoi vous avez droit, les recours possibles, et vers qui vous tourner en cas de problème.',
    img: '/img/guides/droit-detudiant.jpg',
    contenu: [
      { type: 'p', text: "Connaître ses droits, c'est pouvoir les faire respecter. Voici l'essentiel a garder en tete." },
      { type: 'list', items: [
        'Droits et intérêts de l\'étudiant étranger sur le territoire',
        'Recours et assistance en cas de difficulté',
        'Appui de l\'AESAT et de l\'Ambassade',
        'Écoute confidentielle et conseil au sein de la CESGUIT',
      ] },
      { type: 'p', text: "Face à une situation injuste, ne restez pas seul. Contactez la CESGUIT : nous vous orientons et, si besoin, nous portons votre voix auprès des institutions." },
    ],
  },
  {
    slug: 'bien-s-integrer',
    cat: 'Vie associative',
    date: '2 août 2026',
    lecture: '3 min',
    titre: "Bien s'intégrer dès l'arrivée",
    resume: 'Trouver sa place, se faire des amis, et profiter de tout ce que la communauté apporte.',
    img: '/img/guides/vie-associative.jpg',
    contenu: [
      { type: 'p', text: "L'intégration ne se décrète pas, elle se vit. Quelques gestes simples changent tout dès les premières semaines." },
      { type: 'list', items: [
        'Participer à la journée d\'intégration des nouveaux',
        'Rejoindre la section de sa région (Tunis, nord, sud)',
        'Se connecter aux communautés en ligne (WhatsApp, réseaux)',
        'Se faire parrainer par un ancien (mentorat)',
      ] },
      { type: 'p', text: "S'engager, c'est aussi recevoir : un réseau qui ouvre des portes, des compétences, et la fierté de représenter la Guinée. La porte est ouverte." },
    ],
  },
]

/* ============================ INSTITUTIONS ============================
   CESGUIT et les institutions guinéennes (Ambassade, Consulat, gouvernement)
   et africaines. Photos a fournir : remplacer `img` (identifiant Unsplash
   provisoire) par les vraies photos une fois disponibles. */
export const INSTITUTIONS = {
  intro:
    "La CESGUIT travaille main dans la main avec l'Ambassade et le Consulat de Guinée, le SNABE et l'AESAT. Ces relations donnent du poids a notre voix et protegent concretement les étudiants.",
  moments: [
    {
      date: '2025',
      titre: "Audience à l'Ambassade de Guinée",
      desc: "Présentation de nos actions et de nos priorités pour la communauté étudiante.",
      img: MEDIA.amphi,
    },
    {
      date: 'Été 2025',
      titre: "Soutien de l'Ambassadeur pour la CANEST",
      desc: "Un don officiel pour accompagner la participation de la communauté au tournoi.",
      img: MEDIA.stade,
    },
    {
      date: '18 octobre 2025',
      titre: "Affiliation à l'A.E.S.A.T",
      desc: "Adhésion officielle à l'association faîtière des étudiants africains en Tunisie.",
      img: MEDIA.gala,
    },
    {
      date: '2025 – 2026',
      titre: 'Suivi des bourses avec le SNABE',
      desc: "Contact permanent pour faciliter le suivi et défendre les boursiers.",
      img: MEDIA.biblio,
    },
  ],
  photosAFournir: true,
}
