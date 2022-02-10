// --- Directions
// Given a node, validate the binary search tree,
// NOTE: this is an in-order traversal solution.
// An alternate solution is found in the validate folder
const Node = require('../bst/index');

let minimalValueFound = Number.MIN_SAFE_INTEGER

// in-order traversal
function validateByTraversal(node) {
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

let validate = validateByTraversal;

module.exports = validate;



