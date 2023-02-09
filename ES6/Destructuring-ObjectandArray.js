//Destructing helps to avoid the need for temp variables when dealing with objects and arrays
function tem(){
    return [30, 40, 50];
}

let arr = tem(); // 30, 40, 50

let [x, y, z] = tem();
console.log(x,y,z); // 30, 40, 50

function getStudent(){
    return{
        studentNumber : '200',
        year : '2023',
        metadata : {
            generation : 'GenZ',
            height : "5'6"
        }
    };
}

//const {studentNumber, year} = getStudent();
//console.log(studentNumber, year);

const {studentNumber, metadata : {generation}} = getStudent();
console.log("The student ID is:", studentNumber, "and the metadata is:",generation);

// Output
// 30 40 50
// The student ID is: 200 and the metadata is: GenZ


