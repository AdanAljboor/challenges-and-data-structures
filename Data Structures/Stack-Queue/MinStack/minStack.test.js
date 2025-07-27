const MinStack = require('./minStack');

describe('MinStack', () => {
  let stack;

  beforeEach(() => {
    stack = new MinStack();
  });

  test('push and getMin', () => {
    stack.push(5);
    stack.push(3);
    stack.push(7);
    expect(stack.getMin()).toBe(3);
  });

  test('getMin after pop', () => {
    stack.push(5);
    stack.push(2);
    stack.push(8);
    stack.pop(); // removes 8
    expect(stack.getMin()).toBe(2);
    stack.pop(); // removes 2
    expect(stack.getMin()).toBe(5);
  });

  test('peek returns top value', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  test('isEmpty returns true on empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test('printStack shows correct elements', () => {
    console.log = jest.fn();
    stack.push(1);
    stack.push(2);
    stack.printStack();
    expect(console.log).toHaveBeenCalledWith([1, 2]);
  });
});
