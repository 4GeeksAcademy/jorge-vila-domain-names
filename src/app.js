/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domine = [".com", ".org", ".es", ".net"];
// declaro variable la cual voy a almacenar el texto a enviar
let listMap = "";

pronoun.map(itemPronoun => {
  adj.map(itemAdj => {
    noun.map(itemNoun => {
      domine.map(itemDomine => {
        listMap += ` 
      <li class="list-group-item">
      ${itemPronoun}${itemAdj}${itemNoun}${itemDomine}
      </li>
      `;
      });
    });
  });
});

document.querySelector("#map").innerHTML = listMap;
