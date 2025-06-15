class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  remove(data) {
    if (!this.head) return;
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }

  includes(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }

  insertAt(data, index) {
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let prev = null;
    let count = 0;

    while (current && count < index) {
      prev = current;
      current = current.next;
      count++;
    }

    if (count === index) {
      prev.next = newNode;
      newNode.next = current;
    } else {
      console.log("Index out of bounds");
    }
  }

  printList() {
    let result = "Head -> ";
    let current = this.head;
    while (current) {
      result += `${current.data} -> `;
      current = current.next;
    }
    result += "Null";
    console.log(result);
  }
}

module.exports = LinkedList;
