// let myName="Deepak   "

// console.log(myName.truelength);



let myheros=["thor","spiderman"]

let heropower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all object`);
}

Array.prototype.heyhitesh=function(){
    console.log(`hitesh say hello`);
}

heropower.hitesh()
myheros.hitesh()


//inheritence
const user={
   name:"chai",
   email:"chai@googel.com"
}

const teacher={
    makeVideo:false
}

const Teachersupport={
    isAvailabel:false
}

const Tasupport={
    makeAssingment:"js Aiignment",
    fullTime:true,
    __proto__:Teachersupport
}


teacher.__proto__=user

//Modern Syntax

Object.setPrototypeOf(Teachersupport,teacher)

let anotherUsername="   chiaaurcode         "

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length}`);
    
}

anotherUsername.truelength()
"hitesh".truelength()
"icetea  ".truelength()