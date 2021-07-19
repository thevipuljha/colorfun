const getElementById = (id) => document.getElementById(id);
const getColorNumberElement = () => getElementById("numberOfColors");
const getNumberOfColors = () => Number(getColorNumberElement().innerText);
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
  return newElement;
}

function decreamentNumberOfColors() {
  if (getNumberOfColors() > 3)
    getColorNumberElement().innerText = getNumberOfColors() - 1;
}

function increamentNumberOfColors() {
  if (getNumberOfColors() < 7)
    getColorNumberElement().innerText = getNumberOfColors() + 1;
}

function generatePallete() {
  // dom -> document object model
  document.getElementById;
  const palleteDiv = getElementById("colorPallete");
  palleteDiv.innerHTML = "";
  palleteDiv.classList.add("has-color-pallete");
  for (let i = 0; i < getNumberOfColors(); i++) {
    const newColorDiv = getNewColorDiv();
    newColorDiv.style.backgroundColor = getRandomColor();
    palleteDiv.appendChild(newColorDiv);
  }
}

function changeColor() {
  let collection = document.getElementsByClassName("pallete-color");
  for (let index = 0; index < collection.length; index++) {
    collection[index].style.backgroundColor = getRandomColor();
  }
}
