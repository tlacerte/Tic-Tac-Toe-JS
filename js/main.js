/*----- constants -----*/ 
const COLORS = {
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


/*----- event listeners -----*/ 


/*----- functions -----*/

function init() {
    board = [
        [null, null, null], //column1
        [null, null, null], //column2
        [null, null, null], //column3
    ];
    turn = 1;
    winner = null;   //1, -1, null (no winner), 'C' (cats game)
};
