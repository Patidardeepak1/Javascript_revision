const username = [];

if (username) {
  console.log("got user name");
} else {
  console.log("don not get user name");
}

//false values

//false,0,-0,BigInt 0n,null,undefined,NaN

//truthy values
//"0",'false'," ",[],{},function(){}

if (username.length === 0) {
  console.log("Array is empty");
}

const emptyobject = {};
if (Object.keys(emptyobject).length === 0) {
  console.log("object is empty");
}

//false==0  //true
//false==''  //true
//0==''       //true

// Nullish coalescing Operator (??):null undefined

let val1;
val1 = 5 ?? 10;
// val1=null??10
//val1 = undefined ?? 13;
//val1=null??10??12

console.log(val1);

//terniary Operator

const iceprice = 100;
iceprice <= 80 ? console.log("less than 80") : console.log("more than 80");
