let vsPlayer = document.getElementById("new_v_play")


vsPlayer.addEventListener('click', setPlayerOne)
function setPlayerOne() {
    let playerOne = document.getElementsByName("player_select");
    for (i = 0; i < playerOne.length; i++) {
        if(playerOne[i].checked) {
            console.log(playerOne)
            localStorage.setItem('Player One', playerOne[i].value);
            // document.getElementById("result").innerHTML
            //    = "Player One is: " + playerOne[i].value
        } 
    }
    
}

// let board = document.querySelector(".game_space");
// board.addEventListener('click', setPiece);
// function setPiece(e) {
//     if (e.target.className === "block") {
//         console.log("piece set!")
//     }
// } 
/////////////////
// function winner(c1, c2, c3) {
//     c1.classList.add("win");
//     c2.classList.add("win");
//     c3.classList.add("win");
//     //modal call here
//     console.log("winner!")
// }
function winCon() {
    let cellOne = document.getElementById('one') 
    let cellTwo = document.getElementById('two')
    let cellThree = document.getElementById('three')
    let cellFour = document.getElementById('four')
    let cellFive = document.getElementById('five')
    let cellSix = document.getElementById('six')
    let cellSeven = document.getElementById('seven')
    let cellEight = document.getElementById('eight')
    let cellNine = document.getElementById('nine')

    if(cellOne !== "" && cellOne.innerHTML === cellTwo.innerHTML && cellOne.innerHTML === cellThree.innerHTML) {console.log("winner!")} else
    if(cellFour !== "" && cellFour.innerHTML === cellFive.innerHTML && cellFour.innerHTML === cellSix.innerHTML) {console.log("winner!")} else
    if(cellSeven !== "" && cellSeven.innerHTML === cellEight.innerHTML && cellSeven.innerHTML === cellNine.innerHTML) {console.log("winner!")} else
    if(cellOne !== "" && cellOne.innerHTML === cellFive.innerHTML && cellOne.innerHTML === cellNine.innerHTML) {console.log("winner!")} else
    if(cellSeven !== "" && cellSeven.innerHTML === cellFive.innerHTML && cellSeven.innerHTML === cellThree.innerHTML) {console.log("winner!")} else
    if(cellOne !== "" && cellOne.innerHTML === cellFour.innerHTML && cellOne.innerHTML === cellSeven.innerHTML) {console.log("winner!")} else
    if(cellTwo !== "" && cellTwo.innerHTML === cellFive.innerHTML && cellTwo.innerHTML === cellEight.innerHTML) {console.log("winner!")} else
    if(cellThree !== "" && cellThree.innerHTML === cellSix.innerHTML && cellThree.innerHTML === cellNine.innerHTML)  {console.log("winner!")} 
}


let cells = document.querySelectorAll(".game_space div"), turns = 0;
for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
        if (this.innerHTML !== "X" && this.innerHTML !== "O") {
            if (turns % 2 === 0 && this.innerHTML !== "O") {
                this.innerHTML = "X";
                turn.innerHTML = "O's turn";
                winCon();
                turns += 1;
            } else {
                this.innerHTML = "O";
                turn.innerHTML = "X's turn";
                winCon();
                turns += 1;
            
        }
    }
}
}


//Current issues: I can overwrite X and O, current logic doesn't stop it
//Does not spit out a win thing X = "&#215;" O = "&#8858;" UPDATE: symbols don't work, text does
//Need to fix if statements in winCon




//Edit this (Replay)
// document.getElementById('replay').addEventListener('click', replay);

// function replay() {

//       for (var i = 0; i < boxes.length; i++) {
//         cells[i].classList.remove("win");
//         cells[i].innerHTML = "";
//         turn.innerHTML = "Play";
//         turn.style.fontSize = "25px";

//       }

//     }