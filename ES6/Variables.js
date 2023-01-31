//let, const
//let and const are hoisted but cannot be accessed before declaration 
//When using const with a fixed valiue or string. CAPITAL CASING is appropriate 1.e. const PI = 3.14
//Use const over let not unless one intends to reassign the variable
{
    const a = 10;
    a = 12; //TypeError for assigning to a const varaible

    const arr = [7,8];
    arr.push(9);
    console.log(arr); //[7, 8,9]

    arr = 10; //TypeError for assigning to a const varaible
    arr[0] = 6; // value is mutable
    console.log(arr); // [6,8,9]

}


