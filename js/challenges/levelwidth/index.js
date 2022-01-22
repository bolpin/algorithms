// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// 0 * 1 2 3 * 4 5 *
//
// starting conditions:
// [delim, head]   [<no data yet>]
// * 0             []
// 0               [1] 
// 0 * 
// *               
// * 1 2 3
// 1 2 3           [1, 3]
// 1 2 3 *
// 2 3 *
// 2 3 * 4
// 3 * 4
// * 4
// * 4 5
// 4 5             [1, 3, 2]
// 4 5 *
// 5 *
// *
// [] empty array means we're done! return [1,3,2]
const Node = require('./node');

function levelWidth(root) {
  if (!root) { return [] }
  const marker = '*';
  let itemsToProcess = [marker, root];
  let widths = [];
  while(itemsToProcess.length) {
    let item = itemsToProcess.shift();
    if (item === marker) {
      if (itemsToProcess.length) {
        widths.push(itemsToProcess.length);
        itemsToProcess.push(marker); 
      }
    } else {
      itemsToProcess.push(...item.children);
    }
  }
	return widths;
}

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);
// console.log(levelWidth(root));

module.exports = levelWidth;
// function levelWidth(root){
//     if (!root) {
//         return [];
//     }
//     const stopper = '*';
//     const nodes = [stopper, root];
//     const widths = [];

//     while(nodes.length) { 
//         console.log(nodes);
//         const node = nodes.shift();
//         if (node === stopper){
//             if (nodes.length) {
//                 widths.push(nodes.length);
//                 nodes.push(stopper);
//             }
//         } else {
//             nodes.push(...node.children);
//         }
//     }
//     return widths; 
// }
