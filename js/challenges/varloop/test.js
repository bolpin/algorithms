const loop3 = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('loop3 is a function', () => {
  expect(typeof loop3).toEqual('function');
});

test('loops three times', () => {
  loop3();
  expect(console.log.mock.calls.length).toEqual(3);
});

test('prints integers from 0 through 2', () => {
  loop3();
  expect(console.log.mock.calls[0][0]).toEqual(0);
  expect(console.log.mock.calls[1][0]).toEqual(1);
  expect(console.log.mock.calls[2][0]).toEqual(2);
});

