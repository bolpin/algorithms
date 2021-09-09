function deleteMid(node) {
	// we don't have access to the head of the list
	// or of the previous element in this singly-
	// linked list!

	let follower = node;
	let leader = follower.next;

	while (leader.next) {
		// shift the payload to the prev node in the 
		// list
		follower.data = leader.data;
		
		// step to the next node
		leader = leader.next;
		follower = follower.next;
	}

	follower.next = null;
}