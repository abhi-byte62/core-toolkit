/**
 * RingBuffer: Low-overhead circular buffer for stream chunks
 */
class RingBuffer {
  constructor(capacity = 1024) {
    this.buffer = new Array(capacity);
    this.capacity = capacity;
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  push(item) {
    if (this.size === this.capacity) return false;
    this.buffer[this.tail] = item;
    this.tail = (this.tail + 1) % this.capacity;
    this.size++;
    return true;
  }

  pop() {
    if (this.size === 0) return null;
    const item = this.buffer[this.head];
    this.buffer[this.head] = null;
    this.head = (this.head + 1) % this.capacity;
    this.size--;
    return item;
  }
}

module.exports = { RingBuffer };
