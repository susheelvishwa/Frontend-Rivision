// console.log(typeof [1,2,3,4]);

let arr = [1, 2, 3, 4, 5]
localStorage.setItem("array", JSON.stringify(arr))
let value = JSON.parse(localStorage.getItem("array"))

console.log(typeof arr);