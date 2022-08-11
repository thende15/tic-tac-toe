let vsPlayer = document.getElementById("new_v_play")
// const ex = document.getElementsByClassName("ex")
// const oh = document.getElementsByClassName("oh")

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

// let svg = document.getElementById("test"); //Get svg element


// let newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace

// newElement.setAttribute("d","M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"); //Set path's data

// newElement.style.fill = "#979797"
// newElement.style.fillRule = "evenodd"
// svg.appendChild(newElement);

let cells = document.querySelectorAll(".game_space div"), turns = 0;
for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
        if (this.innerHTML !== "&#215;" && this.innerHTML !== "&#8858;") {
            if (turns % 2 === 0) {
                this.innerHTML = "&#215;";
                turn.innerHTML = "&#8858;'s turn"
                turns += 1;
            } else {
                if (turns % 2 === 1) {
                    this.innerHTML = "&#8858;";
                    turn.innerHTML = "&#215;'s turn"
                    turns += 1;
            }
        }
    }
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
// function winCon() {
//     let cellOne = document.getElementById('one')
//     let cellTwo = document.getElementById('two')
//     let cellThree = document.getElementById('three')
//     let cellFour = document.getElementById('four')
//     let cellFive = document.getElementById('five')
//     let cellSix = document.getElementById('six')
//     let cellSeven = document.getElementById('seven')
//     let cellEight = document.getElementById('eight')
//     let cellNine = document.getElementById('nine')

//     if(cellOne === cellTwo === cellThree)
//     if(cellFour === cellFive === cellSix)
//     if(cellSeven === cellEight === cellNine)
//     if(cellOne === cellFive === cellNine)
//     if(cellSeven === cellFive === cellThree)
//     if(cellOne === cellFour === cellSeven)
//     if(cellTwo === cellFive === cellEight)
//     if(cellThree === cellSix === cellNine)
// }





//Edit this (Replay)
// document.getElementById('replay').addEventListener('click', replay);

//     function replay() {

//       for (var i = 0; i < boxes.length; i++) {
//         boxes[i].classList.remove("win");
//         boxes[i].innerHTML = "";
//         turn.innerHTML = "Play";
//         turn.style.fontSize = "25px";

//       }

//     }