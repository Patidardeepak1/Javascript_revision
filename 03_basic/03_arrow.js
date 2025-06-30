const user={
    username:"deepak",
    price:99,


    welcomeMessage:function(){
console.log(`${this.username},welcome to website`)
console.log(this)
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this) //  output-{}


//function me this keyword work like in object

// function chai(){
//     let username="deepak"
//     console.log(this.username)
// }

// chai()

// const chai = function chai(){
//     let username="deepak"
//     console.log(this.username)
// }
// chai()


const chai = ()=>{
    let username="deepak"
    console.log(this.username)
}
chai()

//basically arrow function
// ()=>{

// }

//explicit return
const addTwo=(num1,num2)=>{
 
    return  num1+num2
}
console.log(addTwo(3,4));



//imlicit return 
const addtwo2=(num1,num2)=> (num1+num2)
console.log(addtwo2(2,3));


const addtwo3=(num1,num2)=> ({username:"patidar"})

console.log(addtwo3(3,4));

// const myArray=[2,3,5,6,58]
// myArray.forEach()