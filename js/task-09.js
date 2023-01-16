function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
changeColor.addEventListener("click", changeColorBnt);
function changeColorBnt() {
  body.style.backgroundColor = spanColor.textContent = getRandomHexColor();
}
