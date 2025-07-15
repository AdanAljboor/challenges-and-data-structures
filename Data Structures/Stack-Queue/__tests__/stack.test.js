const Stack = require('../Stack/stack');


describe('Stack', () => {
  it('can push to the stack', () => {
    const stack = new Stack();
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  it('can push multiple values onto the stack', () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.peek()).toBe(30);
  });

  it('can pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.peek()).toBe(1);
  });

  it('can empty the stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(100);
    stack.push(200);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('can peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(999);
    expect(stack.peek()).toBe(999);
  });

  it('will return null when popping an empty stack', () => {
    const stack = new Stack();
    expect(stack.pop()).toBe(null);
  });

  it('will return null when peeking an empty stack', () => {
    const stack = new Stack();
    expect(stack.peek()).toBe(null);
  });

  it('can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });
});
