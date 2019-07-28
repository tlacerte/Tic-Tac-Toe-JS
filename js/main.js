/*----- constants -----*/ 
const COLORS = {
    'null': null,
    '1': 'purple',
    '-1': 'green',
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
var boardsqs = document.querySelector('section div');

// var box1 = document.getElementById('box1');
// var box2 = document.getElementById('box2');
// var box3 = document.getElementById('box3');
// var box4 = document.getElementById('box4');
// var box5 = document.getElementById('box5');
// var box6 = document.getElementById('box6');
// var box7 = document.getElementById('box7');
// var box8 = document.getElementById('box8');
// var box9 = document.getElementById('box9');


/*----- event listeners -----*/ 
document.querySelector('section').addEventListener('click', handleTurn)
document.querySelector('button').addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
    board = [
        [null, null, null], //column1
        [null, null, null], //column2
        [null, null, null], //column3
    ];
    turn = 1;
    winner = null;   //1, -1, null (no winner), 'C' (cats game)
};

function handleTurn(event) {
    let idx = parseInt(event.target.id.replace('go', ''));
    if (board[idx] || winner) return;
    board[idx] = turn;
    turn *= -1;
    winner = getWinner();
    render();
}

function getWinner() {
    if (Math.abs(board[0][0] + board[0][1] + board[0][2]) === 3) return board[0[0]];
    if (Math.abs(board[1][0] + board[1][1] + board[1][2]) === 3) return board[1][0];
    if (Math.abs(board[2][0] + board[2][1] + board[2][2]) === 3) return board[2,0];
    if (Math.abs(board[0][0] + board[1][0] + board[2][0]) === 3) return board[0][0];
    if (Math.abs(board[0][1] + board[1][1] + board[2][1]) === 3) return board[0],[1];
    if (Math.abs(board[0][2] + board[1][2] + board[2][2]) === 3) return board[0][2];
    if (Math.abs(board[0][0] + board[1][1] + board[2][2]) === 3) return board[0][0];
    if (Math.abs(board[2][0] + board[2][1] + board[0][2]) === 3) return board[0][2];
    if (board.includes(null)) return null;
    return 'T';
}

function render() {
  board.forEach(function(sq, idx) {
    squares[idx].style.background = lookup[sq];
  });
  if (winner === 'T') {
    msg.innerHTML = 'CAT's Game!';
  } else if (winner) {
    msg.innerHTML = `${lookup[winner].toUpperCase()} WIN!`;
  } else {
    msg.innerHTML = `${lookup[turn].toUpperCase()}'s Turn`;
  }
}