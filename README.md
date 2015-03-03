# La méthode du Docteur Dandy

[Décrite ici](http://lesbonsremedes.overblog.com/2013/12/la-methode-du-docteur-dandy.html), la méthode du Docteur Dandy est une méthode de prise de notes à destination des jeux de rôle ou narratif, afin de concevoir une fiction à partir de briques narratives extraites de livres / films / bande dessinées / série, etc.

## Preuve du concept

Il suffit d'aller naviguer sur la [page hébergée par Github pages](http://brunobord.github.io/dr-dandy/) pour comprendre comment l'application fonctionne. Pour les besoins de la démo, un jeu réduit de personnages, lieux, intrigues et péripéties sont fournis (ces éléments sont tirés de l'article originel). La liste des éléments est affichée dans l'ordre aléatoire, et on peut filtrer par un ou plusieurs éléments pour "panacher" comme on a envie.

## Comment l'utiliser pour soi ?

Chacun peut utiliser cette one-page-app (application en une page) pour ses propres besoins.
Il vous suffit de cloner ce dépôt. Imaginons que votre pseudonyme soit @meuh.

* Votre dépôt aura pour URL: https://github.com/meuh/dr-dandy
* L'URL de votre propre copie sera: http://meuh.github.io/dr-dandy/

Il vous suffit ensuite de modifier les fichiers texte intégrés dans le dépôt et dès que vos modifications sont pushées sur Github, vous pourrez accéder à votre copie de l'application

Les fichiers importants sont :

* `meta.json`: répertorie les "méta-informations" concernant les types d'éléments disponibles, leur label affiché dans le bouton, et l'éventuelle class CSS utilisable pour personnaliser l'affichage de l'élément (se référer à [la documentation de Twitter Bootstrap](http://getbootstrap.com/components/#labels) pour les labels par défaut ; rien ne vous empêche de faire vos propres styles, en rajoutant une feuille de style personnalisée). Libre à vous d'ajouter / supprimer / modifier vos types d'éléments comme bon vous semble.
* `data.json`: pour enregistrer vos éléments. C'est votre "base de données".

### Avertissement

La "base de données" sera intégralement chargée en mémoire lorsque vous atterrirez sur l'application. Il se peut qu'en fonction de sa taille gloable vous constatiez des ralentissements. C'est pas ma faute, c'est parce qu'il n'y a pas trop le choix. Si vous avez des problèmes de performance, je vous conseille d'alléger la base contenue dans le `data.json` ou de passer à une application de type "desktop" de prise de notes.

----

## Licence

La méthode du Dr Dandy est (c) Dr Dandy. Les éléments cités en exemple [sont issus de son article originel](http://lesbonsremedes.overblog.com/2013/12/la-methode-du-docteur-dandy.html).

Le code source est publié sous [Licence MIT](./LICENSE).
