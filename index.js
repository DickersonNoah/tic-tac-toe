// Author: Noah Dickerson
// Date: 12/28/21
// Purpose: This page contains the logic and Javascript to run this tic tac toe project.

// const and let section
const sections = Array.from(document.getElementsByClassName('box'));//grabbing the indiviual boxes on the gameboard by the class name also created an array
const topText = document.getElementById('topText');//grabbing the top text section via id topText
const restartbutton = document.getElementById('restart');//grabbing restart buttion by id of restart
const PLAYER_1 = "X";//const for player 1 or X's
const PLAYER_2 = "O";// const for player 2 or O's
let currentPlayer = "";// variable of current player
const spaces = [];// The const of spaces an empty array


//function for creating the board
const createSections = () => {//const for board
    sections.forEach((sections, index) => { //using the secitions variable and the for each method 
        let styleString = '';//variable for style string
        if (index < 3){//if the parameter of index is less than 3
            styleString += `border-bottom: 5px solid black;`; //Create a style string for a bottom boder (less than 3 is top boxes)
        }
        if (index % 3 === 0){//if the parameter index modulules is = 0 
            styleString += `border-right: 5px solid black;`;//then border should be on the right (%3 = 0 is the 0,3,6 or left side of the board)
        }
        if (index % 3 === 2){//if parameter index is % 3 = 2 
            styleString += `border-left: 5px solid black;`;//then border should be on the left (%3=2  is 2,5,8 right side of the board)          
        }
        if (index > 5){//if parameter index is greater than 5
            styleString += `border-top: 5px solid black;`;//then border should be on top (6,7,8 bottom boxes)
        }
        sections.style = styleString;//initializing stylestring to set boarders
        sections.addEventListener('click',sectionClicked);//the event listener for each click on indiviual sections
    });
};

//function to intitialize clicks in the gameboard
const sectionClicked = (e) => {//const sectionClicked, listening for event
    const id = e.target.id;//local variable that stores the clicked sections
    if(!spaces[id]){//if space has not been filled
        spaces[id]=currentPlayer;//current player can click 
        e.target.innerText = currentPlayer;//assign player to empty box
       
    if(winner()){// if winner function
        topText.innerText = `${currentPlayer} has won!`//toptext says player has won
        return;//then return 
        }
     if (draw()) {// if call draw function
        return;// return
        };
        currentPlayer = currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
}       //if current player isnt player 1 then it is player 2 otherwise its player 1
}

    

//function for winner
//You can only win eight ways in tictactoe
//toprow, middle row, bottom row (Up and down side to side), and two ways diagnoally ie 8 total
const winner = () => {//const winner
    if(spaces[0] === currentPlayer){//if current player has section 0,1,2 current player wins on top row
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer){
            console.log(`${currentPlayer} wins!`);
            return true;//return true
        }//if current player has section 0,3,6 current player wins on left row
            if(spaces[3] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} wins!`);
            return true;//return true
            }   //if current player has section 0,4,8 current player wins diagnoally top left to bottom right
                if(spaces[4] === currentPlayer && spaces[8] === currentPlayer){
                console.log(`${currentPlayer} wins!`);
                return true;  //return true  
            }
     } if(spaces[8] === currentPlayer){// if current player has 8,2,5 then current player wins on the right row
        if(spaces[2] === currentPlayer && spaces[5] === currentPlayer){
            console.log(`${currentPlayer} wins!`);
            return true;//return true
        }   //if current player has 8,6,7 then current player wins bottom row
            if(spaces[6] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} wins!`);
            return true;//return true
            }   //if current player has 8,4,0 current player wins diagnoly bottom right to top left (DRY)
                if(spaces[4] === currentPlayer && spaces[0] === currentPlayer){
                console.log(`${currentPlayer} wins!`);
                return true;  //return true  
            }
    } if(spaces[4] === currentPlayer){// if current player has 4,1,7 current player wins middle row
        if(spaces[1] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} wins!`);
            return true;//return true
    }   //if current player has 4,3,5 then current player wins middle row
            if(spaces[3] === currentPlayer && spaces[5] === currentPlayer){
            console.log(`${currentPlayer} wins!`);
            return true;//return true
    }
    if(spaces[6] === currentPlayer){//if current player has 6,4,2 current player wins diagnoly bottom left to top right 
            if(spaces[4] === currentPlayer && spaces[2] === currentPlayer){
                console.log(`${currentPlayer} wins!`);
                return true;//return true
            }
        }
    }
}

//draw fuction
const draw = () => {//const for draw function
    let draw = 0;//let the draw variable = 0
    spaces.forEach((space, i) => {//
        if (spaces[i] !== null) draw++;//if all boxes are full 
    });
    if (draw === 9) { //and if all 9 boxes are full
        topText.innerText = `Draw!`;    //top text will say Draw!
       return;//return nothing
    }   
};



//function for restarting the game
const restart = () => {
    spaces.forEach((space, index) => {
        spaces[index] = null;//all spaces become null (every move deleted)
    })
    sections.forEach(sections => {
        sections.innerText = "";//empty the spaces of text (x's and o's are deleted from the screen)
    })
    topText.innerText = `Tic Tac Toe!`;//top text returns to tic tac toe
    currentPlayer = PLAYER_1;//first to go is always player1
}
//Event listener for click on the restart button 
restartbutton.addEventListener('click', restart);//calls restart
//calling restart
restart();
//calling create sections (board) after the restart
createSections();

