const numbers = [9, 4, 4, 1, 2, 13, 7, 5]

class Node {
  initialize(val, count = 0) {
    this.val = val;
    this.count = count;
    this.left = null;
    this.right = null;
  }
}

class BST {
  initialize() {
    this.head = null;
  }

  insert(num) {
    if (!this.head) {
      this.head = new Node(num);
      return;
    }
    let node = this.head;
    while (node) {
      if (node.val === num) {
        node.count++;
        return;
      }
      if (num > node.val && !node.right) {
        node.right = new Node(num);
        return;
      }
      if (num < node.val && !node.left) {
        node.left = new Node(num);
        return;
      }
      if (num > node) {
        return this.insert(
  }
}


