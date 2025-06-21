const { LinkedList } = require("../linkedList");

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);

console.log("Before reverse:");
list.printList();

list.reverse();

console.log("After reverse:");
list.printList();
