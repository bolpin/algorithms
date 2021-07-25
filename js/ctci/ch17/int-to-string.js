// 19123456 = convert(19) + " Million" +
//            convert(123) + " Thousand" +
//            convert(456)

const ones = [
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine'
];
const teens = [
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
  'Twenty'
];

const tens = [
  'Ten',
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety'
];

const bigs = [
  '',
  ' Thousand',
  ' Million',
  ' Billion',
  ' Trillion'
];


const intToString100 = function(n) {
  result = '';
  if (n > 999 || n < 1) {
    throw 'out of range: input must be in range 1-999';
  }
  if (n > 100) {
    result += tens[n / 100] + " Hundred";
  }
  if (n > 10 && n < 20) {
    result += teens[n-11];
  }
  if (n >= 20) {
    result = tens[Math.floor(n / 10) - 1];
  }
  n = Math.floor(n/10);
  result += " " + ones[(n / 10) - 1];
}


const intToString = function(n) {
  if (n < 0) {
    return `Negative ${intToString(-1 * n)}`;
  }
  if (n === 0) {
    return "zero";
  }
  if (n > 999999999999999) {
    throw "I can't handle numbers greater than or equal to one quadrillion";
  }

  result = '';
  count = 0;
  while (n) {
    result = intToString100(n % 100) + bigs[count];
    count++;
    n = Math.floor(n / 1000);
  }
}


// console.log(verboseInteger(3234430202001) === "three trillion, two hundred thirty four billion, four hundred thirty million, two hundred two thousand one")
// console.log(verboseInteger(3000000000051) === "three trillion, fifty one")
for (let x of [0, 19, 20, 96, 100, 831, 1000, 1019, 98015432, -1, 9999999999999990]) {
  console.log(x)
  console.log(intToString(x));
}

