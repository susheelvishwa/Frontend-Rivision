function isPrime(num) {
  var count = 0;
  for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }

  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

var limit = 100;

for (var i = 2; i <= limit; i++) {
  var result = isPrime(i);
  if (result != true) {
    console.log(i, "is non prime");
  }
}
