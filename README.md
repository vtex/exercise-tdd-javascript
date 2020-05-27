# TDD with Javascript

So, let's get familiar with the art of **Test Driven Development**(TDD) using plain-old JavaScript. We'll create a module that implements a simple **queue** and we'll follow you through the cycle of development for this problem!

## Requirements

- Node.js > 6.x
- Yarn or NPM
- IDE _(we'll use VSCode)_
- A terminal

## Initial instructions

1. **Clone this repository** on your local machine.
2. Run `yarn` (or `npm install`) on the downloaded folder.
3. Open the folder using an IDE of your preference.
4. Open a terminal session on that folder _(we'll use VSCode's integrated terminal)_.

## Test Driven Development

Test-driven development is a software development process that relies on the repetition of a very short development cycle: turn requirements into **test cases**, running these tests, and subsequently **improving the code** so tests pass.

We've taken care of writing the test cases (`queue.test.js`). Running `yarn test` on the root folder of this repository will execute the test suite and **re-execute it when detecting some change on the code**, so you only need to run it once.

## The problem

> In computer science, a **queue** is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front of the queue, analogously to the words used when people line up to wait for goods or services.

We'll create a JavaScript implementation of a queue that will have the following methods:

- `size()` to return the number of elements queued.
- `add(e)` to add an element to the end of the queue.
- `peek()` to look at the front of the queue _(without modifying it)._
- `dequeue()` to get the element at the front of the queue, removing it as well.

## Solution

Open `queue.js`, this is where we'll code.

When first running `yarn test`, you'll see that **all tests fails**. This is OK, since we have not implemented anything yet:

<img width="1002" alt="Screen Shot 2020-05-25 at 1 25 49 PM" src="https://user-images.githubusercontent.com/18706156/82835307-fbce2f00-9e99-11ea-9940-4801f21a75e4.png">

### Creating the queue

Usually, we try to address failed tests in a top-down strategy, since the first are usually the simpler ones. For the first test to succeed, we only need to **return something truthy on our `createQueue` function**. Let's do this:

```javascript
function createQueue() {
  return {}
}
```

After saving the file, the tests should run again on the same terminal sessions you've run `yarn test`. Let's see if something changes:

<img width="1015" alt="Screen Shot 2020-05-25 at 1 16 35 PM" src="https://user-images.githubusercontent.com/18706156/82835589-ddb4fe80-9e9a-11ea-8dd3-4eda3144b469.png">

**Oh, nice!** The first test passes, so we're probably on the right track :smile:

> The code in its current state doesn't achieve its goal or make much sense and that's fine! We will solve it step by step and we'll get there.

## `size`

For the next cases, we should **add the size function**. We should also introduce the underlying array that will hold our queue's data. So, let's do all of that, **adding to our existing code:**

```javascript
function createQueue() {
  return {
    elements: [],
    size() {
      return this.elements.length
    },
  }
}
```

After that, we should see the following tests to pass as well:

![image](https://user-images.githubusercontent.com/18706156/82836059-32a54480-9e9c-11ea-9347-76b237593eab.png)

## `add`

Now, let's implement the `add` function. It should receive an element as an argument and add it to the end of the queue. It should also, accordingly to the test description, return the queue's size afterwards.

```javascript
function createQueue() {
  return {
    elements: [],
    size() {
      return this.elements.length
    },
    add(e) {
      return this.elements.push(e)
    },
  }
}
```

_...running tests again..._

![image](https://user-images.githubusercontent.com/18706156/82837091-7b5dfd00-9e9e-11ea-8d6c-e0fc44cd1ef9.png)

Let's continue with our good work!

### `peek`

The `peek` function is simple: it should return the **item at the front of the queue**.

```javascript
function createQueue() {
  return {
    elements: [],
    size() {
      return this.elements.length
    },
    add(e) {
      return this.elements.push(e)
    },
    peek() {
      return this.elements[0]
    },
  }
}
```

Now, checking our terminal:

![image](https://user-images.githubusercontent.com/18706156/82837332-19ea5e00-9e9f-11ea-91b5-2dda7a6c4411.png)

**We're almost done!** Let's move on to the next function.

### `dequeue`

The `dequeue` method is where the queue "is consumed". It should **return the element at the front of the queue** and, then, **removing it**. As we can see on the test's description, it should also **thrown an error if the queue is empty**.

At last:

```javascript
function createQueue() {
  return {
    elements: [],
    size() {
      return this.elements.length
    },
    add(e) {
      return this.elements.push(e)
    },
    peek() {
      return this.elements[0]
    },
    dequeue() {
      if (this.size() === 0) {
        throw new Error()
      }
      return this.elements.shift()
    },
  }
}

module.exports = { createQueue }
```

Now, **all of the tests should pass:**

![image](https://user-images.githubusercontent.com/18706156/82837499-9da44a80-9e9f-11ea-9dc5-08729988746c.png)

Nice work!
