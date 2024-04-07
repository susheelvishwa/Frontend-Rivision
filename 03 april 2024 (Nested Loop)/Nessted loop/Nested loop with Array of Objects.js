// Print the name and price of each products in the give array
// var products = [
//   { name: "Product 1", price: 10 },
//   { name: "Product 2", price: 20 },
//   { name: "Product 3", price: 30 },
// ];
// for (var i = 0; i < products.length; i++) {
//   console.log("Product Name:", products[i].name);
//   console.log("Price:", products[i].price);
// }



// Finding Products with Price Less Than 20 in the given array
var products = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
  { name: "Product 3", price: 30 },
];
console.log("Products with price less than 20:");
for (var i = 0; i < products.length; i++) {
  if (products[i].price < 20) {
    console.log(products[i].name);
  }
}


// Create an array of objects representing products with name and price , Use nested loops to filter and print products with prices between 15 and 25.


var products = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
  { name: "Product 3", price: 30 },
];

console.log("Products with price between 15 and 25:");
for (var i = 0; i < products.length; i++) {
  if (products[i].price >= 15 && products[i].price <= 25) {
    console.log(products[i].name);
  }
}


