# Cordonnerie Henriville : contenu du site

Tous les textes du site, en français et en anglais, pour relecture avec l'atelier. Les corrections se font dans `locales/fr.json` et `locales/en.json` ; tarifs, délais, horaires, annonces, photos et avant / après dans `data/*.json`. Ce fichier se régénère avec `npm run contenu`.

Rien n'a été inventé côté chiffres : **aucun prix n'est renseigné** (affiché « sur devis ») tant que l'atelier ne les a pas donnés. Les délais sont des ordres de grandeur **à valider**. La note Google (4.8/5, 188 avis) est celle relevée le 2026-11-05. Les avis ne sont pas cités : le site reprend seulement leurs thèmes (prix honnêtes, vrai travail d'artisan).

Voir aussi : [INFOS-A-DEMANDER.md](INFOS-A-DEMANDER.md) et [assets/A-PHOTOGRAPHIER.md](assets/A-PHOTOGRAPHIER.md).

## Tarifs et délais (`data/tarifs.json`)

### Talons & semelles / Heels & soles

| Prestation | Délai indicatif | Prix « à partir de » |
|---|---|---|
| **Pose de patins**<br>*Sole protectors fitted* | Dans la journée (à valider) | à remplir |
| **Embouts de talons, femme**<br>*Women's heel tips* | Pendant que vous attendez (à valider) | à remplir |
| **Talons, homme**<br>*Men's heels* | Dans la journée (à valider) | à remplir |
| **Ressemelage gomme**<br>*Rubber resoling* | Quelques jours (à valider) | à remplir |
| **Ressemelage cuir**<br>*Leather resoling* | Environ une semaine (à valider) | à remplir |

### Couture & cuir / Stitching & leather

| Prestation | Délai indicatif | Prix « à partir de » |
|---|---|---|
| **Couture, recollage**<br>*Stitching, re-gluing* | Dans la journée (à valider) | à remplir |
| **Fermeture éclair de bottes**<br>*Boot zip replacement* | Quelques jours (à valider) | à remplir |
| **Teinture, rénovation du cuir**<br>*Dyeing, leather restoration* | Quelques jours (à valider) | à remplir |
| **Entretien, cirage, glaçage**<br>*Care, polishing, mirror shine* | Dans la journée (à valider) | à remplir |
| **Mise en forme, élargissement**<br>*Stretching, reshaping* | 24 à 48 h (à valider) | à remplir |

### Sacs & maroquinerie / Bags & leather goods

| Prestation | Délai indicatif | Prix « à partir de » |
|---|---|---|
| **Couture de sac**<br>*Bag stitching* | Quelques jours (à valider) | à remplir |
| **Fermeture éclair de sac ou de blouson**<br>*Bag or jacket zip* | Quelques jours (à valider) | à remplir |
| **Anses, poignées, bandoulière**<br>*Handles, straps* | Quelques jours (à valider) | à remplir |
| **Ceinture : raccourcir, percer, boucle**<br>*Belt: shorten, punch holes, buckle* | Pendant que vous attendez (à valider) | à remplir |

### Clés & badges / Keys & fobs

| Prestation | Délai indicatif | Prix « à partir de » |
|---|---|---|
| **Clé plate (maison, cave, boîte aux lettres)**<br>*Standard flat key (home, cellar, letterbox)* | Pendant que vous attendez (à valider) | à remplir |
| **Clé de sécurité, sur carte de propriété**<br>*High-security key, with owner's card* | Selon la marque (à valider) | à remplir |
| **Clé de voiture**<br>*Car key* | Selon le modèle (à valider) | à remplir |
| **Badge d'immeuble**<br>*Building fob* | Pendant que vous attendez (à valider) | à remplir |

### Serrurerie / Locksmithing

| Prestation | Délai indicatif | Prix « à partir de » |
|---|---|---|
| **Cylindre, barillet : fourniture**<br>*Lock cylinder: supply* | à remplir | à remplir · **prestation à confirmer** |
| **Serrure de boîte aux lettres**<br>*Letterbox lock* | à remplir | à remplir · **prestation à confirmer** |

### Petits services / Small jobs

| Prestation | Délai indicatif | Prix « à partir de » |
|---|---|---|
| **Pile de montre**<br>*Watch battery* | Pendant que vous attendez (à valider) | à remplir |
| **Gravure, plaques (boîte aux lettres, interphone)**<br>*Engraving, name plates (letterbox, intercom)* | Dans la journée (à valider) | à remplir |
| **Produits d'entretien, lacets, semelles intérieures**<br>*Care products, laces, insoles* | En boutique (à valider) | à remplir |

## Horaires (`data/horaires.json`)

- lundi : fermé
- mardi : 07:15 – 19:00
- mercredi : 07:15 – 19:00
- jeudi : 07:15 – 19:00
- vendredi : 07:15 – 19:00
- samedi : 07:15 – 19:00
- dimanche : fermé

Fermetures exceptionnelles : Noël (2026-12-25), Jour de l'an (2027-01-01).

## Bandeau d'annonces (`data/annonces.json`)

- **Par défaut** : Ouvert du mardi au samedi dès 7 h 15, sans interruption jusqu'à 19 h. *(Open Tuesday to Saturday from 7:15am, straight through to 7pm.)*
- **2026-12-18 → 2026-12-25** : L'atelier sera fermé le jeudi 25 décembre. Pensez à déposer vos réparations avant les fêtes. *(The workshop will be closed on Thursday 25 December. Drop off your repairs before the holidays.)* — lien « Horaires »
- **2026-12-26 → 2027-01-01** : L'atelier sera fermé le vendredi 1er janvier. Bonnes fêtes à tous. *(The workshop will be closed on Friday 1 January. Happy holidays.)* — lien « Horaires »

## Textes du site

Chaque ligne : clé, français, anglais. Les textes marqués **à valider** demandent une confirmation de l'atelier.

### meta

| Clé | Français | English | |
|---|---|---|---|
| `meta.title` | Cordonnier à Amiens, clés et serrurerie | Cordonnerie Henriville, Maître Artisan | Shoe Repair in Amiens, Keys & Locks | Cordonnerie Henriville, Master Craftsman | |
| `meta.description` | Cordonnerie Henriville, Maître Artisan cordonnier à Amiens : talons, ressemelage, couture, cuir, sacs, reproduction de clés et badges. Sans rendez-vous, du mardi au samedi dès 7 h 15. 4,8/5 sur Google. | Cordonnerie Henriville, master shoemaker in Amiens: heels, resoling, stitching, leather care, bags, key cutting and fobs. No appointment needed, Tuesday to Saturday from 7:15am. Rated 4.8/5 on Google. | |
| `meta.ogAlt` | Les mains du cordonnier finissent un mocassin noir à la ponceuse, à la Cordonnerie Henriville d’Amiens | The shoemaker's hands finishing a black loafer on the sanding wheel at Cordonnerie Henriville, Amiens | |

### nav

| Clé | Français | English | |
|---|---|---|---|
| `nav.cordonnerie` | Cordonnerie | Shoe repair | |
| `nav.cles` | Clés & serrurerie | Keys & locks | |
| `nav.cuir` | Cuir & maroquinerie | Leather & bags | |
| `nav.tarifs` | Tarifs | Prices | |
| `nav.infos` | Infos | Visit | |
| `nav.devis` | Demander un devis | Get a quote | |
| `nav.devisShort` | Devis | Quote | |
| `nav.call` | Appeler | Call | |
| `nav.menu` | Menu | Menu | |
| `nav.close` | Fermer le menu | Close menu | |
| `nav.home` | Cordonnerie Henriville, accueil | Cordonnerie Henriville, home | |
| `nav.instagram` | La Cordonnerie Henriville sur Instagram | Cordonnerie Henriville on Instagram | |
| `nav.lang` | Langue | Language | |
| `nav.skip` | Aller au contenu | Skip to content | |

### intro

| Clé | Français | English | |
|---|---|---|---|
| `intro.skip` | Passer | Skip | |

### announce

| Clé | Français | English | |
|---|---|---|---|
| `announce.close` | Fermer le bandeau | Close banner | |

### status

| Clé | Français | English | |
|---|---|---|---|
| `status.open` | Ouvert maintenant | Open now | |
| `status.closed` | Fermé | Closed | |
| `status.until` | jusqu’à {time} | until {time} | |
| `status.reopens` | réouverture {day} à {time} | opens {day} at {time} | |
| `status.today` | aujourd’hui | today | |
| `status.tomorrow` | demain | tomorrow | |

### rating

| Clé | Français | English | |
|---|---|---|---|
| `rating.label` | {value}/5 sur Google | {value}/5 on Google | |
| `rating.count` | {count} avis | {count} reviews | |
| `rating.asOf` | Note relevée en {date} | Rating as of {date} | |

### hero

| Clé | Français | English | |
|---|---|---|---|
| `hero.eyebrow` | Maître artisan cordonnier · Henriville, Amiens | Master shoemaker · Henriville, Amiens | |
| `hero.title` | On répare,  *on ne jette pas* | We repair,  *we don’t throw away* | |
| `hero.lead` | Talons, semelles, coutures, cuir, sacs, clés : l’atelier du quartier Henriville remet en état ce que vous aimez porter, à un prix honnête. Sans rendez-vous, dès 7 h 15. | Heels, soles, stitching, leather, bags, keys: the Henriville neighbourhood workshop brings back the things you love to wear, at an honest price. No appointment, from 7:15am. | |
| `hero.devis` | Demander un devis | Get a quote | |
| `hero.tarifs` | Voir les tarifs | See prices | |

### tiles

| Clé | Français | English | |
|---|---|---|---|
| `tiles.eyebrow` | L’atelier | The workshop | |
| `tiles.title` | Ce qu’on répare, ce qu’on reproduit | What we repair, what we copy | |
| `tiles.from` | à partir de {price} | from {price} | |
| `tiles.onQuote` | Prix sur devis | Price on quote | |
| `tiles.items.talons.title` | Talons & semelles | Heels & soles | |
| `tiles.items.talons.text` | Patins, embouts, talons, ressemelage gomme ou cuir. | Sole protectors, heel tips, heels, rubber or leather resoling. | |
| `tiles.items.couture.title` | Couture & cuir | Stitching & leather | |
| `tiles.items.couture.text` | Coutures, recollage, fermetures de bottes, teinture, entretien. | Stitching, re-gluing, boot zips, dyeing, leather care. | |
| `tiles.items.sacs.title` | Sacs & maroquinerie | Bags & leather goods | |
| `tiles.items.sacs.text` | Sacs, ceintures, anses, fermetures éclair, petite maroquinerie. | Bags, belts, handles, zips, small leather goods. | |
| `tiles.items.cles.title` | Clés & badges | Keys & fobs | |
| `tiles.items.cles.text` | Clés plates, de sécurité, de voiture, badges d’immeuble. | Flat keys, high-security keys, car keys, building fobs. | |
| `tiles.items.serrurerie.title` | Serrurerie | Locksmithing | **à valider (prestations de serrurerie)** |
| `tiles.items.serrurerie.text` | Cylindres et serrures de boîte aux lettres : demandez-nous. | Lock cylinders and letterbox locks: just ask us. | **à valider (prestations de serrurerie)** |
| `tiles.items.petits.title` | Petits services | Small jobs | |
| `tiles.items.petits.text` | Piles de montre, gravure, plaques, produits d’entretien. | Watch batteries, engraving, name plates, care products. | |

### strip

| Clé | Français | English | |
|---|---|---|---|
| `strip.label` | En bref | At a glance | |
| `strip.items.0.title` | Ouvert dès 7 h 15 | Open from 7:15am | |
| `strip.items.0.text` | Du mardi au samedi, sans interruption jusqu’à 19 h. | Tuesday to Saturday, straight through to 7pm. | |
| `strip.items.1.title` | Sans rendez-vous | No appointment | |
| `strip.items.1.text` | Passez déposer, on regarde avec vous. | Drop by, we’ll take a look together. | |
| `strip.items.2.title` | Devis par photo | Quote by photo | |
| `strip.items.2.text` | Envoyez 1 à 3 photos, on vous répond. | Send 1 to 3 photos and we’ll reply. | |
| `strip.items.3.title` | 03 22 95 65 63 | +33 3 22 95 65 63 | |
| `strip.items.3.text` | Une question ? Appelez l’atelier. | A question? Call the workshop. | |

### beforeAfter

| Clé | Français | English | |
|---|---|---|---|
| `beforeAfter.eyebrow` | Avant / après | Before / after | |
| `beforeAfter.title` | La preuve par l’atelier | The proof is in the workshop | |
| `beforeAfter.lead` | Faites glisser le curseur pour comparer. Les photos sont prises à l’atelier, avant et après réparation. | Drag the slider to compare. Photos are taken in the workshop, before and after the repair. | |
| `beforeAfter.before` | Avant | Before | |
| `beforeAfter.after` | Après | After | |
| `beforeAfter.handle` | Comparer avant et après | Compare before and after | |
| `beforeAfter.soon` | Les premières photos avant / après arrivent : chaussures ressemelées, sacs remis en couleur. | The first before / after photos are on their way: resoled shoes, bags brought back to colour. | |
| `beforeAfter.slots.0` | Chaussures ressemelées | Resoled shoes | |
| `beforeAfter.slots.1` | Sac remis en couleur | Bag brought back to colour | |

### tarifs

| Clé | Français | English | |
|---|---|---|---|
| `tarifs.eyebrow` | Tarifs & délais | Prices & turnaround | |
| `tarifs.title` | Des prix clairs, annoncés avant de commencer | Clear prices, given before we start | |
| `tarifs.lead` | Les prix sont indicatifs : chaque paire, chaque sac est différent. On regarde l’objet avec vous et on vous donne le prix avant de toucher à quoi que ce soit. | Prices are a guide: every pair and every bag is different. We look at the item with you and give you the price before touching anything. | |
| `tarifs.note` | Délais donnés à titre indicatif, selon la charge de l’atelier. | Turnaround times are a guide and depend on how busy the workshop is. | |
| `tarifs.head.service` | Prestation | Service | |
| `tarifs.head.price` | Prix indicatif | Guide price | |
| `tarifs.head.delay` | Délai | Turnaround | |
| `tarifs.from` | à partir de {price} | from {price} | |
| `tarifs.onQuote` | sur devis | on quote | |
| `tarifs.confirm` | à confirmer | to be confirmed | |
| `tarifs.ask` | Demander un devis | Get a quote | |

### blocks

| Clé | Français | English | |
|---|---|---|---|
| `blocks.atelier.eyebrow` | L’atelier | The workshop | |
| `blocks.atelier.title` | Un atelier de quartier, ouvert avant le travail | A neighbourhood workshop that opens before work | |
| `blocks.atelier.text` | Au 34 rue Gaulthier de Rumilly, l’atelier ouvre à 7 h 15 et ne ferme pas le midi. Vous déposez vos chaussures en partant au travail, vous les reprenez en rentrant. Les petites réparations se font souvent pendant que vous attendez. | At 34 rue Gaulthier de Rumilly, the workshop opens at 7:15am and stays open through lunch. Drop your shoes off on the way to work, pick them up on the way home. Small repairs are often done while you wait. | |
| `blocks.atelier.cta` | Horaires et accès | Hours and directions | |
| `blocks.cles.eyebrow` | Clés & serrurerie | Keys & locks | **à valider (types de clés)** |
| `blocks.cles.title` | Un double de clé, le temps d’un café | A spare key in the time it takes to have a coffee | **à valider (types de clés)** |
| `blocks.cles.text` | Clés plates de maison, de cave ou de boîte aux lettres, clés de sécurité sur présentation de la carte de propriété, clés de voiture et badges d’immeuble selon les modèles. Apportez la clé d’origine, on vérifie avec vous qu’elle se reproduit. | Flat keys for your home, cellar or letterbox, high-security keys with the owner’s card, car keys and building fobs depending on the model. Bring the original key and we’ll check with you that it can be copied. | **à valider (types de clés)** |
| `blocks.cles.cta` | Reproduction de clés | Key cutting | **à valider (types de clés)** |
| `blocks.cuir.eyebrow` | Cuir & maroquinerie | Leather & bags | |
| `blocks.cuir.title` | Le cuir se soigne, il ne se jette pas | Leather can be cared for, not thrown away | |
| `blocks.cuir.text` | Un sac décoloré, une couture qui lâche, une ceinture trop longue, une fermeture éclair cassée : le cuir supporte très bien la réparation. Teinture, couture, remplacement d’anses, on vous dit franchement ce qui vaut la peine d’être fait. | A faded bag, a seam coming apart, a belt that’s too long, a broken zip: leather takes repair very well. Dyeing, stitching, new handles: we’ll tell you honestly what’s worth doing. | |
| `blocks.cuir.cta` | Demander un devis cuir | Get a leather quote | |

### metier

| Clé | Français | English | |
|---|---|---|---|
| `metier.eyebrow` | Le métier | The craft | **à valider (parcours, titre de Maître Artisan)** |
| `metier.title` | Maître artisan, ça veut dire quelque chose | Master craftsman is more than a title | **à valider (parcours, titre de Maître Artisan)** |
| `metier.text` | Le titre de Maître Artisan est délivré par la Chambre de métiers et de l’artisanat. Il reconnaît une qualification et des années de pratique dans le métier. À l’atelier, cela se traduit simplement : on prend le temps de regarder, on vous dit ce qui se répare et ce qui ne vaut pas la dépense, et on fait le travail à la main. | The Maître Artisan title is awarded by the French Chamber of Trades and Crafts. It recognises qualifications and years of practice in the trade. In the workshop it simply means this: we take the time to look, we tell you what can be fixed and what isn’t worth the money, and we do the work by hand. | **à valider (parcours, titre de Maître Artisan)** |
| `metier.points.0` | Réparer plutôt que racheter : une bonne paire ressemelée repart pour des années. | Repair rather than replace: a good pair, resoled, goes on for years. | **à valider (parcours, titre de Maître Artisan)** |
| `metier.points.1` | Le prix annoncé avant de commencer, sans surprise au retrait. | The price is given before we start, no surprise when you collect. | **à valider (parcours, titre de Maître Artisan)** |
| `metier.points.2` | Des conseils d’entretien pour que la réparation dure. | Care advice so the repair lasts. | **à valider (parcours, titre de Maître Artisan)** |
| `metier.credit` | Photo : {credit} | Photo: {credit} | **à valider (parcours, titre de Maître Artisan)** |
| `metier.tips.eyebrow` | Conseils d’entretien | Care tips | **à valider (parcours, titre de Maître Artisan)** |
| `metier.tips.title` | Quatre gestes qui font durer vos chaussures | Four habits that make your shoes last | **à valider (parcours, titre de Maître Artisan)** |
| `metier.tips.items.0.title` | Alterner les paires | Rotate your pairs | **à valider (parcours, titre de Maître Artisan)** |
| `metier.tips.items.0.text` | Le cuir a besoin d’un jour pour sécher de la transpiration. Deux paires portées en alternance durent plus de deux fois plus longtemps. | Leather needs a day to dry out. Two pairs worn in turn last more than twice as long. | **à valider (parcours, titre de Maître Artisan)** |
| `metier.tips.items.1.title` | Des embauchoirs en bois | Wooden shoe trees | **à valider (parcours, titre de Maître Artisan)** |
| `metier.tips.items.1.text` | Glissés dès que vous retirez vos chaussures, ils gardent la forme et absorbent l’humidité. | Slipped in as soon as you take your shoes off, they keep the shape and absorb moisture. | **à valider (parcours, titre de Maître Artisan)** |
| `metier.tips.items.2.title` | Des patins sur cuir neuf | Protectors on new leather | **à valider (parcours, titre de Maître Artisan)** |
| `metier.tips.items.2.text` | Sur une semelle en cuir, un patin posé tôt protège l’avant du pied et retarde le ressemelage. | On a leather sole, a protector fitted early guards the front of the foot and delays resoling. | **à valider (parcours, titre de Maître Artisan)** |
| `metier.tips.items.3.title` | Loin du radiateur | Away from the radiator | **à valider (parcours, titre de Maître Artisan)** |
| `metier.tips.items.3.text` | Mouillées, laissez-les sécher à l’air libre, bourrées de papier journal. La chaleur directe craquelle le cuir. | When wet, let them dry in the open air, stuffed with newspaper. Direct heat cracks leather. | **à valider (parcours, titre de Maître Artisan)** |

### reviews

| Clé | Français | English | |
|---|---|---|---|
| `reviews.eyebrow` | Avis Google | Google reviews | |
| `reviews.title` | Ce que les clients retiennent | What customers remember | |
| `reviews.themes.0` | Des prix honnêtes | Honest prices | |
| `reviews.themes.1` | Un vrai travail d’artisan | Real craftsmanship | |
| `reviews.themes.2` | Un atelier de quartier | A neighbourhood workshop | |
| `reviews.cta` | Lire les avis sur Google | Read the reviews on Google | |

### infos

| Clé | Français | English | |
|---|---|---|---|
| `infos.eyebrow` | Infos pratiques | Visit | |
| `infos.title` | Passez à l’atelier | Come to the workshop | |
| `infos.address` | Adresse | Address | |
| `infos.route` | Itinéraire | Directions | |
| `infos.phone` | Téléphone | Phone | |
| `infos.hours` | Horaires | Opening hours | |
| `infos.closedDay` | Fermé | Closed | |
| `infos.closures` | Fermetures à venir | Upcoming closures | |
| `infos.access` | Accès | Getting here | |
| `infos.accessText` | Quartier Henriville, au sud du centre-ville, à quelques minutes à pied de la gare d’Amiens. Stationnement dans les rues voisines. | Henriville neighbourhood, just south of the city centre, a few minutes’ walk from Amiens station. Street parking nearby. | **à valider (accès, stationnement)** |
| `infos.mapTitle` | Plan d’accès à la Cordonnerie Henriville, 34 rue Gaulthier de Rumilly à Amiens | Map to Cordonnerie Henriville, 34 rue Gaulthier de Rumilly, Amiens | |

### faq

| Clé | Français | English | |
|---|---|---|---|
| `faq.eyebrow` | Questions fréquentes | FAQ | |
| `faq.title` | Avant de venir | Before you come | |
| `faq.items.0.q` | Faut-il prendre rendez-vous ? | Do I need an appointment? | |
| `faq.items.0.a` | Non. L’atelier vous accueille sans rendez-vous, du mardi au samedi, de 7 h 15 à 19 h sans interruption. | No. The workshop welcomes you without an appointment, Tuesday to Saturday, from 7:15am to 7pm without a break. | |
| `faq.items.1.q` | Combien de temps pour une réparation ? | How long does a repair take? | **à valider (délais)** |
| `faq.items.1.a` | Les clés, les piles de montre, les embouts de talons et les ceintures se font souvent pendant que vous attendez. Un ressemelage ou une teinture prennent quelques jours. On vous donne la date de retrait au moment du dépôt. | Keys, watch batteries, heel tips and belts are often done while you wait. Resoling or dyeing takes a few days. We give you the pick-up date when you drop the item off. | **à valider (délais)** |
| `faq.items.2.q` | Comment obtenir un devis ? | How do I get a quote? | |
| `faq.items.2.a` | Passez à l’atelier avec l’objet, ou envoyez 1 à 3 photos par le formulaire de devis. On vous répond avec un prix et un délai, et on ne commence rien sans votre accord. | Come to the workshop with the item, or send 1 to 3 photos through the quote form. We reply with a price and a turnaround time, and nothing starts without your go-ahead. | |
| `faq.items.3.q` | Quelles clés pouvez-vous reproduire ? | Which keys can you copy? | **à valider (clés reproduites)** |
| `faq.items.3.a` | Les clés plates courantes (maison, cave, boîte aux lettres), les clés de sécurité sur présentation de la carte de propriété, certaines clés de voiture et les badges d’immeuble selon les modèles. Apportez la clé d’origine : on vous dit tout de suite si c’est possible. | Common flat keys (home, cellar, letterbox), high-security keys with the owner’s card, some car keys and building fobs depending on the model. Bring the original key and we’ll tell you straight away if it’s possible. | **à valider (clés reproduites)** |
| `faq.items.4.q` | Quels moyens de paiement acceptez-vous ? | Which payment methods do you accept? | **à valider (moyens de paiement)** |
| `faq.items.4.a` | Espèces et carte bancaire. Le paiement se fait au retrait, une fois la réparation faite. | Cash and card. You pay when you collect, once the repair is done. | **à valider (moyens de paiement)** |
| `faq.items.5.q` | Et si j’oublie de récupérer mes chaussures ? | What if I forget to collect my shoes? | **à valider (objets oubliés)** |
| `faq.items.5.a` | Gardez le ticket remis au dépôt. Les objets sont conservés à l’atelier ; au-delà de plusieurs mois sans nouvelles, nous vous contactons. Passez ou appelez si vous avez un doute. | Keep the ticket you get when you drop them off. Items are kept at the workshop; after several months without news, we get in touch. Drop by or call if in doubt. | **à valider (objets oubliés)** |

### footer

| Clé | Français | English | |
|---|---|---|---|
| `footer.tagline` | Cordonnerie, cuir, clés et serrurerie au cœur du quartier Henriville, à Amiens. Maître artisan cordonnier. | Shoe repair, leather, keys and locks in the heart of the Henriville neighbourhood, Amiens. Master shoemaker. | |
| `footer.contact` | Atelier | Workshop | |
| `footer.pages` | Pages | Pages | |
| `footer.days` | Du mardi au samedi<br>7 h 15 – 19 h, sans interruption | Tuesday to Saturday<br>7:15am – 7pm, no lunch break | |
| `footer.closed` | Fermé le dimanche et le lundi | Closed Sunday and Monday | |
| `footer.rights` | Cordonnerie Henriville, Amiens | Cordonnerie Henriville, Amiens | |
| `footer.legal` | Mentions légales | Legal notice | |

### devis

| Clé | Français | English | |
|---|---|---|---|
| `devis.eyebrow` | Devis gratuit | Free quote | **à valider (devis gratuit ?)** |
| `devis.title` | Demander un devis | Get a quote | |
| `devis.lead` | Décrivez la réparation et joignez 1 à 3 photos. L’atelier vous répond avec un prix et un délai. Rien n’est commencé sans votre accord. | Describe the repair and attach 1 to 3 photos. The workshop replies with a price and a turnaround time. Nothing starts without your go-ahead. | |
| `devis.preferCall` | Plus simple au téléphone ? | Easier by phone? | |
| `devis.sections.object` | L’objet | The item | |
| `devis.sections.repair` | La réparation | The repair | |
| `devis.sections.photos` | Les photos | Photos | |
| `devis.sections.delay` | Le délai | Timing | |
| `devis.sections.contact` | Vos coordonnées | Your details | |
| `devis.fields.objects.chaussures` | Chaussures | Shoes | |
| `devis.fields.objects.sac` | Sac | Bag | |
| `devis.fields.objects.ceinture` | Ceinture | Belt | |
| `devis.fields.objects.cle` | Clé ou badge | Key or fob | |
| `devis.fields.objects.autre` | Autre | Other | |
| `devis.fields.repairsLabel` | Ce qu’il faut faire | What needs doing | |
| `devis.fields.repairsHint` | plusieurs choix possibles | choose as many as you like | |
| `devis.fields.repair` | Précisez si besoin | Any details | |
| `devis.fields.repairPh` | Ex. : talon usé côté extérieur, couture décousue sur 3 cm, clé Fichet… | E.g. heel worn on the outside, seam open over 3 cm, Fichet key… | |
| `devis.fields.photos` | Ajouter des photos | Add photos | |
| `devis.fields.photosHint` | 1 à 3 photos : vue d’ensemble, puis le détail à réparer. | 1 to 3 photos: the whole item, then the detail to repair. | |
| `devis.fields.photoRemove` | Retirer | Remove | |
| `devis.fields.photosCount` | {count}/3 | {count}/3 | |
| `devis.fields.delays.pas-presse` | Pas pressé | No rush | |
| `devis.fields.delays.semaine` | Dans la semaine | Within the week | |
| `devis.fields.delays.urgent` | Le plus vite possible | As soon as possible | |
| `devis.fields.delays.date` | Pour une date précise : | By a set date: | |
| `devis.fields.date` | Date souhaitée | Preferred date | |
| `devis.fields.name` | Nom | Name | |
| `devis.fields.phone` | Téléphone | Phone | |
| `devis.fields.email` | E-mail | Email | |
| `devis.fields.emailHint` | (pour recevoir la confirmation) | (to receive the confirmation) | |
| `devis.fields.message` | Message | Message | |
| `devis.fields.messagePh` | Une précision, une question, la marque de l’article… | A detail, a question, the brand of the item… | |
| `devis.repairs.talons` | Talons | Heels | |
| `devis.repairs.patins` | Patins | Sole protectors | |
| `devis.repairs.ressemelage` | Ressemelage | Resoling | |
| `devis.repairs.couture` | Couture | Stitching | |
| `devis.repairs.fermeture` | Fermeture éclair | Zip | |
| `devis.repairs.teinture` | Teinture, rénovation | Dyeing, restoration | |
| `devis.repairs.entretien` | Entretien, cirage | Care, polishing | |
| `devis.repairs.elargissement` | Élargissement | Stretching | |
| `devis.repairs.anses` | Anses, poignées | Handles, straps | |
| `devis.repairs.doublure` | Doublure | Lining | |
| `devis.repairs.raccourcir` | Raccourcir | Shorten | |
| `devis.repairs.trous` | Trous supplémentaires | Extra holes | |
| `devis.repairs.boucle` | Changer la boucle | New buckle | |
| `devis.repairs.cle-plate` | Clé plate | Flat key | |
| `devis.repairs.cle-securite` | Clé de sécurité | High-security key | |
| `devis.repairs.cle-voiture` | Clé de voiture | Car key | |
| `devis.repairs.badge` | Badge | Fob | |
| `devis.errors.object` | Choisissez le type d’objet. | Choose the type of item. | |
| `devis.errors.repair` | Dites-nous ce qu’il faut faire (une case ou un mot). | Tell us what needs doing (a box or a few words). | |
| `devis.errors.name` | Indiquez votre nom. | Please enter your name. | |
| `devis.errors.phone` | Indiquez un numéro de téléphone valide. | Please enter a valid phone number. | |
| `devis.errors.email` | Cette adresse e-mail ne semble pas valide. | This email address doesn’t look right. | |
| `devis.errors.photo` | Cette photo n’a pas pu être lue. Essayez une autre image. | This photo couldn’t be read. Try another image. | |
| `devis.errors.generic` | L’envoi n’a pas abouti. Réessayez, ou appelez l’atelier au 03 22 95 65 63. | Sending failed. Please try again, or call the workshop on +33 3 22 95 65 63. | |
| `devis.submit` | Envoyer la demande | Send the request | |
| `devis.sending` | Envoi… | Sending… | |
| `devis.privacy` | Vos coordonnées servent uniquement à répondre à cette demande. Elles ne sont ni revendues ni utilisées pour de la publicité. | Your details are only used to reply to this request. They are never sold or used for advertising. | |
| `devis.success.title` | Demande bien reçue | Request received | |
| `devis.success.text` | L’atelier regarde vos photos et vous répond avec un prix et un délai. | The workshop will look at your photos and reply with a price and a turnaround time. | |
| `devis.success.email` | Un récapitulatif vient de vous être envoyé par e-mail. | A summary has just been sent to your email. | |
| `devis.success.notNotified` | Pour être sûr que l’atelier l’a bien reçue, appelez directement : | To be sure the workshop has received it, call directly: | |
| `devis.success.again` | Faire une autre demande | Send another request | |
| `devis.message.title` | Nouvelle demande de devis | New quote request | |
| `devis.message.object` | Objet | Item | |
| `devis.message.repairs` | Réparations | Repairs | |
| `devis.message.repair` | Précisions | Details | |
| `devis.message.delay` | Délai souhaité | Timing | |
| `devis.message.name` | Nom | Name | |
| `devis.message.phone` | Téléphone | Phone | |
| `devis.message.email` | E-mail | Email | |
| `devis.message.message` | Message | Message | |
| `devis.message.photos` | Photos jointes | Photos attached | |
| `devis.email.subject` | Demande de devis | Quote request | |
| `devis.email.confirmSubject` | Votre demande de devis, Cordonnerie Henriville | Your quote request, Cordonnerie Henriville | |
| `devis.email.confirmIntro` | Bonjour {name},<br><br>Merci pour votre demande. Voici ce que nous avons reçu : | Hello {name},<br><br>Thank you for your request. Here is what we received: | |
| `devis.email.confirmOutro` | Nous revenons vers vous avec un prix et un délai. Pour toute question : {phone}, du mardi au samedi de 7 h 15 à 19 h.<br><br>Cordonnerie Henriville<br>34 rue Gaulthier de Rumilly, 80000 Amiens | We’ll get back to you with a price and a turnaround time. Any question: {phone}, Tuesday to Saturday, 7:15am to 7pm.<br><br>Cordonnerie Henriville<br>34 rue Gaulthier de Rumilly, 80000 Amiens, France | |

### pages

| Clé | Français | English | |
|---|---|---|---|
| `pages.cles.metaTitle` | Reproduction de clés à Amiens, badges et clés de sécurité | Cordonnerie Henriville | Key Cutting in Amiens, Fobs & High-Security Keys | Cordonnerie Henriville | |
| `pages.cles.metaDescription` | Double de clé à Amiens, quartier Henriville : clés plates, clés de sécurité sur carte, clés de voiture, badges d’immeuble. Sans rendez-vous, dès 7 h 15, du mardi au samedi. | Key cutting in Amiens, Henriville: flat keys, high-security keys with card, car keys, building fobs. No appointment, from 7:15am, Tuesday to Saturday. | |
| `pages.cles.eyebrow` | Clés & serrurerie · Amiens | Keys & locks · Amiens | |
| `pages.cles.title` | Reproduction de clés à Amiens | Key cutting in Amiens | |
| `pages.cles.intro` | Un double pour la nounou, une clé de cave perdue, un badge d’immeuble en plus : apportez la clé d’origine à l’atelier, la plupart des reproductions se font pendant que vous attendez. | A spare for the childminder, a lost cellar key, an extra building fob: bring the original key to the workshop, most copies are made while you wait. | |
| `pages.cles.cta` | Demander un devis clé | Get a key quote | |
| `pages.cles.listTitle` | Ce que nous reproduisons | What we copy | |
| `pages.cles.list.0.title` | Clés plates | Flat keys | **à valider (types de clés)** |
| `pages.cles.list.0.text` | Portes d’entrée, caves, garages, boîtes aux lettres, cadenas. | Front doors, cellars, garages, letterboxes, padlocks. | **à valider (types de clés)** |
| `pages.cles.list.1.title` | Clés de sécurité | High-security keys | **à valider (types de clés)** |
| `pages.cles.list.1.text` | Sur présentation de la carte de propriété du cylindre, selon la marque. | With the lock’s owner card, depending on the brand. | **à valider (types de clés)** |
| `pages.cles.list.2.title` | Clés de voiture | Car keys | **à valider (types de clés)** |
| `pages.cles.list.2.text` | Selon le modèle et l’année : appelez ou passez avec la clé pour vérifier. | Depending on make and year: call or drop by with the key to check. | **à valider (types de clés)** |
| `pages.cles.list.3.title` | Badges d’immeuble | Building fobs | **à valider (types de clés)** |
| `pages.cles.list.3.text` | Copie des badges les plus courants, selon la technologie du badge. | Copies of the most common fobs, depending on the technology. | **à valider (types de clés)** |
| `pages.cles.howTitle` | Comment ça se passe | How it works | |
| `pages.cles.how.0.title` | Apportez la clé d’origine | Bring the original key | |
| `pages.cles.how.0.text` | Une copie de copie s’use plus vite et fonctionne moins bien. L’original donne le meilleur résultat. | A copy of a copy wears faster and works less well. The original gives the best result. | |
| `pages.cles.how.1.title` | On vérifie avec vous | We check with you | |
| `pages.cles.how.1.text` | Profil, marque, carte de propriété : on vous dit tout de suite si la reproduction est possible et à quel prix. | Profile, brand, owner’s card: we tell you straight away if it can be copied and at what price. | |
| `pages.cles.how.2.title` | Essayez-la chez vous | Try it at home | |
| `pages.cles.how.2.text` | Si une clé accroche, revenez avec : on la reprend. | If a key sticks, bring it back: we’ll fix it. | |
| `pages.cles.serrurerie` | Serrurerie : cylindres et serrures de boîte aux lettres. Les prestations exactes sont à confirmer avec l’atelier, appelez-nous pour en parler. | Locksmithing: lock cylinders and letterbox locks. Exact services to be confirmed with the workshop, give us a call to discuss. | **à valider (serrurerie)** |
| `pages.ressemelage.metaTitle` | Ressemelage à Amiens, talons et patins | Cordonnerie Henriville, Maître Artisan | Shoe Resoling in Amiens, Heels & Protectors | Cordonnerie Henriville | |
| `pages.ressemelage.metaDescription` | Ressemelage cuir ou gomme à Amiens par un maître artisan cordonnier : talons, patins, coutures. Devis par photo, sans rendez-vous, quartier Henriville. | Leather or rubber resoling in Amiens by a master shoemaker: heels, sole protectors, stitching. Quote by photo, no appointment, Henriville neighbourhood. | |
| `pages.ressemelage.eyebrow` | Cordonnerie · Amiens | Shoe repair · Amiens | |
| `pages.ressemelage.title` | Ressemelage à Amiens | Shoe resoling in Amiens | |
| `pages.ressemelage.intro` | Une bonne paire mérite plus d’une vie. Quand la semelle est usée ou percée, on la remplace en gardant le dessus, et vos chaussures repartent pour des années. | A good pair deserves more than one life. When the sole is worn or has a hole, we replace it and keep the upper, and your shoes are good for years more. | |
| `pages.ressemelage.cta` | Demander un devis ressemelage | Get a resoling quote | |
| `pages.ressemelage.listTitle` | Talons, patins, semelles | Heels, protectors, soles | |
| `pages.ressemelage.list.0.title` | Ressemelage cuir | Leather resoling | |
| `pages.ressemelage.list.0.text` | Pour les chaussures de ville à semelle cuir : on remplace la semelle à l’identique. | For leather-soled dress shoes: we replace the sole like for like. | |
| `pages.ressemelage.list.1.title` | Ressemelage gomme | Rubber resoling | |
| `pages.ressemelage.list.1.text` | Plus d’adhérence, plus de durée, idéal pour l’hiver amiénois. | More grip, longer wear, ideal for Amiens winters. | |
| `pages.ressemelage.list.2.title` | Talons et embouts | Heels and heel tips | |
| `pages.ressemelage.list.2.text` | Talons homme, embouts de talons femme : souvent fait pendant que vous attendez. | Men’s heels, women’s heel tips: often done while you wait. | |
| `pages.ressemelage.list.3.title` | Patins | Sole protectors | |
| `pages.ressemelage.list.3.text` | Une fine semelle de protection posée sous l’avant du pied, sur cuir neuf ou à peine usé. | A thin protective sole fitted under the front of the foot, on new or barely worn leather. | |
| `pages.ressemelage.howTitle` | Quand faut-il ressemeler ? | When should you resole? | |
| `pages.ressemelage.how.0.title` | La semelle s’amincit | The sole is getting thin | |
| `pages.ressemelage.how.0.text` | Appuyez au centre de l’avant-pied : si c’est souple comme du carton, il est temps. | Press the middle of the forefoot: if it feels soft like cardboard, it’s time. | |
| `pages.ressemelage.how.1.title` | Le talon est usé de biais | The heel wears at an angle | |
| `pages.ressemelage.how.1.text` | Ne laissez pas l’usure atteindre la semelle : un talon se change vite et coûte peu. | Don’t let the wear reach the sole: a heel is quick and cheap to change. | |
| `pages.ressemelage.how.2.title` | Avant le trou | Before the hole | |
| `pages.ressemelage.how.2.text` | Une semelle percée laisse passer l’eau et abîme la première de propreté : ressemelez avant. | A sole with a hole lets water in and damages the insole: resole before. | |
| `pages.ressemelage.related` | Un doute sur votre paire ? Envoyez une photo de la semelle, on vous dit ce qui est possible. | Not sure about your pair? Send a photo of the sole and we’ll tell you what’s possible. | |

### legal

| Clé | Français | English | |
|---|---|---|---|
| `legal.metaTitle` | Mentions légales | Cordonnerie Henriville | Legal notice | Cordonnerie Henriville | |
| `legal.title` | Mentions légales | Legal notice | |
| `legal.editor` | Éditeur | Publisher | |
| `legal.editorText` | {company}, 34 rue Gaulthier de Rumilly, 80000 Amiens. Téléphone : 03 22 95 65 63. | {company}, 34 rue Gaulthier de Rumilly, 80000 Amiens, France. Phone: +33 3 22 95 65 63. | |
| `legal.siret` | SIRET : {siret}. | SIRET: {siret}. | |
| `legal.director` | Responsable de la publication : {director}. | Publication manager: {director}. | |
| `legal.host` | Hébergeur | Hosting | |
| `legal.data` | Données personnelles | Personal data | |
| `legal.dataText` | Les informations envoyées par le formulaire de devis (nom, téléphone, e-mail, photos, message) servent uniquement à répondre à votre demande. Elles sont transmises par e-mail à l’atelier et ne sont pas conservées sur le site. Vous pouvez demander leur suppression en appelant l’atelier. | Information sent through the quote form (name, phone, email, photos, message) is only used to reply to your request. It is emailed to the workshop and not stored on the website. You can ask for it to be deleted by calling the workshop. | |
| `legal.photos` | Photos | Photos | |
| `legal.photosText` | Photos de l’atelier : Cordonnerie Henriville. Photo de teinture du sac : {credit}. Aucune image de banque d’images ni générée par intelligence artificielle. | Workshop photos: Cordonnerie Henriville. Bag dyeing photo: {credit}. No stock images and no AI-generated images. | |
| `legal.cookies` | Cookies | Cookies | |
| `legal.cookiesText` | Le site n’utilise aucun cookie publicitaire ni de mesure d’audience. Seul votre choix de langue est mémorisé. La carte est fournie par Google Maps. | This website uses no advertising or analytics cookies. Only your language choice is remembered. The map is provided by Google Maps. | |

## Textes alternatifs des photos

| Photo | Français | English |
|---|---|---|
| mains-ponceuse-mocassin | Les mains du cordonnier tiennent un mocassin noir contre la ponceuse de finition de l’atelier | The shoemaker's hands holding a black loafer against the workshop's finishing wheel |
| teinture-sac-cuir-rouge | Le cordonnier, gants noirs, teint à la main un sac en cuir rouge | The shoemaker, in black gloves, hand-dyeing a red leather bag |
