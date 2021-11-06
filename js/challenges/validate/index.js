// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent
const Node = require('../bst/index');


function validate(node, min = null, max = null) {
  if (max && node.data > max) {
    return false;
  }
  if (min && node.data < min) {
    return false;
  }
  if (node.right && !(validate(node.right, node.data, max))) {
    return false;
  }
  if (node.left && !(validate(node.left, min, node.data))) {
    return false;
  }

  return true;
}

module.exports = validate;



// function validate(node, min = null, max = null) {
// 	if (min && node.data < min) {
// 		return false;
// 	}
// 	if (max && node.data > max) {
// 		return false;
// 	}
// 	if (node.left && !validate(node.left, min, node.data)) {
// 		return false;
// 	}
// 	if (node.right && !validate(node.right, node.data, max)) {
// 		return false;
// 	}
// 	return true;
// }


