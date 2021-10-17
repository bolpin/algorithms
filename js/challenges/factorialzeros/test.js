const trailingZeros = require('./index');

test('trailingZeros function is defined', () => {
  expect(trailingZeros).toBeDefined();
});

test('retuns number of trailing zeros', () => {
	expect(trailingZeros(4)).toEqual(0);
	expect(trailingZeros(5)).toEqual(1);
	expect(trailingZeros(19)).toEqual(3);
});
