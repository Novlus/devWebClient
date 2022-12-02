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

    //on Veut excuter toutes les promises en parallele et elles doivent toutes etre satisfaites

    Promise.all([collectFund(), buyConsole(), playPacman()])
        .then(() => {
            console.log("All task (promises) finished");
        })
        .catch(() => {
            console.log("At least one task or more didn't finish");
        })

    //on Veut excuter toutes les promises en parallele et une d'entre elle doite etre satisfaite

    Promise.race([collectFund(), buyConsole(), playPacman()])
        .then(() => {
            console.log("At least one task or more finished");
        }
        )
        .catch(() => {
            console.log("None of the task(promises) finished");
        })


});



