//A symbols is a unique and immutable data type introduced in ES6
//The purpoise is to generate a unique identifier but one cannot get access to the identifier
const sym = Symbol("Description,but its optional");
console.log(typeof sym);

//If a symbol is used as a property/key of an object, it’s stored in a special way 
//so that the property will not show up in a normal enumeration of the object’s properties.
const jay = {
    val : 10,
    [Symbol("random")]: "This is a symbol"
};
console.log(Object.getOwnPropertyNames(jay));
//symbol
//val
console.log(Object.getOwnPropertySymbols(jay)); //Object.getOwnPropertySymbols to retrieve the object's symbol properties
// symbol
// [ 'val' ]
// [ Symbol(random) ]
