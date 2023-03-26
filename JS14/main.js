var x = 3;

console.log(x);


// Global acope
var x = 10;
let y = 30;
const number = 50;


// Local scope
// {
//     let v = 10;
//     console.log(v);
// }


function myFunc()
{
    const z = 5;
    console.log(z);

    {
        let v = 10;
        console.log(v);
    }

}

myFunc();


var erick = 1;
let eriik = 20;
const eriiik = 50;

console.log(`global: ${erick}`);
console.log(`global: ${eriik}`);
console.log(`global: ${eriiik}`);


function elninoFunc()
{
    var erick = 45;
    let eriik = "Hello";
    const eriiik = 60;

    // Block 
    {
        var erick = 120;
        let eriik = "Jackpot";
        const eriiik = 70;

        console.log(`block: ${erick}`);
        console.log(`block: ${eriik}`);
        console.log(`block: ${eriiik}`); 
    }
// ====================


    console.log(`function: ${erick}`);
    console.log(`function: ${eriik}`);
    console.log(`function: ${eriiik}`);
}
  
console.log(`true value : ${eriiik}`);
elninoFunc();