
function initGame()
{
    let playgame = confirm("Shall we play rock , paper, scissors ?");
    playgame ? playgames() : alert("Okay , Maybe next time ");
}


const playgames = function()
{
    while(true)
    {
       
    
       let playerchoice = getPlayerChoice();
      
       let theOnePlayerChoice = formatPlayerChoice(playerchoice);

       if (theOnePlayerChoice === "")
       {
            invalideChoice();
            continue;
       }

       if(!theOnePlayerChoice)
       {
         decidedNottoPlay()
         break;
       }

       let evaluatePlayer = eveluatePlayersChoice(playerchoice)
       if(!evaluatePlayer)
       {
         invalideChoice();
         continue;
       }

       let compluterChoice = mycomputerChoice();
       console.log(`Computer Choice is : ${compluterChoice}`);

       let myResut = determinWinner(playerchoice,compluterChoice);
       console.log(`The winner is : ${myResut}`);
       
       if(askToplayAgain())
       {
         continue;
       }else
       {
        thanksforplaying();
         break;
       }
 


       
    }

}

const eveluatePlayersChoice = function(getPlayerChoice)
{
    const gameArray = ["rock","papers","scissors"];

    if(getPlayerChoice.trim().toLowerCase() === gameArray[0].toLowerCase()
        || getPlayerChoice.trim().toLowerCase() === gameArray[1].toLowerCase()
        || getPlayerChoice.trim().toLowerCase() === gameArray[2].toLowerCase())
        {

            return getPlayerChoice;

        }else
        {
            return false;
        }
}


const getPlayerChoice = function()
{
    return prompt("Please enter Rock , paper , Scissors ?");
}


const formatPlayerChoice = function(getPlayerChoice)
{
    if(getPlayerChoice || getPlayerChoice === "")
    {
        return getPlayerChoice.trim().toLowerCase();
    }else
    {
        thanksforplaying();
        return false;
    }
}

const decidedNottoPlay = function()
{
    return alert("I guess you have changed your mind maybe next time");
}

const invalideChoice = function()
{
    return  alert("you didnt enter rock , papers, scissors");
}


const mycomputerChoice = function()
{
    const gameArray = ["rock","papers","scissors"];
    const computerPlayer = Math.floor(Math.random() * 3 + 1);
    console.log(`Computer number : ${computerPlayer - 1} and Array : ${gameArray[computerPlayer - 1]}`);

    return gameArray[computerPlayer - 1];
}


const determinWinner = function(playerChoice,compluterChoice)
{
    let result = playerChoice === compluterChoice ? "Tie game!" :
    playerChoice === "rock" && compluterChoice === "papers" ? "computer Wins" :
    playerChoice === "papers" && compluterChoice === "scissors" ? "Compter Wins" :
    playerChoice === "scissors" && compluterChoice === "rock" ? "Computer Wins !" :
                    "Player one Wins!"; 

    return result;
}

const askToplayAgain = function()
{
    return confirm("Do you want to play again ?");
}

const thanksforplaying = function()
{
    return alert("Thanks for playing again");
}

initGame();