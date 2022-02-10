// --- Directions
// Given a node, validate the binary search tree,
// NOTE: this is an in-order traversal solution.
// An alternate solution is found in the validate folder
const { print, Node } = require('./node');


// if node.right, return leftmostNode(node.right)
// while (node === node.parent.right) {
//   node = node.parent

function leftmostNodeOf(node) {
  if (!node) { return null; }
  while (node.left) {
    node = node.left;
  }
  return node;
}

function nextNode(node) { 
  if (!node) { return null; }

  if (node.parent === null || node.right) {
    return leftmostNodeOf(node.right)
  } else {
    let c = node;
    let p = c.parent;
    while(p && p.left !== c) { // go up until we're on the left instead of right
      c = p;
      p = c.parent;
    }
    return p;
  }
}

function traverseInOrder(node) {
  if (!node) { return null; }

  traverseInOrder(node.left);
  let next = nextNode(node);
  if (next) {
    console.log(`${node.data} is followed by ${nextNode(node).data}`);
  } else {
    console.log(`${node.data} is the TERMINUS`)
  }
  traverseInOrder(node.right);
}

module.exports = { nextNode, traverseInOrder, leftmostNodeOf };

// let tree = new Node(8);
// tree.insert(12);
// tree.insert(4);
// tree.insert(2);
// tree.insert(6);
// tree.insert(1);
// tree.insert(3);
// tree.insert(5);
// tree.insert(7);
// tree.insert(10);
// tree.insert(14);
// tree.insert(9);
// tree.insert(11);
// tree.insert(13);
// tree.insert(15);


// let tree = new Node(8);
// tree.insert(12);
// tree.insert(2);
// tree.insert(6);
// tree.insert(1);
// tree.insert(98)
// tree.insert(99)

// tree.insert(3);
// tree.insert(7);
// tree.insert(100)
// tree.insert(10);
// tree.insert(14);
// tree.insert(9);
// tree.insert(11);
// tree.insert(13);
// tree.insert(15);

// traverseInOrder(tree);
// print(tree);



