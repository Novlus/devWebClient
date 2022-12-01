
//
// Affichage de la météo avec Openweathermap
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
    xhr.responseType = 'json';
    xhr.send();

    xhr.addEventListener('load', function (reponse) { success(reponse) });
    xhr.addEventListener('error', function (reponse) { console.log("data transfert error : " + reponse) });
}


/**
 * envoie une requête XHR sous forme de Promise
 * @param {string} urlSend = URL ou route de l'API
 * @return : inutilisable
 */

function sendXhrPromise(urlSend) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', urlSend);
        xhr.responseType = 'json';
        xhr.send();

        xhr.addEventListener('load', function (reponse) { resolve(reponse) });
        xhr.addEventListener('error', function (reponse) { reject(reponse) });
    })
}



/**
 * Affiche les données météo récupérées sur le serveur d'Openweathermap
 * @param {json} data : contient la réponse de l'API au format json
 * @return : vide
 */


/*<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
*/
function showWeatherData(data) {
    data = data.target.response;

    let weatherData = "";
    weatherData += "<div class='card' style='width: 20rem;'>";
    weatherData += "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' class='card-img-top' alt='...'>";
    weatherData += "<div class='card-body'>";
    weatherData += "<h3 style='font-family: Verdana, sans-serif;'>Meteo a " + data.name + "</h3>";
    weatherData += "<p style='style='font-family: Arial, sans-serif;'>Tendance :" + data.weather[0].description;
    weatherData += "<p> Temperature :" + data.main.temp + "°C </p>";
    weatherData += "<p style='style='font-family: Arial, sans-serif;>Pression : " + data.main.pressure + " hPa Humidite : " + data.main.humidity + "%</p>";
    weatherData += "</div>";
    weatherData += "</div>";

    document.getElementById("meteo").innerHTML = weatherData;
}

//---------------------------------------------- MAIN ----------------------------------------------

document.addEventListener('DOMContentLoaded', function () {

    // on attend que le DOM soit chargé
    let apiKey = "5debc4b9bdcd4e91e20b6960bcfc50f0" //clé a générer sur openweathermap
    let city = 'Perpignan, FR'
    let weatherUrl1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey + "&units=metric&lang=fr";
    // On affiche : Ville, Température in french
    console.log('API URL : ' + weatherUrl1);
    //sendXhr(weatherUrl1, showWeatherData);
    sendXhrPromise(weatherUrl1)
        .then(function (dataFromResolve) { showWeatherData(dataFromResolve) }
        )
        .catch(function (dataFromReject) { console.log("data transfert error : " + dataFromReject) });


});

let boutonValider = document.getElementById("boutonValider");
boutonValider.addEventListener('click', function () {
    let pays = document.getElementById("abreviationPays").value;
    let ville = document.getElementById("ville").value;
    let apiKey = "5debc4b9bdcd4e91e20b6960bcfc50f0" //clé a générer sur openweathermap
    let city = ville + "," + pays
    let weatherUrl1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey + "&units=metric&lang=fr";
    // On affiche : Ville, Température in french
    console.log('API URL : ' + weatherUrl1);
    //sendXhr(weatherUrl1, showWeatherData);
    sendXhrPromise(weatherUrl1)
        .then(function (dataFromResolve) { showWeatherData(dataFromResolve) }
        )
        .catch(function (dataFromReject) { console.log("data transfert error : " + dataFromReject) });


});




