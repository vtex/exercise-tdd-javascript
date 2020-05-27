const QueueFactory = require('./queue.js')

describe('Creating the queue', () => {
  test('should be truthy after creation', () => {
    const queue = QueueFactory.createQueue()

    expect(!!queue).toEqual(true)
  })
})

describe('Queue Size', () => {
  test('should have a `size` function to return the number of elements on the queue', () => {
    const queue = QueueFactory.createQueue()

    expect(typeof queue.size).toEqual('function')
  })

  test('should return the queue length when calling `size`', () => {
    const queue = QueueFactory.createQueue()

    expect(queue.size()).toEqual(0)
  })
})

describe('Adding elements', () => {
  test('should have an `add` function to enqueue an element', () => {
    const queue = QueueFactory.createQueue()

    expect(typeof queue.add).toEqual('function')
  })

  test('should return the queue length when calling `add` with an element', () => {
    const queue = QueueFactory.createQueue()

    const result = queue.add('X')
    expect(result).toEqual(1)
  })
})

describe('Peeking elements', () => {
  test('should have a `peek` function to inspect the item at the front of the queue', () => {
    const queue = QueueFactory.createQueue()

    expect(typeof queue.peek).toEqual('function')
  })

  test('should return the item at the front of the queue when calling `peek`', () => {
    const queue = QueueFactory.createQueue()

    queue.add('X')
    queue.add('E')
    expect(queue.peek()).toEqual('X')
  })

  test('should not change the queue when calling `peek`', () => {
    const queue = QueueFactory.createQueue()

    queue.add('X')
    queue.add('E')
    queue.peek()
    expect(queue.size()).toEqual(2)
  })
})

describe('Dequeue elements', () => {
  test('should have a `dequeue` function to get the item at the front of the queue', () => {
    const queue = QueueFactory.createQueue()

    expect(typeof queue.dequeue).toEqual('function')
  })

  test('should return the item at the front of the queue when calling `dequeue`', () => {
    const queue = QueueFactory.createQueue()

    queue.add('X')
    queue.add('E')
    expect(queue.dequeue()).toEqual('X')
  })

  test('should remove the element returned when calling `dequeue`', () => {
    const queue = QueueFactory.createQueue()

    queue.add('X')
    queue.add('E')
    queue.dequeue()
    expect(queue.size()).toEqual(1)
  })

  test('should throw error with there are no elements on the queue', () => {
    const queue = QueueFactory.createQueue()

    queue.add('X')
    queue.add('E')
    queue.dequeue()
    queue.dequeue()
    expect(() => queue.dequeue()).toThrow(Error)
  })
})
