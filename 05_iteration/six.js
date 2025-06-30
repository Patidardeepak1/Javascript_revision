const coding=["js","ruby","java","python","cpp"]

const values=coding.forEach((item)=>{
    console.log(item);
    return  item
})

console.log(values);


const myNums=[1,12,3,5,6,9,479,89]
//const newNums=myNums.filter((num)=>num>4)  //without scope
// const newNums=myNums.filter((num)=>{
//     return num>4                         //with scope return needed
// })
const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);

//basics of filter by book exampel







