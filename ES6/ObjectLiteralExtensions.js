//ES6 allows declaring Object Literals by providing shorthand syntax 
//for initializing properties from variables and defining function methods
function getStudent(studentNumber, year, name){
    return{
        studentNumber, // same as studentNumber : studentNumber
        year,          // same as year : year
        name,          // same as name : name

        getName(){
            this.name = name;
        }
    }
};

let student = getStudent('9601', '013', 'Jay');
console.log("The Student details are :", student);

// The Student details are : {
//     studentNumber: '9601',
//     year: '013',
//     name: 'Jay',
//     getName: [Function: getName]
//   }