// // let img1 = ['image/1.jpg', 'image/2.jpg', 'image/3.jpg'];
// // let next = document.querySelector('#next');
// // let prev = document.querySelector('#prevous');
// // let img = document.querySelector('#img');
// // img.style.width = '500px'
// // let ind = 0
// // img.src = img1[ind];
// // next.addEventListener('click', () => {
    
// //     ind%=img1.length
// //     if (ind === img1.length - 1) {
// //         ind = 0;
// //     }
// //     img.src = img1[++ind];
    
// // })

// // prev.addEventListener('click', () => {
// //     console.log(ind);
// //     ind--
// //     if (ind < 0) {
// //         ind = img1.length - 1;
// //     }
// //    img.src = img1[ind]
// // })









let player = 1; // Player 1 is the human, Player 2 is the computer
let cells = document.querySelectorAll('td');
let resetButton = document.querySelector('#reset');


// Add event listener to each cell
cells.forEach(function(cell) {
	cell.addEventListener('click', cellClicked);
  });
  
  function cellClicked() {
	if (player === 1 && this.innerHTML === '') {
	  this.innerHTML = 'X';
	  player = 2;
	  checkForWin();
	  computerTurn();
	} else {
	  // Do nothing if the cell is already filled or it's the computer's turn
	}
  }
  function computerTurn() {
	let emptyCells = [];
	cells.forEach(function(cell) {
	  if (cell.innerHTML === '') {
		emptyCells.push(cell);
	  }
	});
  
	if (emptyCells.length > 0 && player === 2) {
	  let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
	  randomCell.innerHTML = 'O';
	  player = 1;
	  checkForWin();
	} else {
	  // Do nothing if all cells are filled or it's the human's turn
	}
  }
  function checkForWin() {
	let winningConditions = [
	  [0, 1, 2],
	  [3, 4, 5],
	  [6, 7, 8],
	  [0, 3, 6],
	  [1, 4, 7],
	  [2, 5, 8],
	  [0, 4, 8],
	  [2, 4, 6]
	];
	for (let i = 0; i < winningConditions.length; i++) {
	  let condition = winningConditions[i];
	  if (cells[condition[0]].innerHTML !== '' && 
		  cells[condition[0]].innerHTML === cells[condition[1]].innerHTML && 
		  cells[condition[1]].innerHTML === cells[condition[2]].innerHTML) {
		announceWinner(cells[condition[0]].innerHTML);
	  }
	}
  
	if (!isGameOver() && player === 2) {
	  computerTurn();
	}
 }
  


// let board = [
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', '']
//   ];
  
//   let players = ['X', 'O'];
  
//   // počinje igrač X
//   let currentPlayer = players[0]; 
  
//   let cells = document.querySelectorAll('.cell');
//   cells.forEach(function(cell) {
//     cell.addEventListener('click', cellClicked);
//   });
  
//   startNewGame();
  
//   function startNewGame() {
//     board = [
//       ['', '', ''],
//       ['', '', ''],
//       ['', '', '']
//     ];
//     currentPlayer = players[0]; 
//     clearBoard();
//   }
  
//   function clearBoard() {
//     cells.forEach(function(cell) {
//       cell.textContent = '';
//     });
//   }
  
//   function cellClicked(e) {
//     let row = e.target.parentNode.rowIndex;
//     let col = e.target.cellIndex;
  
//     if (board[row][col] === '') {
//       e.target.textContent = currentPlayer;
//       board[row][col] = currentPlayer;
  
//       if (checkWinner()) {
//         alert(currentPlayer + ' je pobijedio!');
//         startNewGame();
//       } else if (isBoardFull()) {
//         alert('Igrači su izjednačeni!');
//         startNewGame();
//       } else {
//         currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
//       }
//     }
//   }
  
//   function checkWinner() {
//     for (let i = 0; i < 3; i++) {
//       if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
//         return true;
//       }
//       if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
//         return true;
//       }
//     }
  
//     if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
//       return true;
//     }
    
//     if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
//       return true;
//     }
  
//     return false;
//   }
  
//   function isBoardFull() {
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         if (board[i][j] === '') {
//           return false;
//         }
//       }
//     }
//     return true;
//   }
  