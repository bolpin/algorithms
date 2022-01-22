const functionFun = require('./index');

// beforeEach(() => {
//   jest.spyOn(console, 'log');
// });

// afterEach(() => {
//   console.log.mockRestore();
// });

test('functionFun is a function', () => {
	expect(typeof functionFun).toEqual('function');
});

// test('functionFun does something', () => {
// 	expect(console.log.mock.calls[0][0]).toEqual('𠮷');
// 	// expect(console.log.mock.calls.length).toEqual(25);
// });