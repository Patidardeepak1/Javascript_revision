//for of

//["", "", ""]
//[{},{},{}]


const arr=[1,2,3,5,6]
for (const num of arr) {
   // console.log(num);
}

const greeting="Hello World"

for (const greet of greeting) {
   // console.log(`each char is ${greet}`);
}



//Maps
const map=new Map()
map.set("In","India")
map.set("Usa","America")
map.set("Aus","Austrialia")
map.set("Fr","france")
map.set("In","India")

console.log(map);


for (const [key,value] of map) {
   // console.log(key,"-",value);
}

const myobject={
    "game1":"NSF",
    "game2":"spiderammn"
}


//not working on object
// for (const [key,value] of myobject) {
//     console.log(key,"-",value);
// }



