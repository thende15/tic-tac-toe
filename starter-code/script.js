let vsPlayer = document.getElementById("new_v_play")
const ex = document.getElementsByClassName("ex")
const oh = document.getElementsByClassName("oh")

vsPlayer = addEventListener(onclick, setPlayerOne)
function setPlayerOne() {
    let playerOne = document.getElementsByName("player_select").values()
    console.log(playerOne)
}

let board = document.getElementsByClassName("game_space")
board.click(console.log("clicked!"))