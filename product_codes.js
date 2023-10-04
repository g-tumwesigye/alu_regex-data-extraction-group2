const productCodeRegex = /([A-Z]{3}\d{3})/;
const apiResponse5 = "Product Code: XYZ789";
const match5 = apiResponse5.match(productCodeRegex);
if (match5) {
  const productCode = match5[1];
  console.log(`Product Code: ${productCode}`);
}
