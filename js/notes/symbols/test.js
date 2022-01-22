const symbolFun = require('./index');

// beforeEach(() => {
//   jest.spyOn(console, 'log');
// });

// afterEach(() => {
//   console.log.mockRestore();
// });

test('symbolFun is a function', () => {
	expect(typeof symbolFun).toEqual('function');
});

// test('symbolFun does something', () => {
// 	expect(console.log.mock.calls[0][0]).toEqual('𠮷');
// 	// expect(console.log.mock.calls.length).toEqual(25);
// });