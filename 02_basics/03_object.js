//singelton-by using contructor it should be sigleton
//Object.create

//object literals

const mySym=Symbol("key1");

 const jsuser={
    name:"Hitesh",
    "full-name":"deepak Patidar",
    [mySym]:"mykey1",             //syntax for symbol data type
    age:18,
    location:"jaipur",
    email:"deepak@google.com",
    isLoggedIn:false,
    lastlogginDays:["monday","tuesday"]
 }


 console.log(jsuser.email);
 console.log(jsuser["email"]);
 console.log(jsuser["full-name"]);  //for this square bracket is working only
console.log(jsuser[mySym]);

jsuser.email="deepak@microsoft.com"
// Object.freeze(jsuser)

console.log(jsuser["email"]);

jsuser.email="deepak@chatgpt.com"
console.log(jsuser);




jsuser.greeting=function(){
    console.log("hello js user");
}
jsuser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

//mostly we can access by dot operator elements of object









