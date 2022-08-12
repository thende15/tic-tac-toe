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
    document.getElementById("page_one").style.display = "none";
    document.getElementById("page_two").style.display = "block";
    
    
}

// let board = document.querySelector(".game_space");
// board.addEventListener('click', setPiece);
// function setPiece(e) {
//     if (e.target.className === "block") {
//         console.log("piece set!")
//     }
// } 
/////////////////

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

    if(cellOne.innerHTML !== '' && cellOne.innerHTML === cellTwo.innerHTML && cellOne.innerHTML === cellThree.innerHTML) 
    {console.log("winner!")
      winModal.style.display = "block"; 
      if (cellOne.innerHTML && cellTwo.innerHTML && cellThree.innerHTML === "<img src='assets/icon-x.svg' class='set'>") {
        winModal.prependChild("X is the Winner!")  
      }
    } else
    if(cellFour.innerHTML !== '' && cellFour.innerHTML === cellFive.innerHTML && cellFour.innerHTML === cellSix.innerHTML) 
    {console.log("winner!")
    winModal.style.display = "block";} else
    if(cellSeven.innerHTML !== '' && cellSeven.innerHTML === cellEight.innerHTML && cellSeven.innerHTML === cellNine.innerHTML) 
    {console.log("winner!")
    winModal.style.display = "block";} else
    if(cellOne.innerHTML !== '' && cellOne.innerHTML === cellFive.innerHTML && cellOne.innerHTML === cellNine.innerHTML) 
    {console.log("winner!")
    winModal.style.display = "block";} else
    if(cellSeven.innerHTML !== '' && cellSeven.innerHTML === cellFive.innerHTML && cellSeven.innerHTML === cellThree.innerHTML) 
    {console.log("winner!")
    winModal.style.display = "block";} else
    if(cellOne.innerHTML !== '' && cellOne.innerHTML === cellFour.innerHTML && cellOne.innerHTML === cellSeven.innerHTML) 
    {console.log("winner!")
    winModal.style.display = "block";} else
    if(cellTwo.innerHTML !== '' && cellTwo.innerHTML === cellFive.innerHTML && cellTwo.innerHTML === cellEight.innerHTML) 
    {console.log("winner!")
    winModal.style.display = "block";} else
    if(cellThree.innerHTML !== '' && cellThree.innerHTML === cellSix.innerHTML && cellThree.innerHTML === cellNine.innerHTML)  
    {console.log("winner!")
    winModal.style.display = "block";} 
}


let cells = document.querySelectorAll(".game_space div"), turns = 0;
for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
        if (this.innerHTML !== "<img src='assets/icon-x.svg' >" && this.innerHTML !== "<img src='assets/icon-o.svg' >") {
            if (turns % 2 === 0 && this.innerHTML !== "<img src='assets/icon-o.svg' >") {
                this.innerHTML = "<img src='assets/icon-x.svg' class='set'>";
                turn.innerHTML = "<img src='assets/icon-o.svg' >'s turn";
                winCon();
                turns += 1;
            } else {
                this.innerHTML = "<img src='assets/icon-o.svg' class='set'>";
                turn.innerHTML = "<img src='assets/icon-x.svg' >'s turn";
                winCon();
                turns += 1;
            
        }
    }
}
}


//Current issues: I can overwrite X and O, current logic doesn't stop it
//Does not spit out a win thing X = "&#215;" O = "&#8858;" UPDATE: symbols don't work, text does
//When adding x/o, also add a class, then cursor not allowed
//When resetting, needs to go back to initial start; set ids to initial state w/ function
//Reset half works; not looping, therefore not adding individual values
//Then add counters to winner modals (save to local)


//Replay
document.getElementById('confirm').addEventListener('click', replay);

function replay() {

      for (let i = 0; i < cells.length; i++) {
        let j = 0
        let boxes = j++
        cells[i].innerHTML = "";
        turn.innerHTML = "X's turn";
        turns = 0
        modal.style.display = "none";

      }

    }


//Reset Modal functions
let modal = document.getElementById("resModal");
let winModal = document.getElementById("winModal");
let btnRes = document.getElementById("reset");
let btnCan = document.getElementById("no");
let btnNxt = document.getElementById("nxtRoun");
let btnQt = document.getElementById("quit");
btnRes.onclick = function() {
  modal.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == winModal) {
    winModal.style.display = "none";
  }
}
btnCan.onclick = function() {
  modal.style.display = "none";
}
btnQt.onclick = function() {
  winModal.style.display = "none";
  document.getElementById("page_one").style.display = "block";
  document.getElementById("page_two").style.display = "none";
}