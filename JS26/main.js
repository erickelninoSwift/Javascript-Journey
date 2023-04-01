
const myPromise = new Promise((resolve,reject) => {
  const erro = false;
  if(!erro)
  {
    resolve(30 + 30);
  }else
  {
    reject("Hello this is jackpot here")
  }
});

// console.log(myPromise);

const erickPorimise = new Promise((resolve, reject) =>{

    const number = 5;
    if (number >= 18)
    {
        resolve("you are very mature");
    }else
    {
        reject("You are very young");
    }
});

erickPorimise.then(value =>{

   return value + "My Friend!!";

}).then(newValue =>{

console.log(newValue);

}).catch(error =>{
    console.log(`Error found: ${error}`);
});


const myNextPromise = new Promise((resolve, reject) => {

    const number2 = 30;
    setTimeout(function(){
        number2 >= 50 ? resolve("You next promise is good") : reject("You are wrong");
    },3000);

});

myNextPromise.then(value => {
    console.log(value);
}).catch(erro =>{
    console.log(`Error found: ${erro}`);
});

console.log("I completly understand this thing");

// Fetch 

const user = fetch("https://jsonplaceholder.typicode.com/users");
console.log(user);

user.then(response =>{
    return response.json();
}).then(data =>{
    console.log(data);
    console.log(data.length);
    console.log(data[0])

}).catch(err =>{
    console.log(`Error found while fetching data ${err}`);
});