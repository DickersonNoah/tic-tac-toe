const sections = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText');
const restartbutton = document.getElementById('restart');
const PLAYER_1 = "X";
const PLAYER_2 = "O";
let currentPlayer = "";
const spaces = [];



const createSections = () => {
    sections.forEach((sections, index) => {
        let styleString = '';
        if (index < 3){
            styleString += `border-bottom: 5px solid black;`;
        }
        if (index % 3 === 0){
            styleString += `border-right: 5px solid black;`;
        }
        if (index % 3 === 2){
            styleString += `border-left: 5px solid black;`;
        }
        if (index > 5){
            styleString += `border-top: 5px solid black;`;
        }
        sections.style = styleString;
        sections.addEventListener('click',sectionClicked);
    });
};

const sectionClicked = (e) => {
    const id = e.target.id;
    if(!spaces[id]){
        spaces[id]=currentPlayer;
        e.target.innerText = currentPlayer;
       
    if(winner()){
        playText.innerText = `${currentPlayer} has won!`
        return;
        }
     if (draw()) {
        return;
        };
        currentPlayer = currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
}
}

    


const winner = () => {
    if(spaces[0] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer){
            console.log(`${currentPlayer} wins!`);
            return true;
        }
            if(spaces[3] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} wins!`);
            return true;
            }
                if(spaces[4] === currentPlayer && spaces[8] === currentPlayer){
                console.log(`${currentPlayer} wins!`);
                return true;    
            }
     } if(spaces[8] === currentPlayer){
        if(spaces[2] === currentPlayer && spaces[5] === currentPlayer){
            console.log(`${currentPlayer} wins!`);
            return true;
        }
            if(spaces[6] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} wins!`);
            return true;
            }
                if(spaces[4] === currentPlayer && spaces[0] === currentPlayer){
                console.log(`${currentPlayer} wins!`);
                return true;    
            }
    } if(spaces[4] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} wins!`);
            return true;
    }
    if(spaces[3] === currentPlayer && spaces[5] === currentPlayer){
        console.log(`${currentPlayer} wins!`);
        return true;
    }
        if(spaces[6] === currentPlayer){
            if(spaces[4] === currentPlayer && spaces[2] === currentPlayer){
                console.log(`${currentPlayer} wins!`);
                return true;
            }
        }
}
}

const draw = () => {
    let draw = 0;
    spaces.forEach((space, i) => {
        if (spaces[i] !== null) draw++;
    });
    if (draw === 9) {
        playText.innerText = `Draw!`;    
       return;
    }   
};




const restart = () => {
    spaces.forEach((space, index) => {
        spaces[index] = null;
    })
    sections.forEach(sections => {
        sections.innerText = "";
    })
    playText.innerText = `Tic Tac Toe!`;
    currentPlayer = PLAYER_1;

}

restartbutton.addEventListener('click', restart);

restart();

createSections();

