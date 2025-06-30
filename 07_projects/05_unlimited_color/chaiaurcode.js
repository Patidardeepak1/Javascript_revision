// generate randomm color


const randomColor=function(){
   const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
color+=hex[Math.floor(Math.random()*16)]
    }
return color;
}


let interValid;
// console.log(interValid);
const startChangingColor=function(){
    if(!interValid){
        interValid=  setInterval(changeBgcolor,1000)
    }
  
    function changeBgcolor(){
     document.body.style.backgroundColor=randomColor()
    }
}
const stopChangincolor=function(){
clearInterval(interValid);
// interValid=null;
}

document.querySelector("#start").addEventListener("click",startChangingColor);
document.querySelector("#stop").addEventListener("click",stopChangincolor)