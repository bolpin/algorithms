// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
	constructor() {
		this.events = {};
	}
	
	on(event, fn) {
		if (this.events[event]) {
			this.events[event].push(fn);
		} else {
			this.events[event] = [fn];
		}
	}

	trigger(event) {
		for (let fn of this.events[event]) {
			fn();
		}
	}

	off(event) {
		this.events[event] = [];
	}
}

module.exports = Events;

//   // Register an event handler
//   on(eventName, callback) {
// 	  if (this.events[eventName]) {
// 		  this.events[eventName].push(callback);
// 	  } else {
// 		  this.events[eventName] = [callback];
// 	  }
//   }

//   // Trigger all callbacks associated
//   // with a given eventName
//   trigger(eventName) {
// 	  if (this.events[eventName]) {
// 		for (let callback of this.events[eventName]) {
// 			callback();
// 		}
// 	  }
//   }

//   // Remove all event handlers associated
//   // with the given eventName
//   off(eventName) {
// 	  this.events[eventName] = null;
//   }