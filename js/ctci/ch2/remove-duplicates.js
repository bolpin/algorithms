// Assume Node with properties data and next
function removeDuplicates(head) {
	// traverse the list
	// keep a map of the count of occurences of each data value
	// traverse the list again, removing all but the first 
	// appearance of the item

	// if we can't use additional data structures:
	// 1. for each node in the list
	// 2. traverse all following nodes with an iterator
	//    AND a following iterator.  If any node matches
	//    the node in step 1, set following.next = 
	//    following.next.next
}