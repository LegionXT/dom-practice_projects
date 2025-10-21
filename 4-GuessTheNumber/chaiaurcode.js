//first we are going to generate a random no.---
let random = (parseInt(Math.random() * 100 + 1))

//now we need to take multiple values ---
const submit = document.querySelector('#subt')

//now we need to take the user input ---
const userInput= document.querySelector('#guessField')

//now we need to have the previous guesses ---
const guesslot= document.querySelector('.guesses')

//store the remaining guesses ---
const guessRem=document.querySelector('.lastResult')

const LowHigh= document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

//some values we also insert ---
const p = document.createElement('p')

let prevguess = [] //an array in which the values ,given by the user, will get saved and means that value should not be entered again . 

let numguess = 1  //it gives us that how many attempts the user have done , start from 1 and when it reaches 10, submitguess button will get disabled.

let playgame = true 

//first check whether you are available to play the game ot not --

if(playgame){
  submit.addEventListener('click',function(e){
       //since it is the form, so value can go anywhere, hence use :
       e.preventDefault()

       //now we take userInput in form of values -
       const guess = (parseInt(userInput.value))
      // console.log(ip)
       //now pass it to next ,i.e, 
       validateGame(guess)
  })
}

//Functions ---
function validateGame(guess){
  //it shows that whether it has choosen a valid no. or not ,i.e, it shoudl not be any string, any no. < 1 , value is btw 1-10 or not ,etc.

  if(isNaN(guess)){  //
    alert("Please enter  a valid no.")
  }
  else if(guess < 1){
    alert("Please enter no. that is more than 1")
  }
  else if(guess > 100){
    alert("Please enter no. that is less than 100")
  }
  else{
    prevguess.push(guess) //guess pushed into the array
    if(numguess === 11){
     displayguess(guess)
     dispalymsz(`Game is over.Random no.was ${random}`)
     endgame()
    }
    else{
      displayguess(guess)
      //check whether your guess was right or wrong.
      checkGuess(guess)
    }
  }

}

function checkGuess(guess){
  //value given by the user is ewual to the random number , if it is , then the user win else lost.
  
  //now here we are going to actually check whether the passed value is equalto , or more than or less than the random value.
  if(guess === random){
    dispalymsz("You guessed the number. You Won")
    endgame()
  }
  else if(guess < random){
    dispalymsz("Guessed no. is LOW")
  }
  else if(guess > random){
    dispalymsz("Guessed no. is HIGH")
  }
}

function displayguess(guess){
  //cleans the values,updates all the arrays and guess remaining

  userInput.value= ''   //userainput value is updated with empty array.. its the cleanup.
  guesslot.innerHTML +=`${guess}, ` //pushing the values
  numguess++
  guessRem.innerHTML=`${11-numguess}` //numguess
}

function dispalymsz(msz){
  //if no. matches to the random no. then display the msz that you win.

  LowHigh.innerHTML = `<h2>${msz}</h2>`
}

//now i wnat to end the game and start the new game. 
function endgame(){
  userInput.value =''
  //do a thing that the user will not be able to add moer values in it --
  userInput.setAttribute('disabled','')   
  //key-value pair

  //A start button -
  p.classList.add('button')
  p.innerHTML = `<h2 id="newgame">Start New Game</h2>`
  startover.appendChild(p)  
  playgame = false //here all endgame work is done
  newgame()
}
function newgame(){
  //now here we need to add an eventlistener on "Start New Game"
  const newButton = document.querySelector("#newgame") //taken reference from the above p.innerHTML button

  //EventListner ---
  newButton.addEventListener("click",function(e){
    //here we are going to reset our variables and then allowing the user to play the game...
    random=(parseInt(Math.random() * 100 + 1))  //new random value
    prevguess=[]  //array reset
    numguess=1 //again start from 1
    guesslot.innerHTML=''    //empty
    guessRem.innerHTML=`${11-numguess}`  //removed remaining values
    userInput.removeAttribute('disabled')  //remove disabled
    startover.removeChild(p)    // remove the child

    //Play the game ...
    playgame = true
  })
}

