const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("countLike1")

function clickLike1(){
  let totalLikes = parseInt(countLike1.value) + 1
  countLike1.textContent = totalLikes.toString()
}
btnLike1.addEventListener("click",clickLike1)

function clickLike2(){
  let totalLikes = parseInt(countLike2.value) + 1
  countLike2.textContent = totalLikes.toString()
}
btnLike2.addEventListener("click",clickLike2)

function clickLdisike1(){
  let totaldisLikes = parseInt(countdisLike1.value) + 1
  countdisLike1.textContent = totaldisLikes.toString()
}
btndisLike1.addEventListener("click",clickdisLike1)

function clickLdisike2(){
  let totaldisLikes = parseInt(countdisLike2.value) + 1
  countdisLike2.textContent = totaldisLikes.toString()
}
btndisLike2.addEventListener("click",clickdisLike2)
const btnDisLike1 = document.getElementById("btnDisLike1")
const countDisLike1 = document.getElementById("countDisLike1")

function clickDisLike1(){
  let totalDisLikes = parseInt(countDisLike1.value) + 1
  countDisLike1.textContent = totalDisLikes.toString()
}  
btnDisLike1.addEventListener("click",clickDisLike1)

const btnDisLike2 = document.getElementById("btnDisLike2")
const countDisLike2 = document.getElementById("countDisLike2")

function clickDisLike2(){
  let totalDisLikes = parseInt(countDisLike2.value) + 1
  countDisLike2.textContent = totalDisLikes.toString()
}  
btnDisLike2.addEventListener("click",clickDisLike2)

const submit = document.getElementById("submit")

const comment = document.getElementById("comment")

const commentbox = document.getElementById("commentbox")

function submitComment(){

commentbox.textContent += comment.value.toString() + "\n"
  comment.value=""

}

submit.addEventListener("click", submitComment)
