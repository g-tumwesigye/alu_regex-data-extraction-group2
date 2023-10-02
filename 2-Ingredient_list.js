#!/usr/bin/node

const ingredients = "Ingredient1, Ingredient2, Ingredient3";
const regex = /([^,]+(?:,\s*[^,]+)*)/g;
let matches;
const extractedIngredients = [];

while ((matches = regex.exec(ingredients)) !== null) {
  extractedIngredients.push(matches[1].trim());
}

if (extractedIngredients.length > 0) {
  console.log("Ingredients:", extractedIngredients);
} else {
  console.log("No ingredients found.");
}
