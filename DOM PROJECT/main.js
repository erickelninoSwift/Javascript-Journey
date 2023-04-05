// const title = document.getElementById("main-heading");
// console.log(title.textContent);

// const listItems = document.getElementsByClassName("list-items");
// console.log(listItems);

// const list  = document.getElementsByTagName("li");

// console.log(list);


// const listQuert = document.querySelector("div");
// listQuert.style.backgroundColor = "blue";
// console.log(listQuert);

// DOM manipulation

const title = document.querySelector(`#main-heading`);
const myList = document.querySelectorAll(`.list-items`);

myList.forEach(value =>{
    value.style.color = `black`;
    value.style.fontSize = `1rem`
    value.style.borderRadius = "10px";

});

const ul = document.querySelector(`ul`);
const li = document.createElement(`li`);
li.classList.add("list-items");
li.setAttribute(`id`,`main-heading`)
li.innerText = "Jackpot";
li.style.borderRadius = "10px";

ul.append(li);

console.log(title.getAttribute(`id`));
li.remove();
