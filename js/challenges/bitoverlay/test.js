const overlay = require('./index');
const logBinary = require('./logBinary');

test('overlay function is defined', () => {
  expect(typeof overlay).toEqual('function');
});

test('calculates overlay 19, 1024, 2, 6', () => {
	expect(overlay(19, 1024, 2, 6)).toEqual(1100);
});

test('calculates overlay 3, 36, 3, 5', () => {
	expect(overlay(3, 36, 3, 5)).toEqual(28);
});

test('calculates overlay, 2, 22, 1, 3', () => {
	expect(overlay(2, 22, 1, 3)).toEqual(20);
});

test('calculates overlay 4, 31, 1, 3', () => {
	expect(overlay(4, 31, 1, 3)).toEqual(25);
});


