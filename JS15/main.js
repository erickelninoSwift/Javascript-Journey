const myArray = [];

myArray[0] = "Erick";
myArray[1] = false;
myArray[2] = 40;


console.log(myArray);

myArray.push("Jackpot");

let ArrayLanegth = myArray.length;

console.log(myArray);

myArray.pop();

console.log(myArray);

delete myArray[1];

console.log(myArray);
console.log(myArray[1]);


const myArrayData = ["Eriik",34,false];

console.log(myArrayData);

myArrayData.splice(1,1, 333);

console.log(myArrayData);

const newArray = ['A','B','C','D','E','F','G'];
const jackArray = [false,34];

const newOne = newArray.join();

console.log(newOne);

console.log(newArray.reverse())

const erickArray = newArray.slice(3);

console.log(erickArray);





const theArray1 = ['A','B','C','D'];
const theArray2 = ['F',false];

const theNewArray = theArray1.concat(theArray2);


const theUltimeArray = [...theArray1, ...theArray2];

console.log(theUltimeArray);


console.log(theNewArray);


// Multi dimensional Array


const equpeShelfA = ["Baseball","Football","VolleyBall"];
const equpeShelfB = ["Basketball","golf","tennis"];

const clotheShelfA = ["tank tops","t-shirts","jersey"];
const clotheShelfB = ["sweat tops","sweat pants","hoodies"];



console.log(equpeShelfA[0]);
console.log(clotheShelfA[1]);

const choloArray = [equpeShelfA,equpeShelfB];
const jackpotArray = [clotheShelfA,clotheShelfB];

console.log(choloArray[1][1]);

console.log(jackpotArray[1][2]);

const sportStores = [choloArray,jackpotArray];

console.log(sportStores[1][0][1]);
console.log(sportStores[0][0][1]);

