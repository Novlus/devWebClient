let div = document.getElementById("divTest1");
let div2 = document.getElementById("divTest2");
let joueurs = ["Dominique", "Gérard", "Maxime", "Oswaldo", "Didier"]

function afficherJoueurs() {
    joueurs.forEach(element => {
        div.innerHTML += " " + element + "</br>";
        document.body.appendChild(div);
    });
}

const villeDepartement =
    [{ ville: "Nancy", department: "54" },
    { ville: "Metz", department: "57" },
    { ville: "Epinal", department: "88" },
    { ville: "Verdun", department: "55" }];

function afficherDepartement() {
    villeDepartement.forEach(element => {
        div2.innerHTML += " " + element.ville + " " + element.department + "</br>";
        document.body.appendChild(div);
    });
}
