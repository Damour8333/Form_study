

---

# 🚀 **Plan d’apprentissage : Fabriquer une classe "Formulaire" en JavaScript**

### 📌 **1. Comprendre les bases**
Avant de plonger dans le code, il faut comprendre **quel est le but** d’une classe et comment on va structurer notre fichier.

💡 **Une classe, c'est quoi ?**  
Imagine une **usine** qui fabrique des objets. Tous ces objets ont **les mêmes caractéristiques et les mêmes fonctionnalités**.  

**Exemple :**  
- Une classe **"Voiture"** peut créer des objets ayant une marque, une couleur et des roues.  
- Une classe **"Formulaire"** peut créer des objets qui permettent de gérer les données d'un formulaire HTML.  

---

### 📌 **2. Plan du fichier (Avant d'écrire du code)**
Voici un **schéma logique** de ce qu'on veut créer.

📍 **Notre classe "Formulaire" va avoir :**  
1. **Un constructeur (`constructor()`)** ➝ Il prépare le formulaire (récupère ses infos).  
2. **Des méthodes (`getDiv()`, `getElement()`)** ➝ Elles servent à récupérer des éléments HTML.  
3. **Des méthodes d'affichage (`maskChamp()`, `showChamp()`, `hideChamp()`)** ➝ Elles cachent ou affichent un champ.  
4. **Des méthodes pour gérer les données (`getAnswers()`, `affAnswers()`)** ➝ Elles lisent les réponses et les affichent.  

---

## 🏗️ **3. Construire notre fichier pas à pas**

### ✅ **1️⃣ Déclarer une classe vide**
On commence **toujours** par créer un fichier **Formulaire.js** et déclarer une **classe vide**.

```js
// 📌 On crée une classe "Formulaire"
export default class Formulaire {
    // Ici, on mettra le code plus tard
}
```

📍 **Pourquoi `export default` ?**  
➡️ Ça permet d'utiliser cette classe dans un autre fichier en JavaScript.

---

### ✅ **2️⃣ Ajouter un "constructor"**
💡 **Le constructeur est une fonction spéciale qui s'exécute dès qu'on crée un nouvel objet basé sur cette classe.**  
C'est comme le **"mode d'emploi"** d’un formulaire.

```js
constructor(id) {
    this.id = id; // Stocke l'ID du formulaire
    this.formulaireHtml = document.getElementById(this.id); // Récupère l'élément HTML du formulaire
    this.formdata = new FormData(this.formulaireHtml); // Stocke les données du formulaire
    this.answers = new Array(); // Tableau vide qui va contenir les réponses
}
```

📌 **Explication visuelle :**  
| Élément du constructeur | Rôle |
|----------------|--------------------------------|
| `this.id = id` | Stocke l’ID du formulaire |
| `this.formulaireHtml = document.getElementById(this.id);` | Cherche l’élément HTML du formulaire |
| `this.formdata = new FormData(this.formulaireHtml);` | Prépare un objet pour gérer les données du formulaire |
| `this.answers = new Array();` | Crée un tableau vide pour stocker les réponses |

---

### ✅ **3️⃣ Ajouter des outils pour manipuler les champs**
💡 **On a besoin d’accéder facilement aux éléments HTML** (exemple : cacher un champ, récupérer ses valeurs).  
On ajoute **deux méthodes simples** :

```js
getDiv(id) {
    return document.getElementById(id).parentNode; // Récupère le parent (souvent un <div>)
}

getElement(id) {
    return document.getElementById(id); // Récupère directement l'élément HTML
}
```

📌 **Schéma d'un champ dans le HTML :**
```html
<div>
    <input id="nom" type="text">
</div>
```
➡️ `getDiv("nom")` retourne `<div>`.  
➡️ `getElement("nom")` retourne `<input>`.

---

### ✅ **4️⃣ Cacher ou afficher des champs**
💡 **Pourquoi ?**  
Certains champs doivent disparaître ou réapparaître **selon les choix de l’utilisateur**.  

```js
maskChamp(id) {
    this.getDiv(id).classList.add('masque'); // Ajoute une classe CSS qui cache l’élément
    this.getElement(id).required = false; // Rend le champ non obligatoire
}

showChamp(id) {
    this.getDiv(id).classList.remove('disp'); // Enlève la classe qui cache
    this.getDiv(id).classList.add('app'); // Ajoute une classe qui affiche
    this.getElement(id).required = true; // Rend le champ obligatoire
}

hideChamp(id) {
    this.getDiv(id).classList.remove('app'); // Enlève la classe qui affiche
    this.getDiv(id).classList.add('disp'); // Ajoute la classe qui cache
    this.getElement(id).required = false; // Rend le champ non obligatoire
}
```

📌 **Tableau explicatif des classes CSS utilisées :**  
| Classe CSS | Effet |
|------------|----------------------------------|
| `masque` | Cache l'élément immédiatement |
| `app` | Affiche l'élément (peut avoir une animation) |
| `disp` | Cache l'élément avec une animation |

---

### ✅ **5️⃣ Vérifier un bouton radio**
💡 **Si un bouton radio est sélectionné, on exécute une action.**  
Exemple : Si l’utilisateur coche "Oui", on affiche un champ supplémentaire.

```js
isSelected(id, value, action, otherAction) {
    this.formdata = new FormData(this.formulaireHtml); // Recharge les données
    if(this.formdata.get(id) == value) {
        action(); // Exécute l’action prévue
    } else {
        otherAction(); // Exécute une autre action
    }
}
```

📌 **Exemple d’utilisation :**
```js
formulaire.isSelected("statut", "pro", 
    () => console.log("Professionnel"), 
    () => console.log("Particulier")
);
```

---

### ✅ **6️⃣ Récupérer toutes les réponses**
💡 **Cette méthode parcourt tout le formulaire et stocke les réponses.**

```js
getAnswers() {
    this.formdata = new FormData(this.formulaireHtml);
    this.formdata.forEach((value, key) => {
        if(value != "" && value != "on") {
            this.answers.push([key, value]);
        }
    });
    return this.answers;
}
```

📌 **Exemple de formulaire :**
```html
<input id="nom" value="Dupont">
<input id="prenom" value="Jean">
```
👉 `getAnswers()` retourne :
```js
[
    ["nom", "Dupont"],
    ["prenom", "Jean"]
]
```

---

### ✅ **7️⃣ Afficher les réponses**
💡 **On récupère les réponses et on les affiche sous forme de texte.**

```js
affAnswers() {
    let chaine = "Récapitulatif\n\n";
    for (let ligne of this.getAnswers()) {
        chaine += `${ligne[0]} : ${ligne[1]}\n`;
    }
    alert(chaine);
}
```

📌 **Sortie possible :**
```
Récapitulatif

nom : Dupont
prenom : Jean
```

---

## 🎯 **Conclusion**
🔹 Une classe est une **usine à objets**  
🔹 On utilise un **constructeur** pour préparer nos données  
🔹 On crée des **méthodes** pour manipuler les champs et récupérer les réponses  
🔹 **Tout est structuré pour être réutilisable facilement**  

Si tu veux un **mind map** ou des **exercices pratiques**, dis-moi ! 🚀