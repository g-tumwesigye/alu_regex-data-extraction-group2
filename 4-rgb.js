#!/usr/bin/node

const data = "RGB Color: (255, 255, 255)";
const rgb_pattern = /RGB Color: \((\d+), (\d+), (\d+)\)/;
const rgb_match = data.match(rgb_pattern);

if (rgb_match) {
  const [r, g, b] = rgb_match.slice(1);
  console.log(`RGB Color: (${r}, ${g}, ${b})`);
}
