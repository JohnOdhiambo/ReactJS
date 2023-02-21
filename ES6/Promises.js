//A promise is an object that is waiting for an asynchronous operation to complete
//When the operation completes, the promise is either fulfilled(resolved) or rejected
//The first handler (typically named resolve) is a function to call with the future value when it's ready
//the second handler (typically named reject) is a function to call to reject the Promise if it can't resolve the future value
const a = new Promise((resolve, reject) => {
    if(/*first considtion*/ true){
        resolve(/*value*/);     //successfully fulfilled
    } else {
        reject(/*reason*/);     //error, rejected
    }
});
//Every Promise has a method named then which takes a pair of callbacks.
//The first callback is called if the promise is resolved, while the second is called if the promise is rejected
a.then((val) => console.log("Promise resolved", val),
       (err) => console.log("Promise rejected", err));

//Returning a value from then callbacks will pass the value to the next then callback.
const hey = new Promise((resolve, reject) => {resolve("Hello")});
hey.then((str) => `${str} World`)
   .then((str) => `${str}!`)        //Promise resolved undefined
   .then((str) => console.log(str)) //Hello World!
   
//When returning a promise, the resolved value of the promise will get passed to the next callback to effectively chain them together
const prom = new Promise((resolve, reject) => { resolve(1)});
const eventuallyAdd1 = val => new Promise((resolve, reject) => { resolve(val + 1)});
prom.then(eventuallyAdd1)
    .then(eventuallyAdd1)
    .then(eventuallyAdd1)
    .then((val) => console.log(val));   // 4
//Promise resolved undefined
//Hello World!
// 4
