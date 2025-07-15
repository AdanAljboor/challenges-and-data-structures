class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (!this.front) return null;
    const temp = this.front;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    temp.next = null;
    return temp.value;
  }

  peek() {
    return this.front ? this.front.value : null;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queue;
