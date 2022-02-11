class Node {
  constructor(data, parent = null) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }

  insert(data, parent=null) {
    if (data < this.data && this.left) {
      this.left.insert(data, this);
    } else if (data < this.data) {
      this.left = new Node(data, this);
    } else if (data > this.data && this.right) {
      this.right.insert(data, this);
    } else if (data > this.data) {
      this.right = new Node(data, this);
    }
  }

}

function print(node) {
  if (!node) {return;}

  console.log(node.data);
  if (node.left || node.right || node.parent){
    console.log(`   P: ${node.parent ? node.parent.data : ""}`)
    console.log(`   L: ${node.left ? node.left.data : ""}`);
    console.log(`   R: ${node.right ? node.right.data : ""}`);
  }

  print(node.left);
  print(node.right);
}

module.exports = { print, Node };
