const { LinkedList } = require('./rotateLinkedList');

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(6);

console.log("Original List:");
ll.printList();

ll.rotate(2);

console.log("After Rotating by 2:");
ll.printList();
