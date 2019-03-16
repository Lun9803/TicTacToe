// the value of mode can be either "pve" or "pvp"
let mode;
let difficulty;
// currentPage can be either game-board, difficulty-selector, mode-selector or main.
let currentPage;


function showMainPage(){
    document.getElementById("start").style.display="block";
    document.getElementById("about").style.display="block";
    document.getElementById("mode-select").style.display="none";
    document.getElementById("difficulty-select").style.display="none";
    document.getElementById("back").style.display="none";
    currentPage = "main-page";
}

function showModeSelect(){
    document.getElementById("start").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("difficulty-select").style.display="none";
    document.getElementById("mode-select").style.display="block";
    document.getElementById("back").style.display="block";
    currentPage = "mode-select";
}

function showGameBoard(){
    document.getElementById("main-page").style.display="none";
    document.getElementById("game-board").style.display="block";
}

function pve(){
    document.getElementById("mode-select").style.display="none";
    document.getElementById("difficulty-select").style.display="block";
    currentPage = "difficulty-select";
    mode = "pve";
}

function pvp(){
    mode = "pvp";
    showGameBoard();
}

function setDifficulty(e){
    if(e.innerHTML=="Easy"){
        difficulty = "easy";
    }
    else if(e.innerHTML=="Normal"){
        difficulty = "normal";
    }
    else{
        difficulty = "hard";
    }
    // alert(difficulty);
    showGameBoard();
}


function back(){
    if(currentPage == "difficulty-select"){
        showModeSelect();
    }
    else if(currentPage == "mode-select"){
        showMainPage();
    }
}