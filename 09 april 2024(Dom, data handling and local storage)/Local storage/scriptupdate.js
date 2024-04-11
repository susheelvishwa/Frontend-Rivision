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


