/* eslint-disable */
import "bootstrap";
import "./style.css";

//write your code here
window.onload = function() {
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};

function excuseGenerator() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomWho = getRandomElement(who);
  let randomAction = getRandomElement(action);
  let randomWhat = getRandomElement(what);
  let randomWhen = getRandomElement(when);

  return (
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen]
  );
}

function getRandomElement(ArrayCalcular) {
  return Math.floor(Math.random() * ArrayCalcular.length);
}
