const { valueToNode } = require("@babel/types");

class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
};

class LinkedList{
  constructor() {
    this.head = null;
  }

  size() {
    let node = this.head;
    let size = 0;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }

  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  removeAt(pos) {
    if (!this.head) {
      return null;
    }
    if (pos === 0) {
      this.head = this.head.next;
      return;
    }
    let prev = this.getAt(pos-1);
    if (prev && prev.next) {
      prev.next = prev.next.next;
      return;
    }
  }

  insertFirst(val) {
    this.head = new Node(val, this.head);
  }

  getFirst() {
    return this.head;
  }

  insertLast(val) {
    if (!this.head) {
      this.head = new Node(val);
      return;
    }
    let node = this.head;
    while(node.next) {
      node = node.next;
    }
    node.next = new Node(val, null);
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let node = this.head;
    while(node.next && node.next.next) {
      node = node.next;
    }
    node.next = null;
    return;
  }

  removeFirst() {
    this.head = this.head.next;
    return;
  }

  clear() {
    this.head = null;
  }

  forEach(fn) {
    let node = this.head;
    let i = 0;
    while (node) {
      fn(node, i);
      i++;
      node = node.next;
    }
    return;
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }

  } 

  // consider edge cases:
  // i is neg
  // i is > size()
  // i is not a number
    getAt(index) {
        if (index < 0) {
            return null; //throw an exception?
        }
        let i = 0;
        let node = this.head;
        while (node && i < index) {
            node = node.next;
            i++;
        }
        return node;
    }

  // consider:
  // empty list
  // inserting at pos 0
  // pos out of range
  insertAt(val, pos) {
    if (pos < 0) { return null; }
    if (!this.head || pos === 0) {
      this.head = new Node(val, this.head);
      return;
    }
    let prev = this.getAt(pos-1) || this.getLast();
    prev.next = new Node(val, prev.next);
    return;
  }
}



module.exports = { Node, LinkedList };
