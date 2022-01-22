const destructuringFun = require('./index');

// beforeEach(() => {
//   jest.spyOn(console, 'log');
// });

// afterEach(() => {
//   console.log.mockRestore();
// });

test('destructuringFun is a function', () => {
	expect(typeof destructuringFun).toEqual('function');
});

// test('destructuringFun does something', () => {
// 	expect(console.log.mock.calls[0][0]).toEqual('𠮷');
// 	// expect(console.log.mock.calls.length).toEqual(25);
// });