// Print all movies except the third movie.
// var movies = ["bahuballi", "SpiderMan", "IronMan", "SuperMan"];
// for (var i = 0; i < movies.length; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log(movies[i]);
// }


// Print all movies except the third and fifth movies.

var movies = ["bahuballi", "SpiderMan", "IronMan", "SuperMan", "hulk", "thor"];
for (var i = 0; i < movies.length; i++) {
  if (i == 2 || i == 4) {
    continue;
  }
  console.log(movies[i]);
}


