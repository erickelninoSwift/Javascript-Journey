let username = prompt("Enter you surname");

console.log(username.trim().length);
console.log(username.trim());
if (username.trim().length === 0)
{
    console.log("you didnt enter your name ");
}else{
    console.log(`My name is ${username}`);
}