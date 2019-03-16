let difficulty = undefined;


function AIplay(){
    // check if there is space  
    let hasNone = false;
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(board[i][j]=="none")hasNone=true;
        }
    }
    if(!hasNone)return;

    if(difficulty=="easy"){
        easyMode();
    }
}

// randomly make action
function easyMode(){
    while(true){
        let x = Math.floor(3*Math.random());
        let y = Math.floor(3*Math.random());
        if(board[x][y]=="none"){
            board[x][y]=crossTurn?"x":"o";
            let index = x*3+y;
            let grid = document.getElementById(String(index))
            grid.style.backgroundImage=crossTurn?"url('img/cross.JPG')":"url('img/circle.JPG')";
            crossTurn = !crossTurn;
            return;
        }
    }
    
}

function normalMode(){

}

function hardMode(){

}