const myfirstView = document.querySelector("#view1");
const secondView = document.querySelector("#view2")
myfirstView.style.display = "none";
secondView.style.display = "flex";
const navbar = document.querySelector("nav");
navbar.style.display = "none";


const doSomething = (text) =>
{
    alert(`Hello jackpot ${text}`);
}

const loveMore = () => {
    return "I am Going to love you more this year ";
}

const message = loveMore();

// h2.addEventListener("click",doSomething(message),false);

// h2.addEventListener("click",(event) =>{
//     doSomething(message);
// })


// h2.addEventListener("click",(event) =>{
   
//    event.target.textContent = event.target.textContent === "Jackpot!" ? "Click!" : "Jackpot!";
// })

document.addEventListener("readystatechange",(myevent) =>{
    if (myevent.target.readyState === "complete")
    {
        console.log("ReadyState :  Complete");
        initApp();
    }
});

// h2.addEventListener("click",(e)=>{
//     doSomething();
// });

const initApp = () => {

    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click",(event) => {
        
        view.classList.add("red");
        view.classList.remove("darkblue");
        const cuurentClass = document.querySelector(".red");
        cuurentClass.style.backgroundColor = "red";
    
    },false)

    div.addEventListener("click",(event) => {
        
        event.stopImmediatePropagation();
        div.classList.add("yellow");
        div.classList.remove("black");

        const cuurentClass = document.querySelector(".yellow");
        cuurentClass.style.backgroundColor = "purple";

    },false)

    h2.addEventListener("click",(event) => {
       
        event.target.textContent = event.target.textContent === "Jackpot!" ? "Clicked!" : "Jackpot!";

    },false)

};