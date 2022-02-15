const { wordCount } = require('./index');

test('wordCount function is defined', () => {
  expect(wordCount).toBeDefined();
});

test('wordCounts detects space-delimited words', () => {
  const book = "It was a dark and stormy night and the stars were not shining bright. The end".replace(/[^\w\s]/, '').toLowerCase().split(/\s/)
  expect(wordCount(book, 'elephant')).toEqual(0);
  expect(wordCount(book, 'stars')).toEqual(1);
  expect(wordCount(book, 'and')).toEqual(2);
});
