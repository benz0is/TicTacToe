
const restart = document.getElementById('restart-btn')
let gameState = ["", "", "", "", "", "", "", "", ""]
let circleTurn
var current_player1_score = 0;
var current_player2_score = 0;
const player_turns = circleTurn ? "O":"X";

const w_combs = 
[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]



function squareclicked(){
    document.querySelectorAll('.play-btn').forEach(element => {element.addEventListener('click',handleClick,{once:true})})

}
function handleClick(element){
    const cell = element.target;
    const clicked_cell = cell.getAttribute('data-cell-index')
    const player_turns = circleTurn ? "O":"X";
    gameState[clicked_cell]=player_turns;
    cell.innerHTML= player_turns;

    swapturns();
    checkWin()
}

function checkWin(){
    for(let i=0;i < w_combs.length;i++){    
        winning_row= w_combs[i];
        let p1 = gameState[winning_row[0]]
        let p2 = gameState[winning_row[1]]
        let p3 = gameState[winning_row[2]]
        if (p1=== '' || p2=== '' || p3=== ''){
            continue;
        }
        if(p1===p2 && p2===p3){
            
            if(p1=='X' && p2=='X' && p3=='X'){
            alert('Player 1 has won')
            current_player1_score += 1;
            const player1_score = document.querySelector('.Player11')
            console.log(player1_score)
            player1_score.innerHTML = current_player1_score;
            
            document.querySelectorAll('.play-btn').forEach(element => {element.innerHTML= ""});
            gameState = ["", "", "", "", "", "", "", "", ""]
        }   else{
            alert('Player 2 has won')
            current_player2_score++;
            const player2_score = document.querySelector('.Player22')
            player2_score.innerHTML = current_player2_score;
            document.querySelectorAll('.play-btn').forEach(element => {element.innerHTML= ""});
            gameState = ["", "", "", "", "", "", "", "", ""]
            
        }
    
        }
    }

}


function swapturns(){
    circleTurn = !circleTurn
}
function restart_board(){
    restart.addEventListener('click',()=>{
       document.querySelectorAll('.play-btn').forEach(element => {element.innerHTML= ""});
       gameState = ["", "", "", "", "", "", "", "", ""]
       const player1_score = document.querySelector('.Player11')
       const player2_score = document.querySelector('.Player22')
       current_player1_score = 0;
       current_player2_score = 0;
       player2_score.innerHTML = 0;
       player1_score.innerHTML = 0;

    })

    }
    
restart_board();