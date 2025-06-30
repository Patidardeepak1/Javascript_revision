let randomNumber=parseInt(Math.random()*100+1);


const submit=document.querySelector("#subt")
const userInput=document.querySelector("#guessField")
const guessSlot=document.querySelector(".guesses")
const remaning=document.querySelector(".lastResult")
const loworHi=document.querySelector(".lowOrHi")
const startOver=document.querySelector(".resultParas")

const p=document.createElement('p')


let prevGuess=[]
let numGuess=1;

let playGame=true

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
       const guess= parseInt(userInput.value)
       validateGuess(guess)
    })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("please a valid num")
  }
  else if(guess<-1){
    alert("please enter valid num greter than 1")
  }
  else if(guess>100){
    alert("please enter valid num less than 100")
  }
  else{
      prevGuess.push(guess)
      if(numGuess===11){
        diplayGuess(guess)
        displayMessage(`game Over.Random Number was ${randomNumber}`)
        endGame()
      }
      else{
        diplayGuess(guess)
        checkGuess(guess)

      }
  }
}
function displayMessage(message){
    // console.log("hii");
    loworHi.innerHTML=`<h3> ${message}  </h3>`;
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage("you guesses right")
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage("Number is tooo low")
    }
    else if(guess>randomNumber){
        displayMessage("Number is too high")
    }
}



function diplayGuess(guess){
    userInput.value="";
    guessSlot.innerHTML+=`${guess} `;
    numGuess++;
    remaning.innerHTML=`${11-numGuess}`
}

function endGame(){
    userInput.value=""
    userInput.setAttribute('disabled','')
    p.classList.add("button")
    p.innerHTML=`<h2 id="newgame">start new game</h2>`
    startOver.appendChild(p)
    playGame=false
    newgame()
}


function newgame(){
const newGameBtn=document.querySelector('#newgame')
newGameBtn.addEventListener("click",function(e){
    randomNumber=parseInt(Math.random()*100+1);
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaning.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true

})
}


