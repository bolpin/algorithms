const { commonAncestor } = require('./index');
const { print, Node } = require('./node');

const tree = new Node(8);
tree.insert(12);
tree.insert(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);
tree.insert(10);
tree.insert(14);
tree.insert(9);
tree.insert(11);
tree.insert(13);
tree.insert(15);

test('commonAncestor found when ancestor is well above the given nodes', () => {
  const nodeA = tree.right.right.right;
  const nodeB = tree.left.left.left;
  expect(commonAncestor(tree, nodeA, nodeB)).toEqual(tree);
});

test('commonAncestor found when ancestor is just above', () => {
  const nodeA = tree.right.right.right;
  const nodeB = tree.right.right.left;
  expect(commonAncestor(tree, nodeA, nodeB)).toEqual(tree.right.right);
});

test('commonAncestor found when ancestor is one of the two given node', () => {
  const nodeA = tree.right.right;
  const nodeB = tree.right.right.right;
  expect(commonAncestor(tree, nodeA, nodeB)).toEqual(tree.right.right);
});

test('commonAncestor returns null when nodes do not have a common ancestor', () => {
  const nodeA = tree.right.left;
  const nodeB = tree.right.right;
  const nodeC = tree.left;
  expect(commonAncestor(nodeC, nodeA, nodeB)).toEqual(null);
});
