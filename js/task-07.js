const rangeFondSize = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
rangeFondSize.addEventListener("input", onRangeFondSize);
function onRangeFondSize(event) {
  spanText.style.fontSize = `${event.target.value}px`;
}
