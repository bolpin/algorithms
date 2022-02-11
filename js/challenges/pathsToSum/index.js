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
  
  // Not strictly necessary(?):
  path[level] = undefined;
}

function pathsToSum(node, sum) {
  globalPaths = [];
  let d = depth(node);
  path = new Array(d).fill(0);
  findSum(node, sum, path, 0);

  return [...globalPaths];
}

function logPaths() {
  for (let path of globalPaths) {
    console.log(path.join(" + "));
  }
}

module.exports = { pathsToSum };


// let globalPaths = [];

// function depth(node) {
//   if (!node) { return 0; }
//   else {
//     return 1 + Math.max(depth(node.left), depth(node.right));
//   }
// }

// function findSum(node, sum, path, level) {
//   if (!node) { return; }
  
//   path[level] = node.data;
//   let t = 0;

//   for (let i = level; i >=0 ; i--) {
//     t += path[i];
//     if (t === sum) {
//       globalPaths.push(path.slice(i, level+1));
//     }
//   }
//   // search nodes below this one
//   findSum(node.left, sum, path, level + 1);
//   findSum(node.right, sum, path, level + 1);
  
//   // Not strictly necessary(?) 
//   path[level] = undefined;
// }

// function pathsToSum(node, sum) {
//   globalPaths = [];
//   let d = depth(node);
//   path = new Array(d).fill(0);
//   findSum(node, sum, path, 0);

//   // console.log("*** Paths that sum to " + sum + " ***")
//   // logPaths();
//   return [...globalPaths];
// }

// function logPaths() {
//   for (let path of globalPaths) {
//     console.log(path.join(" + "));
//   }
// }
