const funWithMaps = require('./index');

// beforeEach(() => {
//   jest.spyOn(console, 'log');
// });

// afterEach(() => {
//   console.log.mockRestore();
// });

test('funWithMaps is a function', () => {
	expect(typeof funWithMaps).toEqual('function');
});

// test('funWithMaps does something', () => {
// 	expect(console.log.mock.calls[0][0]).toEqual('𠮷');
// 	expect(console.log.mock.calls.length).toEqual(2);
// });