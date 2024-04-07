var numbers = [2,3,4,6,7,8,9,10];
var evenCount = 0;
var oddCount = 0;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Even Count:", evenCount); 
console.log("Odd Count:", oddCount);