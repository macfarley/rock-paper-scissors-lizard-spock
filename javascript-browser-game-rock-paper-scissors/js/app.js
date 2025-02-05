//  As a user, I want to see a landing page when I arrive 
// at the website, so I know I’m in the right place.
//the html header solves this

// As a user, I want to see clearly labeled buttons 
// for “Rock”, “Paper”, and “Scissors”, on the landing page, 
// so I instantly know my options for game play.
//solved by the buttons and css


// As a user, I want to be able to click on one of the 
// “Rock”, “Paper”, or “Scissors” buttons, making it easy to 
// select my game move.
// As a user, I want visual feedback after making my 
// selection, so I know my choice has been registered.
//the css reacts on a click

/*------------------------ Cached Element References ------------------------*/
const resultDisplayEl = document.querySelector('#result-display');
const winDisplayEl = document.querySelector('#wins-display');

/*-------------------------------- Variables --------------------------------*/
const choices = ['rock', 'paper', 'scissors', 'lizard', 'Spock']
let playerChoice;
let computerChoice; 
let msg = "";
let computerWins = 0;
let playerWins = 0;
let tieGame = 0;
/*----------------------------- Event Listeners -----------------------------*/

// document.querySelector('#rock').addEventListener('click', play);
// document.querySelector('#paper').addEventListener('click', play);
// document.querySelector('#scissors').addEventListener('click', play);
document.querySelectorAll('button').forEach(function (button) {
    button.addEventListener('click', play);
  });

const getComputerChoice = () => {
    //get a random number
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
  };
  
const getPlayerChoice = (event) => {
//where event is the click
    playerChoice = event.target.id;
    //the name of the thing you clicked
};

// const compare = () => {
//     if (playerChoice === computerChoice) {
//       msg = 'You tied!';
//     } else if (playerChoice === choices[0] && computerChoice === choices[2]) { 
//       // "rock" vs. "scissors"
//       msg = 'Congrats! You win!';
//     } else if (playerChoice === choices[1] && computerChoice === choices[0]) { 
//       // "paper" vs. "rock"
//       msg = 'Congrats! You win!';
//     } else if (playerChoice === choices[2] && computerChoice === choices[1]) { 
//       // "scissors" vs. "paper"
//       msg = 'Congrats! You win!';
//     } else {
//       msg = 'You lose! Try again?';
//     }
//   };

const compare = () => {
    if (playerChoice === computerChoice) {
        msg = 'You both suck!';
        tieGame = tieGame+1;}
    //rock vs scissors
    if(playerChoice === "rock"){
        if(computerChoice === "scissors"){
            msg = "Rock crushes scissors! You win";
            playerWins = playerWins +1}        
    //rock vs paper
         else if(computerChoice === "paper"){
            msg = "Paper covers rock!  You lose."; 
            computerWins = computerWins +1} 
     //rock vs lizard
        else if(computerChoice === "lizard"){
            msg = "Rock crushes lizard!  You win.";
            playerWins = playerWins +1}
    //rock vs Spock
         else if(computerChoice === "Spock"){
            msg = "Spock vaporizes rock!  You lose."; 
        computerWins = computerWins +1} 
    }

    if(playerChoice === "paper"){
        //paper vs rock
        if(computerChoice === "rock"){
            msg = "Paper covers rock! You win.";
            playerWins = playerWins +1}
       //paper vs scissors
        else if(computerChoice === "scissors"){
            msg = "Scissors cut paper!  You lose.";
            computerWins = computerWins +1}
        //paper vs lizard
        else if(computerChoice === "lizard"){
            msg = "Lizard eats paper!  You lose.";
            computerWins = computerWins +1} 
            //paper vs Spock
        else if(computerChoice === "Spock"){
            msg = "Paper disproves Spock!  You win.";
            playerWins = playerWins +1}  
    }
    if(playerChoice === "scissors"){
       //scissors vs paper
        if(computerChoice === "paper"){
            msg = "Scissors cut paper!  You win.";
            playerWins = playerWins +1}
        //scissors vs rock
        else if(computerChoice === "rock"){ 
            msg = "Rock crushes scissors!  You lose."; 
            computerWins = computerWins +1}
         //scissors vs lizard
        else if(computerChoice === "lizard"){ 
            msg = "Scissors decaptiate Lizard!  You win."; 
            playerWins = playerWins +1}
         //scissors vs Spock
        else if(computerChoice === "Spock"){ 
            msg = "Spock breaks scissors!  You lose."; 
            computerWins = computerWins +1}
    }
    if(playerChoice === "lizard"){
        //lizard vs paper
        if(computerChoice === "paper"){
             msg = "Lizard eats paper!  You win.";
             playerWins = playerWins +1}
        //lizard vs rock
        else if(computerChoice === "lizard"){ 
             msg = "Rock crushes lizard!  You lose."; 
             computerWins = computerWins +1}
         //lizard vs scissors
        else if(computerChoice === "scissors"){ 
             msg = "Scissors decaptiate Lizard!  You lose."; 
             computerWins = computerWins +1
            }
        //lizard vs Spock 
        else if(computerChoice === "Spock"){ 
             msg = "Lizard poisons Spock!  You win."; 
             playerWins = playerWins +1 
            }
     }
     if(playerChoice === "Spock"){
       //lizard vs Spock 
       if(computerChoice === "lizard"){ 
        msg = "Lizard poisons Spock! You lose."; 
       computerWins = computerWins+1
       }
        //Spock vs paper
        else if(computerChoice === "paper"){ 
             msg = "Paper disproves Spock! You Lose."; 
             computerWins = computerWins +1}
        //Spock vs scissors
        else if(computerChoice === "scissors"){ 
             msg = "Spock breaks scissors! You win"; 
             playerWins = playerWins +1
            }
        //Spock vs rock
        else if(computerChoice === "rock"){
            msg = "Spock vaporizes rock! You win.";
            playerWins = playerWins +1}
     }
}

// As a user, I want to see the computer’s choice displayed 
// next to mine, so I can compare the two.

function render(){
    resultDisplayEl.textContent = `You chose ${playerChoice} and the Q Continuum chose ${computerChoice}.  ${msg}`;
    winDisplayEl.textContent = `Current Record: ${playerWins} Wins, ${computerWins} Losses, and ${tieGame} Draws.`
}
// As a user, I want to be presented with a clear message 
// indicating the winner of the game, so that I can 
// immediately understand the outcome.


function play(event){
    getPlayerChoice(event)
    getComputerChoice()
    console.log(`${playerChoice}, ${computerChoice}`)
    compare();
    render();
}

// As a user, I want the option to play another round, so I 
// can try to improve my record.
  