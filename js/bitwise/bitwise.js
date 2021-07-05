// to run tests:
// jest test.js --watch

// 8-bit 0-255
const toBinary = function(num) {
  if (num > 255 || num < 0) {
    return 'ERROR';
  }

  const binaryDigits = [];

  while (num > 0) {
    binaryDigits.unshift(num & 1);
    num = num >> 1;
  }

  while(binaryDigits.length < 8){
    binaryDigits.unshift('0');
  }

  return binaryDigits.join('');
}

// 8-bit 0-255
const fromBinary = function(str) {
  if (str.length < 1 || str.length > 8) {
    return null;
  }
  let num = 0;
  if (str.match(/[^01]/)) { return null; }
  let arr = str.split('');
  let i = 1;

  while (arr.length) {
    if (arr.pop() === '1') {
      num = num + i;
    }
    i *= 2;
  }
  return num;
}

module.exports = { toBinary, fromBinary };
