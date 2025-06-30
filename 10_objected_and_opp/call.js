function SetUsername(username){
    //complex DB
    this.username=username

}

function createUser(username,email,password){
 
    SetUsername.call(this,username)

    this.email=email
    this.password=password
}

const chai=new createUser("chai","dsfj@goole.com","123")
console.log(chai);