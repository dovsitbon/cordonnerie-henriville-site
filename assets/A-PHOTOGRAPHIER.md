# Photos à prendre sur place

Chaque photo a déjà son emplacement sur le site (dessin en attente). Format conseillé : horizontal ou 4:5, lumière du jour, pas de flash, pas de visage de client.

| Dossier | Photo | Emplacement sur le site (`data/photos.json`) |
|---|---|---|
| `atelier/` | L'atelier vu de l'entrée, établi et machines | bloc « L'atelier » (`atelier`) |
| `atelier/` | Mains au travail : couture, pose de talon, teinture | tuiles (`tiles.talons`, `tiles.couture`), page ressemelage (`cordonnerie`) |
| `atelier/` | Portrait du maître artisan, à l'établi | bloc « Le métier » (`metier`) |
| `cles/` | Machine à clés, mur de clés vierges, une clé en cours | bloc et page « Clés » (`cles`, `tiles.cles`) |
| `cles/` | Cylindres, serrures | tuile serrurerie (`tiles.serrurerie`) |
| `facade/` | Vitrine et enseigne, rue Gaulthier de Rumilly | données Google / bloc atelier (`facade`) |
| `avant-apres/` | Paires avant / après : même cadrage, même fond | curseur avant / après (`data/avant-apres.json`) |
| `atelier/` | Sacs, ceintures réparés | tuile sacs (`tiles.sacs`) |

Ensuite : poser le fichier dans le dossier, l'ajouter à `PICKS` dans `scripts/media.mjs`, lancer `npm run media`, puis renseigner son chemin dans `data/photos.json`.
