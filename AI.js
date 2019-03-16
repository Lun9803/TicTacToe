let difficulty = undefined;


function AIplay(){
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
            board[x][y]="o";
            let index = x*3+y;
            document.getElementById(String(index)).style.backgroundImage="url('img/circle.JPG')";
            return;
        }
    }
    
}

function normalMode(){

}

function hardMode(){

}