// Ex. 4.4 in CTCI
// --- Directions

const L = require("./list");
const LinkedList = L.LinkedList;
// const ListNode = L.Node;

class Node {
	constructor(data) {
		this.data = data;
		this.right = null;
		this.left = null;
	}

	addLeft(data) {
		this.left.push(new Node(data));
	}

	addRight(data) {
		this.right.push(new Node(data));
	}

	removeLeft(data) {
		this.children = this.children.filter((node) => data !== node.data )
	}
}

class BSTree {
	constructor() {
    this.root = null;
	}

  insert(data) {
    const insertDataAt = (data, node) => {
      if (data <= node.data) {
        if (!node.left) {
          return node.left = new Node(data)
        } else {
          return insertDataAt(data, node.left)
        }
      } else {
        if (!node.right) {
          return node.right = new Node(data)
        } else {
          return insertDataAt(data, node.right)
        }
      }
    }

    if (!this.root) {
      return this.root = new Node(data);
    }
    insertDataAt(data, this.root)
  }

  toArrayOfLists() {
    function createLevelList(node, ar, level) {
      if (!node) {
        return;
      }
      if (!ar[level]) {
        ar[level] = new LinkedList();
      }
      if (node.data !== null) {
        ar[level].insertLast(node.data);
      }
      createLevelList(node.left, ar, level+1);
      createLevelList(node.right, ar, level+1);
    }

    const ar = [];
    createLevelList(this.root, ar, 0);
    return ar;
  }

  print() {
    this.traverseBF((node) => {
      if (node) {
        console.log(`${node.data}`)
        if (node.left) {
          console.log(`   L: ${node.left.data}`);
        }
        if (node.right) {
          console.log(`   R: ${node.right.data}`);
        }
      } 
    })
  }

	traverseBF(fn) {
    let nodes = [this.root];
    while (nodes.length) {
      let node = nodes.shift();
      if (node && node.left) {
        nodes.push(node.left);
      }
      if (node && node.right) {
        nodes.push(node.right);
      }
      fn(node);
    }
	}

	traverseDF(fn) {
    let nodes = [this.root];
    while (nodes.length) {
      let node = nodes.shift();
      if (node && node.left) {
        nodes.unshift(node.left);
      }
      if (node && node.right) {
        nodes.unshift(node.right);
      }
      fn(node);
    }
	}
}

const myTree = new BSTree();
myTree.insert(4)
myTree.insert(2)
myTree.insert(8)
myTree.insert(5)
myTree.insert(0)
myTree.insert(7)
myTree.insert(2)
myTree.insert(3)
myTree.insert(8)
myTree.insert(4)


//           4
//        /     \
//     2          8
//   /   \       /
// 0      3     5
//   \      \     \
//    2      4      7
//                    \
//                     8
myTree.print();

let listAr = myTree.toArrayOfLists()

for (let i = 0; i < listAr.length; i++) {
  console.log(listAr[i].head);
  // console.log(`${i} : ${listAr[i].head}`);
}

// const myList = new LinkedList();
// myList.insertLast(5);
// myList.insertLast(7);

// console.log(myList.size())

module.exports = { BSTree, Node };

