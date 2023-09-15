"use strict"

const tBox = document.querySelector("#text");
let turns = 1;

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function getComputerChoice(){
  let choice = randomNumberBetween(1, 3);
  if(choice === 1) return "Rock";
  if(choice === 2) return "Paper";
  if(choice === 3) return "Scizor";
  return "Error";
};

function stringFormatting(input){
  let output = input[0].toUpperCase() + input.slice(1);
  return output;
};

function playRound(playerSelection, computerSelection) {
  playerSelection = stringFormatting(playerSelection);
  let win = "You win! " + playerSelection + " beats " + computerSelection;
  let lose = "You lose! " + computerSelection + " beats " + playerSelection;
  let tie = "It's a tie! You both chose " + playerSelection
  
  if(playerSelection == computerSelection){
    return tie;
  };

  if(playerSelection == "Rock"){
    if(computerSelection == "Scizor") return win;
    return lose;
  };

  if(playerSelection == "Paper"){
    if(computerSelection == "Rock") return win;
    return lose;
  };

  if(playerSelection == "Scizor"){
    if(computerSelection == "Paper") return win;
    return lose;
  };

  return "Something bad happened in playRound()";
};

function getUserInput(){
 return userInput;
};

const text = {
  write(input){
    tBox.append(input + "\n");
  },
  delete(){
    tBox.innerText = "";
  }
};

let userPoints = 0;
let cpuPoints = 0;

function game(){
  text.write("We are going to play Rock Paper Scizor until 5 points!");
  text.write("Ready for round " + turns);
}

function gameEnd(){
  text.delete();
  if(userPoints > cpuPoints){
    text.write("Congratulations!!! You won the game!");
  } else {
    text.write("You lost the game!")
  }
  text.write("The final score is:");
  text.write("You " + userPoints + " : " + cpuPoints + " Computer");
  text.write("Reload to play again!");
  document.querySelector("#buttons").removeEventListener("click", handleClick);
};

function handleClick(e){
  let userInput = e.target.innerText;

  let round = playRound(userInput, getComputerChoice());
  text.delete();
  text.write(round);
  if (round.includes("win")) ++userPoints;
  if (round.includes("lose")) ++cpuPoints;
  text.write("The current score is:");
  text.write("You: " + userPoints + " Computer: " + cpuPoints);

  if(userPoints == 5
  || cpuPoints == 5){
    gameEnd();
    return;
  }
  turns++;
  text.write("Ready for round " + turns);
};

document.querySelector("#buttons").addEventListener("click", handleClick);

game();