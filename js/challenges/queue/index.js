// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue{
	constructor(){
		this.data = [];
	}

	add(item) {
		this.data.push(item);
	}

	remove() {
		return this.data.shift();
	}

	size() {
		return this.data.length;
	}
}

module.exports = Queue;







// class Queue {
//     constructor() {
//         this.data = [];
//     }
//     add(item) {
//         this.data.push(item);
//         return null;
//     }
//     remove() {
//         return this.data.shift();
//     }
//     size() {
//         return this.data.length;
//     }
// }