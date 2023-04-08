// console.log("I");
// console.log("eat");
// console.log("Ice Cream");
// console.log("With");
// console.log("Spoon");

// // CallBacks

// function one(call_two)
// {
//     console.log("my Step one is completed , Please call step 2");
//     call_two();
// }


// function two()
// {
//     console.log("Step too also completed now now");
// }

// one(two);


// let stocks = {
//     Fruits:["Mango","Banana","Orange"],
//     Liquid:["Milk","Juice","Yoghurt"],
//     Food:["Salads","Cucumber","Chicken"],
//     Cup:["Plate","bowl","Cup"],
//     Shoes:["Reebook","Nike","Puma"]
// }



// let order = (fruits_name,call_production) =>{

//     setTimeout(() =>{
//          console.log(`Received order : ${fruits_name} was selected`);
//          call_production();
//     },2000);

        
// };

// let production = () =>{
//     setTimeout(() =>{
//         console.log("Production has started");

//         setTimeout(() =>{
//             console.log("The food have been chopped");

//             setTimeout(() =>{
//                 console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added !`);
                 
//                 setTimeout(() =>{
//                     console.log("The machine have been started!!");
//                     setTimeout(() =>{

//                         console.log(`The container is : ${stocks.Cup[0]}`);

//                         setTimeout(() =>{
//                             console.log(`Toppings : ${stocks.Fruits[2]}`);

//                             setTimeout(() =>{
//                                 console.log("Food is served !");
//                             },2000);
//                         },3000);

//                     },2000);
//                 },1000);
//             },1000);
//         },2000);
//     });
// };


// order(stocks.Food[1],production);



let stockShops = {
    Fruits:["Mango","Banana","Orange"],
    Liquid:["Milk","Juice","Yoghurt"],
    Food:["Salads","Cucumber","Chicken"],
    Cup:["Plate","bowl","Cup"],
    Shoes:["Reebook","Nike","Puma"]
}


let is_Wordk_open = false;

const myOrder = (time,work) =>{

    return new Promise((resolve,reject) =>{

        if(is_Wordk_open)
        {
            setTimeout(() =>{
               resolve(work());
            },time);
        }else
        {
             reject("Unfortunatly work is closed");
        }
    });
};

const mywork = () =>{
    return `${stockShops.Fruits[2]} was selected !`;
};

myOrder(2000,mywork).then(() =>{
    return myOrder(1000,() => console.log(`${stockShops.Fruits[0]} was selected!`));
})
.then(() =>{
    return myOrder(2000, () => console.log(`Production have started !`));
}).then(() =>{
    return myOrder(1000,() => console.log(`Add water and Ice`));
})
.then(() =>{
    return myOrder(2000,() => console.log(`Add some ${stockShops.Liquid[0]}`));
})
.then(() =>{
    return myOrder(1000,() => console.log(`Container : ${stockShops.Shoes[0]}`));
})

.then(() =>{

    return myOrder(2000,() =>{
        console.log(`Ice cream was served !!!`);
    });
})

.catch(() =>{
    console.log(`There was an error while trying to start cooking`);
});

// myOrder(2000,function elnino(){
//     console.log(`Erickelnino jackpot!!`);
// })
