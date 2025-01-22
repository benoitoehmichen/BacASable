const longueur = "Hello".length;
const LONGUEUR = "Hello".toUpperCase();
console.log("longueur = ", longueur);
console.log("LONGUEUR = ", LONGUEUR);

let price;
price = 0;
price = "tata";
console.log("price = ", price);
const price2 = 0;

console.log("price2 = ", price2);

const myPet = "Bluetooth";
console.log(`I own a pet ${myPet}`);
console.log(typeof longueur);
console.log(typeof LONGUEUR);

let username = "";
let defaultName = username || "Benoit";
console.log("defaultName = ", defaultName);

greetWorld();
greetWorld();
greetWorld();

function greetWorld() {
  console.log("Hello world!");
}

//Paramètres par défaut : depuis ES6
function calculateArea(height = 10, width = 10) {
  console.log("area = ", height * width);
}

calculateArea(2, 2);

// function expression (fonction anonyme)
const calculateVolume = function (width, height, profondeur) {
  const total = width * height * profondeur;
  return total;
};

console.log("Volume= ", calculateVolume(2, 2, 2));

//Arrow function (depuis ES6)
const cercleArea = (diametre) => {
  return diametre * 3.14;
};

console.log("Aire du cercle = ", cercleArea(4));

let firstArray = ["un", "deux", "trois"];
console.log("firstArray = ", firstArray);
console.log("firstArray[1] = ", firstArray[1]);

const arrayJoin = firstArray.join("§");
console.log("arrayJoin = ", arrayJoin);
console.log("arrayJoin.indexOf('ddd') = ", arrayJoin.indexOf("un"));

const addToArray = (array) => {
  return [...array, "cinq"];
};

addToArray(firstArray);

console.log("firstArray = ", firstArray);

let contact = {
  name: "Benoit",
  surname: "Oehmichen",
};

contact.city = "Boulogne";

contact["Benoit"] = "nouveau benoit";
console.log("contact = ", contact);

const message =
  "You can call me at : 0612715847 or 0612715846 Or this number : 0612715846";

const pattern = /06[0-9]{9}/g;
const allPhones = message.match(pattern);
console.log("allPhones = ", allPhones);

//---------------
//---------------

const extractedText = document.querySelector(
  "#globalContainer > #container > .myButton"
).textContent;

console.log("extractedText = ", extractedText);

document.querySelector(
  "#globalContainer > #container > .myButton"
).textContent = "Nouveau Bouton ";

console.log(document.querySelector("#container").innerHTML);

document.querySelector("#container").innerHTML += `
<ul>
<li>Bluetooth</li>
<li>Yoshi</li>
</ul>
`;

const allBaliseP = document.querySelectorAll("p");
console.log("allBaliseP = ", allBaliseP);

for (let i = 0; i < allBaliseP.length; i++) {
  console.log("item ", i, " = ", allBaliseP[i].textContent);
}

const parent = document.querySelector("#container").parentNode;

console.log("parent = ", parent);

const numberBaliseP = document.querySelectorAll("p").length;

const allDocument = document.querySelector("#globalContainer");
const messageCount = document.createElement("div");

switch (numberBaliseP) {
  case 0:
    messageCount.style.fontSize = 10;
    console.log("Hy there");
    break;
  case 1:
    messageCount.style.fontSize = 20;
    break;
  case 2:
    messageCount.style.fontSize = 30;
    break;
  case 3:
    messageCount.style.fontSize = "40px";
    console.log("Hy there");
    break;
  case 4:
    messageCount.style.fontSize = 50;
    break;
}

messageCount.id = "messageCount";
messageCount.textContent = `Voici le nomlbrs de balises p = ${numberBaliseP}`;
allDocument.appendChild(messageCount);

var clone = messageCount.cloneNode(true);
document.body.appendChild(clone);

//---------------
//---------------x

document.querySelector(".myButton").addEventListener("click", function () {
  console.log("button clicked");
  const valeurSaisie = document.querySelector(".inputText").value;
  console.log("valeurSaisie = ", valeurSaisie);
});

for (let i = 0; i < document.querySelectorAll("li").length; i++) {
  console.log("YYYY");
  document.querySelectorAll("li")[i].addEventListener("click", () => {
    console.log("LI cliqued, i = ", i);
    console.log(this.innerHTML);
  });
}
