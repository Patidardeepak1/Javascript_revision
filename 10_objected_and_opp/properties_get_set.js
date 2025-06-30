function user(email,password){
    this._email=email
    this._password=password

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email
        },
        set:function(value){
          this._email=value   
        }
    })
    Object.defineProperty(this,'epassword',{
        get:function(){
            return this._password
        },
        set:function(value){
          this._password=value   
        }
    })
}

const hitesh=new user("dds@gmail.com","abc")
console.log(hitesh.password);
console.log(hitesh.email);