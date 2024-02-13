const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector(".button");
const buttonHex = document.querySelector(".buttonHex");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  console.log(colors[randomNumber]);
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

buttonHex.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumberHex()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  console.log(hexColor);
});

function getRandomNumberHex() {
  return Math.floor(Math.random() * hex.length);
}
