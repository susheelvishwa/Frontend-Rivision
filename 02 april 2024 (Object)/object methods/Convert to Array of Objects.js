// var products = ["macbook", "iphone", "ipad"];
// var prices = [500000, 40000, 50000];

// var data = [];
// for (var i = 0; i < products.length; i++) {
//   var obj = {};
//   // obj["name"] = products[i];
//   // obj["price"] = prices[i];
//   obj.name = products[i];
//   obj.price = prices[i];

//   data.push(obj);
// }

// console.log(data);


var nameArr = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
var age = [32, 30, 26, 28, 44];


var finalName = [];
for (var i = 0; i < nameArr.length; i++) {
  var obj = {};

  // usssing bracket notation
  // obj["name"] = nameArr[i];
  // obj["age"] = age[i];

  // ussing dot notation
  obj.name = nameArr[i];
  obj.age = age[i];

  finalName.push(obj);
}

console.log(finalName);


