// --- Directions
// given a 9-element tic-tac-toe board array
// e.g.
// ['x', null, 'o', null, 'o', 'x', null, null, 'x' ] 
//
//  x _ o         0 1 2
//  _ o x         3 4 5
//  _ _ x         6 7 8
//
// return whether the board has a winner by
// returning 'x', 'o', or false (no winner yet or draw)

const gameHash = buildGameHash();

function winner(board) {
	return gameHash[boardToInt(board)];
}

// base3 representation of a tic-tac-toe board
// 
//      0 1 2
//      3 4 5
//      6 7 8
//
// K0*3^0 + K1*3^1 + ... + K8*3^8
// Where Kn = 0 if the nth space is empty
//            1 if the nth space is occupied by x
//            2 if the nth space is occupied by o
function boardToInt(board) {
	let result = 0;
	let multiplier = 0;
	let factor = 1;
	for (let n = 0; n < 9; n++)	{
		switch(board[n]) {
			case 'x': 
				multiplier = 1;
				break;
			case 'o':
				multiplier = 2;
				break;
			default:
				multiplier = 0;
				break;
		}
		result += factor * multiplier; 
		factor *= 3;
	}
	return result;
}

function intToBoard(state) {
	let board = [];

	for (let n = 8; n >= 0; n--) {
		const factor = Math.pow(3, n);
		let player = Math.floor(state / factor);
		if (player === 2) {
			board.unshift('o');
		} else if (player === 1) {
			board.unshift('x');
		} else {
			board.unshift(null);
		}
		state = state % factor;
	}
	return board;
}

// return the value for all boards
function maxBase3BoardVal() {
	return boardToInt([
		'o', 'o', 'o',
		'o', 'o', 'o',
		'o', 'o', 'o'
	]);
}

function buildGameHash() {
	let winnersCache = {};
	for (let i = 0; i <= maxBase3BoardVal(); i++) {
		let boardArray = intToBoard(i);
		winnersCache[i] = calculateWinner(intToBoard(i));	
	}
	return winnersCache;
}

function calculateWinner(board) {
	let winners = {};

	// check for diagonals
	if (board[4] === board[0] &&
		board[4] === board[8]) {
		return board[4] || false;
	}
	if (board[4] === board[2] &&
		board[4] === board[6]) {
		return board[4] || false;
	}

	// 0 1 2
	// 3 4 5
	// 6 7 8

	// check for rows
	for (let i = 0; i < 3; i++) {
		if (board[i*3] &&
			board[i*3] === board[(i*3) + 1] &&
			board[i*3] === board[(i*3) + 2]) {
				return board[i*3];
			}		
	}

	// check for columns
	for (let i = 0; i < 3; i++) {
		if (board[i] &&
			board[i] === board[(i + 3)] &&
			board[i] === board[(i + 6)]) {
				return board[i];
			}
	}

	return false;
}

// for (let board of [
// 	[null, null, null, null, null, null, null, null, null],
// 	['x', null, null, null, null, null, null, null, null],
// 	['o', null, null, null, null, null, null, null, null],
// 	['x', 'o', null, null, null, null, null, null, null],
// 	['o', 'x', null, null, null, null, null, null, null],
// 	['x', null, null, null, null, null, null, null, 'o'],
// 	['o', null, null, null, null, null, null, null, 'x']
// ]) {
// 	console.log(board);
// 	console.log(boardToInt(board));
// 	console.log(intToBoard(boardToInt(board)));
// }

// for(let i = 0; i < 50; i++) {
// 	console.log(i);
// 	console.log(intToBoard(i));
// }
// const db = buildGameHash();
// console.log(Object.keys(db).length);

// const boards = [
// 	['x',  'x',  'x',
// 	 null, null, null,
// 	 null, null, null
// 	],
// 	[null, null, null,
// 	 'x',  'x',  'x',
// 	 null, null, null
// 	],
// 	[null, null, null,
// 	 null, null, null,
// 	 'x',  'x',  'x'
// 	],
// 	['o', null, null,
// 	 'o', null, null,
// 	 'o', null, null
// 	],
// 	[null, 'o', null,
// 	 null, 'o', null,
// 	 null, 'o', null
// 	],
// 	[null, null, 'o',
// 	 null, null, 'o',
// 	 null, null, 'o']
// ];

// for (const board of boards) {
// 	console.log(board);
// 	console.log(db[boardToInt(board)]);
// }

// console.log(winner(['o', 'x', 'o', 'o', 'x', 'o', 'x', 'o', 'x']));

module.exports = winner;

