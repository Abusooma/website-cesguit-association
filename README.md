# CESGUIT — Refonte

Refonte du site de la **Communaute des Etudiants Guineens en Tunisie**, en React.

## La direction : epuree & institutionnelle

Registre inspire des sites de reference (OMS, UNICEF, sites publics) : **clair, sobre,
credible, tres accessible**. Beaucoup de blanc, une hierarchie typographique nette, une
seule couleur de marque (un **vert institutionnel**, clin d'oeil discret a la Guinee),
et le tricolore guineen reduit a un **liseré fin** en accent d'origine. La touche
originale vient de la structure (parcours par profil, carte d'impact chiffree) plutot
que d'effets tape-a-l'oeil.

## Lancer le site

```bash
npm install
npm run dev
```

Le site s'ouvre sur http://localhost:5173

Version de production :

```bash
npm run build
npm run preview
```

## Modifier le contenu

Tout le texte (asso, parcours, stats, actualites, evenements, services, temoignages,
options du formulaire...) vit dans un seul fichier :

> `src/data/content.js`

Change une phrase la-bas, elle change sur le site. Pas besoin de toucher au code.

## Structure

```
src/
  data/content.js        <- tout le contenu (source unique)
  index.css              <- palette, typographie, tokens de design
  App.css                <- mise en page de toutes les sections
  App.jsx                <- assemblage des sections
  components/
    Nav.jsx  Footer.jsx
    JoinModal.jsx        <- formulaire d'adhesion (etat de succes, sans backend)
    Reveal.jsx           <- entrees discretes au scroll (framer-motion)
    CountUp.jsx          <- compteurs animes (carte d'impact)
```

## A savoir

- **Maquette front-end.** Les formulaires affichent un message de succes mais
  n'envoient rien pour l'instant. Brancher un vrai envoi (email / Formspree) est
  l'etape suivante possible.
- **Accessibilite.** Contraste soigne, focus clavier visible, `prefers-reduced-motion`
  respecte, navigation clavier, liens d'evitement.
- **Images.** La reference insiste sur de vraies photos (pas de banque d'images). La
  galerie utilise pour l'instant des emplacements colores, prets a recevoir les vraies
  photos de la communaute.
- **Palette.** La couleur de marque est un vert institutionnel (`--green` dans
  `src/index.css`). Elle se change en une ligne si tu preferes un bleu type ONU.
```
