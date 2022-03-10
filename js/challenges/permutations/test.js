const { permutations } = require('./index');

test('Permutations function exists', () => {
  expect(permutations).toBeDefined();
});

test('Finds permutations of a string', () => {
  const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
  expect(JSON.stringify(permutations('abc').sort())).toEqual(
    JSON.stringify(expected)
  );
});

test('Finds permutations of CART', () => {
const expected = [
  'ACRT', 'ACTR', 'ARCT',
  'ARTC', 'ATCR', 'ATRC',
  'CART', 'CATR', 'CRAT',
  'CRTA', 'CTAR', 'CTRA',
  'RACT', 'RATC', 'RCAT',
  'RCTA', 'RTAC', 'RTCA',
  'TACR', 'TARC', 'TCAR',
  'TCRA', 'TRAC', 'TRCA'
];
  expect(JSON.stringify(permutations('CART').sort())).toEqual(JSON.stringify(expected));
});