const buttonHidden = document.querySelector(`.left-button`);
const hiddenElement = document.querySelector(`.right-button`);

buttonHidden.addEventListener(`click`,() =>{
    console.log("Hello how are you?");
    hiddenElement.style.display = 'none';
})