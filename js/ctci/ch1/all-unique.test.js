const allUnique = require('./all-unique');
// const Node = midpoint.Node;

test('allUnique is a function', () => {
  expect(typeof allUnique).toEqual('function');
});

describe('allUnique', () => {
  test('returns false when there are duplicates', () => {
    expect(allUnique()).toEqual(false);
  });

  test('returns true when no duplicates', () => {
    expect(allUnique('!@#abcdefghiABC')).toEqual(true);
  });

  test('returns false for an empty string', () => {
    expect(allUnique('!@#abcdefghiABC')).toEqual(true);
  });

  test('works for a one character string') {
    expect(allUnique('A')).toEqual(true);
  }

});