// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'


function fromLast(list, n) {
  let node = list.head;
  for (let i = n; i > 0; i--) {
    node = node.next;
  }
  let slow = list.head;
  while (node.next) {
    node = node.next;
    slow = slow.next;
  }
  return slow;
}

module.exports = fromLast;
















// // function fromLast(list, n) {
// //     let slow = list.getFirst();
// //     let fast = slow;
// //     for (let i = 0; i < n; i++){
// //         fast = fast.next;
// //     }
// //     while (fast.next) {
// //         fast = fast.next;
// //         slow = slow.next;
// //     }
// //     return slow;
// // }
