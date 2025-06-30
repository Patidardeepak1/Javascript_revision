const buttons=document.querySelectorAll(".button");

const bg=document.querySelector("body");

buttons.forEach(function(button) {
  button.addEventListener("click",function(e){
    bg.style.backgroundColor=e.target.id;
  })
});