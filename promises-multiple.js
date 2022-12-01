// Comment gérer plusieurs Promises
let collectFund = () => {
    return new Promise(function (resolve, reject) {
        // passe l'étape ou on gère l'événnement

        isEnough = true;

        if (isEnough) {
            resolve("Montant atteint");
        }

        else {
            reject("Montant non atteint");
        }

    })



}


let buyConsole = () => {
    return new Promise(function (resolve, reject) {
        // passe l'étape ou on gère l'événnement

        consoleBaught = true;

        if (consoleBaught) {
            resolve("Console achetée");
        }

        else {
            reject("Pas encore achetée");
        }

    })
}

let playPacman = () => {
    return new Promise(function (resolve, reject) {
        // passe l'étape ou on gère l'événnement

        didIPlay = true;

        if (didIPlay) {
            resolve("Yes 8ème niveau atteint");
        }

        else {
            reject("Non j'ai un TP à finir");
        }

    })
}


// ---------------------------------------------- MAIN ----------------------------------------------

document.addEventListener('DOMContentLoaded', function () {

    // les promises sont dépendantes les unes des autres, elles s'exécutent dans l'ordre au fur et à mesure qu'elles se terminent.
    collectFund()
        .then(result => {
            console.log(result);
            return buyConsole();
        })
        .then(result => {
            console.log(result);
            return playPacman();
        })
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })

})
