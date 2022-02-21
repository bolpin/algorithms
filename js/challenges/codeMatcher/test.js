const { codeMatcher } = require('./index');

test('codeMatcher function is defined', () => {
  expect(codeMatcher).toBeDefined();
});

test('codeMatcher matches codes', () => {
  const codes = ['a a', 'b * e'];
  const pattern = 'aacbce'.split('');

  expect(codeMatcher(codes, pattern)).toEqual(1);
});

test('codeMatcher does not match when order is wrong', () => {
  const codes = ['b * e', 'a a'];
  const pattern = 'aacbce'.split('');

  expect(codeMatcher(codes, pattern)).toEqual(0);
});

test('codeMatcher requires that wildcard match one and only one', () => {
  const codes = ['a a', 'b * e'];
  const pattern = 'aacbcce'.split('');

  expect(codeMatcher(codes, pattern)).toEqual(0);
});

test('codeMatcher requires that wildcard match one and only one', () => {
  const codes = ['a a', 'b * e'];
  const pattern = 'aacbe'.split('');

  expect(codeMatcher(codes, pattern)).toEqual(0);
});

test('codeMatcher does not match when subsequent codes require all pattern elements that have previously been matched to a code', () => {
  const codes = ['a a', 'a a *']; // note that second pattern is matched by first pattern
  const pattern = 'aac'.split('');

  expect(codeMatcher(codes, pattern)).toEqual(0);
});

