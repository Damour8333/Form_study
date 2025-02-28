# Form_study
Apprendre à faire un formulaire En vanillage javascript. Le but étant de se resservir Des formules et des notions apprises Lors des leçons.


Voici un **cheat sheet** de base pour initialiser un projet avec Git, créer une branche `main` et pousser le projet sur GitHub.  

---

### ⚡ **1. Initialiser le dépôt Git**  
```sh
git init
```
> Initialise un dépôt Git dans le dossier actuel.

---

### 📂 **2. Associer un dépôt distant (GitHub)**  
```sh
git remote add origin https://github.com/VOTRE-UTILISATEUR/NOM-DU-REPO.git
```
> Remplace `VOTRE-UTILISATEUR` et `NOM-DU-REPO` par les bonnes valeurs.  

Pour vérifier que le remote est bien ajouté :  
```sh
git remote -v
```

---

### 🌱 **3. Créer et passer sur la branche `main`**  
```sh
git branch -M main
```
> Crée la branche `main` (si elle n'existe pas) et y bascule.

---

### 📦 **4. Ajouter les fichiers et faire un commit**  
```sh
git add .
git commit -m "First commit"
```
> Ajoute tous les fichiers et crée un premier commit.

---

### 🚀 **5. Pousser le projet sur GitHub**  
```sh
git push -u origin main
```
> Pousse la branche `main` sur GitHub et établit le suivi entre la branche locale et distante.

---

### 🔥 **Bonus : Configurer Git (si ce n’est pas encore fait)**  
Si c'est la première fois que tu utilises Git sur ta machine, configure ton nom et ton email :  
```sh
git config --global user.name "TonNom"
git config --global user.email "tonemail@example.com"
```

---

💡 **Et voilà !** Ton projet est maintenant sur GitHub. 🎉  
Besoin de plus d’infos ? N’hésite pas ! 😃
