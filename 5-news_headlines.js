const headlineRegex = /Headline: (.+?) - (.+)/;
const apiResponse6 = "Headline: Breaking News - Major Event";
const match6 = apiResponse6.match(headlineRegex);
if (match6) {
  const headline = match6[1];
  const subheader = match6[2];
  console.log(`Headline: ${headline}`);
  console.log(`Subheader: ${subheader}`);
}
