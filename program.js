
// Función que decide el movimiento del pc
function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"]
    choice = choices[Math.floor(Math.random()*choices.length)]

    return choice
}

// Función que simula el juego
function playRound(playerSelection, computerSelection) {
    //Se pasa a minisculas las elecciones.
    player = playerSelection.toLowerCase()
    computer = computerSelection.toLowerCase()

    // comparar la elección del jugador con la del computador dependiendo de cada caso.
    // Primero reviso si son iguales.
    if (player === computer) {
        return [`It's a draw, you both pick ${player}`, "draw"]
        // Ahora reviso si jugador = roca con todos los posibles elecciones del computador. LUego hago lo mismo con papel y tijera.
        // retorno un array con el mensaje a mostrar y el ganador de la ronda.
        } 
        else if (player === "rock") {
            if (computer === "scissors") {
                return ["You Win!, Rock beats Scissors", "me"]
            } 
            else if (computer === "paper") {
                return ["You Lose!, Paper beats Rock", "pc"]
            }
        } 
        else if (player === "scissors") {
            if (computer === "rock"){
                return ["You Lose!, Rock beats Scissors", "pc"]
            } 
            else if (computer === "paper") {
                return ["You Win!, Paper beats Scissors", "me"]
            }
        } 
        else if (player === "paper") {
            if (computer === "rock") {
                return ["You Win!, Paper beats Rock", "me"]
            }
            if (computer === "scissors") {
                return ["You Lose!, Scissors beats Paper", "pc"]
            }
        }
    }

myWins = 0
computerWins = 0

// Event listener al clickear un botón
// La lógica de juego está dentro del event listener
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        computerSelection = getComputerChoice()
        round = playRound(button.id, computerSelection)
        addResult(round[0])
        if (round[1] === "me") {myWins++} else if (round[1] === "pc") {computerWins++}
        
        if (myWins === 5) {
            addResult("Easy Money... You win")
        } else if (computerWins === 5) {
            addResult("Pc is the champion")
        }
    })
})

//Función que agrega el texto al DOM
function addResult(text) {
    container = document.querySelector(".container-result")
    result = document.createElement("div")
    result.textContent = text
    container.appendChild(result)
}