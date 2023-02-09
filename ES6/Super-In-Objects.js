//One can use super method in (classless) objects woth prototypes
const vehicle = {
    moveItem(){
        console.log("The vehicle is moving");
    }       
}

const car = {
    moveItem(){
        super.moveItem();
        console.log("The car is moving");
    }
}

Object.setPrototypeOf(vehicle, car);
car.moveItem()

// The vehicle is moving
// The car is moving