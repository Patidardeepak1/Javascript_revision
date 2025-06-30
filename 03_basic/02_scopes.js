//var c=30
let a=45

if(true){
    let a=10;
    const b=14;
   console.log(a);

}
console.log(a);
// console.log(b);
// console.log(c);






function one(){
    const username="deepak"

    function two(){
        const website ="youtube"
        console.log(username);
    }
   // console.log(website);
    two()
}

one()

if(true){
    const username="patidar"
    if(username==="patidar"){
        const website=" youtube"
        console.log(username + website);
    }
   //error: console.log(website);
}

//++++++++++++++++++Intersting+++++++++++++++

console.log(addone(5));   //no error
function addone(num){
    return num+1
}
addone(5)
// console.log(addtwo(5));  // error
const addtwo=function(num){
return num+2
}
addtwo(5)
console.log(addtwo(5)); 








