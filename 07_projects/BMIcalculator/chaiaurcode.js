


document.querySelector("form").addEventListener("submit",function(e){
 e.preventDefault()
 const height=parseInt(document.getElementById("height").value)
 const weight=parseInt(document.getElementById("weight").value)
 const result=document.querySelector("#results")
 const analysis=document.querySelector("#analysis")

 if(height<0||height===''||isNaN(height)){
result.innerHTML=`please enter walid height`
 }
 else if(weight<0||weight===''||isNaN(weight)){
    result.innerHTML=`please enter walid height`
 }
 else{
    const bmi=(weight*10000)/(height*height);
    result.innerHTML=`<span> Bmi is:${bmi}</span>`;
   if(bmi<18.6){
      analysis.innerHTML="underweigth"
   }
   else if(bmi>18.6&& bmi<24.9){
    analysis.innerHTML="Normal range"
   }
   else if(bmi>24.9){
    analysis.innerHTML="overweight"
   }
 }
   
   

})
