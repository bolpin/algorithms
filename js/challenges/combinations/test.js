const combinations = require('./index');

test('Combinations function exists', () => {
  expect(combinations).toBeDefined();
});

test('Finds combinations of set of four', () => {
  let combos = combinations('abcd'.split(''));

  expect(combos.length).toEqual(16);

  expect(((combos.filter( x => x.length === 4))[0]).length)
    .toEqual(4);

  expect(JSON.stringify(combos.filter( x => x.length === 4)))
    .toEqual(JSON.stringify([["d","c","b","a"]]));

});

test('Finds combinations of null set', () => {
  let combos = combinations([]);

  expect(combos.length).toEqual(1);

  expect(combos).toEqual([[]]);

});

test('Finds combinations of set of size one', () => {
  let combos = combinations('a'.split(''));

  expect(combos.length).toEqual(2);

});
