console.log("Chapter 23 Web Storage API");
// window.alert(window.location);

const urlwebsite = window.location;
console.log(urlwebsite.href);

const myObject = 
{
    name: "Erick",
    logName: function ()
    {
        console.log(`My name is ${this.name}`);
    },
    greeting: function ()
    {
        return `you very welcome ${this.name}`;
    },
    myArray :["Rock","Papers","Scissors",false,45]
}

const storagename = "Arraylist";

 sessionStorage.setItem(storagename, JSON.stringify(myObject));
 const fetchmyStorage = sessionStorage.getItem(storagename);
 const fetchedJSOn = JSON.parse(fetchmyStorage);

 console.log(fetchmyStorage);


 const listArray = ["Erick","Elnino","Jackpot","Cholo"];


 sessionStorage.setItem("myList",JSON.stringify(listArray));
 const fecthsessionstorage = JSON.parse(sessionStorage.getItem("myList"));
 console.log(fecthsessionstorage);


 const erickArray = ["Playstation 5","Xbox X",false,"Manu"];

 localStorage.setItem("localData", JSON.stringify(erickArray));
 const getdata = JSON.parse(localStorage.getItem("localData"));

console.log(getdata);
console.log(getdata[0].toUpperCase());




