const { maxContiguousSum } = require('./index');

test('maxContiguousSum function is defined', () => {
  expect(maxContiguousSum).toBeDefined();
});

test('maxContiguousSum', () => {
  expect(maxContiguousSum([2, 3, -8, -1, 2, 4, -2, 3])).toEqual(7);
  expect(maxContiguousSum([100, -5, 1, -5, 1, -5, 100])).toEqual(187);
  expect(maxContiguousSum([100, -5, 6, -99, -5, 1, -5, 100])).toEqual(101);
});