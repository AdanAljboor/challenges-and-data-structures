
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
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

    printList() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }

    rotate(k) {
        if (!this.head || k === 0) return;

        let length = 1;
        let current = this.head;
        while (current.next) {
            current = current.next;
            length++;
        }

        current.next = this.head;

        k = k % length;

        if (k < 0) {
            k = k + length;
        }

        if (k === 0) {
            current.next = null;
            return;
        }

        let newTail = this.head;
        for (let i = 1; i < k; i++) {
            newTail = newTail.next;
        }

        this.head = newTail.next;
        newTail.next = null;
    }
}

module.exports = { LinkedList, Node };
