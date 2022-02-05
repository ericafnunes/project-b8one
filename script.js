const colorGray = document.getElementById("color_gray");
const colorPink = document.getElementById("color_pink");
const colorSpaceGray = document.getElementById("color_dark-gray");

function handleColorGray() {
  const imageProduct = document.querySelector(".product");
  const resultColor = document.getElementById("result_color");
  resultColor.innerHTML = "Silver";
 
}

function handleColorPink() {
  const resultColor = document.getElementById("result_color");
  resultColor.innerText = "Pink";
}

function handleColorSpaceGray() {
  const imageProduct = document.querySelector("product");
  const resultColor = document.getElementById("result_color");
  resultColor.innerText = "Space Gray";
}

numero = 0;

function decrementar() {
  numero--;
  setValue(numero);
}

function incrementar() {
  numero++;
  setValue(numero);
}

function setValue(value) {
  document.getElementById("number").value = value;
}

setValue(numero);
