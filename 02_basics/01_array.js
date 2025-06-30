//ARRAY

const myArr = [0, 1, 23, 56, 6, 65];
const myHeros = ["shaktiman", "naagaraj", "spiderman"];
const myArr2 = new Array(1, 2, 3, 5);

console.log(myArr[1]);

//Arrray method

/*
myArr.push(6)
myArr.push(4)
myArr.pop()
console.log(myArr);*/

/*myArr.unshift(9)  //for push number at front of array
myArr.shift()        //for delete
console.log(myArr);*/

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr);

const newArr = myArr.join(); //convert an array to string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice ,splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3); //splice manipulate orignal arrya

console.log("c", myArr);
console.log(myn2);
