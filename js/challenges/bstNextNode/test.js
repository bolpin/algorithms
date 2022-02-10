const { nextNode } = require('./index');
const { print, Node } = require('./node');

test('each node (except node 20) has a next node, of increasing order', () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);

  let node = n.left.left;
  let maxVal = node.data;
  expect(node.data).toEqual(0);
  while (node && nextNode(node)) {
    node = nextNode(node)
    expect(node.data).toBeGreaterThanOrEqual(maxVal);
    maxVal = node.data;
  }
  expect(maxVal).toEqual(20);

});
