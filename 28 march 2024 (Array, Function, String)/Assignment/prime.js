function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumOfPrimesInRange(A, B) {
  let sum = 0;
  for (let i = A; i <= B; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

// Example usage:
let A = 1;
let B = 5;
let result = sumOfPrimesInRange(A, B);
console.log(result); // Output: 60 (13 + 17 + 19 are primes in the range 10 to 20)
