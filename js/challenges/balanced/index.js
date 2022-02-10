// --- Directions
// 4.1
// Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.

const BST = require("./tree");
const BSTree = BST.BSTree;
const Node = BST.Node;

function getHeight(node) {
  if (!node) { return 0; }

  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}

// O(N^2) :-(
function isBalanced(node) {
  if (!node) { return true; }

  if (Math.abs(getHeight(node.right) - getHeight(node.left)) > 1) {
    return false;
  } else {
    return (isBalanced(node.right) && isBalanced(node.left));
  }
}


// return -1 if we ever find an unbalanced sub-tree
function getHeight2(node) {
  if (!node) { return 0; }  

  const leftHeight = getHeight2(node.left);
  if (leftHeight === -1) { return -1; }

  const rightHeight = getHeight2(node.right);
  if (rightHeight === -1) { return -1; }

  const heightDiff = Math.abs(leftHeight - rightHeight);
  if (heightDiff > 1) {
    return -1;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

// O(N)
function isBalanced2(node) {
  if (getHeight2(node) === -1) {
    return false;
  } else {
    return true;
  }
}


module.exports = { isBalanced, getHeight, isBalanced2, getHeight2 };

