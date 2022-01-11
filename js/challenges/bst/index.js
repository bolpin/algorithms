// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return either null OR the Node in the tree
// with the same value.

class Node {
	constructor(data = null) {
		this.data = data;
		this.left = null;
		this.right = null; 
	}

	insert(data) {
		if (data <= this.data) {
			if (this.left) {
				return this.left.insert(data)
			} else {
				return this.left = new Node(data);
			}
		} else {
			if (this.right) {
				return this.right.insert(data);
			} else {
				return this.right = new Node(data);
			}
		}
	}

	contains(data) {
		if (data === this.data) {
			return this;
		}
		if (data < this.data && this.left) {
			return this.left.contains(data);
		}
		if (data > this.data && this.right) {
			return this.right.contains(data);
		}
		return null;
	}
}

module.exports = Node;

// class Node {
// 	constructor(data) {
// 		this.data = data;
// 		this.left = null;
// 		this.right = null;
// 	}

// 	insert(data) {
// 		if (data > this.data) {
// 			if (this.right) {
// 				return this.right.insert(data);
// 			} else {
// 				this.right = new Node(data);
// 			}
// 		} else {
// 			if (this.left) {
// 				return this.left.insert(data);
// 			} else {
// 				this.left = new Node(data);
// 			}
// 		}
// 	}

// 	contains(data) {
// 		if (data === this.data) {
// 			return this;
// 		} else if (data > this.data && this.right) {
// 			return this.right.contains(data);
// 		} else if (this.left) {
// 			return this.left.contains(data);
// 		}
// 		return null;
// 	}

// }
