var nameArr = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
var age = [32, 30, 26, 28, 44];

var finalName = [];
for (var i = 0; i < nameArr.length; i++) {
  var obj = {}
  obj.name = nameArr[i];
  obj.age = age[i];
  finalName.push(obj);
}

let newArr = finalName.filter(function (ele) {
  return ele.age > 30
})

console.log(newArr);


