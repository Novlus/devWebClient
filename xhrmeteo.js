
//
// Affichage de ka létéo avec Openweathermap
// @author : stan


/**
 * envoie une requête XHR
 * @param {string} urlSend = URL ou route de l'API
 * @param {function} success = fonction à appeler en cas de succès
 * @return : inutilisable
 */


function sendXhr(urlSend, success) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', urlSend);
    xhr.reponseType = 'json';
    xhr.send();
    xhr.addEventListener('load', function (reponse) { success(reponse) });
    xhr.addEventListener('error', function (reponse) { console.log('data transfert error:' + reponse) });

}

/**
 * Affiche les données météo récupérées sur le serveur d'Openweathermap
 * @param {json} data : contient la réponse de l'API au format json
 * @return : vide
 */

function showWeatherData(data) {
    console.log('réponse :' + data);
}

//---------------------------------------------- MAIN ----------------------------------------------

document.addEventListener('DOMContentLoaded', function () {

    // on attend que le DOM soit chargé
    let apiKey = "5debc4b9bdcd4e91e20b6960bcfc50f0" //clé a générer sur openweathermap
    let city = 'Paris, fr'
    let weatherUrl1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey;
    // On affiche : Ville, Température in french
    console.log('API URL : ' + weatherUrl1);

    // sendXhr(weatherUrl1, showWeatherData); {

    //});

});

