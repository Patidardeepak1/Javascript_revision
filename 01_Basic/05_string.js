const name= "deepak"

const repocount=50

//console.log(name+repocount+"value");

//wright way and popular
console.log(`hello my name is ${name} and my repo count is ${repocount}`);


const gameName= new String('sandeep-hp')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));


const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-9,4)
console.log(anotherString);

const nweString1= "   deepak   "
console.log(nweString1);
console.log(nweString1.trim());



const url="https://hitesh.com/hitesh%20patidar"
console.log(url.replace('%20','-'));


console.log(url.includes("deepak"))

console.log(gameName.split('-'));


