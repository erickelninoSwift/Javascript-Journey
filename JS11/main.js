let playgame = confirm("Shall we play rock , paper, scissors ?");
console.log(playgame);

if(playgame)
{
   let playerchoice = prompt("Please enter Rock , paper , Scissors ?");
    if (playerchoice.trim().length > 0)
    {
        if(playerchoice.trim().toLowerCase() === "rock".toLowerCase()
        || playerchoice.trim().toLowerCase() === "papers".toLowerCase()
        || playerchoice.trim().toLowerCase() === "scisssors".toLowerCase())
        {
            let playerOne = playerchoice.trim().toLowerCase();
          
                let computerPlayer = Math.floor(Math.random() * 3 + 1);
                let computer = computerPlayer === 1 ? "rock" : 
                computerPlayer === 2 ? "paper" : "scissors";

                let result = playerOne === computer ? "Tie game!" :
                playerOne === "rock" && computer === "papers" ? "computer Wins" :
                playerOne === "papers" && computer === "scissors" ? "Compter Wins" :
                playerOne === "scissors" && computer === "rock" ? "Computer Wins !" :
                "Player one Wins!";

                alert(result);
                let playAgain = prompt("Do you want to play again ?");
                
                playAgain ? location.reload() : alert("Thanl you for everything");                     
           
        }else
        {
            alert("you didnt enter rock , papers, scissors");
        }

    }else
    {
        console.log("Please make sure you entered a name");
        alert("I guess you have changed your mind maybe next time");
    }
}else
{
   console.log("Ok , maybe next time !");
}