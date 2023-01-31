//Arrow functions are a short hand notation for writing functions in ES6
//It has a parameter list(...), marker => and the function body

//Normal function
function addition(x, y){
    return x + y;
}

//Arrow function
const additionNum = (x, y) => x + y;
//In a single argument, parentheses is not required
const addNumbers = b => 10 + b;
console.log(additionNum("The addition is: ", 4,5));// Answer is 9


//Alternatively, arrow function can also be written using the usual function block body
const arr = ['Apple', 'Banana', 'Orange'];
const result = arr.map (fruit => {
    return fruit;
});
console.log("The fruits are: ", result);

//ES6 allows one to set default parameters in function defintions
const getFinalPrice = (price, tax =0.5) => price + price * tax;
console.log("The final price is: ", getFinalPrice(200));