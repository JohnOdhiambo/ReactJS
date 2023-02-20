//An iterator accesses the items from a collection one at a time,
// while keeping track of its current position within that sequence
//It has a next() method which returns the next item in the sequence.
//This method returns an object with two properties: done and value.
//ES6 has Symbol.iterator which specifies the default iterator for an object.
const arr = [5,6,9];
const itrr = arr[Symbol.iterator]();

//done has the value as false if the iterator is past the end of the iterated sequence
console.log(itrr.next());   //{ value: 5, done: false }
console.log(itrr.next());   //{ value: 6, done: false }
console.log(itrr.next());   //{ value: 9, done: false }
//done has the value as true if the iterator is past the end of the iterated sequence
console.log(itrr.next());   //{ value: undefined, done: true }


