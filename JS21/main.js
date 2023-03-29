

const view1 = document.getElementById("view1");
view1.style.backgroundColor = "blue";
// console.log(view1);
const view2 = document.querySelector("#view2");
// console.log(view2);
view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view");
// console.log(views);

const elninoView = document.querySelectorAll('.view');
// console.log(elninoView);

const viewdiv = view1.querySelectorAll("div");
console.log(viewdiv);

const someDivs = view1.getElementsByTagName("div");
console.log(typeof someDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");

for(let i = 0;i < evenDivs.length;i++)
{
   evenDivs[i].style.backgroundColor = "red";
//    evenDivs[i].style.width = "120px";
//    evenDivs[i].style.height = "120px";
}


const navbarText = document.querySelector("nav h1");
console.log(navbarText);
navbarText.textContent = "Hello World!";

const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1> Hello! </h1> <p>This should align right </p>`;


navbar.style.justifyContent = "space-between";



console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.children);
console.log("Node Data : " + evenDivs[0].parentElement.hasChildNodes());

const makeover = evenDivs[0].parentElement.hasChildNodes();
makeover ? alert("You have child nodes") : console.log("You dont have any child nodes");