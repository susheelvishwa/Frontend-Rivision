function mimimuminarr(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min
}

let arr = [3, 2, 5, 0, 3]
console.log(mimimuminarr(arr));