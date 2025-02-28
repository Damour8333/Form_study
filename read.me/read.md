## Objectifs de la partie
### Maîtriser les principes de base de la définition d’une classe en JS.

### Utiliser les moyens d’accès au Document Object Model.

Voici un récapitulatif du travail réalisé dans les deux vidéos :

Nous avons en premier lieu mis à jour l’architecture de notre répertoire :

Formulaire-JS

css

style.css

html

formulaire.html

scripts

evenements.js

formulaire.js

Puis nous avons importé le script evenements.js dans notre page html :

formulaire.html

### 📚 **Cours ultra débutant : Comprendre le code ci-dessus**  

Ce code est une **classe JavaScript** appelée `Formulaire`. Une classe, c'est comme un **plan** ou un **modèle** qui permet de créer des objets avec des propriétés et des fonctionnalités spécifiques.

---

## ✨ **Qu'est-ce qu'une classe en JavaScript ?**  
Une **classe** permet de regrouper des fonctions (appelées ici **méthodes**) qui sont liées à un objet précis. Ici, l'objet qu'on manipule, c'est un **formulaire HTML**.

### 🛠 **1. Le constructeur : la base du formulaire**
```js
constructor(id) {
    this.id = id;
    this.formulaireHtml = document.getElementById(this.id);
    this.formdata = new FormData(this.formulaireHtml);
    this.answers = new Array();
}
```
👉 **Ce que ça fait :**  
- Quand on crée un nouvel objet `Formulaire`, on lui donne un **id** (l'identifiant du formulaire dans le HTML).
- Il récupère ce formulaire avec `document.getElementById(this.id)`.
- Il récupère **toutes les données** du formulaire avec `new FormData(this.formulaireHtml)`.
- Il prépare un **tableau vide (`this.answers`)** pour stocker les réponses.

---

### 🎯 **2. Récupérer des éléments HTML**
**On a deux méthodes pour récupérer des éléments du formulaire :**
```js
getDiv(id) {
    return document.getElementById(id).parentNode;
}
```
🔹 **getDiv(id)** → Cherche l’élément parent du champ avec l'id donné.   
Exemple : si `id = "email"`, il va récupérer son **conteneur** (le `<div>` qui l'entoure).  

```js
getElement(id) {
    return document.getElementById(id);
}
```
🔹 **getElement(id)** → Récupère directement un élément par son `id`.

---

### 👀 **3. Cacher et afficher des champs**
**Le code propose trois façons de masquer ou afficher un champ :**
```js
maskChamp(id) {
    this.getDiv(id).classList.add('masque');
    this.getElement(id).required = false;
}
```
🚀 **maskChamp(id)**  
- Ajoute une classe CSS (`masque`) pour cacher l’élément.  
- Désactive la validation (`required = false` → le champ devient optionnel).  

```js
showChamp(id) {
    this.getDiv(id).classList.remove('disp');
    this.getDiv(id).classList.add('app');
    this.getElement(id).required = true;
}
```
🚀 **showChamp(id)**  
- Enlève la classe qui cache (`disp`) et ajoute une classe qui montre (`app`).  
- Rend le champ **obligatoire** (`required = true`).  

```js
hideChamp(id) {
    this.getDiv(id).classList.remove('app');
    this.getDiv(id).classList.add('disp');
    this.getElement(id).required = false;
}
```
🚀 **hideChamp(id)**  
- Inverse l’effet de `showChamp`, pour masquer avec une animation.

---

### ✅ **4. Vérifier si un bouton radio est sélectionné**
```js
isSelected(id, value, action, otherAction) {
    this.formdata = new FormData(this.formulaireHtml);
    if (this.formdata.get(id) == value) {
        action();
    } else {
        otherAction();
    }
}
```
👉 **Comment ça marche ?**  
- Vérifie si un **bouton radio** est sélectionné (`id` et `value`).
- Si la valeur correspond, il exécute la fonction `action()`.
- Sinon, il exécute `otherAction()`.

Exemple d’utilisation :
```js
form.isSelected("genre", "homme", 
    () => console.log("Homme sélectionné"), 
    () => console.log("Pas un homme"));
```
Si "homme" est sélectionné, ça affiche `"Homme sélectionné"`, sinon `"Pas un homme"`.

---

### 📝 **5. Récupérer les réponses du formulaire**
```js
getAnswers() {
    this.formdata = new FormData(this.formulaireHtml);
    this.formdata.forEach(
        (value, key) => {
            if (value != "" && value != "on") {
                this.answers.push([key, value]);
            }
        }
    )
    return this.answers;
}
```
🔹 Cette fonction **récupère toutes les réponses** d’un formulaire :
- Ignore les cases non cochées (`on`).
- Stocke les réponses dans `this.answers`.

---

### 🔔 **6. Afficher les réponses**
```js
affAnswers() {
    let chaine = "Récapitulatif\n\n";
    for (let ligne of this.getAnswers()) {
        chaine += `${ligne[0]} : ${ligne[1]}\n`;
    }
    alert(chaine);
}
```
💡 **Cette méthode affiche un résumé des réponses dans une alerte.**  
📌 Exemple :  
Si on a entré "Jean" dans un champ `nom`, l’alerte affichera :  
```
Récapitulatif

nom : Jean
```

---

## 🏆 **Résumé ultra simple**
- **Une classe (`Formulaire`)** sert à gérer un formulaire.
- **Le constructeur** récupère le formulaire et ses données.
- **getDiv() et getElement()** trouvent des éléments HTML.
- **maskChamp(), showChamp(), hideChamp()** cachent ou affichent un champ.
- **isSelected()** vérifie si un bouton radio est coché.
- **getAnswers()** récupère les réponses.
- **affAnswers()** affiche un récapitulatif des réponses.

---

## 🎯 **Exercice pour s'entraîner**
💡 **Crée un fichier HTML avec un formulaire et teste cette classe !**  
Essaie d’afficher un champ seulement si un bouton radio est sélectionné. 🚀