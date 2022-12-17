
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
        return `It's a draw, you both pick ${player}`
        // Ahora reviso si jugador = roca con todos los posibles elecciones del computador. LUego hago lo mismo con papel y tijera.
        } 
        else if (player === "rock") {
            if (computer === "scissors") {
                return "You Win!, Rock beats Scissors"
            } 
            else if (computer === "paper") {
                return "You Lose!, Paper beats Rock"
            }
        } 
        else if (player === "scissors") {
            if (computer === "rock"){
                return "You Lose!, Rock beats Scissors"
            } 
            else if (computer === "paper") {
                return "You Win!, Paper beats Scissors"
            }
        } 
        else if (player === "paper") {
            if (computer === "rock") {
                return "You Win!, Paper beats Rock"
            }
            if (computer === "scissors") {
                return "You Lose!, Scissors beats Paper"
            }
        }
    
    }

// instanciamos las funciones y probamos si funciona el código (Si funciona)
playerSelection = prompt("Rock, Paper or Scissors?")
computerSelection = getComputerChoice()

game = playRound(playerSelection, computerSelection)
console.log(game)




