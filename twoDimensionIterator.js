// Implement a 2D iterator class. It will be initialized with an array of arrays, and should implement the following methods:
//     next(): returns the next element in the array of arrays. If there are no more elements, raise an exception.
//     has_next(): returns whether or not the iterator still has elements left.
// For example, given the input [[1, 2], [3], [], [4, 5, 6]], calling next() repeatedly should output 1, 2, 3, 4, 5, 6.

class TwoDimensionIterator {
  original = [];
  currentOutput = [];
  position = 0;

  constructor(arr) {
    this.original = arr;
    this.currentOutput = [];
  }

  has_next() {
    return !!this.original[this.position]?.length;
  }

  next() {
    if (this.has_next()) {
      this.currentOutput = [
        ...this.currentOutput,
        ...this.original[this.position],
      ];
      this.position = this.position + 1;
    } else if (this.position < this.original?.length) {
      this.position = this.position + 1;
    } else {
      throw new Error("ran out of elements in the 2D array!");
    }

    // end of the iterator console log the currentOutput
    if (this.position === this.original?.length) {
      console.log(this.currentOutput);
      return this.currentOutput;
    }
  }
}

const two = new TwoDimensionIterator([[1, 2], [3], [], [4, 5, 6]]);

two.next();
two.next();
two.next();
two.next();

// should throw an error
// two.next();
