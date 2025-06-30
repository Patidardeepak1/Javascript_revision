
//for in loop
const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apppel"
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`); 
}

const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
   console.log(programming[key]);
}



//not working in map for in loop
// const map2=new Map()
// map2.set("In","India")
// map2.set("Usa","America")
// map2.set("Aus","Austrialia")
// map2.set("Fr","france")
// map2.set("In","India")
// for (const key in map2) {
//    console.log(key)
// }