const { LinkedList } = require('../linkedList');

describe('LinkedList reverse()', () => {
  it('should reverse a list with multiple nodes', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);

    list.reverse();

    const values = list.printList();
    expect(values).toEqual([3, 2, 1]);
  });

  it('should handle a list with one node', () => {
    const list = new LinkedList();
    list.add(10);

    list.reverse();

    const values = list.printList();
    expect(values).toEqual([10]);
  });

  it('should handle an empty list', () => {
    const list = new LinkedList();

    list.reverse();

    const values = list.printList();
    expect(values).toEqual([]);
  });

  it('should handle a list with duplicate values', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(2);
    list.add(3);

    list.reverse();

    const values = list.printList();
    expect(values).toEqual([3, 2, 2, 1]);
  });
});
