function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controls = document.querySelector("#controls");
const input = controls.children[0];
const creatBtn = controls.children[1];
const desstroyBtn = controls.children[2];
creatBtn.addEventListener("click", creatBoxes);
input.addEventListener("input", onInput);

function onInput(event) {
  input.textContent = event.currentTarget.value;
}

function creatBoxes() {
  const elements = [];
  let width = 0;
  let height = 0;

  for (let index = 1; index <= input.textContent; index++) {
    const div = document.createElement("div");
    elements.push(div);
    div.style.backgroundColor = getRandomHexColor();

    if (index === 1) {
      width = 30;
      height = 30;
      div.style.width = `${width}px`;
      div.style.height = `${height}px`;
    }
    width += 10;
    height += 10;
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
  }
  boxes.append(...elements);
}

desstroyBtn.addEventListener("click", clean);

function clean() {
  boxes.innerHTML = "";
}
