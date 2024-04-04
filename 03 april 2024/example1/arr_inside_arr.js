
// nested loop

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


sum = 0;
for (let i = 0; i < arr.length; i++){
    sum += arr[i]
    let individuals = arr[i]
    for (let j = 0; j < individuals.length; j++){
        console.log(individuals[i][j]);
    }
}

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// sum = 0;
// for (let i = 0; i < arr.length; i++){
//     sum += arr[i]
//     for (let j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }






// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//       sum += arr[i][j]
//     }
// }

// console.log(sum);