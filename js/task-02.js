const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const elements = ingredients.map((element) => {
  const itemList = document.createElement("li");
  itemList.textContent = `${element}`;
  itemList.classList.add("item");
  return itemList;
});
ingredientsList.append(...elements);
