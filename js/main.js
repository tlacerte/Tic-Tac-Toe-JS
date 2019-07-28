/*----- constants -----*/ 
const PLAYERS = {
    'null': null,
    '1': 'X',
    '-1': 'O',
};

const winningCombos = {
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [4, 5, 6],
    [7, 8, 9]
}

/*----- app's state (variables) -----*/ 
let board, turn, winner;

/*----- cached element references -----*/ 
var msg = document.querySelector('h2');
var boxes = document.querySelector('section div');

/*----- event listeners -----*/ 
document.querySelector('section').addEventListener('click', handleTurn)
document.querySelector('button').addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
    board = [null, null, null, null, null, null ,null, null, null];
    turn = 1;
    winner = null;   //1, -1, null (no winner), 'C' (cats game)
}

function handleTurn(event) {
    let idx = parseInt(event.target.id.replace('box', ''));
    if (board[idx] || winner) return;
    board[idx] = turn;
    turn *= -1;
    winner = getWinner();
    render();
}

function getWinner() {
    for (var i = 0; i < winningCombos.length; i++) {
    if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[0];
    if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[3];
    if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[6];
    if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0];
    if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[1];
    if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[2];
    if (Math.abs(board[0] + board[4] + board[8]) === 3) return board[0];
    if (Math.abs(board[2] + board[4] + board[6]) === 3) return board[2];
    }
    if (board.includes(null)) return null;
    return 'C';
}

function render() {
  board.forEach(function(box, idx) {
    boxes[idx].createTextNode = lookup[PLAYERS];
  });
  if (winner === 'C') {
    msg.innerHTML = 'CAT's Game!';
  } else if (winner) {
    msg.innerHTML = `${lookup[winner].toUpperCase()} WIN!`;
  } else {
    msg.innerHTML = `${lookup[turn].toUpperCase()}'s Turn`;
  }
}