//Classes in ES6
//ES6 class is not a new object-oriented inheritance, 
//but rather uses JavaScript's existing prototype-based inheritance
//A class in ES6 is just a new syntax to work with prototypes and constructor functions
//Functions defined using static keyword implement static/class functions on the class
class Task{
    constructor(){
        console.log("task instantiated");
    }
    showId(){
        console.log(23);
    }
    static loadAll(){
        console.log("Loading all");
    }
}
console.log(typeof Task);   //function
const task = new Task();    //task instantiated
task.showId();              //23
Task.loadAll();             //Loading all  


//Extends and Super in classes
class Vehicle{
    constructor(){
        console.log("A new vehicle");
    }
    getVehicle(){
        console.log("Getting the Vehicle")
    }
}
class Lorry extends Vehicle{
    constructor(){
        super();
        super.getVehicle(); //call parent class method
        console.log("Vehicle type is lorry");
    }
}
let a = new Lorry();
// function
// task instantiated    
// 23
// Loading all
// A new vehicle        
// Vehicle type is lorry