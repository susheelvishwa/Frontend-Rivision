// Problem 4: Write a function to check if the char is a small case or not

function isSmallCase(x) {
  var lower = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < lower.length; i++) {
    if (x == lower[i]) {
      return true;
    }
  }

  return false;
}

var result = isSmallCase("C");
console.log(result);
