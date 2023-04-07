console.log("How are you doing today ?");

const arrayNumber = [1,2,3,4,5,6,7,7,8,9];
let newArray = [];

newArray = arrayNumber.map(number =>{
    return number * 5;
});

console.log(arrayNumber);
console.log(newArray);

const currentnewArray = newArray.map(number =>{
    return number * 10;
});

console.log(currentnewArray);

// Filter function


const newArray2 = currentnewArray.filter(number =>{
    return number < 1000;
});

console.log(newArray2);

const number123 = newArray2.map(number =>{
    return `Number: ${number}`;
});

console.log(number123);


//Reduce

const newElnino = arrayNumber.reduce((total,number) =>{
    return total.concat(`Number: ${number}`);
},[]);


const newElnino2 = arrayNumber.reduce((sum,number) =>{
    return sum + number;
});

console.log(`Total number is : ${newElnino2}`);
console.log(newElnino);


const users = [
    {id:1,name:"Eriik",age:40},
    {id:2,name:"Elnino",age:22},
    {id:3,name:"Jackpot",age:23},
    {id:4,name:"Cholo",age:35},
    {id:5,name:"Yollande",age:90},
    {id:6,name:"Manu",age:75},
    {id:7,name:"Anthony",age:40}
];

const newUserlist = users.filter(user =>{
    return user.id > 5;
});


newUserlist.forEach(user =>{
    console.log(user);
});


console.log(newUserlist);


const changeAge = (id,newAge) =>{

    const currentNewAge = users.map(user =>{
        if(user.id === id)
        {
           return {id: user.id, name:user.name,age: newAge};
        }else
        {
            return user;
        }
    });

    return currentNewAge;
};

console.log(changeAge(5,60));