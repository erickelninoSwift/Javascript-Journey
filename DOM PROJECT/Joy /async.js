console.log("Hello world");

// const order = async (() =>{
//     try
//     {
    

//     }catch(error)
//     {
//         console.log("AbC doesnt exist ,", error);
//     }finally
//     {
//         console.log("Its runs anyways");
//     }
// });


// async function order()
// {
//     try
//     {
//         await abc;

//     }catch(error)
//     {
//         console.log("Error was found : ", error);

//     }finally
//     {
//         console.log("Shop is closed Thank you !");
//     }
// }

// order();

let imaMature = true;

const makeAppleJuice = () =>{
    return new Promise((resolve,reject) =>{

        if (imaMature)
        {
            setTimeout(() =>{
                resolve(console.log(`I am old enough to have a child`));
            },3000);

        }else
        {
           reject(console.log(`Error sorry you still very youg`)) 
        }

    });
}


const erickelnino = async () =>{
   setTimeout(() =>{
    console.log("My name is Eriik , I am from congo");
   },3000);
}


const mysecondJob = async () =>{
    try
    {
        console.log("I am erick");
        console.log("I love to eat Pasta");
        console.log("What is your name ?");
        await erickelnino();

        console.log("Bonne appetit");


    }catch(error)
    {

    }finally
    {
        console.log(`Run everything anyways`);
    }
}

mysecondJob();
