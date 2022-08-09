let vsPlayer = document.getElementById("new_v_play")
// const ex = document.getElementsByClassName("ex")
// const oh = document.getElementsByClassName("oh")

vsPlayer.addEventListener('click', setPlayerOne)
function setPlayerOne() {
    let playerOne = document.getElementsByName("player_select");
    console.log(playerOne)
}

let board = document.querySelector(".game_space");
board.addEventListener('click', setPiece);
function setPiece(e) {
    if (e.target.className === "block") {
        console.log("piece set!")
    }
}
