// 📌 Déclaration d'une classe appelée "Formulaire".
// Une classe, c'est comme un modèle ou une boîte à outils qui permet
// de créer et manipuler des objets spécifiques (ici, un formulaire).
export default class Formulaire {

    // 📌 Le "constructeur" est une fonction spéciale qui s'exécute
    // automatiquement quand on crée un nouvel objet basé sur cette classe.
    constructor(id) {
        // On stocke l'ID du formulaire (qu'on doit lui donner dans le HTML).
        this.id = id;

        // On récupère l'élément HTML qui correspond à cet ID.
        this.formulaireHtml = document.getElementById(this.id);

        // On stocke les données du formulaire (c'est une façon pratique de les manipuler).
        this.formdata = new FormData(this.formulaireHtml);

        // On crée un tableau vide qui va contenir les réponses du formulaire.
        this.answers = new Array();
    }

    // 📌 Cette méthode sert à récupérer le "parent" d'un élément HTML (souvent un <div> qui l'entoure).
    getDiv(id) {
        return document.getElementById(id).parentNode;
    }

    // 📌 Cette méthode permet de récupérer un élément HTML grâce à son ID.
    getElement(id) {
        return document.getElementById(id);
    }

    // 📌 Cette méthode sert à cacher un champ du formulaire (sans animation).
    maskChamp(id) {
        // On ajoute une classe CSS appelée "masque" pour cacher l'élément.
        this.getDiv(id).classList.add('masque');

        // On rend le champ non obligatoire (il n'est plus nécessaire de le remplir).
        this.getElement(id).required = false;
    }

    // 📌 Cette méthode permet d'afficher un champ du formulaire.
    showChamp(id) {
        // On enlève une classe CSS qui cachait l'élément.
        this.getDiv(id).classList.remove('disp');

        // On ajoute une classe CSS qui l'affiche.
        this.getDiv(id).classList.add('app');

        // On rend ce champ obligatoire (il doit être rempli).
        this.getElement(id).required = true;
    }

    // 📌 Cette méthode permet de cacher un champ avec une animation.
    hideChamp(id) {
        // On enlève la classe qui affichait l'élément.
        this.getDiv(id).classList.remove('app');

        // On ajoute une classe CSS qui cache l'élément avec animation.
        this.getDiv(id).classList.add('disp');

        // On rend ce champ non obligatoire.
        this.getElement(id).required = false;
    }

    // 📌 Cette méthode sert à vérifier si un bouton radio est sélectionné.
    isSelected(id, value, action, otherAction) {
        // On récupère les nouvelles valeurs du formulaire.
        this.formdata = new FormData(this.formulaireHtml);

        // On regarde si la valeur du bouton radio correspond à celle attendue.
        if(this.formdata.get(id) == value) {
            // Si oui, on exécute l'action donnée.
            action();
        }
        else {
            // Sinon, on exécute une autre action.
            otherAction();
        }
    }

    // 📌 Cette méthode récupère toutes les valeurs du formulaire et les stocke.
    getAnswers() {
        // On récupère à nouveau toutes les données du formulaire.
        this.formdata = new FormData(this.formulaireHtml);

        // Pour chaque valeur trouvée, on l'ajoute à notre tableau "answers".
        this.formdata.forEach(
            (value, key) => {
                // On vérifie que la valeur n'est ni vide ni "on" (pour éviter les cases à cocher non cochées).
                if(value != "" && value != "on") {
                    this.answers.push([key, value]);
                }
            }
        )

        // On renvoie le tableau contenant toutes les réponses du formulaire.
        return this.answers;
    }

    // 📌 Cette méthode affiche toutes les réponses du formulaire dans une boîte d'alerte.
    affAnswers() {
        // On crée une chaîne de texte qui va contenir toutes les réponses.
        let chaine = "Récapitulatif\n\n";

        // On parcourt toutes les réponses récupérées.
        for (let ligne of this.getAnswers()) {
            // On ajoute chaque réponse sous la forme : "nom_du_champ : valeur"
            chaine += `${ligne[0]} : ${ligne[1]}\n`;
        }

        // On affiche le récapitulatif dans une alerte.
        alert(chaine);
    }
}
