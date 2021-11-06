const reverseWords = require('./index');

test('ReverseWords function exists', () => {
  expect(reverseWords).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverseWords('The quick brown fox jumps')).toEqual(
	  'jumps fox brown quick The'
	  );
});
