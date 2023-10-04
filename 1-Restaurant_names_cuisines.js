#!/usr/bin/node

const apiResponses = [/* input the API responses here */];
const regex = /(.+) - (.+)/;

// Process each API response
apiResponses.forEach((text, index) => {
  const match = text.match(regex);

  if (match) {
    const restaurantName = match[1];
    const cuisine = match[2];
    console.log(`API Response ${index + 1}:`);
    console.log('Restaurant Name:', restaurantName);
    console.log('Cuisine:', cuisine);
  } else {
    console.log(`API Response ${index + 1}:`);
    console.log("Oops, let's keep searching");
  }

  console.log('\n'); // Add a line break for clarity
});
