

### Projet complet : **Gestion de tâches avec JavaScript**

Nous allons utiliser les concepts suivants pour ce projet :
- **Variables et types de données**
- **Opérateurs**
- **Structures de contrôle (if, switch)**
- **Boucles**
- **Fonctions**
- **Objets et classes**
- **Manipulation dynamique du DOM**
- **Méthodes de gestion des tâches (ajouter, supprimer, terminer)**

### 1. **Structure HTML du Formulaire et de la Liste**
Nous conservons la structure HTML de base mais avec un peu plus d'interactivité et de possibilités d'extension.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion des Tâches</title>
    <style>
        .completed {
            text-decoration: line-through;
            color: grey;
        }
        button {
            margin-left: 10px;
        }
    </style>
</head>
<body>
    <h1>Gestion des Tâches</h1>
    <form id="task-form">
        <input type="text" id="task-input" placeholder="Ajouter une tâche" required>
        <button type="submit">Ajouter</button>
    </form>

    <ul id="task-list"></ul>

    <script src="app.js"></script>
</body>
</html>
```

### 2. **Le Script JavaScript - `app.js`**

Nous allons maintenant détailler le script en utilisant toutes les notions importantes. Voici un projet enrichi avec toutes les notions JavaScript que tu souhaites apprendre.

#### Déclaration des Variables et Types de Données

```javascript
// Tableau pour stocker les tâches
let tasks = [];  // Tableau vide pour stocker nos objets de tâches
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Variable pour le comptage des tâches
let taskCount = 0;
```

#### Fonction pour Ajouter une Tâche

```javascript
// Fonction pour ajouter une tâche
function addTask(taskText) {
    // Créer un objet tâche avec un texte et un état de complétion
    const task = {
        id: taskCount++,  // Utilise taskCount pour donner un ID unique à chaque tâche
        text: taskText,
        completed: false,
    };
    tasks.push(task);  // Ajouter la tâche au tableau
    renderTasks();     // Met à jour la liste affichée
}
```

#### Boucle pour Rendre les Tâches Visibles

```javascript
// Fonction pour afficher les tâches
function renderTasks() {
    taskList.innerHTML = '';  // Efface la liste pour la reconstruire

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;

        // Ajout d'un style pour les tâches complètes
        if (task.completed) {
            li.classList.add('completed');
        }

        // Ajouter les boutons "Terminer" et "Supprimer"
        const completeButton = document.createElement('button');
        completeButton.textContent = "Terminer";
        completeButton.onclick = () => completeTask(task.id);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Supprimer";
        deleteButton.onclick = () => deleteTask(task.id);

        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}
```

#### Marquer une Tâche comme Terminée

```javascript
// Fonction pour marquer une tâche comme terminée
function completeTask(id) {
    const task = tasks.find(task => task.id === id);  // Recherche la tâche avec l'ID
    if (task) {
        task.completed = true;  // Changer son état de complétion
        renderTasks();  // Re-rendre la liste mise à jour
    }
}
```

#### Supprimer une Tâche

```javascript
// Fonction pour supprimer une tâche
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);  // Supprimer la tâche par son ID
    renderTasks();  // Re-rendre la liste mise à jour
}
```

#### Soumettre une Nouvelle Tâche avec Validation et Contrôle

```javascript
// Ajouter un événement de soumission pour le formulaire
taskForm.addEventListener("submit", (event) => {
    event.preventDefault();  // Empêche l'envoi du formulaire et la page de se recharger

    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);  // Ajouter la nouvelle tâche
        taskInput.value = "";  // Réinitialiser le champ de saisie
    }
});
```

### 3. **Opérateurs, Structures de Contrôle et Boucles**
On utilise des **opérateurs** pour modifier les propriétés des tâches, des **structures de contrôle** pour valider l'entrée de l'utilisateur, et des **boucles** pour afficher chaque tâche.

Exemple de contrôle dans `completeTask()` :
```javascript
if (task.completed === false) {
    task.completed = true;
} else {
    alert("La tâche est déjà terminée.");
}
```

### 4. **Manipulation Dynamique du DOM**

En utilisant des **événements** (comme `addEventListener`) pour interagir avec l'utilisateur, nous pouvons manipuler les éléments HTML en temps réel.

#### Création de l'interface avec les boutons et interactions dynamiques
Les boutons sont créés dynamiquement à partir du code JavaScript. Nous leur associons des **événements** (`onclick`) pour qu'ils agissent sur les tâches (terminer ou supprimer).

### 5. **Améliorations**
- **Compter les tâches** : Ajouter une fonctionnalité pour afficher le nombre de tâches actives.
- **Enregistrer dans le localStorage** : Sauvegarder les tâches pour les récupérer même après le rechargement de la page.
- **Vérifier les entrées** : Ajouter un contrôle pour éviter l'ajout de tâches vides ou déjà présentes.

#### Exemple de stockage dans le localStorage

```javascript
// Sauvegarder les tâches dans le localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));  // Convertir le tableau en chaîne JSON
}

// Récupérer les tâches depuis le localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);  // Convertir la chaîne JSON en tableau
        renderTasks();
    }
}

// Appeler loadTasks au démarrage
loadTasks();

// Sauvegarder à chaque modification
window.addEventListener('beforeunload', saveTasks);
```

### Conclusion
Avec ce projet de gestion de tâches, nous avons couvert :
- **Les bases du JavaScript** : variables, types, fonctions, objets, tableaux.
- **Les structures de contrôle** pour la logique (if, loops).
- **La manipulation du DOM** pour interagir avec l'interface utilisateur.
- **Des événements** pour rendre l'application dynamique.
- **Des méthodes avancées** comme `localStorage` pour rendre l'application persistante.

