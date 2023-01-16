const ulEl = document.querySelector("#categories");
const liElemen = document.querySelector(".item");
const liElemens = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulEl.children.length}`);
for (const item of liElemens) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
}
