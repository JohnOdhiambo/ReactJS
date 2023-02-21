//Javascript Class
//A class is a blueprint of an object. We instantiate a class to create different objects
class Person{
    constructor(name, nationality, race){
        this.name = name
        this.nationality = nationality
        this.race = race
    }
    getPersonInfo(){
        return `${this.name}, is a ${this.nationality}, of ${this.race} ethnicity`
    }
}
const person1 = new Person('Jay', 'Kenyan', 'Black')

class Adult extends Person{
    constructor(name, nationality, race, Age){
        super(name, nationality, race)
        this.Age = Age
    }
     getAge (){
        console.log("Execution code")
    }
}
const adult = new Adult('Tony', 'Swiss', 'White',23)
console.log(adult)      //child class
//Adult { name: 'Tony', nationality: 'Swiss', race: 'White', Age: 23 }

console.log(person1)    //parent class
//Person { name: 'Jay', nationality: 'Kenyan', race: 'Black' }