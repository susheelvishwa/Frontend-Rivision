// inbuild function

// what is slice
// helping to cut the arr


// reverse arr

// let arr = [1, 2, 3, 4, 5]
// arr.reverse()
// console.log(arr);


// WITHOUT REVERSE

let arr = [1, 2, 3, 4, 5, 56]


function arrjoin(arr, joiningele) {
  let bag = "";
  for (let i = 0; i < arr.length; i++) {
    bag = bag + arr[i] + joiningele;
  }
  return bag;
}

let ans = arrjoin(arr, "_")
console.log(ans);



