class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME: is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }

}

const chai=new teacher("chai","chai@google.com","1223")
chai.addCourse()
chai.logMe()
const masalaChai=new user("masalachai")
masalaChai.logMe()

console.log(chai instanceof teacher);


