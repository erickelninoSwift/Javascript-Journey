"use strict";
const surname = "Tshimbombo";
console.log(surname);


const errorMaker = () =>
{
    try
    {

      throw new erickError("This is lit my friend");

    }catch(err)
    {
        console.error(err.stack);
    }
}

errorMaker();



function erickError(message)
{
    this.message = message;
    this.name = "Jackpot Error";
    this.stack = `Error: ${this.name} Message: ${this.message}`;
}
