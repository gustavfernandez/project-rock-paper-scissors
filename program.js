
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

// Por último creamos la función game() para jugar 5 veces
function game() {
    myWins = 0
    computerWins = 0
    for (let i = 1; myWins < 5 && computerWins < 5; i++) {
        playerSelection = prompt("Rock, Paper or Scissors?")
        computerSelection = getComputerChoice()
        round = playRound(playerSelection, computerSelection)
        console.log(round[0])
        if (round[1] === "me") {myWins++} else if (round[1] === "pc") {computerWins++}
    }

    if (myWins === 5) {
        console.log("Easy Money... You win")
    } else {
        console.log("Pc is the champion")
    }
}

game()



