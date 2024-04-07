// prime => number which ds only divisible b one or c self

let num = 5;
let count = 0;
for (let i = 1; i <= Number; i++){
    if (num % i == 0) {
        count+=1
    }
}

if (count == 2) {
    console.log("is prime");
}
else {
    console.log("not prime");
}


