"use strict";

const refs = {
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  newBox: document.querySelector("#boxes"),
  input: document.querySelector("#controls input"),
};

refs.newBox.style.marginTop = "10px";
refs.newBox.style.display = "flex";
refs.newBox.style.flexDirection = "column";
refs.newBox.style.rowGap = "8px";

refs.buttonCreate.addEventListener("click", () => {
  destroyBoxes();
  createBoxes(refs.input.value);
});

refs.buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const galleryItem = document.createElement("div");
    const sizeParam = 30 + i * 10 + "px";
    galleryItem.style.height = sizeParam;
    galleryItem.style.width = sizeParam;
    galleryItem.style.backgroundColor = getRandomHexColor();
    galleryItem.style.border = "1px solid #000";
    boxes.push(galleryItem);
  }
  refs.newBox.append(...boxes);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  refs.newBox.innerHTML = "";
}
