function prime(num) {
    bag = 0;
    for (let i = 0; i <= num; i++){
        if (num % i === 0) {
            bag += 1
            console.log(i);
        }
    }
}

prime(17)