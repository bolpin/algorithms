
const cyrb53 = function(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
};

let strings = [
  {a: 20, b: 30},
  {a: 20, b: 30},
  {a: 21, b: 30},
  {a: 22, b: 30},
  {a: 23, b: 30},
  {a: 24, b: 30},
  {a: 20, b: 31},
  'Brian',
  'Brian',
  'Ellie',
  'Christina',
  'R2-D2',
  'C3PO',
  '!',
  '12345',
  '123',
  'ABCBrian',
  'ABCEllie',
  'ABCChristina',
  'ABCR2-D2',
  'ABCC3PO',
  'ABC!',
  'ABC12345',
  'ABC123'
]

function hash(key) {
  return (cyrb53(JSON.stringify(key)) & 0x7fffffff) % 16;
}

for (let s of strings) {
  console.log(`${s} : ${hash(s)}`);
}
