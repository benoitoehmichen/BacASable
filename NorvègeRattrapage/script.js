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
