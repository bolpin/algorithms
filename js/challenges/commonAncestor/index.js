// --- Directions
// 4.7
// Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.


const { print, Node } = require('./node');


// is n a descendent of--or equal to--root?
function covers(root, n) {
  if (!root) { return false; }  
  if (root === n) { return true; } 
  return covers(root.right, n) || covers (root.left, n);
}

// NOTE: this algorithm is unnecessarily inefficient, 
// since subtrees are repeatedly scanned.  See Ch. 4 
// for a final optimization
function commonAncestorHelper(root, node1, node2) {
  if (!root) { return null; }  
  if (root === node1 || root === node2) {
    return root;
  }

  const isNode1OnLeft = covers(root.left, node1);
  const isNode2OnLeft = covers(root.left, node2);

  // if nodes are on different sides, return root
  if(isNode1OnLeft !== isNode2OnLeft) {
    return root;
  }

  let targetSideNode = isNode1OnLeft ? root.left : root.right;
  return commonAncestorHelper(targetSideNode, node1, node2);
}

function commonAncestor(root, node1, node2) {
  // make sure the two nodes are in the tree
  if (!covers(root, node1) || !covers(root, node2)) {
    return null;
  }
  return commonAncestorHelper(root, node1, node2);
}

module.exports = { commonAncestor };





