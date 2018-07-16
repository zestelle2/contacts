

// initalisation du tableaux 
var contact = [];

contact[0] = {
    nom: "Lévisse",
    prenom: "Carole"
}

contact[1] = {
    nom: "Nelsonne",
    prenom: "Melodie"
}

alert("Bienvenue dans le gestionnaire des contacts.");

var choixUtilisateur = prompt("option n°1 : Afficher liste de contact Option n°2 : Ajouter un nouveau contact Option n°0 : Quitter");

while (choixUtilisateur  != 0) {
    if (choixUtilisateur == 1) {

        for (i = 0; i < contact.length; i++) {

            alert("nom: " + contact[i].nom + "prenom : " + contact[i].prenom);
        
        }

    } else if (choixUtilisateur == 2) { // choix 2 : ajouter un nouveau contact.
        var nouveauNom = prompt("entrez le nom du contact");
        var nouveauPrenom = prompt("Entrez le prenom du contact");

        let newContact = {
            nom :nouveauNom , 
            prenom : nouveauPrenom
        };
        contact.push(newContact);

        }
        else{
            alert("erreur");
    }
    choixUtilisateur = Number(prompt("option n°1 : Afficher liste de contact Option n°2 : Ajouter un nouveau contact Option n°0 : Quitter"));
}

alert("good bye");