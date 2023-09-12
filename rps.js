"use strict"

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
  let safetyToken;
  do{
    safetyToken = false;
    let selection = prompt("Select your tool!", " ");
    if(selection.toLowerCase() == "rock"
    || selection.toLowerCase() == "paper"
    || selection.toLowerCase() == "scizor") return selection;
    alert("You had a typo in your input. Try again!");
    safetyToken = true;
  } while (safetyToken);
};

function game(){
  console.log("We are going to play 5 rounds of Rock Paper Scizor!");
  let userPoints = 0;
  let cpuPoints = 0;
  for(let i = 1; i <= 5; i++){
    console.log("Ready for round " + i);
    let round = playRound(getUserInput(), getComputerChoice());
    console.log(round);
    if(round.includes("win")) ++userPoints;
    if(round.includes("lose")) ++cpuPoints;
    console.log("The current score is:");
    console.log("You: " + userPoints + " Computer: " + cpuPoints);
    if(cpuPoints == 3){
      i = 5;
      console.log("You can't win the game anymore!");
    };
  };
  if(userPoints > cpuPoints){
    console.log("Congratulations!!! You won the game!");
  } else {
    console.log("You lost the game!")
  }
  console.log("The final score is:");
  console.log("You " + userPoints + " : " + cpuPoints + " Computer");
  console.log("Reload to play again!");
}

game();