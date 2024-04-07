function check_prime_or_not(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count += 1;
    }
  }

  if (count == 2) {
    console.log("Prime");
  } else {
    console.log("Not Prime");
  }
}

check_prime_or_not(7);
