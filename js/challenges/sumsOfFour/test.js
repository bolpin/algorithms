const { sumsOfFour } = require('./index');

test('sumsOfFour function is defined', () => {
  expect(sumsOfFour).toBeDefined();
});

test('sumsOfFour with input of size four', () => {
  const fourOnes = [1,1,1,1]
  const expectedResult = [4]

  expect(JSON.stringify(sumsOfFour(fourOnes))).toEqual(JSON.stringify(expectedResult));
});

test('sumsOfFour with input of size five', () => {
  const fourOnes = [1,2,3,4,5]
  const expectedResult = [10, 11, 12, 13, 14];

  expect(JSON.stringify(sumsOfFour(fourOnes).sort((a,b) => a-b)).toEqual(JSON.stringify(expectedResult));
});
