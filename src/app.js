/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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

  var excuse =
    who[Math.floor(Math.random() * 4)] +
    " " +
    action[Math.floor(Math.random() * 4)] +
    " " +
    what[Math.floor(Math.random() * 3)] +
    " " +
    when[Math.floor(Math.random() * 5)];

  return excuse;
}

window.onload = function() {
  console.log("Hello Rigo from the console!");
  const p = document.querySelector("#excuse");
  p.innerText = excuseGenerator();
};
