const input = document.querySelector("#validation-input");
input.addEventListener("blur", onInputChange);
function onInputChange(event) {
  const eventLength = event.currentTarget.value.length;
  const dataLength = Number(input.dataset.length);
  input.classList.remove("valid");
  input.classList.remove("invalid");
  if (eventLength === dataLength) {
    input.classList.add("valid");
    return;
  }
  input.classList.add("invalid");
}
