
//Dates

let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate=new Date(2023,0,23)
// console.log(myCreatedDate.toLocaleString());


let myCreatedDate=new Date("02-11-2023")
console.log(myCreatedDate.toLocaleString());

//Time

let myTimeStamp=Date.now();  

console.log(myTimeStamp);//msec
console.log(myCreatedDate.getTime());//milisecond output
console.log(Math.floor(Date.now()/1000));//in seconds


let newDate=  new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
})











