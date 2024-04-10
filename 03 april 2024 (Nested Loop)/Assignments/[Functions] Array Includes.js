let numbersArray = [2, 3, 7, 8, 10.13, 15, 18, 34, 25];

// Task 1: Mapping to Doubles
function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}

// Task 2: Filtering Evens
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Task 3: Summation
function calculateSum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(doubleNumbers(numbersArray));
console.log(filterEvenNumbers(numbersArray));
console.log(calculateSum(numbersArray));
