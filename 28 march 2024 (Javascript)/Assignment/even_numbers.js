// Find the sum of all even numbers greater than zero, and less than or e
// qual to the value stored in num


function evenNumber(num) {
    let count = 0;
    for (let i = 1; i <= num; i++){
        if (i % 2 == 0) {
            count += i
        }
    }
    console.log(count);
}

evenNumber(5)