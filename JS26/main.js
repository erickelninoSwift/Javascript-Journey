
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

console.log(myPromise);

const erickPorimise = new Promise((resolve, reject) =>{

    const number = prompt("Please enter your age : ");
    if (number >= 18)
    {
        resolve("you are very mature")
    }else
    {
        reject("You are very young");
    }
});

console.log(erickPorimise);
