//if

/*
if(condition){

}
*/

const temp=47
if(temp===40){                //=== it will check data types also
    console.log("executed");

}
else{
    console.log("not executed");
}
// <  ,> , <=, >= , == , !=, === , !==

const score=200;
if (score>100){
    const power="fly"
    console.log(`user power:${power}`);
}


// console.log(`user power:${power}`);  //eroor outof scope

const balance=1000
//bad practice
// if(balance>500) console.log("test"),console.log("test2");;


if(balance<500){
    console.log("less than 500");
}
else if(balance<750){
console.log("less than 750");
}
else if(balance<900){

    console.log("less thamn 900");
}
else{
    console.log("less than 1200");
}

const userLOggedIn=true
const debitcard =true
const loggedInfrom=true
const loggedInFromEmail=true
if(userLOggedIn && debitcard && 2==2){
    console.log("Allow to buy");
}
if(loggedInFromEmail||userLOggedIn){
    console.log("user logged in");
}


