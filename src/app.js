/* eslint-disable */
import "bootstrap";
import "./style.css";

//write your code here

var who = ["The dog", "My grandma", "His turtle", "My bird"];
var action = ["ate", "peed", "crushed", "broke"];
var what = ["my homework", "the keys", "the car"];
var when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function generateElementPosition(array) {
  console.log("get element");
  console.log("select a random element from any array");

  return Math.floor(Math.random() * array.length);
}

window.onload = function generateExcuse() {
  who[generateElementPosition(who)] +
    action[generateElementPosition(action)] +
    what[generateElementPosition(what)] +
    when[generateElementPosition(when)];

  let excuse = getElementbyId("excuse");
  excuse.innerHTML = generateExcuse;
};

/*
function generateExcuse() {

    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];
  
   return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}

// Genera la excusa y actualiza el contenido del elemento
const randomExcuse = generateExcuse();
excuseElement.textContent = randomExcuse;

/*
// Función para generar el random de cada array
function random (){
return aleatorio.random();
}
*/
