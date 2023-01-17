const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", onInputChange);
function onInputChange(event) {
  if (refs.nameLabel.textContent.trim() === "") {
    return (refs.nameLabel.textContent = "Anonymous");
  }
  refs.nameLabel.textContent = event.currentTarget.value.trim();
}
