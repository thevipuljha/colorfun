// const getElementById = (id) => document.getElementById(id);

function getNewColorDiv() {
  const newElement = document.createElement("div");
  newElement.className = "pallete-color";
  return newElement;
}

function decreamentNumberOfColors() {
  const valueElement = document.getElementById("numberOfColors");
  const currentNumberOfColors = Number(valueElement.innerText);
  if (currentNumberOfColors > 3)
    valueElement.innerText = currentNumberOfColors - 1;
}

function increamentNumberOfColors() {
  const valueElement = document.getElementById("numberOfColors");
  const currentNumberOfColors = Number(valueElement.innerText);
  if (currentNumberOfColors < 7)
    valueElement.innerText = currentNumberOfColors + 1;
}
function generatePallete() {
  const valueElement = document.getElementById("numberOfColors");
  const currentNumberOfColors = Number(valueElement.innerText);
  const palleteDiv = document.getElementById("colorPallete");
  palleteDiv.innerHTML = "";
  palleteDiv.classList.add("has-color-pallete");
  document.documentElement.style.setProperty(
    "--current-number-of-colors",
    `${currentNumberOfColors}`
  );
  for (let i = 0; i < currentNumberOfColors; i++) {
    palleteDiv.appendChild(getNewColorDiv());
  }
}
