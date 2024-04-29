// Local storage

localStorage.setItem("name", "Susheel")

let value = localStorage.getItem("name")
// console.log(value);
// console.log(typeof value);

// -----------------------------------------------

let arr = [1, 2, 3, 4, 5]
localStorage.setItem("arr", arr)

let value2 = localStorage.getItem("arr")
// console.log(value2);
// console.log(typeof value2);

// it is also a string

// ---------------------------------------------------

localStorage.setItem("obj", { a: 1, b: 2 })
let value4 = localStorage.getItem("obj")
console.log(typeof value4);

localStorage.removeItem("arr") 
// localStorage.clear()

// -----------------------------------------------------