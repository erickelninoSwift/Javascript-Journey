console.log("How are you doing today ?");

const arrayNumber = [1,2,3,4,5,6,7,7,8,9];
let newArray = [];

newArray = arrayNumber.map(number =>{
    return number * 5;
});

console.log(arrayNumber);
console.log(newArray);

const currentnewArray = newArray.map(number =>{
    return number * 10;
});

console.log(currentnewArray);

// Filter function


const newArray2 = currentnewArray.filter(number =>{
    return number < 1000;
});

console.log(newArray2);

const number123 = newArray2.map(number =>{
    return `Number: ${number}`;
});

console.log(number123);