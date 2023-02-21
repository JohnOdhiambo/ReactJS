//It allows a function to generate many values over time by returning an object which can be iterated
//over to pull values from the function one value at a time
//A generator function returns an iterable object when it's called
//It is written using the new * syntax as well as the new yield keyword.
function *infiniteNumbers(){
    let n = 1;
    while (true){
        yield n++;
    }
}
const nums = infiniteNumbers();
console.log(nums.next());       // { value: 1, done: false }
console.log(nums.next());       // { value: 2, done: false }
console.log(nums.next());       // { value: 3, done: false }
console.log(nums.next());       // { value: 4, done: false }



