const LinkedList = require('./linkedList');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('adds a node to the end', () => {
    list.add(5);
    list.add(10);
    list.add(15);
    expect(list.head.data).toBe(5);
    expect(list.head.next.data).toBe(10);
    expect(list.head.next.next.data).toBe(15);
  });

  test('removes a node by value', () => {
    list.add(5);
    list.add(10);
    list.add(15);
    list.remove(10);
    expect(list.head.next.data).toBe(15);
  });

  test('includes returns true if value exists', () => {
    list.add(5);
    list.add(20);
    expect(list.includes(20)).toBe(true);
  });

  test('includes returns false if value does not exist', () => {
    list.add(5);
    list.add(20);
    expect(list.includes(99)).toBe(false);
  });

  test('insertAt inserts node at specific index', () => {
    list.add(5);
    list.add(10);
    list.add(30);
    list.insertAt(15, 2); 
    expect(list.head.next.next.data).toBe(15);
  });

 

  test('printList on empty list', () => {
    console.log = jest.fn(); 
    list.printList();
    expect(console.log).toHaveBeenCalledWith("Head -> Null");
  });

  test('remove on empty list does nothing', () => {
    expect(() => list.remove(10)).not.toThrow();
  });

  test('insertAt out of bounds index', () => {
    console.log = jest.fn();
    list.add(5);
    list.insertAt(99, 5); 
    expect(console.log).toHaveBeenCalledWith("Index out of bounds");
  });
});
