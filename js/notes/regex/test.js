const regexAndStrings = require('./index');

// beforeEach(() => {
//   jest.spyOn(console, 'log');
// });

// afterEach(() => {
//   console.log.mockRestore();
// });

test('regexAndStrings is a function', () => {
	expect(typeof regexAndStrings).toEqual('function');
});

// test('regex does something', () => {
// 	expect(console.log.mock.calls[0][0]).toEqual('𠮷');
// 	// expect(console.log.mock.calls.length).toEqual(25);
// });