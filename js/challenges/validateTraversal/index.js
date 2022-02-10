// --- Directions
// 4.5
// Implement a function to check if a binary tree is a binary search tree.
// NOTE: this is an in-order traversal solution.
// An alternate solution is found in the 'validate' challenge
const Node = require('../bst/index');

let minimalValueFound = Number.MIN_SAFE_INTEGER

// in-order traversal, make sure node values increase
function validate(node) {
  if (!node) { return true; }
  
  if (node.left) {
    validate(node.left);
  }
  if (node.data < minimalValueFound) {
    return false;
  }
  minimalValueFound = node.data;
  validate(node.right);
  return true;
}


module.exports = validate;



