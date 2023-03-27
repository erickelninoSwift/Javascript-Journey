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