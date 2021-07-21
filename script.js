const getElementById = (id) => document.getElementById(id);
const getColorNumberElement = () => getElementById("numberOfColors");
const getRandomNumber = () => Math.round(Math.random() * 256);

function getRandomColor() {
  const red = getRandomNumber();
  const green = getRandomNumber();
  const blue = getRandomNumber();
  return `rgb(${red}, ${green}, ${blue})`;
}

function getNewColorDiv() {
  const newElement = document.createElement("div");
  newElement.className = "pallete-color";
  newElement.style.backgroundColor = getRandomColor();
  return newElement;
}

class colorsCounter {
  constructor() {
    let totalNumberOfColors = 5;
    this.incrementNumberOfColors = () => {
      if (totalNumberOfColors < 7)
        getColorNumberElement().innerText = ++totalNumberOfColors;
    };
    this.decrementNumberOfColors = () => {
      if (totalNumberOfColors > 3)
        getColorNumberElement().innerText = --totalNumberOfColors;
    };
    this.getNumberOfColors = () => totalNumberOfColors;
  }
}
const colorCounter = new colorsCounter();

function generatePallete() {
  const palleteDiv = getElementById("colorPallete");
  palleteDiv.innerHTML = "";
  palleteDiv.classList.add("has-color-pallete");
  getColorNumberElement().innerText = colorCounter.getNumberOfColors();
  for (let i = 0; i < colorCounter.getNumberOfColors(); i++) {
    const newColorDiv = getNewColorDiv();
    palleteDiv.appendChild(newColorDiv);
  }
}

function changeColor() {
  let collection = document.getElementsByClassName("pallete-color");
  for (let index = 0; index < collection.length; index++) {
    collection[index].style.backgroundColor = getRandomColor();
  }
}
