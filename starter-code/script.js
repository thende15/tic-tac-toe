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
let cells = document.querySelectorAll(".game_space div"), turns = 0;
for (let i = 0; i< cells.length; i++) {
    cells[i].onclick = function() {
        if (this.innerHTML !== "X" && this.innerHTML !== "O") {
            if (turns % 2 === 0) {
                this.innerHTML = "X";
                turns += 1;
            } else {
                if (turns % 2 === 1) {
                    this.innerHTML = "O";
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


// var svg = document.getElementById("1"); //Get svg element


// var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace

// newElement.setAttribute("d","M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"); //Set path's data

// newElement.style.fill = "#979797"
// newElement.style.fillRule = "evenodd"
// svg.appendChild(newElement);