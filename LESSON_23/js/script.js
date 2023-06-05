let firstPlayer = 'X';
let gameStart = true;

let winComb = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
cells.forEach(cell => {
    cell.addEventListener('click', hand, { once: true });
});
reset.addEventListener('click',resetGame);
function hand(e) {
    let cell =e.target;
    let cellIndex = Array.from(cells).indexOf(cell);
    if(board[cellIndex]!==) {
        
    }
}