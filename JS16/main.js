let playgame = confirm("Shall we play rock , paper, scissors ?");
console.log(playgame);

if(playgame)
{
while(playgame)
{
   const playerchoice = prompt("Please enter Rock , paper , Scissors ?");
    if (playerchoice.trim().length > 0)
    {
        if(playerchoice.trim().toLowerCase() === "rock".toLowerCase()
        || playerchoice.trim().toLowerCase() === "papers".toLowerCase()
        || playerchoice.trim().toLowerCase() === "scisssors".toLowerCase())
        {
            const playerOne = playerchoice.trim().toLowerCase();
          
                const computerPlayer = Math.floor(Math.random() * 3 + 1);
                const computer = computerPlayer === 1 ? "rock" : 
                computerPlayer === 2 ? "paper" : "scissors";

                const result = playerOne === computer ? "Tie game!" :
                playerOne === "rock" && computer === "papers" ? "computer Wins" :
                playerOne === "papers" && computer === "scissors" ? "Compter Wins" :
                playerOne === "scissors" && computer === "rock" ? "Computer Wins !" :
                "Player one Wins!";

                alert(result);

                playgame = confirm("Do you want to play again ?");

                if(!playgame) alert("Thanks for playing");
                continue;
        }else
        {
            alert("you didnt enter rock , papers, scissors");
            continue;
        }

    }else
    {
        alert("I guess you have changed your mind maybe next time");
        break;
    }
}

}else
{
    alert("Okay , Maybe next time ");
}