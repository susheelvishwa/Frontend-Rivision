// The output of one function can be used as input for other.
// The result of sum is acting as input for square function


function add(a, b) {
  var sum = a + b;
  return sum;
}

function square(x) {
  var y = x * x;
  return y;
}

var a = 5;
var b = 15;

var sum = add(a, b);
var sqr = square(sum);
console.log(sqr);
