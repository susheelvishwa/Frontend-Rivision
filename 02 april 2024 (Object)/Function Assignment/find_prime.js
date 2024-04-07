function check_prime_or_not(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count += 1;
    }
  }
  if (count == 2) {
    console.log(num);
  }
}

function up_to(limit) {
  for (let i = 2; i <= limit; i++) {
    check_prime_or_not(i);
  }
}
up_to(10);
