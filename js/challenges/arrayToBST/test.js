const { Node } = require("./tree"); 
const { buildNode, createBSTFromSortedArray } = require('./index');


describe('Node', () => {
  test('createBSTFromSortedArray creates a minimal-height binary search tree', () => {
    const minimalTree = createBSTFromSortedArray([1,2,3,4,5,6,7,8,9,10,11,12,13, 14, 15])
    expect(minimalTree.data).toEqual(8);
    expect(minimalTree.left.data).toEqual(4);
    expect(minimalTree.left.left.data).toEqual(2);
    expect(minimalTree.left.left.left.data).toEqual(1);
    expect(minimalTree.left.left.right.data).toEqual(3);
    expect(minimalTree.right.data).toEqual(12);
    expect(minimalTree.right.right.data).toEqual(14);
    expect(minimalTree.right.right.right.data).toEqual(15);
    expect(minimalTree.right.right.left.data).toEqual(13);
  });

});
