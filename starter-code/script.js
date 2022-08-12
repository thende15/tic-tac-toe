let vsPlayer = document.getElementById("new_v_play")


vsPlayer.addEventListener('click', setPlayerOne)
function setPlayerOne() {
    let playerOne = document.getElementsByName("player_select");
    for (i = 0; i < playerOne.length; i++) {
        if(playerOne[i].checked) {
            localStorage.setItem('Player One', playerOne[i].value);
            
            // document.getElementById("result").innerHTML
            //    = "Player One is: " + playerOne[i].value
            document.getElementById("page_one").style.display = "none";
            document.getElementById("page_two").style.display = "block";
        } else {
          document.getElementById("required").style.display
            = "block";
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
function winner(c1, c2, c3) {
  winModal.style.display = "block";
  let modalContent = document.querySelector('.modal-content')
  if (c1.innerHTML === "<img src='assets/icon-x.svg' class='set'>") {
    modalContent.querySelector('#x_win').style.display = 'block';
  } else  {
    modalContent.querySelector('#o_win').style.display = 'block';
  } 
  //let newWinner = document.createElement('div')
  //newWinner.innerHTML = c1 + " wins!"
  //winModal.prependParent() = c1.innerHTML + " wins!";
  //modalContent.appendChild(newWinner)
  
}

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
      winner(cellOne, cellTwo, cellThree)
    } else
    if(cellFour.innerHTML !== '' && cellFour.innerHTML === cellFive.innerHTML && cellFour.innerHTML === cellSix.innerHTML) 
    {console.log("winner!")
    winner(cellFour, cellFive, cellSix);} else
    if(cellSeven.innerHTML !== '' && cellSeven.innerHTML === cellEight.innerHTML && cellSeven.innerHTML === cellNine.innerHTML) 
    {console.log("winner!")
    winner(cellSeven, cellEight, cellNine);} else
    if(cellOne.innerHTML !== '' && cellOne.innerHTML === cellFive.innerHTML && cellOne.innerHTML === cellNine.innerHTML) 
    {console.log("winner!")
    winner(cellOne, cellFive, cellNine);} else
    if(cellSeven.innerHTML !== '' && cellSeven.innerHTML === cellFive.innerHTML && cellSeven.innerHTML === cellThree.innerHTML) 
    {console.log("winner!")
    winner(cellSeven, cellFive, cellThree);} else
    if(cellOne.innerHTML !== '' && cellOne.innerHTML === cellFour.innerHTML && cellOne.innerHTML === cellSeven.innerHTML) 
    {console.log("winner!")
    winner(cellOne, cellFour, cellSeven);} else
    if(cellTwo.innerHTML !== '' && cellTwo.innerHTML === cellFive.innerHTML && cellTwo.innerHTML === cellEight.innerHTML) 
    {console.log("winner!")
    winner(cellTwo, cellFive, cellEight);} else
    if(cellThree.innerHTML !== '' && cellThree.innerHTML === cellSix.innerHTML && cellThree.innerHTML === cellNine.innerHTML)  
    {console.log("winner!")
    winner(cellThree, cellSix, cellNine);} 
}


let cells = document.querySelectorAll(".game_space div"), turns = 0;
for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
        if (this.innerHTML !== "<img src='assets/icon-x.svg'>" && this.innerHTML !== "<img src='assets/icon-o.svg' >") {
            if (turns % 2 === 0 && this.innerHTML !== "<img src='assets/icon-o.svg' >") {
                this.innerHTML = "<img src='assets/icon-x.svg' class='set'>";
                turn.innerHTML = "<img src='assets/icon-o.svg' >'s turn";
                winCon();
                turns += 1;
            } else {
                this.innerHTML = "<img src='assets/icon-o.svg' class='set'>";
                turn.innerHTML = "<img src='assets/icon-x.svg'>'s turn";
                winCon();
                turns += 1;
            
        }
    }
}
}


//Current issues: I can overwrite X and O, current logic doesn't stop it
//When adding x/o, also add a class, then cursor not allowed
//Then add counters to winner modals (save to local)


//Replay
document.getElementById('confirm').addEventListener('click', replay);
let btnNxt = document.getElementById("nxtRoun").addEventListener('click', replay);
function replay() {
for (let i = 0; i < cells.length; i++) {
  let j = 0
  let boxes = j++
  cells[i].innerHTML = "";
  turn.innerHTML = "<img src='assets/icon-x.svg'>'s turn";
  turns = 0
  modal.style.display = "none";
  winModal.style.display = "none";
  }

}



//Reset Modal functions
let modal = document.getElementById("resModal");
let winModal = document.getElementById("winModal");
let btnRes = document.getElementById("reset");
let btnCan = document.getElementById("no");

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
  for (let i = 0; i < cells.length; i++) {
    let j = 0
    let boxes = j++
    cells[i].innerHTML = "";
    turn.innerHTML = "<img src='assets/icon-x.svg'>'s turn";
    turns = 0
    modal.style.display = "none";

  }
}