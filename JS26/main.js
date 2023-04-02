
// const myPromise = new Promise((resolve,reject) => {
//   const erro = false;
//   if(!erro)
//   {
//     resolve(30 + 30);
//   }else
//   {
//     reject("Hello this is jackpot here")
//   }
// });

// // console.log(myPromise);

// const erickPorimise = new Promise((resolve, reject) =>{

//     const number = 5;
//     if (number >= 18)
//     {
//         resolve("you are very mature");
//     }else
//     {
//         reject("You are very young");
//     }
// });

// erickPorimise.then(value =>{

//    return value + "My Friend!!";

// }).then(newValue =>{

// console.log(newValue);

// }).catch(error =>{
//     console.log(`Error found: ${error}`);
// });


// const myNextPromise = new Promise((resolve, reject) => {

//     const number2 = 30;
//     setTimeout(function(){
//         number2 >= 50 ? resolve("You next promise is good") : reject("You are wrong");
//     },3000);

// });

// myNextPromise.then(value => {
//     console.log(value);
// }).catch(erro =>{
//     console.log(`Error found: ${erro}`);
// });

// console.log("I completly understand this thing");

// // Fetch 

// const user = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(user);

// user.then(response =>{
//     return response.json();
// }).then(data =>{
//     console.log(data);
//     console.log(data.length);
//     console.log(data[0])

//     data.forEach(user => {
//         console.log(user["name"]);
//     });

// }).catch(err =>{
//     console.log(`Error found while fetching data ${err}`);
// });


// // Asyn and Await 
// console.log("Async and Await");

// const myUser = {
//     userList:[]
// }

// const myCoolfunction = async () =>{

//     const newuser = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     return newuser;
// };


// const erickdata = async () =>{
//  const erick = await myCoolfunction();
//  myUser.userList = erick;
// };

// // console.log(erickdata());
// erickdata().then(() =>{
//     console.log("*************")
//     const myarrayList = myUser.userList;
//     console.log(myarrayList);
//     console.log("*************")
// });


// const getAlluserEmail = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserdata = await response.json();

//     const useremail = jsonUserdata.map(user =>{
//         return user.email;
//     });  
//     postwebPage(useremail);
// }


// const postwebPage = (data) => {
//  console.log("Ericklnino--------");
//  console.log(data);
//  console.log("Ericklnino--------");
// };

// getAlluserEmail();


const postDadJokes = {id: '0189hNRf2g',
 joke: "I'm tired of following my dreams. I'm just going t…where they are going and meet up with them later.",
 status: 200
}

const getDatajokes = async (jokeObjct) =>{
    const response  = await fetch("https://httpbin.org/post",{
        method:"POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(jokeObjct)
    });

    const jsonResponse = await response.json();
    if(response.ok)
    {
        console.log(jsonResponse.headers);
    }
}
getDatajokes(postDadJokes);


