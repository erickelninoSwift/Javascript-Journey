console.log("I");
console.log("eat");
console.log("Ice Cream");
console.log("With");
console.log("Spoon");

// CallBacks

function one(call_two)
{
    console.log("my Step one is completed , Please call step 2");
    call_two();
}


function two()
{
    console.log("Step too also completed now now");
}

one(two);


let stocks = {
    Fruits:["Mango","Banana","Orange"],
    Liquid:["Milk","Juice","Yoghurt"],
    Food:["Salads","Cucumber","Chicken"],
    Clothes:["Levis","Daniel hetcher","Louis Vitton"],
    Shoes:["Reebook","Nike","Puma"]
}



let order = (fruits_name,call_production) =>{

    setTimeout(() =>{
         console.log(`Received order : ${fruits_name}`);
    },2000);

    setTimeout(() =>{
        call_production();
    },4000);

};

let production = () =>{
    console.log("Your food is ready for Collection!");
};


order(stocks.Food[1],production);