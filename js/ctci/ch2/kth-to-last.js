function kthToLast(list, k) {
    let leader = list.head;
    let follower = list.head;

    // separate the two iterators by k
    // positions in the list
    for (let i = 0; i < k; i++) {
        leader = leader.next;
    }

    // find the end of the list, maintaining
    // the spacing between leader and follower
    // iterators
    while (leader.next) {
        leader = leader.next;
        follower = follower.next;
    }
    return follower;
}