function calculateSum(number) {
  let sum = 0;
  // Fill in the logic here to calculate the sum of all integers from 0 to the given number
    for (let i = 1; i <= number;i++) {
      if (i%2==0) {
          sum += i;
      }
  }
  return sum;
}

// Example usage:
console.log(calculateSum(5); // Output should be 15 (0 + 1 + 2 + 3 + 4 + 5 = 15)
// console.log(calculateSum(10)); // Output should be 55 (0 + 1 + 2 + ... + 9 + 10 = 55)
