const myNumbers=[1,2,3,4,65,6,7,9]


//const newNums=myNumbers.map((num)=>{return num+10})




const newNums=myNumbers
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=40)
console.log(newNums);


