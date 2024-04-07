// First Way
// Print the first 3 items in the array using a loop

// var movies = ["bahuballi", "SpiderMan", "IronMan", "SuperMan"];
// for(var i = 1; i<=3; i++)
// {
// console.log(movies[i]);
// }



// Second Way [ Using Break ]
var movies = ["bahuballi", "SpiderMan", "IronMan", "SuperMan"];
for (var i = 0; i < movies.length; i++) {
  if (i == 3) {
    break;
  }
  console.log(movies[i]);
}
