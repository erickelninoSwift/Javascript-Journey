const myObject = {
    alive:true,
    myHobby: 45,
    money: ["Erick","Elnino","jackpot"],
    beverage: {
        morning: "Coffee",
        Afternoon: "ice tea"
    },
    engine: function()
    {
        return `What i drink in the morning ${this.beverage.morning}`;
    }
}

console.log(myObject.engine());

const truck = Object.create(myObject);
truck.money = function()
{
    return "Hello World";
}

console.log(truck.money());
console.log(truck.alive);

<<<<<<< HEAD
const band = {
    vocals: "Eriik Elnino",
    guitar: "Soprano",
    Drums : "Michael Jackson",
    Jazz : "Mike brown"
}

console.log(band.vocals);

const {Jazz: myVariable } = band;

console.log(myVariable);

const myfunction = function({vocals})
{
    return `My Favourite singer is ${vocals}`;
}

console.log(myfunction(band));

=======

const band = {
    vocals: "Robert plant",
    guitar : "Jimmy page",
    bass : "John Paul Jones",
    drums : "John Bonham"
}

console.log(band.hasOwnproperty("drums"));
console.log(Object.keys(band));
console.log(Object.values(band));

for(let job in band)
{
    console.log(band[job]);
}


// Object destructuring 
const {bass: myVariable} = band;
alert(myVariable);
>>>>>>> 1098a10adf1fdcf3bd93d0522310117af2c89463
