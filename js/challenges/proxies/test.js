const funWithProxies = require('./index');

// beforeEach(() => {
//   jest.spyOn(console, 'log');
// });

// afterEach(() => {
//   console.log.mockRestore();
// });

test('funWithProxies is a function', () => {
	expect(typeof funWithProxies).toEqual('function');
});

// test('funWithProxies does something', () => {
// 	expect(console.log.mock.calls[0][0]).toEqual('𠮷');
// 	expect(console.log.mock.calls.length).toEqual(2);
// });