const btnLike1 = document.getElementById("btnLike1")
const countLike = document.getElementById("countLike1")

function clickLike1(){
  let totalLikes = parseInt(countLike1.value) + 1
  countLike1.textContent = totalLiked.toString()
}
btnLike1.addEventListener("click",clickLike1)
