const { step } = require('./index');

test('step function exists', () => {
  expect(step).toBeDefined();
});

test('Finds next step in game', () => {
  const input = [
    [0,1,0,1],
    [0,0,0,1],
    [1,1,1,0],
    [0,1,0,0]
  ]
  const expected = [
    [0,0,1,0],
    [1,0,0,1],
    [1,1,1,0],
    [1,1,1,0]
  ]

  result = step(input)
  // console.log(result);
  // console.log(JSON.stringify(result))

  expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
});
