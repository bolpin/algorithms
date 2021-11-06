const bitsToConvert = require('./index');
const logBinary = require('./logBinary');

test('bitsToConvert function is defined', () => {
  expect(typeof bitsToConvert).toEqual('function');
});

test('calculates', () => {
	expect(bitsToConvert(31, 14)).toEqual(2);
});





