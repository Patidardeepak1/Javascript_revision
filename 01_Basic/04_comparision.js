/*console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);*/


console.log("2">1);  //true but wrong way
console.log("02">1); //true
 
//wrong way
console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0); //true

//avoid this
console.log(undefined==0); //false
console.log(undefined>0); //false
console.log(undefined>=0); //false


// ===


console.log("2"===2);  //false



