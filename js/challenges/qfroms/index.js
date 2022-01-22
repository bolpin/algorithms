// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.front = new Stack();
    this.back = new Stack();
  }

  add(val) {
    this.front.push(val);
  }

  peek() {
    while (this.front.peek()) {
      this.back.push(this.front.pop());
    }
    const val = this.back.peek();
    while(this.back.peek()) {
      this.front.push(this.back.pop());
    }
    return val;
  }

  remove() {
    while (this.front.peek()) {
      this.back.push(this.front.pop());
    }
    const val = this.back.pop();
    while(this.back.peek()) {
      this.front.push(this.back.pop());
    }
    return val;
  }
}


module.exports = Queue;

	// constructor() {
	// 	this.primary = new Stack();
	// 	this.secondary = new Stack();
	// }

	// add(item) {
	// 	this.primary.push(item);
	// }

	// remove() {
	// 	while(this.primary.peek()) {
	// 		this.secondary.push(this.primary.pop());
	// 	}
	// 	let val = this.secondary.pop();
	// 	while (this.secondary.peek()) {
	// 		this.primary.push(this.secondary.pop())
	// 	}
	// 	return val;
	// }

	// peek() {
	// 	while(this.primary.peek()) {
	// 		this.secondary.push(this.primary.pop());
	// 	}
	// 	let val = this.secondary.peek();
	// 	while (this.secondary.peek()) {
	// 		this.primary.push(this.secondary.pop())
	// 	}
	// 	return val;

	// }
