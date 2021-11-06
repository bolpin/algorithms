const objectFun = require('./index');

// beforeEach(() => {
//   jest.spyOn(console, 'log');
// });

// afterEach(() => {
//   console.log.mockRestore();
// });

test('objectFun is a function', () => {
	expect(typeof objectFun).toEqual('function');
});

// test('objectFun does something', () => {
// 	expect(console.log.mock.calls[0][0]).toEqual('𠮷');
// 	// expect(console.log.mock.calls.length).toEqual(25);
// });