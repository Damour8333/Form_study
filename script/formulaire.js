// 📌 Déclaration d'une classe appelée "Formulaire".
export default class Formulaire {

    constructor(id) {
        this.id = id;
        this.formulaireHtml = document.getElementById(this.id);
        if (!this.formulaireHtml) {
            console.error(`Le formulaire avec l'ID "${id}" n'a pas été trouvé.`);
            return;
        }
        this.formdata = new FormData(this.formulaireHtml);
        this.answers = [];
    }

    getDiv(id) {
        const div = document.getElementById(id);
        return div ? div.parentNode : null;
    }

    getElement(id) {
        return document.getElementById(id);
    }

    maskChamp(id) {
        const div = this.getDiv(id);
        if (div) {
            div.classList.add('masque');
            const element = this.getElement(id);
            if (element) {
                element.required = false;
            }
        } else {
            console.warn(`L'élément avec l'ID "${id}" n'existe pas.`);
        }
    }

    showChamp(id) {
        const div = this.getDiv(id);
        if (div) {
            div.classList.remove('disp');
            div.classList.add('app');
            const element = this.getElement(id);
            if (element) {
                element.required = true;
            }
        } else {
            console.warn(`L'élément avec l'ID "${id}" n'existe pas.`);
        }
    }

    hideChamp(id) {
        const div = this.getDiv(id);
        if (div) {
            div.classList.remove('app');
            div.classList.add('disp');
            const element = this.getElement(id);
            if (element) {
                element.required = false;
            }
        } else {
            console.warn(`L'élément avec l'ID "${id}" n'existe pas.`);
        }
    }

    isSelected(id, value, action, otherAction) {
        this.formdata = new FormData(this.formulaireHtml);
        if (this.formdata.get(id) === value) {
            action();
        } else {
            otherAction();
        }
    }

    getAnswers() {
        this.formdata = new FormData(this.formulaireHtml);
        this.answers = [];
        this.formdata.forEach((value, key) => {
            if (value !== "" && value !== "on") {
                this.answers.push([key, value]);
            }
        });
        return this.answers;
    }

    affAnswers() {
        let chaine = "Récapitulatif\n\n";
        for (let ligne of this.getAnswers()) {
            chaine += `${ligne[0]} : ${ligne[1]}\n`;
        }
        alert(chaine);
    }
}
