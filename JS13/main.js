function sum(num1,num2)
{
    if(num2 === undefined)
    {
        return num1 + num1;
    }
    return num1 + num2;
}

console.log(`The sum is : ${sum(10)}`);

function getuserNameFromEmail(email)
{
    return email.slice(0, email.indexOf("@"));
}

let emailAddress = getuserNameFromEmail("Jackpot@gihub.com");

console.log(`Username is : ${emailAddress}`)

const getUsername = function(name)
{
    return `My name is : ${name}`
}

console.log(getUsername("Eriik Elnino"));


const getUserHomeAddress = (homeAddres) =>
{
    return `My HomeAddress is : ${homeAddres}`;
}

console.log(getUserHomeAddress("Kyalami hills 84".toUpperCase()));


const properCase = (name) =>
{
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(properCase("ErIck"));