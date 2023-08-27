// debugger
let nowPleaer = 'X';
let gameStart = true;
let cells = document.querySelectorAll('.cell');
let board = Array(9).fill('');
let reset = document.querySelector('#reset')
let winComb = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
cells.forEach(cell => {
    cell.addEventListener('click', hand, { once: true });
});
reset.addEventListener('click', resetGame);
function hand(e) {
    let cell = e.target;
    let cellIndex = Array.from(cells).indexOf(cell);
    if (board[cellIndex] !== '' || !gameStart) {
        return;
    }
    clik(cell, cellIndex);
    winner();
    draw();
    plaers();
}
function clik(cell, cellIndex) {
    cell.innerText = nowPleaer;
    board[cellIndex] = nowPleaer;
}
function plaers() {
    nowPleaer = nowPleaer === 'X' ? 'O' : 'X';
}
function winner() {
    for (let i = 0; i < winComb.length; i++) {
        let [a, b, c] = winComb[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameStart = false;
            cells[a].classList.add('win');
            cells[b].classList.add('win');
            cells[c].classList.add('win');
            alert(`${board[a]}-ն հաղթեց`);
            break;
        }
    }
}
function draw() {
    if (![...board].includes('')) {
        gameStart = false;
        alert('Ոչոքի');
    }
}
function resetGame() {
    board.fill('');
    cells.forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('win');
        cell.addEventListener('click', hand, { once: true });
    });
    nowPleaer = 'X';
    gameStart = true;
}