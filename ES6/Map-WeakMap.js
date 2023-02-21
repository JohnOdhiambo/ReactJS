//MAP Datastructure
//An object is made of keys (always strings) and values, while 
//in Map, any value may be used as either a key or a value
const myMap = new Map();

const keyString = "a string",
    keyObject = {},
    keyFunc = (a) = {};
//set the values
myMap.set(keyString, "Value associated with 'a string'");
myMap.set(keyObject, "Value associated with keyObject");
myMap.set(keyFunc, "Value associated with keyFunc");

myMap.size;//3

//get the values
console.log(myMap.get(keyString));
console.log(myMap.get(keyObject));
console.log(myMap.get(keyFunc));

//Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

//WEAKMAP Datastructure
//It is a map in which the keys are weakly referenced
//In contrast to Maps, every key must be an object
//It only has 4 methods ; delete(key), has(key), get(key) and set(key, value)
const myWeakMap = new WeakMap();

const o1 = {},
    o2 = () => {},
    o3 = Window;

myWeakMap.set(o1, 37);
myWeakMap.set(o2, "jay");
myWeakMap.set(o3, undefined);

console.log(myWeakMap.get(o3));     //undefined since its the set value
console.log(myWeakMap.has(o1));     //true
console.log(myWeakMap.delete(o1));  //true
console.log(myWeakMap.has(o1));     //false



