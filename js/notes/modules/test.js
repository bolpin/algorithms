const funWithModules = require('./index');

// beforeEach(() => {
//   jest.spyOn(console, 'log');
// });

// afterEach(() => {
//   console.log.mockRestore();
// });

test('funWithModules is a function', () => {
	expect(typeof funWithModules).toEqual('function');
});

// test('funWithModules does something', () => {
// 	expect(console.log.mock.calls[0][0]).toEqual('𠮷');
// 	expect(console.log.mock.calls.length).toEqual(2);
// });