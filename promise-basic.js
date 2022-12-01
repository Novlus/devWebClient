//présentation des promises

let promiseToCleanKitchen = new Promise(function (resolve, reject) {

    // Créer un événement dont la réponse arrive à un moment inconnu

    let isDone = false;
    if (isDone) {// l'événnement s'est bien passé
        resolve("Oui c'est fait");
    }
    else {// l'événnement s'est mal passé
        reject("Non c'est pas fait");
    }
});

// ---------------------------------------------- MAIN ----------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    promiseToCleanKitchen
        .then(function (dataFromResolve) {
            // traitement de l'événement quand il a réussi
            console.log(dataFromResolve);
            document.getElementById("prom").innerHTML = dataFromResolve;
            HTML = dataFromResolve

        })
        .catch(function (dataFromReject) {
            // traitement de l'événement quand il a échoué
            console.log(dataFromReject);
            document.getElementById("prom").innerHTML = dataFromReject;
            HTML = dataFromReject
        })

});
