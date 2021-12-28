const PLAYER_X_ClASS = 'X' //constant for Player X or 1
const PLAYER_O_CLASS = 'circle' //constant for Player O or 2
const WINNING_COMBO = [ //Constant for all winning combinations in tic tac toe
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];




const cellElements = document.querySelectorAll('.boardPiece'); // Constant for each board peice of square
const boardElement = document.getElementById('gameBoard'); // Constant for the entire board
const winningMessageElement = document.getElementById('winner'); //Const for the Winner announcement
const restartButton = document.getElementById('restart'); // const for the restart button
const winningMessageTextElement = document.getElementById('winnerMessageText');// Constant for the Text the winner will see
let isPlayer_O_Turn = false; //Const for who goes first (X always goes first)



startGame()//Function to start the game

restartButton.addEventListener('click', startGame) //Event listener for the game to restart and start game over

function startGame() { //Actual function to start the game
    isPlayer_O_Turn = false //Let player 2 turn be false
    cellElements.forEach(cell => { //Each cell or game board piece
        cell.classList.remove(PLAYER_X_ClASS)//When the function is called delete all X'S
        cell.classList.remove(PLAYER_O_CLASS)//When the function is called delete all O's
        cell.removeEventListener('click', handleCellClick) 
        cell.removeEventListener('click', handleCellClick, {once : true})
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}


function handleCellClick(e) {
    const cell = e.target
    const currnentClass = isPlayer_O_Turn ? PLAYER_O_CLASS : PLAYER_X_ClASS
    placeMark(cell, currnentClass)
    if (checkWin(currnentClass)){
        endGame(false)
    }else if (isDraw()){
        endGame(true)
    }else {
        swapTurns()//Function to swap turns
        setBoardHoverClass()
    }
}


function endGame(draw){//Function for a draw at the end of the game
    if(draw){// if a draw
        winningMessageElement.innerText = "Draw!"//Text changes to draw
    }else {//if is not a draw
        winningMessageElement.innerText = `Player with ${isPlayer_O_Turn ? "O's" : "X's"} wins!`//Message will say Player with X's/O's wins!
    }
    winningMessageElement.classList.add('show')
}

function isDraw(){//Function for 
    return [...cellElements].every(cell => {
        return cell.classList.contains(PLAYER_X_ClASS) || cell.classList.contains(PLAYER_O_CLASS)
    })
}

function placeMark(cell, currnentClass) {//function for where has been marked on the board
    cell.classList.add(currnentClass)
}
function swapTurns(){ //Function to swap turns
    isPlayer_O_Turn = !isPlayer_O_Turn
}

function setBoardHoverClass() { //Function that adds hover to the board prior to the click
    boardElement.classList.remove(PLAYER_X_ClASS)
    boardElement.classList.remove(PLAYER_O_CLASS)
    if(isPlayer_O_Turn) {
        boardElement.classList.add(PLAYER_O_CLASS)
    }else {
        boardElement.classList.add(PLAYER_X_ClASS)
    }
}


function checkWin(currnentClass) {// Fuction to check for a winner
    return WINNING_COMBO.some(combination =>{ //
        return combination.every(index => {
            return cellElements[index].classList.contains(currnentClass)
        })
    })
}


