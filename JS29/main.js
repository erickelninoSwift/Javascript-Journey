
const phoneNumber = document.getElementById("phone");

const buttonPressed = document.getElementsByName("submit");

buttonPressed.addEventListener("submit",(event) =>{
    event.preventDefault();
    console.log(phoneNumber);

})