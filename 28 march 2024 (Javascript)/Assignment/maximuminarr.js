function maximuminarr(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}


let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(maximuminarr(arr));
