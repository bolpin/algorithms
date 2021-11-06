const codepoint = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('codepoint is a function', () => {
	expect(typeof codepoint).toEqual('function');
});

test('prints a Chinese character', () => {
	codepoint();
	expect(console.log.mock.calls[0][0]).toEqual('𠮷');
	// expect(console.log.mock.calls.length).toEqual(25);
});