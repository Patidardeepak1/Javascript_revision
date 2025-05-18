//Primitive

// 7 types: string ,number ,Boolean,null,undefined,,Symbol,BigInt
//number
const score=100  
const scoreValue=100.3


//boolean
const isLoggedIn=false;


//null
const outsideTemp =null;

//undefined
let userEmail;

//symbol -uniquness
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);  //false 


//BigInt

const bigNumber=65546164692324n












//refernce (non primitive)

// Array ,Objects,Functions

const heros=["shaktiman","naagraj","doga"];


let myObj={
    name:"deepak",
    age:22
}


const myFunction=function(){
    console.log("Helelo deepak")
}


console.log(typeof bigNumber);


//++++++++++++++++++++++++++++++++++++++++++++++


// stack (primitive ),  Heap (non-primitive)


//stack-pass by value
let myYotubename="Deepak"

let anothername=myYotubename
anothername="chaiorcode"

console.log(myYotubename);
console.log(anothername);



//heap-pass by reference
let userOne={
  email:"user@googel.com",
  upi:"user@ybl"
}

let userTwo=userOne


userTwo.email="deepak@google.com"
console.log(userOne.email);
console.log(userTwo.email);




