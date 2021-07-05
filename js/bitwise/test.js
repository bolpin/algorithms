const Code = require('./bitwise');
const toBinary = Code.toBinary;
const fromBinary = Code.fromBinary;

test('toBinary is defined', () => {
  expect(typeof toBinary).toEqual('function');
});

test ('toBinary converts an integer to binary string', () => {
  expect(toBinary(0)).toEqual('00000000');
  expect(toBinary(1)).toEqual('00000001');
  expect(toBinary(2)).toEqual('00000010');
  expect(toBinary(127)).toEqual('01111111');
  expect(toBinary(129)).toEqual('10000001');
  expect(toBinary(255)).toEqual('11111111');
});

test ('toBinary errors', () => {
  expect(toBinary(256)).toEqual('ERROR');
  expect(toBinary(-1)).toEqual('ERROR');
});

test ('fromBinary converts a binary string to an integer', () => {
  expect(fromBinary('1')).toEqual(1);
  expect(fromBinary('0')).toEqual(0);
  expect(fromBinary('00000000')).toEqual(0);
  expect(fromBinary('00000001')).toEqual(1);
  expect(fromBinary('00000010')).toEqual(2);
  expect(fromBinary('01111111')).toEqual(127);
  expect(fromBinary('10000001')).toEqual(129);
  expect(fromBinary('11111111')).toEqual(255);
});

test ('fromBinary errors', () => {
  expect(fromBinary('0123')).toEqual(null);
  expect(fromBinary(' 010')).toEqual(null);
  expect(fromBinary('')).toEqual(null);
  expect(fromBinary('111111111')).toEqual(null); // too long
});

test ('clear last n bits can be done with & (~0 << n)', () => {
  expect(fromBinary('10111') & (~0 << 2)).toEqual(fromBinary('10100'));
});

test ('multiply by 2 is the same as shifting left 1', () => {
  expect(fromBinary('10111') + fromBinary('10111')).toEqual(fromBinary('10111') << 1);
});

test ('multiplying by 2^n (e.g. 4) is the same as shifting left by n', () => {
  expect(fromBinary('10111') * 4).toEqual(fromBinary('1011100'));
});

test ('XOR', () => {
  expect(fromBinary('1101') ^ fromBinary('1001')).toEqual(fromBinary('0100'));
});

test ('bitwise negation is somewhat tricky', () => {
  expect(~fromBinary('0000')).toEqual(-1);
  expect(~fromBinary('0001')).toEqual(-2);
  expect(~fromBinary('1111')).toEqual(-16);
});
