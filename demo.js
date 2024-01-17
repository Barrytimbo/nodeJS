//le difference type de doonne
let String = "je suis chaine de caracteur";
let number = 23;
let boolean = false;

let entier = String +"-:-"+ number + "-:-" + boolean

//Exercice tableau
let tableau = [
  "Camara: 23 point",
  "Barri: 34 point",
  "Diallo: 92 point",
  "Sow: 47 point",
  "sidibe: 45 point",
]
function showTab(nom, age, prenom, sexe, ville, adresse, telephone, email, pawssword) {
  this.nom = nom;
  this.age = age;
  this.prenom = prenom;
  this.sexe = sexe;
  this.ville = ville;
  this.adresse = adresse;
  this.telephone = telephone;
  this.email = email;
  this.pawssword = pawssword;
}

let user = new showTab("Camara", 47, "Camara", "M", "Camara",);
console.log(user);

//Exercice pour les tableau
/*/En Js, NaN signifie “Not-a-Numbe // 
let nan = NaN;
console.log(isNaN(nan));
console.log(Number.isNaN(nan));
*/



// exercice pour le date 
let datee = new Date();
document.querySelector(".myvalue").innerHTML = datee;
//Exercice pour Obeject
let myObject = { person: "ville", age: 47, nom: "Camara" };

function myfunction(a, b) {
  console.log(String);
  console.log(tableau);
  alert("operationn terminer");
}

function oper(x, y) {
  let myopera = x < y;
  let demo = 22 > 3;
  //document.getElementById("affiche").innerHTML = myopera;
  console.log("operation terminer");
}
//Exercice pour le conditionne
let camara = 23;
let diallo = 34;
if (camara > diallo) {
  console.log("Camara est plus petite que Diallo");
} else {
}

function optioB(barri, camara) {
  if (barri === camara) {
    document.getElementById("affiche1").innerHTML =
      "Barri est plus petite que Camara";
  } else {
    alert("pas vrais");
  }
}
// Exeice pour prompt
//prompt("quelle et vous")

//Exercice pour et input recuperation de doone
let myInput = document.querySelector("input[type=text]");
let pseudo = "";

//console.log(myInput);
// pour ajouter un event
myInput.addEventListener("input", function (event) {
  //console.log(event.target.value);
  pseudo = event.target.value;
  console.log(pseudo);
});

//Exercice.getElementById
//getElementById example
function changeColor(newColor) {
  let elem = document.getElementById("btn");
  elem.style.color = newColor;
}

let mybtn = document.querySelector(".event > button");
let show = "je suis la value"


mybtn.addEventListener("click", function (e) {
 show = e.target.value;

});

/*
let element = {
  city: "rees",
  age: 35,
  sport: "football",
};

let myObject = document.getElementById("btn");
objectString =
  "city: " + element.city + "age: " + element.age + "sport: " + element.sport;
(myObject.innerHTML = "le contenu de mon String :" + objectString),
  console.log(typeof (element.barri, element.sport));
console.log(typeof changeColor);

//utilisationne de QuerySelector

let myTab = ["Barri: 1", "Camara: 40", "Diallo: 23", "Sow: 50", "Bah 32"];
console.log(myTab[(1, 3)]);

function mydemo(demo) {
  let barri = 34;
  let camara = 36;

  if ((demo) => camara) {
    console.log("si camara et plus ager que Barry alors Barri et grande");
  } else {
    console.log("ce Camara que plus ager que Barry");
  }
}
// pour le conditionne
let city = 30;
let ville = 40;
let result = city > ville;

if (result) {
  //.log("la ville est plus petite que la ville");
} else {
  //console.log("la ville est moins petite que la ville");
}console.log("------------------------------");
*/
