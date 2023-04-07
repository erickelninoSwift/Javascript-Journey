const cells = document.querySelectorAll(`.cell`);
const statusText = document.querySelector(`#statusText`);
const restartBtn = document.querySelector(`#restartButton`);

const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const Options = ["","","","","","","",""];
let currentPlayer = "X";


let gamePlaying = false;

function init()
{
    cells.forEach(cell =>{
        cell.addEventListener(`click`,(cellClicked));
    });

    restartBtn.addEventListener(`click`,(restartGame));
    statusText.textContent = `${currentPlayer} 's Turn`;
    gamePlaying = true;
}


function cellClicked()
{
    const index = this.getAttribute("cellIndex");
    if (Options[index] != "" || !gamePlaying)
    {
        return;
    }
    UpdateCell(this,index);
    changePlayer();
    checkWinner();
}

function restartGame()
{
    const asktorestard = confirm("Do you want to restart ?");
    asktorestard ? cells.forEach(cell =>{cell.textContent = ""; currentPlayer = "X";}) : console.log("Alright you can carry one");
    statusText.textContent = `${currentPlayer} 's Turn`;
}

function UpdateCell(cell,index)
{
    cell.textContent = currentPlayer;
    Options[index] = currentPlayer;
   
   
}

function changePlayer()
{
    currentPlayer = currentPlayer === "X" ?  "O" : "X";
    statusText.textContent = `${currentPlayer} 's Turn`;
}

function checkWinner()
{
    let roundWon = false;
    for(let i = 0;i < winCondition.length;i ++)
    {
        const condition = winCondition[i];
        const CellA = Options[condition[0]];
        const CellB = Options[condition[1]];
        const CellC = Options[condition[2]];


    }

}

init();