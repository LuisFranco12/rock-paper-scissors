"use strict";

function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"]

    let item = choices[Math.floor(Math.random() * choices.length)]

    return item.toLowerCase()

}



const body = document.querySelector('body')
const div = document.createElement('div')
const buttons = document.querySelectorAll('button')
body.append(div)


function playGame() {
  let playerChoice = this.innerText.toLocaleLowerCase()
  let pcChoice = getComputerChoice()
  div.textContent = ''
  if (playerChoice === pcChoice) {
    div.append("It's a tie!")
  }else if (playerChoice === 'rock' && pcChoice === 'paper'){
    div.append('You lose, paper beats rock')
  }else if (playerChoice === 'paper' && pcChoice === 'scissors') {
    div.append('You lose, scissors beats paper')
  }else if (playerChoice === 'scissors' && pcChoice === 'rock') {
    div.append('You lose, rock beats scissors') 
  }else {
    div.append('You win')
  }
}

buttons.forEach(button => {
  button.addEventListener('click', playGame)
})

