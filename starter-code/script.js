let vsPlayer = document.getElementById("new_v_play")
// const ex = document.getElementsByClassName("ex")
// const oh = document.getElementsByClassName("oh")

vsPlayer.addEventListener('click', setPlayerOne)
function setPlayerOne() {
    let playerOne = document.getElementsByName("player_select");
    for (i = 0; i < playerOne.length; i++) {
        if(playerOne[i].checked) {
            console.log(playerOne)
            // document.getElementById("result").innerHTML
            //    = "Player One is: " + playerOne[i].value
        }
    }
    
}

let board = document.querySelector(".game_space");
board.addEventListener('click', setPiece);
function setPiece(e) {
    if (e.target.className === "block") {
        console.log("piece set!")
    }
}

//Winning Combos 
// 1, 2, 3
// 4, 5, 6
// 7, 8, 9
// 1, 4, 7
// 2, 5, 8
// 3, 6, 9
// 1, 5, 9
// 7, 5, 3

let cellOne = document.getElementById('one')
let cellTwo = document.getElementById('two')
let cellThree = document.getElementById('three')
let cellFour = document.getElementById('four')
let cellFive = document.getElementById('five')
let cellSix = document.getElementById('six')
let cellSeven = document.getElementById('seven')
let cellEight = document.getElementById('eight')
let cellNine = document.getElementById('nine')