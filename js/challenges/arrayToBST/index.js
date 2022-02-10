
// 4.3
// Given a sorted (increasing order) array, write an algorithm to create a binary search tree with minimal height.

const { Node } = require("./tree");

function buildNode(ar, start, end) {
  if (start > end) {return null;}

  const mid = Math.floor(start + (end-start)/2);
  let newNode = new Node(ar[mid]);
  // console.log(`${start} ${mid} ${end}`);
  newNode.left = buildNode(ar, start, mid - 1);
  newNode.right = buildNode(ar, mid + 1, end);

  return newNode;
}

function createBSTFromSortedArray(ar) {
  let start = 0;
  let end = ar.length-1;
  return buildNode(ar, start, end);
}

function print(node) {
  if (!node) {return;}

  console.log(node.data);
  if (node.left || node.right){
    console.log(`   L: ${node.left ? node.left.data : ""}`);
    console.log(`   L: ${node.right ? node.right.data : ""}`);
  }

  print(node.left);
  print(node.right);
}

module.exports = { createBSTFromSortedArray };

// print(minimalTree);



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


