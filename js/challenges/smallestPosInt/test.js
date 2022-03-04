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

test('returns the smallest pos int not appearing in input when empty array passed in', () => {
  expect(smallestPosIntOmitted([])).toEqual(1);
});

test('returns the smallest pos int not appearing in input', () => {
  expect(smallestPosIntOmitted([1,2,4,6,5,-22])).toEqual(3);
});

test('returns the smallest pos int not appearing in input', () => {
  const ar = []
  for (let i = 0; i < 100000; i++) {
    ar.push(i); 
  }
  expect(smallestPosIntOmitted(ar)).toEqual(100000);
});

