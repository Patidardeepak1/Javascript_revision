function SayName() {
  console.log("h");
  console.log("i");
  console.log("t");
  console.log("e");
  console.log("s");
  console.log("h");
}

SayName();

function addTwoNum(num1, num2) {
  //parameter

  console.log(num1 + num2);
}

function addTwoNum(num1, num2) {
  //parameter
  //  let result=num1+num2
  //  return result;
  return num1 + num2;
}

const result = addTwoNum(3, 5); //arguments

console.log("Resullt:", result);

function loginuserMessage(username) {
  //username="sam"  default value no work of if statement
  if (username === undefined) {
    //if(!username)
    console.log("please enetr a username");
    return;
  }
  return `${username} just loggged in`;
}

console.log(loginuserMessage("hitesh"));
console.log(loginuserMessage());

function calculatecartPrice(...num1) {
  //...  rest operator
  return num1;
}

console.log(calculatecartPrice(200, 100, 456, 123, 456));

const user = {
  username: "hitesh",
  price: 166,
};

function handelobject(anyobject) {
  console.log(
    `Useranme is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handelobject(user);
handelobject({
  username: "sam",
  price: 122,
});

const myNewArray = [123, 100, 200, 333];

function returnSecondValue(getArray) {
  return getArray[0];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 233, 55, 62, 56]));
