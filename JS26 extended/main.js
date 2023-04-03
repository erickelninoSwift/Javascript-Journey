console.log("Chapter 26 extended Async / Await");

const myPromise = new Promise((resolve,reject) =>{

    const error = false;
    if(!error)
    {
        resolve("How are you doing ? My firned ");
        
    }else
    {
        reject("Error fine!");
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


