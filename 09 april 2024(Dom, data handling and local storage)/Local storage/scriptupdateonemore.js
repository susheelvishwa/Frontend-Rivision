document.getElementById("likeBtn").addEventListener("click", likeFun);
//instead of initial value as 0, we should get item from LS
var likeCount = localStorage.getItem("dogLike");
document.querySelector("#likes").innerText = likeCount;
var likeCount;
if (localStorage.getItem("dogLike") == null) {
  likeCount = 0;
} else {
  likeCount = localStorage.getItem("dogLike");
}

//instead of initial value as 0, we should get item from LS
var dislikeCount = localStorage.getItem("dogDislike");

document.querySelector("#dislikes").innerText = dislikeCount;
function likeFun() {
  likeCount++;
  document.querySelector("#likes").innerText = likeCount;

  //added line
  localStorage.setItem("dogLike", likeCount);
}

document.getElementById("dislikeBtn").addEventListener("click", dislikeFun);
function dislikeFun() {
  dislikeCount++;
  document.querySelector("#dislikes").innerText = dislikeCount;

  //added line
  localStorage.setItem("dogDislike", dislikeCount);
}

