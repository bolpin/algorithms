const { strengthTest } = require('./index');

test('strengthTest function is defined', () => {
  expect(strengthTest).toBeDefined();
});

test('strengthTest - caps, numbers, symbols are stripped', () => {
  expect(strengthTest('teFOO234$st')).toEqual(19);
});

test('strengthTest - length 1', () => {
  expect(strengthTest('a')).toEqual(1);
});

test('strengthTest - empty is 0', () => {
  expect(strengthTest('')).toEqual(0);
});

