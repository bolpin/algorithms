// --- Directions
// 4.8
// You have two very large binary trees: T1, with millions of nodes, and T2, with hundreds of nodes. Create an algorithm to decide if T2 is a subtree of Tl.
// A tree T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to T2. That is, if you cut off the tree at node n, the two trees would be identical.


const { print, Node } = require('./node');

function deepMatch(t1, t2) {
  if (!t1 && !t2) { // both empty
    return true;
  }
  if (!t1 || !t2) { // one and only one empty
    return false;
  }
  if (t1.data !== t2.data) { // data mismatch
    return false;
  }

  return deepMatch(t1.left, t2.left) &&
         deepMatch(t1.right, t2.right);
}

function isSubtree(big, small) {
  if (!small) { return true; } // null is always a subtree!
  if (!big) {
    return false; // big is too small to contain small
  }
  if (big.data === small.data) {
    return deepMatch(big, small);
  }
  return (isSubtree(big.left, small) ||
          isSubtree(big.right, small));
}

module.exports = { isSubtree };

