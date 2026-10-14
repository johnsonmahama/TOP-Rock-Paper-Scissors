function getComputerChoice() {
    choices = ["rock", "paper", "scissors"]
    computerChoice = choices[Math.floor(Math.random()*(choices.length))]
    console.log(`Computer chose "${computerChoice}"`)
    return computerChoice
}

function getHumanChoice() {
    humanChoice = prompt(`Please type "rock", "paper" or "scissors".`).toLowerCase()
    console.log(`You chose "${humanChoice}"`)
    return humanChoice
}

let humanScore = 0
let computerScore = 0

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        console.log("You tied!")
        console.log(`Your Score is ${humanScore} : Computer's Score is ${computerScore}`)
    } 
    else if (humanChoice == "rock" & computerChoice == "paper") {
        console.log("You lose! Paper beats Rock")
        computerScore++
        console.log(`Your Score is ${humanScore} : Computer's Score is ${computerScore}`)
    }
    else if (humanChoice == "rock" & computerChoice == "scissors") {
        console.log("You Win! Rock beats Scissors")
        humanScore++
        console.log(`Your Score is ${humanScore} : Computer's Score is ${computerScore}`)
    }
    else if (humanChoice == "paper" & computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper")
        computerScore++
        console.log(`Your Score is ${humanScore} : Computer's Score is ${computerScore}`)
    }
    else if (humanChoice == "paper" & computerChoice == "rock") {
        console.log("You Win! Paper beats Rock")
        humanScore++
        console.log(`Your Score is ${humanScore} : Computer's Score is ${computerScore}`)
    }
    else if (humanChoice == "scissors" & computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors")
        computerScore++
        console.log(`Your Score is ${humanScore} : Computer's Score is ${computerScore}`)
    }
    else if (humanChoice == "scissors" & computerChoice == "paper") {
        console.log("You Win! Scissors beats Paper")
        humanScore++
        console.log(`Your Score is ${humanScore} : Computer's Score is ${computerScore}`)
    }
}

function playGame() {
    count = 0
    while (count < 5) {
        getHumanChoice()
        getComputerChoice()
        playRound(computerChoice, humanChoice)
        count++
    }
}

playGame()