//For... of iterates over iterable objects, such as array
//For... in iterates over all enumarable properties of an object
const flavours = ['Vanilla', 'Chocolate', 'Strawberry'];
flavours.size = 3;
for(let flavour of flavours){
    console.log(flavour);
}
console.log("The flavours are: ", flavours);
//Vanilla
//Chocolate
//Strawberry

const flavours =  ['Vanilla', 'Chocolate', 'Strawberry'];
flavours.size = 3;
for(let flavour in flavours){
    console.log(flavour);
}
console.log("The flavours are: ", flavours);
// 0
// 1
// 2