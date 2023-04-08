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
         console.log(`Received order : ${fruits_name} was selected`);
         call_production();
    },2000);

        
};

let production = () =>{
    setTimeout(() =>{
        console.log("Production has started");

        setTimeout(() =>{
            console.log("The food have been chopped");

            setTimeout(() =>{
                console.log(`Add ${stocks.Liquid[0]} & ${stocks.Liquid[1]}`);
                

            },1000);
        },2000);
    });
};


order(stocks.Food[1],production);