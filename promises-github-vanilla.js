// @author : Novens
// envoie des requetes XHR vers Github pour récupérer une liste de listusers


//let trchoisi;
//let idUtilisateur;
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
 * Affiche les données des utilisateur récupérer sur le serveur de Github le tout dans un tableau
 * @param {json} data : contient la réponse de l'API au format json
 * @return : vide
 */

function showUsers(data) {
    data = data.target.response;



    let users = "<table class='table table-dark table-hover'>";
    users += "<thead><tr><th>Id</th><th>Pseudo</th><th>Avatar</th></tr></thead>";
    data.forEach(element => {
        users += "<tr><td>" + element.id + "</td>";
        users += "<td>" + element.login + "</td>";
        users += "<td> <img src= ' " + element.avatar_url + "' style='width: 100px; height: 100px;' </td> </tr>";
    });
    users += "</table>";
    document.getElementById("listuser").innerHTML = users;
    // recuperer la liste des repos du premier utilisateur
    let reposPremierUtilisateur = data[0].repos_url;


    console.log('API URL : ' + reposPremierUtilisateur);
    //sendXhr(reposPremierUtilisateur, showRepos);

}

function showRepos(data) {
    data = data.target.response;
    let repos = "<table class='table table-dark table-hover'>";
    repos += "<thead><tr><th>Id</th><th>Nom</th><th>Avatar</th><th>Nom du repos</th><th>Description</th><th>Homepage</th><th>Date derniere MAJ</th></tr></thead>";
    data.forEach(element => {
        repos += "<tr><td>" + element.owner.id + "</td>";
        repos += "<td>" + element.owner.login + "</td>";
        repos += "<td> <img src= ' " + element.owner.avatar_url + "' style='width: 100px; height: 100px;' </td>";
        repos += "<td>" + element.full_name + "</td>";
        repos += "<td>" + element.description + "</td>";
        repos += "<td><a href= '" + element.homepage + "'>" + element.homepage + "</a></td>";
        repos += "<td>" + element.updated_at + "</td></tr>";
    });

    repos += "</table>";
    console.log(repos);
    document.getElementById("reposuser").innerHTML = repos;




}
// ---------------------------------------------- MAIN ----------------------------------------------

document.addEventListener('DOMContentLoaded', function () {

    // on attend que le DOM soit chargé
    let url = "https://api.github.com/users";
    // On affiche : les premiers utilisateurs de github avec leur identifiant, leur pseudo et leur avatar
    console.log('API URL : ' + url);
    //sendXhr(url, showUsers);
    // utiliser sendXhrPromise
    sendXhrPromise(url)
        .then(function (data) {
            showUsers(data);
            // on récupère la liste des repos du premier utilisateur
            let reposPremierUtilisateur = data.target.response[0].repos_url;
            console.log('API URL : ' + reposPremierUtilisateur);
            return sendXhrPromise(reposPremierUtilisateur);
        })
        .then(function (data) {
            showRepos(data);
        })
        .catch(function (data) {
            console.log("data transfert error : " + data);
        })





});
