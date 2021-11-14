const { valueToNode } = require("@babel/types");

class Node {
	constructor(data, next=null) {
		this.data = data;
		this.next = next;
	}
};

class LinkedList{
	constructor(){ 
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
		return;
	}

	size() {
		let node = this.head;
		let count = 0;
		while(node) {
			node = node.next;
			 count++;
		}
		return count;
	}

	getFirst() {
		return this.head;
	}

	//this.head -> NULL
	//this.head -> first -> NULL
	//this.head -> first -> second -> NULL // 'normal'
	//this.head -> first -> second -> first -> ... // circular
	getLast() {
		let node = this.head;
		while (node.next) {
			node = node.next;
		}
		return node;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (this.head) {
			this.head = this.head.next;
		}
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
	}
	
	insertLast(data) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}
		let node = this.getLast();
		node.next = new Node(data);
		return;
	}
		
	// list.head -> n0 -> n1 -> n2 -> NULL
	// return null or a node
	getAt(pos) {
		if (pos < 0) {
			return null;
		}
		let i = 0;
		let node = this.head;
		while (node && i < pos) {
			node = node.next;
			i++;
		}
		return node;
	}

	removeAt(pos) {
		if (pos < 0 || !this.head) {
			return;
		}
		if (pos === 0) {
			this.head = this.head.next;
			return;
		}
		let node = this.getAt(pos-1);
		if (node && node.next) {
			node.next = node.next.next;
		}
	}

	// list -> d0 -> d1 -> null
	// Create and insert a new node at the provided index.
	// If index is out of bounds, add the node to the
	// end of the list.
	insertAt(data, index) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}
		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}
		let node = this.getAt(index-1) || this.getLast();
		node.next = new Node(data, node.next);
	}

	forEach(fn) {
		let node = this.head;
		let i = 0;
		while(node) {
			fn(node, i);
			node = node.next;
			i++;
		}
		return;
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while(node) {
			yield node;
			node = node.next;
		}
	}

};


// class Node {
// 	constructor(data, next = null){
// 		this.data = data;
// 		this.next = next;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 	}

// 	insertFirst(data) {
// 		this.head = new Node(data, this.head);
// 	}

// 	size() {
// 		let count = 0;
// 		let node = this.head;
// 		while(node) {
// 			count++;
// 			node = node.next;
// 		}
// 		return count;
// 	}

// 	getFirst() {
// 		return this.head;
// 	}

// 	getLast() {
// 		let node = this.head;
// 		while(node.next) {
// 			node = node.next;
// 		}
// 		return node;
// 	}
	
// 	clear() {
// 		this.head = null;
// 	}

// 	removeFirst() {
// 		if (!this.head) {
// 			return null;
// 		}
// 		this.head = this.head.next;
// 	}

// 	removeLast() {
// 		if (!this.head) {
// 			return;
// 		}
// 		if (!this.head.next) {
// 			this.head = null;
// 			return;
// 		}
// 		let node = this.head;
// 		while(node.next.next) {
// 			node = node.next;
// 		}
// 		node.next = null;
// 	}

// 	insertLast(data) {
// 		if (!this.head) {
// 			this.head = new Node(data);
// 			return;
// 		}
// 		let node = this.head;
// 		while(node.next) {
// 			node = node.next;
// 		}
// 		node.next = new Node(data);
// 	}

// 	getAt(index) {
// 		if (index < 0) {
// 			return null; //throw an exception?
// 		}
// 		// consider index out of range
// 		let i = 0;
// 		let node = this.head;
// 		while (node && i < index) {
// 			node = node.next;
// 			i++;
// 		}
// 		return node;
// 	}

// Create an insert a new node at provided index.
// If index is out of bounds, add the node to the
// end of the list.
// 	removeAt(index) {
// 		if (!this.head || index < 0) {
// 			return;
// 		}
// 		if (index === 0) {
// 			this.head = this.head.next;
// 			return;
// 		}
// 		let prev = this.getAt(index-1);
// 		if (prev && prev.next) {
// 			prev.next = prev.next.next;
// 		}
// 	}

// 	insertAt(data, index) {
// 		// empty list: insert at front
// 		// index out of range: insert at end
// 		if (!this.head) {
// 			this.head = new Node(data);
// 			return;
// 		}
// 		if (index === 0) {
// 			this.head = new Node(data, this.head);
// 			return;
// 		}
// 		let prev = this.getAt(index-1) || this.getLast();
// 		prev.next = new Node(data, prev.next);
// 	}

// 	forEach(fn) {
// 		let node = this.head;
// 		let i = 0;
// 		while (node) {
// 			fn(node, i);
// 			i++;
// 			node = node.next;
// 		}	
// 	}
	
// 	*[Symbol.iterator]() {
// 		let node = this.head;
// 		while(node) {
// 			yield node;
// 			node = node.next;
// 		}
// 	}
// };

    // h ->
    // h -> []
    // h -> [] -> []

    // if node is out of bounds, add to the end
    // of the list

    // for some reason he wants us to call fn with
    // the index, as well as the node
    // forEach(fn) {
    // }



module.exports = { Node, LinkedList };
