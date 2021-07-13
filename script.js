// const getElementById = (id) => document.getElementById(id);

function decreamentNumberOfColors() {
  const valueElement = document.getElementById("numberOfColors");
  let currentNumberOfColors = Number(valueElement.innerText);
  if (currentNumberOfColors > 3)
    valueElement.innerText = currentNumberOfColors - 1;
}

function increamentNumberOfColors() {
  const valueElement = document.getElementById("numberOfColors");
  let currentNumberOfColors = Number(valueElement.innerText);
  if (currentNumberOfColors < 7)
    valueElement.innerText = currentNumberOfColors + 1;
}
