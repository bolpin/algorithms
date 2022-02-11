const { isSubtree } = require('./index');
const { print, Node } = require('./node');

test('Finds subtree', () => {
  let big = new Node(8);
  big.insert(12);
  big.insert(4);
  big.insert(2);
  big.insert(6);
  big.insert(1);
  big.insert(3);
  big.insert(5);
  big.insert(7);
  big.insert(10);
  big.insert(14);
  big.insert(9);
  big.insert(11);
  big.insert(13);
  big.insert(15);

  let small = new Node(14);
  small.insert(13);
  small.insert(15);
  
  expect(isSubtree(big, small)).toEqual(true);
});

test('returns false when no subtree is found', () => {
  let big = new Node(8);
  big.insert(12);
  big.insert(4);
  big.insert(2);
  big.insert(6);
  big.insert(1);
  big.insert(3);
  big.insert(5);
  big.insert(7);
  big.insert(10);
  big.insert(14);
  big.insert(9);
  big.insert(11);
  big.insert(13);
  big.insert(15);
  
  let small = new Node(15);
  small.insert(12);
  small.insert(13);
  
  expect(isSubtree(big, small)).toEqual(false);
});


test('Finds subtree when trees are both null', () => {
  let tinyTreeA = null;
  let tinyTreeB = null;
  expect(isSubtree(tinyTreeA, tinyTreeB)).toEqual(true);
});

test('Finds subtree when trees are both one node', () => {
  let smallTreeA = new Node(1);
  let smallTreeB = new Node(1);
  expect(isSubtree(smallTreeA, smallTreeB)).toEqual(true);
});

test('Recognizes that different-shaped trees are not subtrees', () => {
  let rightLeaning = new Node(3);
  rightLeaning.right = new Node(3);
  
  let leftLeaning = new Node(3);
  leftLeaning.left = new Node(3);
  expect(isSubtree(rightLeaning, leftLeaning)).toEqual(false);
  

});
