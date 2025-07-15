class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (!this.top) return null;
    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  isEmpty() {
    return this.top === null;
  }
}

module.exports = Stack;
