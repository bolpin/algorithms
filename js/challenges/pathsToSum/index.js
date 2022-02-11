// --- Directions
// 4.9
// You are given a binary tree in which each node contains a value. Design an algorithm to print all paths which sum to a given value. Note that a path can start and end anywhere in the tree.

const { print, Node } = require('./node');

let globalPaths = [];

function depth(node) {
  if (!node) { return 0; }
  else {
    return 1 + Math.max(depth(node.left), depth(node.right));
  }
}

function findSum(node, sum, path, level) {
  if (!node) { return; }
  
  path[level] = node.data;
  let t = 0;

  for (let i = level; i >=0 ; i--) {
    t += path[i];
    if (t === sum) {
      globalPaths.push(path.slice(i, level+1));
    }
  }
  // search nodes below this one
  findSum(node.left, sum, path, level + 1);
  findSum(node.right, sum, path, level + 1);
  
  // Not strictly necessary(?) 
  path[level] = undefined;
}

function pathsToSum(node, sum) {
  globalPaths = [];
  let d = depth(node);
  path = new Array(d).fill(0);
  findSum(node, sum, path, 0);

  // console.log("*** Paths that sum to " + sum + " ***")
  // logPaths();
  return [...globalPaths];
}

function logPaths() {
  for (let path of globalPaths) {
    console.log(path.join(" + "));
  }
}

module.exports = { pathsToSum };

let tree = new Node(8);
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

for (let i = 0; i < 15; i++) {
  console.log(`Paths that sum to ${i}`)
  let x = pathsToSum(tree, i);
  console.log(x)
}
// traverseInOrder(tree);
// print(tree);



