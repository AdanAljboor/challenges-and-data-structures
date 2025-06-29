const { Node, mergeSortedLists } = require('./mergeSorted');

test('merge sorted list with empty list', () => {
  let list1 = new Node(1);
  list1.next = new Node(3);
  list1.next.next = new Node(5);

  let list2 = null;

  const merged = mergeSortedLists(list1, list2);

  expect(merged.value).toBe(1);
  expect(merged.next.value).toBe(3);
  expect(merged.next.next.value).toBe(5);
  expect(merged.next.next.next).toBeNull();
});

test('merge two empty lists', () => {
  const merged = mergeSortedLists(null, null);
  expect(merged).toBeNull();
});

test('merge two sorted lists correctly', () => {
  let list1 = new Node(1);
  list1.next = new Node(3);
  list1.next.next = new Node(5);

  let list2 = new Node(2);
  list2.next = new Node(4);
  list2.next.next = new Node(6);

  const merged = mergeSortedLists(list1, list2);

  expect(merged.value).toBe(1);
  expect(merged.next.value).toBe(2);
  expect(merged.next.next.value).toBe(3);
  expect(merged.next.next.next.value).toBe(4);
  expect(merged.next.next.next.next.value).toBe(5);
  expect(merged.next.next.next.next.next.value).toBe(6);
  expect(merged.next.next.next.next.next.next).toBeNull();
});
