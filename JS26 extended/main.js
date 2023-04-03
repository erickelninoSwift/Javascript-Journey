console.log("Chapter 26 extended Async / Await");

const myPromise = new Promise((resolve,reject) =>{

    const error = false;
    if(error)
    {
        resolve("How are you doing ? My firned ");

    }else
    {
        reject("No rejected the promise !");
    }
});

myPromise.then(response =>{

    return response + "Eriik";

}).then(result =>{

    console.log(result);

}).catch(error =>{

    console.log(error);
});

 console.log(myPromise);

 const myNextPormise = new Promise((resolve,rejected) =>{
    setTimeout(function(){
        resolve("How are you doing jackpot ?");
    },3000);
 });

myNextPormise.then(result =>{
   return result + "I am doing very Well";
}).then(value =>{
    console.log(value);
});


