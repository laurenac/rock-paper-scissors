let btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', (event) =>{
        resetResults();
        let btnChoice = event.srcElement.id;
        console.log(playRound(btnChoice, computerPlay()));
    });
});
    
   








function computerPlay() {
    const actionArr = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * actionArr.length);
    return actionArr[index];
}


let results = document.getElementById('result');    


function playRound(playerSelection, computerSelection) {
    // uniform the inputs
    playerSelection = playerSelection.toLowerCase();
    console.log({playerSelection, computerSelection});
    // Player input ROCK
    if (playerSelection === "rock" && computerSelection === "rock") {
        return results.textContent += `Tie round. Computer selected ${computerSelection} and Player selected ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return results.textContent += `You Lose! Computer selected ${computerSelection} and Player selected ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return results.textContent += `You Win! Computer selected ${computerSelection} and Player selected ${playerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return results.textContent += `You Win! Computer selected ${computerSelection} and Player selected ${playerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return results.textContent += `You Lose! Computer selected ${computerSelection} and Player selected ${playerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return results.textContent += `Tie round. Computer selected ${computerSelection} and Player selected ${playerSelection}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return results.textContent += `You Lose! Computer selected ${computerSelection} and Player selected ${playerSelection}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return results.textContent += `You Win! Computer selected ${computerSelection} and Player selected ${playerSelection}`;
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return results.textContent += `Tie round. Computer selected ${computerSelection} and Player selected ${playerSelection}`;
    } else {
        return "Please select a valid input"
    }

}

function resetResults(){
    return results.textContent = 'Results: ';
}


// function game() {
//     let computerWins = [];
//     let playerWins = [];
//     let ties = [];
//     let gamePlays = 5;
//     for (let i = 0; i < gamePlays; i++) {
//         let computerSelection = computerPlay();
//         let playerSelection = userInput();
//         let results = playRound(playerSelection, computerSelection);

//         if (results == playerSelection) {
//             playerWins.push(playerSelection);
//             console.log(playerWins);
//             console.log("Player wins! This round the player selected " + playerSelection + " and the computer selected " + computerSelection);

//         }
//         if (results == computerSelection) {
//             computerWins.push(computerSelection);
//             console.log(computerWins);
//             console.log("You Lose! This round the player selected " + playerSelection + " and the computer selected " + computerSelection);

//         }
//         if (results == "Tie") {
//             ties.push("tie");
//             console.log(ties);
//             console.log("It's a tie! This round the player selected " + playerSelection + " and the computer selected " + computerSelection);

//         }
//     }

//     if (playerWins.length > computerWins.length) {
//         console.log("Player Wins this game with " + playerWins.length + " rounds won! Computer wins: " + computerWins.length + ". Ties: " + ties.length);
//     } else if (computerWins.length > playerWins.length) {
//         console.log("Computer Wins this game with " + computerWins.length + " rounds won! Player wins: " + playerWins.length + ". Ties: " + ties.length);
//     } else {
//         console.log("No winners this game with " + ties.length + " tie rounds, " + computerWins.length + " computer wins, and " + playerWins.length + " player wins");
//     }
// }


