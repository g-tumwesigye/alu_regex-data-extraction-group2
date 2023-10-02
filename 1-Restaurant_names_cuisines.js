#!/usr/bin/node
const text = "Restaurant Name - Cuisine";
const regex = /(.+) - (.+)/;
const match = text.match(regex);
if (match) {
  const restaurantName = match[1];
  const cuisine = match[2];
  console.log("Restaurant Name:", restaurantName);
  console.log("Cuisine:", cuisine);
}

