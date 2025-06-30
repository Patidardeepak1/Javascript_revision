const coding=["js","ruby","java","python","cpp"]


coding.forEach( function (item){
//console.log(item);
})

//callback fuction me uska name nhi hota 

coding.forEach((item)=>{
//console.log(item);
})

function printMe(item)
{
   // console.log(item);
}

coding.forEach(printMe)


coding.forEach((item,index,arr)=>
{
console.log(item,index,arr);
})


const mycoding=[{
    language:"js0",
    languagename:"jave"
},{
    language:"js0",
    languagename:"c++"
},{
    language:"js0",
    languagename:"jp++"
}]


mycoding.forEach((item)=>{

console.log(item.languagename);
})












