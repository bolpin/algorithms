// --- Directions
// 4.3
// Given a sorted (increasing order) array, write an algorithm to create a binary search tree with minimal height.

const BST = require("./tree");
const BSTree = BST.BSTree;
const Node = BST.Node;


addNode(ar, start, end) {
  if (start > end) {return null;}

  const mid = Math.floor((end-start)/2);
  let newNode = new Node(ar[mid]);
  newNode.left = addNode(ar, start, mid - 1);
  newNode.right = addNode(ar, mid + 1, end);
  return newNode;
}
function createBSTFromArray(ar) {
  ar.sort();
  let start = 0;
  let end = ar.length-1;
  const tree = new BSTree(addNode(ar, start, end));
}

const minimalTree = createBSTFromArray([4,2,8,5,0,7,2,3,8,4])


//           4
//        /     \
//     2          8
//   /   \       /
// 0      3     5
//   \      \     \
//    2      4      7
//                    \
//                     8

console.log("Minimal-height BST Tree:")
minimalTree.print();

module.exports = { BSTree, Node };


// 4.1
// Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.

// 4.2
// Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

// 4.3
// Given a sorted (increasing order) array, write an algorithm to create a binary search tree with minimal height.

// 4.4
// Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

// 4.5
// Implement a function to check if a binary tree is a binary search tree.

// 4.6
// Write an algorithm to find the 'next' node (i.e., in-order successor) of a given node in a binary search tree. You may assume that each node has a link to its parent.

// 4.7
// Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.

// 4.8
// You have two very large binary trees: T1, with millions of nodes, and T2, with hundreds of nodes. Create an algorithm to decide if T2 is a subtree of Tl.

// A tree T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to T2. That is, if you cut off the tree at node n, the two trees would be identical.

// 4.9
// You are given a binary tree in which each node contains a value. Design an algorithm to print all paths which sum to a given value. Note that a path can start and end anywhere in the tree.
