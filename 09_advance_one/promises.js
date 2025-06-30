// fetch("https//something.com").then().catch().finally()

const promiseOne = new Promise(function (resolve, rejection) {
  //Do an async task
  //DB calls crptygraphy,network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  });
});

promiseOne.then(function () {
  console.log("promise cosnumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promisThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@exampel.com" });
  }, 1000);
});

promisThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "hitesh", pssword: "123" });
    } else {
      reject("Error:something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promisFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "java", pssword: "123" });
    } else {
      reject("Error:js went wrong");
    }
  }, 1000);
});

async function consumepromiseFive() {
  try {
    const response = await promisFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumepromiseFive();

async function getAllUser() {
  try {
    const response = await fetch(
      "https://api.github.com/users/hiteshchoudhary"
    );
    // console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: error");
  }
}
getAllUser();

// fetch("https://api.github.com/users/hiteshchoudhary")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(data);
//   });
