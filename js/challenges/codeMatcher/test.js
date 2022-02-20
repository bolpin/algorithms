const { codeMatcher } = require('./index');

test('codeMatcher function is defined', () => {
  expect(codeMatcher).toBeDefined();
});

test('codeMatcher matches codes', () => {
  const codes = [['a', 'a'], ['b', '*', 'e']];
  const pattern = 'aaeb*e'.split('');

  expect(codeMatcher(codes, pattern)).toEqual(1);
});

test('codeMatcher does not match when order is wrong', () => {

  const codes = [['a', 'a'], ['b', '*', 'e']];
  const pattern = 'aacbce'.split('');

  expect(codeMatcher(codes, pattern)).toEqual(0);
});

test('codeMatcher does not match when order is wrong', () => {

  const codes = [['b', '*', 'e'],['a', 'a']];
  const pattern = 'aacbce'.split('');

  expect(codeMatcher(codes, pattern)).toEqual(0);
});

test('codeMatcher requires that wildcard match one and only one element', () => {

  const codes = [['a', 'a'], ['b', '*', 'e']];
  const pattern = 'caacbe'.split('');

  expect(codeMatcher(codes, pattern)).toEqual(0);
});

test('codeMatcher that wildcard match one and only one element', () => {

  const codes = [['a', 'a'], ['a', 'a', '*']];
  const pattern = 'caacaace'.split('');

  expect(codeMatcher(codes, pattern)).toEqual(0);
});


// test('empty repository queried with: fronti', () => {
//   const emptyRepo = [];
//   const expectedResult = [];

//   expect(JSON.stringify(suggestUpToThree(emptyRepo, 'fronti')))
//     .toEqual(JSON.stringify(expectedResult));
// });
