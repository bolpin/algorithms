const funWithIterators = require('./index');

// beforeEach(() => {
//   jest.spyOn(console, 'log');
// });

// afterEach(() => {
//   console.log.mockRestore();
// });

test('funWithIterators is a function', () => {
	expect(typeof funWithIterators).toEqual('function');
});

// test('funWithIterators does something', () => {
// 	expect(console.log.mock.calls[0][0]).toEqual('𠮷');
// 	expect(console.log.mock.calls.length).toEqual(2);
// });