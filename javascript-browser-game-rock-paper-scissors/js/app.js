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
const resultDisplay = document.querySelector('#result-display');
const winDisplay = document.querySelector('#wins-display');

/*-------------------------------- Variables --------------------------------*/
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
let playerChoice;
let computerChoice; 
let msg = "";
let computerWins = 0;
let playerWins = 0;
let tieGame = 0;
let rockWins = 0;
let paperWins = 0;
let scissorsWins = 0;
let lizardWins = 0;
let spockWins = 0;
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
    if(playerChoice == "rock"){
        //rock vs rock
        if(computerChoice == "rock"){
            msg = "You both suck!";
            tieGame = tieGame +1;
        }        
        //rock vs scissors
        if(computerChoice == "scissors"){
            msg = "Rock crushes scissors! You win." ;
            playerWins = playerWins +1;
        }
    
        //rock vs paper
        if(computerChoice == "paper"){
            msg = "Paper covers rock!  You lose."; 
            computerWins = computerWins +1;
        } 
        //rock vs lizard
        if(computerChoice == "lizard"){
            msg = "Rock crushes lizard!  You win.";
            playerWins = playerWins +1;
        }
        //rock vs Spock
        if(computerChoice == "spock"){
            msg = "Spock vaporizes rock!  You lose."; 
        computerWins = computerWins +1;
        } 
    }//end rock   
    
    if(playerChoice == "paper"){
        //paper vs rock
        if(computerChoice == "rock"){
            msg = "Paper covers rock, you win!";
            playerWins= playerWins +1;
        }        
        //paper vs scissors
        if(computerChoice == "scissors"){
            msg = "Scissors cut paper, you lose." ;
            computerWins = computerWins +1;
        }
        //paper vs paper
        if(computerChoice == "paper"){
            msg = "it's a Draw, you both suck!"; 
            tieGame = tieGame +1;
        } 
        //paper vs lizard
        if(computerChoice == "lizard"){
            msg = "Lizard eats paper, you lose.";
            computerWins = computerWins +1;
        }
        //paper vs Spock
        if(computerChoice == "spock"){
            msg = "Paper disproves Spock, you win!"; 
        playerWins = playerWins +1;
        } 
    } //end of paper
    if(playerChoice == "scissors"){
        //scissors vs rock
        if(computerChoice == "rock"){
            msg = "Rock crushes scissors, you lose";
            computerWins = computerWins +1;
        }        
        //scissors vs scissors
        if(computerChoice == "scissors"){
            msg = "Tie game, you both suck." ;
            tieGame = tieGame +1;
        }
    
    //scissors vs paper
        if(computerChoice == "paper"){
            msg = "Scissors cut paper, you win!"; 
            playerWins = playerWins +1;
        } 
     //scissors vs lizard
        if(computerChoice == "lizard"){
            msg = "Scissors decapitate Lizard, you win!";
            playerWins = playerWins +1 ;
        }
    //scissors vs Spock
        if(computerChoice == "spock"){
            msg = "Spock breaks scissors, you lose."; 
        computerWins = computerWins +1;
        } 
    } //end of scissors
    if(playerChoice == "lizard"){
        //scissors vs rock
        if(computerChoice == "rock"){
            msg = "Rock smashes Lizard, you lose";
            computerWins = computerWins +1;
        }        
        //lizard vs scissors
        if(computerChoice == "scissors"){
            msg = "Scissors decapitate Lizard, you lose." ;
            computerWins = computerWins +1;
        }
        //lizard vs paper
        if(computerChoice == "paper"){
            msg = "Lizard eats paper, you win!"; 
            playerWins = playerWins +1;
        } 
        //lizard vs lizard
        if(computerChoice == "lizard"){
            msg = "Tie game, you both suck.";
            tieGame = tieGame +1;
        }
        //lizard vs Spock
        if(computerChoice == "spock"){
            msg = "Lizard poisons Spock, you win!"; 
            playerWins = playerWins +1;
        } 
    } //end of lizard
    if(playerChoice == "spock"){
        //spock vs rock
        if(computerChoice == "rock"){
            msg = "Spock vaporizes rock, you win!";
            playerWins = playerWins +1;
        }        
        //spock vs scissors
        if(computerChoice == "scissors"){
            msg = "Spock breaks scissors, you win!" ;
            playerWins = playerWins +1;
        }
        //spock vs paper
        if(computerChoice == "paper"){
            msg = "Paper disproves Spock, you lose."; 
            computerWins = computerWins +1;
        } 
        //spock vs lizard
        if(computerChoice == "lizard"){
            msg = "Lizard poisons Spock, you lose.";
            computerWins = computerWins+1;
        }
        //Spock vs Spock
        if(computerChoice == "spock"){
            msg = "Evil twin, parallel universe, nerdy porn? We all lose." ; 
        tieGame = tieGame +1;
        } 
    }  //end of Spock
} //end of compare function
// As a user, I want to see the computer’s choice displayed 
// next to mine, so I can compare the two.

function render(){
    console.log(msg)
    resultDisplay.textContent = `You chose ${playerChoice} and the Q Continuum chose ${computerChoice}. ${msg} `;
    winDisplay.innerHTML = "Current Record: " + playerWins + " Wins, " + computerWins + " Losses, and " + tieGame + " Draws."
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
  