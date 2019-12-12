"use strict";

function pyramide(valeur = document.getElementById("lignePyramide").value) {
    // DECLARATION DES VARIABLES
    let espace = `-`
    let pyramideEtoile = "";
    let pyramideEspace = "";
    document.getElementById("pyramide").innerHTML = ""
    for (let i = 0; i < valeur; i++) {
        pyramideEtoile += ` *`;
        //UNIQUEMENT AU PREMIER PASSAGE DE LA BOUCLE JE CREE LES TRAITS
        if (i == 0) {
            for (let j = 0; j < valeur; j++) {
                pyramideEspace += espace
            }
        }
        document.getElementById("pyramide").innerHTML += `${pyramideEspace} ${pyramideEtoile} ${pyramideEspace} <br>`
        //JE SUPPRIME UN ESPACE/TRAIT A CHAQUE PASSSAGE
        pyramideEspace = pyramideEspace.slice(0, -1)
    }
}