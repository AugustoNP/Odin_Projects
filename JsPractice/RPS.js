
const selectElement = document.getElementById('RPS');
const buttonElement = document.getElementById('submitButton');

function getComputerChoice () {
    let rand = Math.floor(Math.random() * 3)
        switch (rand)
    {
        case 0:
            choice = "rock"
        break;

        case 1:
            choice = "paper"
        break;

        case 2:
            choice = "scissors"
        break;

        default :
            choice = "Not valid";
    }

    return choice
}



buttonElement.addEventListener("click", function() {
    const userChoice = selectElement.value;
    const computerChoice = getComputerChoice();
    console.log("User chose: ", userChoice);
    console.log("Computer chose: ", computerChoice)

    mainGameLogic(userChoice, computerChoice)
    
});

    



function mainGameLogic (userChoice, computerChoice)
{
    if (userChoice === computerChoice) {console.log("DRAW")}
    
    else if (userChoice === "rock")
        {
            switch (computerChoice)
            {
                case "paper":
                    console.log("YOU LOSE")
                break;
                case "scissors":
                    console.log("YOU WIN")
            }
                

        }
    else if (userChoice === "paper")
        {
            switch (computerChoice)
            {
                case "scissors":
                    console.log("YOU LOSE")
                break;
                case "rock":
                    console.log("YOU WIN")
            }
                

        }
    else if (userChoice === "scissors")
        {
            switch (computerChoice)
            {
                case "rock":
                    console.log("YOU LOSE")
                break;
                case "paper":
                    console.log("YOU WIN")
            }
                

        }
}





/* numberChoice = getComputerChoice()
console.log(numberChoice)
console.log(NumberChoiceTranslator(numberChoice)) */

