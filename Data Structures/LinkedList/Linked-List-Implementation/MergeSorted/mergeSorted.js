class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeSortedLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let dummy = new Node(0);
  let current = dummy;

  let current1 = list1;
  let current2 = list2;

  while (current1 && current2) {
    if (current1.value < current2.value) {
      current.next = current1;
      current1 = current1.next;
    } else {
      current.next = current2;
      current2 = current2.next;
    }
    current = current.next;
  }

  if (current1) current.next = current1;
  if (current2) current.next = current2;

  return dummy.next;
}

module.exports = { Node, mergeSortedLists };
