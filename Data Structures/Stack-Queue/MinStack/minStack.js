class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);
    if (this.minStack.length === 0 || value <= this.getMin()) {
      this.minStack.push(value);
    }
  }

  pop() {
    const popped = this.stack.pop();
    if (popped === this.getMin()) {
      this.minStack.pop();
    }
    return popped;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }

  printStack() {
    console.log(this.stack);
  }
}

module.exports = MinStack;
