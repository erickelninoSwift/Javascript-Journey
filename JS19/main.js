const myObj = 
{
    name: "Erick",
    hobbies: ["eat","sleep","code"],
    hello : function()
    {
        console.log(`Hello everyone ${this.name}`);
    },

    jackpot: function()
    {
        return `I want to win the lottery`
    }
};


console.log(myObj);
myObj.hello();
console.log(myObj.jackpot());

const sendJSON = JSON.stringify(myObj);
console.log(typeof sendJSON);
console.log(typeof myObj);

console.log(sendJSON);

const receivedJSOn = JSON.parse(sendJSON);
console.log(receivedJSOn);

console.log(typeof receivedJSOn);