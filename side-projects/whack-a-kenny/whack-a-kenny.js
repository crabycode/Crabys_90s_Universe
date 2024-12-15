let currKennyTile;
let currKyleTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setKenny, 1000);
    setInterval(setKyle, 2000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setKenny() {
    if (gameOver) 
    {
        return;
    }
    if (currKennyTile) 
    {
        currKennyTile.innerHTML= "";
    }
    let kenny = document.createElement("img");
    kenny.src = "kenny.png";
    let num = getRandomTile();
    if (currKyleTile && currKyleTile.id == num) 
    {
        return;
    }
    currKennyTile = document.getElementById(num);
    currKennyTile.appendChild(kenny);
}

function setKyle() {
    if (gameOver) 
    {
        return;
    }
    if (currKyleTile) 
    {
        currKyleTile.innerHTML= "";
    }
    let kyle = document.createElement("img");
    kyle.src = "kyle.png";
    let num = getRandomTile();
    if (currKennyTile && currKennyTile.id == num) 
    {
        return;
    }
    currKyleTile = document.getElementById(num);
    currKyleTile.appendChild(kyle);
}

function selectTile() {
    if (gameOver) 
    {
        return;
    }
    if (this == currKennyTile) 
    {
        score+= 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this ==currKyleTile) 
    {
        document.getElementById("score").innerText= "GAME OVER: " + score.toString();
        gameOver = true;
    }
}
