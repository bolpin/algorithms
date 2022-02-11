const { pathsToSum } = require('./index');
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
tree.insert(12);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(-1);
tree.insert(-2);
tree.insert(3);
tree.insert(7);
tree.insert(10);
tree.insert(10);
tree.insert(14);
tree.insert(9);
tree.insert(11);
tree.insert(13);
tree.insert(15);

function arrayEquals(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

test('finds all paths for 12', () => {
  let val = 12;
  let expectedPaths = [ [ 8, 4 ], [ 8, 4, 2, 1, -1, -2 ], [ 12 ] ];

  expect(JSON.stringify(pathsToSum(tree, val))).toEqual(JSON.stringify(expectedPaths));
});

test('finds all paths for 4', () => {
  let val = 4;
  let expectedPaths = [ [ 4 ], [ 4, 2, 1, -1, -2 ] ];

  expect(JSON.stringify(pathsToSum(tree, val))).toEqual(JSON.stringify(expectedPaths));
});

test('does not find paths that do not exist', () => {
  let val = 16;
  let expectedPaths = [];

  expect(JSON.stringify(pathsToSum(tree, val))).toEqual(JSON.stringify(expectedPaths));
});