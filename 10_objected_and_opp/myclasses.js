//ES6
/*
class User {
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeuserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai=new User("chai","chsi@goole.com","465")
console.log(chai.encryptPassword());
console.log(chai.changeuserName());*/

//behind the scene


function User(username,email,password){
    this.username=username;
    this.email=email
    this.password=password
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

User.prototype.changeuserName=function(){
    return `${this.username.toUpperCase()}`
}

const tea=new User("tea","tea@gmail,com","456")

console.log(tea.encryptPassword());
console.log(tea.changeuserName());

