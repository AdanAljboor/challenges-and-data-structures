const Queue = require('../Queue/queue');

describe('Queue', () => {
  it('can enqueue into the queue', () => {
    const queue = new Queue();
    queue.enqueue(5);
    expect(queue.peek()).toBe(5);
  });

  it('can enqueue multiple values', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });

  it('can dequeue out of the queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.dequeue()).toBe(10);
    expect(queue.peek()).toBe(20);
  });

  it('can peek at the front value in the queue', () => {
    const queue = new Queue();
    queue.enqueue(99);
    expect(queue.peek()).toBe(99);
  });

  it('will return null when dequeuing an empty queue', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBe(null);
  });

  it('will return null when peeking into an empty queue', () => {
    const queue = new Queue();
    expect(queue.peek()).toBe(null);
  });

  it('can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('can make the queue empty after dequeuing everything', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });
});
