//Set objects are collections of unique values as duplicate values are ignored
const mySet = new Set([1,1,3,4,5,2,5,2]);
console.log(mySet.size);    //5
console.log(mySet.has(1));  //true
console.log(mySet.add('strings'));      // 1, 3, 4, 5, 2, 'strings' 
console.log(mySet.add({ x :1, y : 2})); // { 1, 3, 4, 5, 2, 'strings', { x: 1, y: 2 } }

//iterate either using foreach or for..of loop
mySet.forEach((item) =>{
    console.log(item);
})

for(let value of mySet){
    console.log(value);
}


//Weakset lets one store weakly held objects in a collection just like WeakMap
//An object in a WeakSet occures only once

const myWeakSet = new WeakSet();
const obj = {};
const foo = {};

myWeakSet.add(obj);
//myWeakSet.add(foo);

console.log(myWeakSet.has(obj));    //true
console.log(myWeakSet.has(foo));    //false, foo has not been added to the set
myWeakSet.add(foo);               //Add foo to the set
console.log(myWeakSet.delete(foo)); //true, foo has been deleted from the set
console.log(myWeakSet.has(foo));    //false, foo does not exist in the set




