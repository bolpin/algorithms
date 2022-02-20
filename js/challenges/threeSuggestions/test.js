const { suggestUpToThree } = require('./index');

const mixedCaseRepo = [
  'frog',
  'fraud',
  'flying',
  'FRIEND',
  'fryING',
  'Frodo',
  'frontispiece',
  'frontline',
  'frond'
]

test('suggestUpToThree function is defined', () => {
  expect(suggestUpToThree).toBeDefined();
});


test('empty repository queried with: fronti', () => {
  const emptyRepo = [];
  const expectedResult = [];

  expect(JSON.stringify(suggestUpToThree(emptyRepo, 'fronti')))
    .toEqual(JSON.stringify(expectedResult));
});

test('mixedCase repository queried with non-string', () => {
  const emptyRepo = [];
  const expectedResult = [];

  expect(JSON.stringify(suggestUpToThree(emptyRepo, {})))
    .toEqual(JSON.stringify(expectedResult));
  expect(JSON.stringify(suggestUpToThree(emptyRepo, 42)))
    .toEqual(JSON.stringify(expectedResult));
  expect(JSON.stringify(suggestUpToThree(emptyRepo, ['omg'])))
    .toEqual(JSON.stringify(expectedResult));
});

test('invalid (non-array) repository queried', () => {
  let badRepo = "foo";
  const expectedResult = [];

  expect(JSON.stringify(suggestUpToThree(badRepo, 'abc')))
    .toEqual(JSON.stringify(expectedResult));

  badRepo = 2;
  expect(JSON.stringify(suggestUpToThree(badRepo, 'abc')))
    .toEqual(JSON.stringify(expectedResult));

  badRepo = {};
  expect(JSON.stringify(suggestUpToThree(badRepo, 'abc')))
    .toEqual(JSON.stringify(expectedResult));
});

test('mixedCase repository queried with: fronti', () => {
  const expectedResult = [
    [ 'fraud', 'friend', 'frodo' ],
    [ 'frodo', 'frog', 'frond' ],
    [ 'frond', 'frontispiece', 'frontline' ],
    [ 'frontispiece', 'frontline' ],
    [ 'frontispiece' ]
  ];

  expect(JSON.stringify(suggestUpToThree(mixedCaseRepo, 'fronti')))
    .toEqual(JSON.stringify(expectedResult));
});
