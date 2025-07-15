const { LinkedList } = require('../RotateLinkedList/rotateLinkedList');

describe('Rotate Linked List', () => {
    test('Rotate by 2', () => {
        const ll = new LinkedList();
        [1, 2, 3, 4, 5, 6].forEach(num => ll.append(num));
        ll.rotate(2);

        let current = ll.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }

        expect(result).toEqual([3, 4, 5, 6, 1, 2]);
    });

    test('Rotate by 0 (no change)', () => {
        const ll = new LinkedList();
        [1, 2, 3].forEach(num => ll.append(num));
        ll.rotate(0);

        let current = ll.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }

        expect(result).toEqual([1, 2, 3]);
    });

    test('Rotate by negative (-1)', () => {
        const ll = new LinkedList();
        [1, 2, 3].forEach(num => ll.append(num));
        ll.rotate(-1);

        let current = ll.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }

        expect(result).toEqual([3, 1, 2]);
    });
});
