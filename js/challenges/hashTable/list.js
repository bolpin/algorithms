class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
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

  insertHead(val) {
    this.head = new Node(val, this.head);    
  }

  removeHead() {
    let result;
    if (this.head) {
      result = this.head.data;
    }
    this.head = this.head.next;
    return result;
  }

  removeFirstMatch(val) {
    if (!this.head) {
      return null;
    } 
    if (this.head.data === val) {
      this.head = this.head.next;
      return val;
    }
    let prev = this.head;
    let node = prev.next;
    while(node) {
      if (node.data === val) {
        prev.next = node.next;
        return val;
      }
      prev = node;
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

  print() {
    const ar = [];
    for (let node of this) {
      ar.push(node.data);
    }
    process.stdout.write(ar.join(" -> "))
    console.log(" -> NULL ");
  }
}

let ll = new LinkedList();
for(let i = 0; i < 6; i++) {
  ll.insertHead(i);
}
ll.print();
ll.removeFirstMatch(5);
ll.removeFirstMatch(0);
ll.print();
console.log(ll.removeHead());
ll.print();