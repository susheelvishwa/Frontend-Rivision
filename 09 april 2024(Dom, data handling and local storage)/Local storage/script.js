document.getElementById("likeBtn").addEventListener("click", likeFun);
var likeCount = 0;
document.querySelector("#likes").innerText = likeCount; // initial count

var dislikeCount = 0;
document.querySelector("#dislikes").innerText = dislikeCount; // initial count

function likeFun() {
  likeCount++;
  document.querySelector("#likes").innerText = likeCount;
}

document.getElementById("dislikeBtn").addEventListener("click", dislikeFun);

function dislikeFun() {
  dislikeCount++;
  document.querySelector("#dislikes").innerText = dislikeCount;
}
