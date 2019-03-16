let crossTurn = true;
let mode = undefined;
let winner = undefined;
let gameEnd = false;
let inGameMessage = undefined;

let board = [
    ["none", "none", "none"],
    ["none", "none", "none"],
    ["none", "none", "none"]
]

// movement
function select(grid){
    if(gameEnd)return;

    let id = Number(grid.id);
    let x = Math.floor(id/3);
    let y = id%3;
    // alert(x + ' '+ y);
    if(board[x][y]!="none")return;

    // operations for pvp
    if(mode=="pvp"){
        if(crossTurn){
            grid.style.backgroundImage="url('img/cross.JPG')";
            board[x][y] = "x";
        }
        else{
            grid.style.backgroundImage="url('img/circle.JPG')";
            board[x][y] = "o";
        }
        crossTurn = !crossTurn;
        inGameMessage.innerHTML=crossTurn?"x":"o";
        checkResult();
    }

    // operations for pve
    else{
        grid.style.backgroundImage="url('img/cross.JPG')";
        board[x][y] = "x";
        checkResult();
        if(!gameEnd)AIplay();
    }

    
    if(gameEnd){
        printEndMessage();
    }
    // alert(crossTurn);
}


function printEndMessage(){
    if(winner=="tie"){
        inGameMessage.innerHTML="Tie!";
    }
    else if(winner=="x"){
        inGameMessage.innerHTML="cross wins!";
    }
    else{
        inGameMessage.innerHTML="circle wins!";
    }
}

// check if anyone wins after each round
function checkResult(){
    // check for each row
    for(let i=0; i<3; i++){
        if(board[i][0]=="none")continue;
        if(board[i][0]==board[i][1] && board[i][1]==board[i][2]){
            winner = board[i][0];
            gameEnd = true;
            return;
        }
    }

    // check for each column
    for(let i=0; i<3; i++){
        if(board[0][i]=="none")continue;
        if(board[0][i]==board[1][i] && board[1][i]==board[2][i]){
            winner = board[0][i]
            gameEnd = true;
            return;
        }
    }

    // check for diagonal
    if(board[0][0]!="none" && board[0][0]==board[1][1] && board[1][1]==board[2][2]){
        winner = board[0][0];
        gameEnd = true;
        return;
    }
    if(board[0][2]!="none" && board[0][2]==board[1][1] && board[2][0]==board[1][1]){
        winner = board[0][2];
        gameEnd = true;
        return;
    }

    // check for tie
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(board[i][j]=="none"){
                return;
            }
        }
    }
    gameEnd = true;
    winner = "tie";

    // alert(wins);
}

// hide the main menu and brings up game board
function showGameBoard(){
    document.getElementById("main-page").style.display="none";
    document.getElementById("game-board").style.display="block";
    inGameMessage = document.getElementById("game-message");
    
    if(mode=="pve")inGameMessage.innerHTML="AI level: " + difficulty;
    else{
        if(crossTurn)inGameMessage.innerHTML="x";
        else{
            inGameMessage.innerHTML="o";
        }
    }
    
    let table = document.getElementById("board");
    for(let i = 0; i < 3; i++){
        table.innerHTML += "<tr>" +
        `<td id='${i*3}' onclick=select(this)></td>` +
        `<td id='${i*3+1}' onclick=select(this)></td>` +
        `<td id='${i*3+2}' onclick=select(this)></td>` +
        "</tr>"
    }
    // alert(mode);
    // alert(difficulty);
}

function restart(){
    location.reload();
}

