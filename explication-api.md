# Explication de l'API

#Qu'est-ce qu'une API ?
Une API est un ensemble de fonctionnalités qui permettent de manipuler des données.
Exemples :  

```pug
    form(class="card" action="/api/tweets" method="POST")
```

```js
→ router.use("/api", api)           // dans index.js
→ router.use("/tweets", tweets)     // dans api.js
→ router.post("/", ...)            // dans api.tweets.js
```
Exactement ! Le fichier api.js agit comme un point central (hub) pour toutes vos API. C'est une bonne pratique d'organisation car :

## Il centralise toutes vos API au même endroit :
```js
router.use("/tweets", tweets);
// Vous pourriez ajouter d'autres APIs comme :
// router.use("/users", users);
// router.use("/comments", comments);
// router.use("/likes", likes);
```
## Il permet une meilleure organisation :
Chaque fonctionnalité a son propre fichier (api.tweets.js, api.users.js, etc.)
Toutes ces fonctionnalités sont regroupées sous le préfixe /api
Facile d'ajouter de nouvelles APIs sans toucher au reste du code

## Il sépare clairement :
Les routes d'API (/api/...) qui manipulent les données
Les routes de pages (/...) qui affichent les vues