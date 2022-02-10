const { isBalanced, isBalanced2 } = require('./index');
const { Node, BSTree } = require('./tree');

const unbalancedTree = new BSTree();
unbalancedTree.insert(4)
unbalancedTree.insert(2)
unbalancedTree.insert(8)
unbalancedTree.insert(5)
unbalancedTree.insert(0)
unbalancedTree.insert(7)
unbalancedTree.insert(2)
unbalancedTree.insert(3)
unbalancedTree.insert(8)
unbalancedTree.insert(4)
//           4
//        /     \
//     2          8
//   /   \       /
// 0      3     5
//   \      \     \
//    2      4      7
//                    \
//                     8

const balancedTree = new BSTree();
balancedTree.insert(4);
balancedTree.insert(2);
balancedTree.insert(8);
balancedTree.insert(0);
balancedTree.insert(3);
balancedTree.insert(5);
balancedTree.insert(9);
//           4
//        /     \
//     2          8
//   /   \       / \
// 0      3     5   9

describe('isBalanced', () => {
  test('An unbalanced tree is identified as such', () => {
    expect(isBalanced(unbalancedTree.root)).toEqual(false);
  });

  test('A balanced tree is identified as such', () => {
    expect(isBalanced(balancedTree.root)).toEqual(true);
  });

  test('An empty tree is considered balanced', () => {
    expect(isBalanced(null)).toEqual(true);
  });
});

describe('isBalanced2 (an alternate implementation)', () => {
  test('An unbalanced tree is identified as such', () => {
    expect(isBalanced2(unbalancedTree.root)).toEqual(false);
  });

  test('A balanced tree is identified as such', () => {
    expect(isBalanced2(balancedTree.root)).toEqual(true);
  });

  test('An empty tree is considered balanced', () => {
    expect(isBalanced2(null)).toEqual(true);
  });
});
