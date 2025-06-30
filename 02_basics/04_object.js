// const tinderUser=new Object() //singleton
const  tinderUser={}


tinderUser.id="1234"
tinderUser.name="sandeep"
tinderUser.isLoggedIn=false

console.log(tinderUser);

//nested object
const  regularUser={
    email:"some@gmail.com",
    fullname:{
    userfullname:{
        firstname:"deepak",
        lastname:"patidar"
    }
}
}


console.log(regularUser.fullname.userfullname.firstname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj4={
    5:"e",
    6:"w"
}

/*
const obj3={
    obj1,obj2
}
console.log(obj3);
*/


/*

const obj3=Object.assign({},obj1,obj2,obj4)
console.log(obj3);
*/

const  obj3={...obj1,...obj2}
console.log(obj3);


 const users=[
    {
      email:"sahdudhb",
      name:"deepam"
    },
    {
        email:"sahdub",
        name:"dee\am"
    },
    {
        email:"sahdhb",
        name:"deam"
    }
 ]

 users[1].email


 console.log(tinderUser)
 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 //destructuer object

 const course={
    coursename:"js in hidi",
    price:"236",
    courseInstructpor:"hitesh"
 }

 //course.courseinstructor


 const {courseInstructpor:instructor} = course

//  console.log(courseInstructpor);
 console.log(instructor);



 /*const navbar =({})=>{

 }
navbar(company="hitesh")  */


/*
//josan
{
    "name":"deepak",
    "coursename":"js in english",
    "price":"565"

}

[
    {

    },
    {

    }
    
]

*/

 


