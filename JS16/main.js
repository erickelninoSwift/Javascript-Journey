
function initGame()
{
    let playgame = confirm("Shall we play rock , paper, scissors ?");
    playgame ? playgames() : alert("Okay , Maybe next time ");
}


const playgames = function()
{
    while(true)
    {
        const gameArray = ["rock","papers","scissors"];
    
       let playerchoice = getPlayerChoice();

       let theOnePlayerChoice = formatPlayerChoice(playerchoice);
       if (theOnePlayerChoice === "")
       {
            console.log(playerchoice);
       }
       
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
        return false;
    }
}


initGame();


// function All()
// {
//     if (formatPlayerChoice(playerchoice))
//     {
//         if(playerchoice.trim().toLowerCase() === gameArray[0].toLowerCase()
//         || playerchoice.trim().toLowerCase() === gameArray[1].toLowerCase()
//         || playerchoice.trim().toLowerCase() === gameArray[2].toLowerCase())
//         {
//             const playerOne = playerchoice.trim().toLowerCase();
          
//                 const computerPlayer = Math.floor(Math.random() * 3 + 1);
//                 const computer = computerPlayer === 1 ? "rock" : 
//                 computerPlayer === 2 ? "paper" : "scissors";

//                 const result = playerOne === computer ? "Tie game!" :
//                 playerOne === "rock" && computer === "papers" ? "computer Wins" :
//                 playerOne === "papers" && computer === "scissors" ? "Compter Wins" :
//                 playerOne === "scissors" && computer === "rock" ? "Computer Wins !" :
//                 "Player one Wins!";

//                 alert(result);

//                 playgame = confirm("Do you want to play again ?");

//                 if(!playgame) alert("Thanks for playing");
//                 continue;
//         }else
//         {
//             alert("you didnt enter rock , papers, scissors");
//             continue;
//         }

//     }else
//     {
//         alert("I guess you have changed your mind maybe next time");
//         break;
//     }
// }