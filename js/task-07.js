"use strict";
const fontSizer = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = fontSizer.value + "px";
fontSizer.addEventListener("input", (event) => {
  text.style.fontSize = event.target.value + "px";
});
