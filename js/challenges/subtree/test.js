const Node = require('./node');
const isSubtree = require('./index');

test('', () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);

  expect(1).toEqual(1);
});

