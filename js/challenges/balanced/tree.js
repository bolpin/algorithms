// Node class and BSTree class

class Node {
	constructor(data) {
		this.data = data;
		this.right = null;
		this.left = null;
	}
}

class BSTree {
	constructor(node = null) {
    this.root = node;
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

  print() {
    console.log("Tree:");
    this.traverseBF((node) => {
      if (node && (node.left || node.right)) {
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

	// traverseBF(fn) {
  //   let nodes = [this.root];
  //   while (nodes.length) {
  //     let node = nodes.shift();
  //     if (node && node.left) {
  //       nodes.push(node.left);
  //     }
  //     if (node && node.right) {
  //       nodes.push(node.right);
  //     }
  //     fn(node);
  //   }
	// }

	// traverseDF(fn) {
  //   let nodes = [this.root];
  //   while (nodes.length) {
  //     let node = nodes.shift();
  //     if (node && node.left) {
  //       nodes.unshift(node.left);
  //     }
  //     if (node && node.right) {
  //       nodes.unshift(node.right);
  //     }
  //     fn(node);
  //   }
	// }
}

module.exports = { Node, BSTree };

