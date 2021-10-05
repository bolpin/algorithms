const capitalize = require('./index');

test('Capitalize is a function', () => {
  expect(typeof capitalize).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalize('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
});

test('capitalizes the first letter', () => {
  expect(capitalize('i love breakfast at bill miller bbq')).toEqual(
    'I Love Breakfast At Bill Miller Bbq'
  );
});
 
test('capitalizes the first letter of every word in a sentence, even one including tabs and newlines', () => {
  expect(capitalize('hi \tthere, how \nis\nit\tgoing?')).toEqual(
    'Hi \tThere, How \nIs\nIt\tGoing?'
  );
});

test('does not break when called with an empty string', () => {
  expect(capitalize('')).toEqual(
    ''
  );
});
