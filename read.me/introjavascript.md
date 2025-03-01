# Introduction à JavaScript

JavaScript est un langage de programmation essentiel pour le développement web. Il permet d'ajouter de l'interactivité aux pages web, de manipuler le DOM (Document Object Model) et de communiquer avec des serveurs.

## 1. Syntaxe et Intégration de JavaScript

JavaScript peut être intégré dans une page HTML de trois manières :

1. **Dans une balise `<script>` directement dans le fichier HTML** :
   ```html
   <script>
       console.log("Bonjour, monde !");
   </script>
   ```

2. **Dans un fichier externe avec extension `.js`** :
   ```html
   <script src="script.js"></script>
   ```

3. **Dans des gestionnaires d'événements HTML** (peu recommandé) :
   ```html
   <button onclick="alert('Bouton cliqué !')">Clique-moi</button>
   ```

## 2. Les Variables en JavaScript

Une variable est un conteneur permettant de stocker une valeur. En JavaScript, on utilise `var`, `let` et `const` :

```js
let nom = "Alice";  // Variable modifiable
const age = 30;      // Variable constante
var ville = "Paris"; // Ancienne syntaxe (peu recommandée)
```

## 3. Les Opérateurs en JavaScript

Les opérateurs permettent de manipuler des valeurs :
- **Arithmétiques** : `+`, `-`, `*`, `/`, `%`
- **Comparaison** : `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logiques** : `&&`, `||`, `!`

Exemple :
```js
let a = 10, b = 5;
console.log(a + b);  // 15
console.log(a > b);  // true
```

## 4. Structures de Contrôle

Les structures conditionnelles permettent d'exécuter du code selon certaines conditions :

```js
let age = 18;
if (age >= 18) {
    console.log("Majeur");
} else {
    console.log("Mineur");
}
```

Le `switch` permet de tester plusieurs cas :
```js
let fruit = "pomme";
switch (fruit) {
    case "pomme":
        console.log("C'est une pomme.");
        break;
    case "banane":
        console.log("C'est une banane.");
        break;
    default:
        console.log("Fruit inconnu");
}
```

## 5. Les Boucles en JavaScript

Les boucles permettent de répéter des instructions :

```js
// Boucle for
for (let i = 0; i < 5; i++) {
    console.log("Itération :", i);
}

// Boucle while
let j = 0;
while (j < 5) {
    console.log("Tant que j < 5, j vaut :", j);
    j++;
}
```

## 6. Les Fonctions en JavaScript

Les fonctions permettent de réutiliser du code :

```js
function direBonjour(nom) {
    return "Bonjour, " + nom;
}
console.log(direBonjour("Alice"));
```

Les fonctions fléchées :
```js
const addition = (a, b) => a + b;
console.log(addition(2, 3)); // 5
```

## 7. Les Types de Données

Les principaux types en JavaScript sont :
- **Chaîne de caractères** : `"texte"`
- **Nombres** : `42`, `3.14`
- **Booléens** : `true`, `false`
- **Tableaux** : `[1, 2, 3]`
- **Objets** : `{ cle: "valeur" }`

## 8. L'Objet `Number`

L'objet `Number` permet de manipuler les nombres :
```js
let x = 3.14159;
console.log(x.toFixed(2)); // "3.14"
```

## 9. Les Objets en JavaScript

Un objet est une collection de propriétés :
```js
let personne = {
    nom: "Alice",
    age: 25,
    direBonjour: function() {
        return "Bonjour, je suis " + this.nom;
    }
};
console.log(personne.direBonjour());
```

## 10. Les Classes et l'Instantiation d'Objets

Depuis ES6, on peut définir des classes :
```js
class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    parler() {
        return this.nom + " fait du bruit";
    }
}
let chien = new Animal("Rex");
console.log(chien.parler());
```

## 11. L'Objet `Date`

Pour manipuler les dates et heures :
```js
let maintenant = new Date();
console.log(maintenant.toLocaleDateString());
```

## 12. Introduction aux Documents, Objets et Modèles

Le DOM permet d'interagir avec les éléments HTML :
```js
let titre = document.getElementById("titre");
titre.textContent = "Nouveau titre";
```

---



