// Importation de la classe Formulaire depuis le fichier 'formulaire.js'
// Cela permet d'utiliser cette classe dans ce fichier pour créer un formulaire et gérer ses fonctionnalités
import Formulaire from './formulaire.js';

// On crée une instance de la classe Formulaire avec l'argument "formulaire".
// Cette instance représente notre formulaire HTML avec un identifiant "formulaire".
export const formulaire = new Formulaire("formulaire");

// On applique un masque au champ 'societe'.
// Le masque va modifier le comportement du champ 'societe', par exemple en limitant le type de caractères
// que l'on peut y saisir (comme un masque pour un numéro de téléphone, ou une validation spécifique).
formulaire.maskChamp('societe');

// Ajout d'un écouteur d'événement 'change' sur l'élément 'particulier'.
// Quand l'utilisateur change la sélection sur l'élément 'particulier' (par exemple, en sélectionnant une option),
// la fonction qui suit sera exécutée. Cette fonction cache le champ 'societe' en appelant la méthode hideChamp.
formulaire.getElement('particulier').addEventListener('change', () => {
    formulaire.hideChamp('societe'); // Cette ligne cache le champ 'societe' si 'particulier' est sélectionné
});

// Ajout d'un écouteur d'événement 'change' sur l'élément 'professionnel'.
// Quand l'utilisateur change la sélection sur 'professionnel', la fonction qui suit sera exécutée.
// Cette fonction montre le champ 'societe' en appelant la méthode showChamp.
formulaire.getElement('professionnel').addEventListener('change', () => {
    formulaire.showChamp('societe'); // Cette ligne montre le champ 'societe' si 'professionnel' est sélectionné
});

// Ajout d'un écouteur d'événement 'change' sur l'élément 'objet'.
// Quand l'utilisateur change la sélection sur 'objet' (par exemple, dans un menu déroulant),
// la fonction qui suit sera exécutée. Cette fonction va vérifier si la valeur sélectionnée est 'demande_de_contact'.
// Si c'est le cas, le champ 'email' sera montré, sinon il sera caché.
formulaire.getElement('objet').addEventListener('change', ()  => {
    // La méthode isSelected vérifie si la valeur sélectionnée dans 'objet' est égale à 'demande_de_contact'.
    formulaire.isSelected('objet', "demande_de_contact", () => formulaire.showChamp('email'), () => formulaire.hideChamp('email'));
    // Si 'demande_de_contact' est sélectionné, 'email' est affiché ; sinon, il est caché.
});

// Ajout d'un écouteur d'événement 'submit' sur le formulaire HTML.
// Lorsque le formulaire est soumis (c'est-à-dire que l'utilisateur clique sur le bouton "Envoyer"),
// la fonction suivante est exécutée. Cette fonction empêche le comportement par défaut du formulaire (qui serait
// de recharger la page) et appelle la méthode affAnswers pour afficher les réponses du formulaire.
formulaire.formulaireHtml.addEventListener('submit',
    (event) => {
        event.preventDefault(); // Empêche la soumission traditionnelle du formulaire (évite le rechargement de la page).
        formulaire.affAnswers(); // Affiche les réponses du formulaire (par exemple, les valeurs des champs).
        console.log(formulaire.answers); // Affiche les réponses du formulaire dans la console pour déboguer ou analyser.
    }
);
