# Cordonnerie Henriville : infos à demander à l'atelier

Le site est en ligne avec ce qu'on sait de façon sûre (adresse, téléphone, horaires de la bio Instagram, note Google). Tout le reste est à valider ou à compléter avec lui. Une fois les réponses obtenues, les corrections se font dans `data/*.json` et `locales/*.json` (voir CONTENU.md).

## Ce qu'on a trouvé (registres publics, à confirmer avec lui)

- Société : SARL Cordonnerie Henriville, SIRET 837 960 087 00018 (annuaire-entreprises.data.gouv.fr). **Ajouté aux mentions légales.**
- Dirigeant : Christophe Audegond (societe.com). Mis en « responsable de la publication » : **à confirmer**, et à ne pas afficher ailleurs sans son accord.
- Ancien nom : Cordonnerie Morchain (page Facebook @cordonnerie.morchain, 2 500 abonnés, toujours liée au site).
- La photo du sac rouge est signée @lou.au2gd : signature recadrée, crédit en mentions légales. **Lui demander l'accord du photographe.**

## À lui demander

1. **Son prénom et son parcours** : Maître Artisan depuis quand, formation, années de métier, depuis quand à Henriville. (Bloc « Le métier », pour l'instant générique.)
2. **La liste exacte des services et les prix « à partir de »** : `data/tarifs.json` (tous les prix sont vides, affichés « sur devis »).
3. **La serrurerie** : cylindres (fourniture seule ou pose ?), ouverture de porte (oui / non), serrures de boîte aux lettres, coffres, cadenas. Les deux lignes actuelles sont marquées « à confirmer ».
4. **Les clés** : quelles marques de sécurité (Fichet, Vachette, Bricard…), clés de voiture (avec ou sans transpondeur, télécommandes ?), badges (Vigik ?).
5. **Les délais réels** par prestation (`data/tarifs.json`, champ delay).
6. **Devis gratuit ?** Le site l'annonce : à confirmer.
7. **Moyens de paiement** (le site dit espèces et carte), et **combien de temps il garde les objets oubliés**.
8. **Un portable pour WhatsApp** : si oui, renseigner `whatsapp` dans `data/site.json` (bouton à ajouter, pratique pour l'envoi de photos).
9. **L'e-mail de l'atelier** pour recevoir les devis : à mettre dans Vercel (`DEVIS_NOTIFY_EMAIL`) avec la clé Resend (`RESEND_API_KEY`, `RESEND_FROM`). Tant que ce n'est pas fait, le formulaire invite à appeler.
10. **Photos** : atelier, mains au travail, établi et outils, machine à clés, vitrine / façade, avant / après (chaussures et sacs, même cadrage). Liste détaillée : `assets/A-PHOTOGRAPHIER.md`.
11. **Le logo** : a-t-il un logo ou une enseigne dessinée ? Sinon, valider le logo typographique (marteau et clé croisés).
12. **Accès et stationnement** (texte « Accès » à valider), et ses **fermetures de l'année** (congés, ponts) pour le bandeau.
13. **Nom de domaine** : en a-t-il un, ou faut-il en prendre un (cordonnerie-henriville.fr est un bon candidat) ?
