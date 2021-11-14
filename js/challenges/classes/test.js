const funWithClasses = require('./index');

// beforeEach(() => {
//   jest.spyOn(console, 'log');
// });

// afterEach(() => {
//   console.log.mockRestore();
// });

test('funWithClasses is a function', () => {
	expect(typeof funWithClasses).toEqual('function');
});

// test('funWithClasses does something', () => {
// 	expect(console.log.mock.calls[0][0]).toEqual('𠮷');
// 	expect(console.log.mock.calls.length).toEqual(2);
// });