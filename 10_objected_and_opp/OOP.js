
//object literal
const user={
username:"deepak",
loginoCount:"563",
signed:true,
getuserDetails:function(){
    //console.log("got detials from dtata base");
    //console.log(`username:${this.username}`);
   // console.log(this);
}

}


console.log(user.username);
//console.log(user.getuserDetails());
console.log(this);

//contructor
// const promiseeOne = new Promise()
// const date=new Date()

function User(username,loginCount,isLoggedIn){
        this.username=username
        this.loginCount=loginCount
        this.isLoggedIn=isLoggedIn
        this.grreeting=function(){
            console.log(`Welcome ${this.username}`);
        }
    return this  //no need
}
const userOne= new User("hitesh",12,true)
const userTwo= new User("chai",11,false)

console.log(userOne.contructor);
console.log(userTwo);


//new -isss se naya object created
//contructor  function call
//all keyoword injected
