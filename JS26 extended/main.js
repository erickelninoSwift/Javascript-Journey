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




const user = fetch("https://jsonplaceholder.typicode.com/users");

user.then(repsonse =>{
   return repsonse.json();
}).then(value =>{
    
    value.forEach(user =>{
        console.log(user);
    });

});


const myUsers = {
    userlist:[]
}

const myfunction = async () =>{
    const erickresponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserdata = await erickresponse.json();
    // console.log(jsonUserdata);
    myUsers.userlist = jsonUserdata;
    display(myUsers.userlist);
    return jsonUserdata;
}

const display = async (mydata) =>{

    console.log("=================");
    mydata.forEach( user =>{
        console.log(`Username: ${user.name}`);
    });
    console.log("=================");
};

myfunction();


const getAllusersEmail = async () =>{

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await response.json();
    // console.log("********")
    // console.log(userData);
    // console.log("********")
    const userEmail = userData.map(user =>{
        return user.email;
    });

    userData.forEach(user =>{
        console.log(`My email Address: ${user.email}`);
    });

    userEmail.forEach(email =>{
        console.log(`Email: ${email}`);
    });
}


getAllusersEmail();


const jokesObject = {
    id: 'VKe2gNCQnb', 
    joke: 'What do you call a group of killer whales playing instruments? An Orca-stra.'
}


// const getThatJoke = async () =>{
//     const response = await fetch("https://icanhazdadjoke.com/",{
//         method: "GET",
//         headers: {
//             Accept: "application/json"
//         }
//     });
//     const jokesdata = await response.json();
//     console.log("Elnino!!!!!!");
//     console.log(jokesdata);
//     console.log("Jackpot!!!!!");
// }

// getThatJoke();

const getThatJoke = async (elninoObject) =>{
    const response = await fetch("http://httpbin.org/post",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(elninoObject)
    });
    const jsonResponse = await response.json();
    
    console.log("Elnino!!!!!!");
    console.log(jsonResponse);
    console.log("Elnino!!!!!!");

}

getThatJoke(jokesObject);

// const chucknorrisJokes = async (firtName,lastName) =>{

//     const response = await fetch(`https://api.chucknorris.io/jokes/random?firstName=${firtName}&lastName=${lastName}&categories=nerdy`);
//     const jokesData = await response.json();


//     console.log(`ChuckNorris: ${jokesData.value}`);

// }


// chucknorrisJokes("Clint","Eastwood");


const getdataFromForm = () =>{
    const requestObjt = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: "nerdy"
    }

    return requestObjt;
}

const createURLRequest = (dataform) =>{
  return `https://api.chucknorris.io/jokes/random?firstName=${dataform.JSONfirtName}&lastName=${dataform.lastName}&categories=${dataform.categories}`;
}



const chucknorrisJokes = async (url) =>{

    const response = await fetch(url);
    const jokesData = await response.json();
    console.log(`FUKUSHIMA: ${jokesData.value}`);

}

chucknorrisJokes(createURLRequest(getdataFromForm()));




