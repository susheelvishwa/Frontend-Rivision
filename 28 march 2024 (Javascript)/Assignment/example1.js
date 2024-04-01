function sumOfMultiple(n, k, y) {
  let arr = [];
  let sum = 0;
  for (let i = n; i <= n * k; i += n) {
    if (i % y === 0) {
      arr.push(i);
      sum += i;
    }
  }
  console.log(sum);
}
sumOfMultiple(3, 10, 5);
