const scoreDiv = document.querySelector("#score")
const newScore = document.querySelector(".scoreP")
const resultsDiv = document.querySelector("#results")
const newResult = document.querySelector(".resultsP")
const selectionDiv = document.querySelector("#selection-container")
const humanSelection = document.querySelector(".human-selection")
const computerSelection = document.querySelector(".computer-selection")

function getComputerChoice() {
    choices = ["rock", "paper", "scissors"]
    computerChoice = choices[Math.floor(Math.random()*(choices.length))]
    computerSelection.textContent = `Computer chose "${computerChoice}"`
    selectionDiv.appendChild(computerSelection)
    return computerChoice
}

let humanScore = 0
let computerScore = 0

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {

        newResult.textContent = "You tied!"
        resultsDiv.appendChild(newResult)

        newScore.textContent = `Your Score is ${humanScore} : Computer's Score is ${computerScore}`
        scoreDiv.appendChild(newScore)
    } 

    else if (humanChoice == "rock" & computerChoice == "paper") {
        newResult.textContent = "You lose! Paper beats Rock"
        resultsDiv.appendChild(newResult)
        
        computerScore++
        newScore.textContent = `Your Score is ${humanScore} : Computer's Score is ${computerScore}`
        scoreDiv.appendChild(newScore)
    }

    else if (humanChoice == "rock" & computerChoice == "scissors") {
        newResult.textContent = "You Win! Rock beats Scissors"
        resultsDiv.appendChild(newResult)

        humanScore++
        newScore.textContent = `Your Score is ${humanScore} : Computer's Score is ${computerScore}`
        scoreDiv.appendChild(newScore)
    }

    else if (humanChoice == "paper" & computerChoice == "scissors") {
        newResult.textContent = "You lose! Scissors beats Paper"
        resultsDiv.appendChild(newResult)
        
        computerScore++
        newScore.textContent = `Your Score is ${humanScore} : Computer's Score is ${computerScore}`
        scoreDiv.appendChild(newScore)
    }

    else if (humanChoice == "paper" & computerChoice == "rock") {
        newResult.textContent = "You Win! Paper beats Rock"
        resultsDiv.appendChild(newResult)

        humanScore++
        newScore.textContent = `Your Score is ${humanScore} : Computer's Score is ${computerScore}`
        scoreDiv.appendChild(newScore)
    }

    else if (humanChoice == "scissors" & computerChoice == "rock") {
        newResult.textContent = "You lose! Rock beats Scissors"
        resultsDiv.appendChild(newResult)

        computerScore++
        newScore.textContent = `Your Score is ${humanScore} : Computer's Score is ${computerScore}`
        scoreDiv.appendChild(newScore)
    }

    else if (humanChoice == "scissors" & computerChoice == "paper") {
        newResult.textContent = "You Win! Scissors beats Paper"
        resultsDiv.appendChild(newResult)
        
        humanScore++
        newScore.textContent = `Your Score is ${humanScore} : Computer's Score is ${computerScore}`
        scoreDiv.appendChild(newScore)
    }

    if (humanScore === 5) {
        newResult.textContent = "Game Over! You Win!!"
        resultsDiv.appendChild(newResult)
        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorsBtn.disabled = true

    } else if (computerScore === 5) {
        newResult.textContent = "Game Over! Computer Wins!!"
        resultsDiv.appendChild(newResult)
        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorsBtn.disabled = true
    }
}

function playGame(humanChoice) {
    getComputerChoice()
    playRound(computerChoice, humanChoice)
}

const rockBtn = document.querySelector("#rock")
rockBtn.addEventListener("click", () => {
    humanChoice = "rock"
    humanSelection.textContent = `You chose "${humanChoice}"`
    selectionDiv.appendChild(humanSelection)
    playGame(humanChoice)
})

const paperBtn = document.querySelector("#paper")
paperBtn.addEventListener("click", () => {
    humanChoice = "paper"
    humanSelection.textContent = `You chose "${humanChoice}"`
    selectionDiv.appendChild(humanSelection)
    playGame(humanChoice)
})

const scissorsBtn = document.querySelector("#scissors")
scissorsBtn.addEventListener("click", () => {
    humanChoice = "scissors"
    humanSelection.textContent = `You chose "${humanChoice}"`
    selectionDiv.appendChild(humanSelection)
    playGame(humanChoice)
})




