const vowels = require('./index');

test('Vowels is a function', () => {
  expect(typeof vowels).toEqual('function');
});

test('returns the number of vowels used', () => {
  expect(vowels('aaeiou')).toEqual(6);
});

test('returns the number of vowels used when they are capitalized', () => {
  expect(vowels('AEIOUiou')).toEqual(8);
});

test('returns the number of vowels used', () => {
  expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowels('bcdfghjkl')).toEqual(0);
});
