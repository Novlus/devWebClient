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


let buyConsole = (message) => {
    return new Promise(function (resolve, reject) {
        // passe l'étape ou on gère l'événnement

        consoleBaught = true;

        if (consoleBaught) {
            resolve(message + "\nConsole achetée");
        }

        else {
            reject(message + "\nPas encore achetée");
        }

    })
}

let playPacman = (message) => {
    return new Promise(function (resolve, reject) {
        // passe l'étape ou on gère l'événnement

        didIPlay = false;

        if (didIPlay) {
            resolve(message + "\nYes 8ème niveau atteint");
        }

        else {
            reject(message + "\nNon j'ai un TP à finir");
        }

    })
}


// ---------------------------------------------- MAIN ----------------------------------------------

document.addEventListener('DOMContentLoaded', function () {

    // les promises sont dépendantes les unes des autres, elles s'exécutent dans l'ordre au fur et à mesure qu'elles se terminent.
    collectFund()
        .then(result => {
            //console.log(result);
            return buyConsole(result);
        })
        .then(result => {
            //console.log(result);
            return playPacman(result);
        })
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })

})
