class Node {
	constructor(obj, next = null) {
		this.data = obj;
		this.next = next;
	}
};

class LinkedList{
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let count = 0;
		let iter = this.head;
		while(iter) {
			count++;
			iter = iter.next;
		}
		return count;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		let node = this.head;
		while (node && node.next) {
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
		// empty list
		if (!this.head) {
			return;
		}
		// length 1
		if (!this.head.next) {
			this.head = null; 
			return;
		}
		// normal case
		let prev = this.head;
		while(prev.next && prev.next.next) {
			prev = prev.next;
		}
		prev.next = null;
	}

	insertLast(data) {
		 if (!this.head) {
			 this.insertFirst(data);
			 return;
		 }
		 let last = this.getLast();
		 last.next = new Node(data); 
	 }

	getAt(index) {
		if (index < 0) {
			return null; //throw an exception?
		}
		// consider index out of range
		let i = 0;
		let node = this.head;
		while (node && i < index) {
			node = node.next;
			i++;
		}
		return node;
	}

	removeAt(index) {
		// index out of range -> return undefined
		// empty list
		if (!this.head || index < 0) {
			return;
		}
		// index === 0
		if (index === 0) {
			this.head = this.head.next;
			return;
		}
		// normal case
		let prev = this.getAt(index-1); 
		if (prev && prev.next) {
			prev.next = prev.next.next;
		}
	}

	insertAt(data, index) {
		if (index === 0 || !this.head) {
			this.head = new Node(data, this.head);
			return;
		}
		let prev = this.getAt(index - 1) || this.getLast();
		prev.next = new Node(data, prev.next);
	}

	forEach(fn) {
		let node = this.head;
		let i = 0;
		while(node) {
			fn(node, i);
			node = node.next;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while(node) {
			yield(node);
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
// 		if (index < 0) { return; }
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




    // 1. handle empty list
    // 2. handle one item list
    // 3. Find last element, EITHER by 
    // using two iterators or by using
    // a doubly-forward looking
    // conditional
    // 4. remove
    // removeLast() { }

    // 1. call getLast()
    // 2. if last ...
    // 3. if !last ...
    // insertLast(data) { }

    // 1. init counter and iter
    // 2. While iter, check counter equals index
    // 3. increment
    // 4. default return null;
    // getAt(index) { }

    // 1. handle empty list
    // 2. handle index === 0
    // 3. getAt(index-1)
    // 4. return if !prev or !target
    // 5. remove
    // removeAt(index) { }

    // 1. handle empty
    // 2. handle index === 0
    // 3. getAt(index-1)
    // 4. insert
    // insertAt(data, index) { }


module.exports = { Node, LinkedList };
