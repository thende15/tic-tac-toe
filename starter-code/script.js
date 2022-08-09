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
