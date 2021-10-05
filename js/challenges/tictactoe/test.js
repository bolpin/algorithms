const winner = require('./index');

test('winner function is defined', () => {
  expect(winner).toBeDefined();
});

test('returns the winner for a full row', () => {
	const boards = [
		['x',  'x',  'x',
		 null, null, null,
		 null, null, null
		],
		[null, null, null,
		 'x',  'x',  'x',
		 null, null, null
		],
		[null, null, null,
		 null, null, null,
		 'x',  'x',  'x'
		]
	]

	for (board of boards) {
		expect(winner(board)).toEqual('x');
	}
});

test('returns the winner for a full column', () => {
	const boards = [
		['o', null, null,
		 'o', null, null,
		 'o', null, null
		],
		[null, 'o', null,
	 	 null, 'o', null,
		 null, 'o', null
		],
		[null, null, 'o',
		 null, null, 'o',
	     null, null, 'o'],
	]

	for (board of boards) {
		expect(winner(board)).toEqual('o');
	}
});

test('returns the winner for a full diagonal', () => {
	let board = ['x',  null, null,
	             null, 'x',  null,
				 null, null, 'x'];
	expect(winner(board)).toEqual('x');

	board = [null, null, 'o',
	         null, 'o', null,
			 'o', null, null];
	expect(winner(board)).toEqual('o');
});

test('returns false for a draw', () => {
	const board = ['o', 'x', 'o',
	               'o', 'x', 'o',
				   'x', 'o', 'x'];
	expect(winner(board)).toEqual(false);
});

test('returns false for an empty board', () => {
	const board = [null, null, null,
		           null, null, null,
				   null, null, null];
	expect(winner(board)).toEqual(false);
});

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});
