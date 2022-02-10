const T = require('./index');
const Node = T.Node;
const BSTree = T.BSTree;
const List = require('./list'); 


//           4
//        /     \
//     2          8
//   /   \       /
// 0      3     5
//   \      \     \
//    2      4      7
//                    \
//                     8

const myTree = new BSTree();
myTree.insert(4)
myTree.insert(2)
myTree.insert(8)
myTree.insert(5)
myTree.insert(0)
myTree.insert(7)
myTree.insert(2)
myTree.insert(3)
myTree.insert(8)
myTree.insert(4) 
const result = myTree.toArrayOfLists();

describe('Node', () => {
  test('toArrayOfLists', () => {
    expect(result.length).toEqual(5);
    expect(result[0].head.data).toEqual(4);
    expect(result[0].size()).toEqual(1);
    expect(result[2].size()).toEqual(3);
    expect(result[3].size()).toEqual(3);
    expect(result[3].getFirst().data).toEqual(2);
    expect(result[3].getFirst().next.data).toEqual(4);
    expect(result[3].getLast().data).toEqual(7);
    expect(result[4].size()).toEqual(1);
  });
});
