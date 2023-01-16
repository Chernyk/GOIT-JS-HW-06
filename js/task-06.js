const input = document.querySelector("#validation-input");
input.addEventListener("blur", onInputChange);
function onInputChange(event) {
  const eventLength = event.currentTarget.value.length;
  const dataLength = Number(input.dataset.length);
  input.classList.add("valid");
  input.classList.add("invalid");
  if (eventLength === dataLength) {
    input.classList.replace("invalid", "valid");
  } else {
    input.classList.replace("valid", "invalid");
  }
}
