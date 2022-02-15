const { LinkedList } = require('./list.js');

class DiGraph {
  constructor() {
    this.data = [];
  }

  addNode(val) {
    this.data[val] = new LinkedList();
  }

  removeNode(val) {
    this.data[val] = undefined;
  }

  addEdge(node, targetNode) {
    if (!this.data[node]) {
      this.addNode(node)
    }
    if (!this.data[targetNode]) {
      this.addNode(targetNode)
    }
    this.data[node].insertLast(targetNode);
  }

  removeEdge(node, targetNode) {
     
  }
}

module.exports = { DiGraph };



