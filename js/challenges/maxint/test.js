const maxNaive = require('./index');

test('maxChar function exists', () => {
  expect(typeof maxNaive).toEqual('function');
});

test('Finds the maximum of the two ints', () => {
  expect(maxNaive(3, 4)).toEqual(4);
  expect(maxNaive(4, 3)).toEqual(4);
  expect(maxNaive(-2, 2)).toEqual(2);
  expect(maxNaive(2, -2)).toEqual(2);
  expect(maxNaive(2, 2)).toEqual(2);
  expect(maxNaive(-2, -2)).toEqual(-2);

  const bigNumber = Number.MAX_SAFE_INTEGER; 

//   // Overflow warning!
//   expect(maxNaive(bigNumber, 10)).toEqual(bigNumber);

//   // Overflow warning!
//   expect(maxNaive(bigNumber, -10)).toEqual(bigNumber);

//   // Overflow warning!
//   expect(maxNaive(bigNumber, -bigNumber)).toEqual(bigNumber);

});

