const { smallestPosIntOmitted } = require('./index');

test('smallestPosIntOmitted is a function', () => {
  expect(typeof smallestPosIntOmitted).toEqual('function');
});

test('returns the smallest pos int not appearing in input', () => {
  expect(smallestPosIntOmitted([1,2,3])).toEqual(4);
});

test('returns the smallest pos int not appearing in input', () => {
  expect(smallestPosIntOmitted([-2,-3])).toEqual(1);
});

test('returns the smallest pos int not appearing in input', () => {
  expect(smallestPosIntOmitted([])).toEqual(1);
});

test('returns the smallest pos int not appearing in input', () => {
  expect(smallestPosIntOmitted([1,2,4,6,5,-22])).toEqual(3);
});
