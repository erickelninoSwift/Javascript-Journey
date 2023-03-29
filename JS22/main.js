const myfirstView = document.querySelector("#view1");
const secondView = document.querySelector("#view2")
myfirstView.style.display = "none";
secondView.style.display = "flex";
const navbar = document.querySelector("nav");
navbar.style.display = "none";

const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

console.log(h2);

const doSomething = function()
{
    alert("Hello jackpot here !");
}

h2.addEventListener("click",(e)=>{
    doSomething();
});