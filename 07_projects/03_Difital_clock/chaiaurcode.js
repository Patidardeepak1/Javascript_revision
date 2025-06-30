
setInterval(() => {
    const date=new Date()
    document.querySelector("#clock").innerHTML=date.toLocaleTimeString()
    document.querySelector("#clock1").innerHTML=date.toLocaleDateString()
}, 1000);
