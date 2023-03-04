let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score"); //we use span tag in index.html file to represnt the score
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div= document.getElementById("r");
const pap_div= document.getElementById("p");
const sci_div= document.getElementById("s");


function getComputerChoice() {
    const Choices = ['r','p','s'];
    const randomNumber =  Math.floor(Math.random() * 3);
    return Choices[randomNumber];
}
function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Papper";
    return "Scissors";

}

function win(userChoice , ComputerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWorld = "user".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)}  beats  ${convertToWord(ComputerChoice)}${(smallCompWorld)}  you wins!.`;

}
function loose(userChoice , ComputerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWorld = "user".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)}  looses to   ${convertToWord(ComputerChoice)}${(smallCompWorld)}  computer wins!.`;
    
}
function draw(userChoice , ComputerChoice){
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWorld = "user".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)}  matches   ${convertToWord(ComputerChoice)}${(smallCompWorld)}  It's a drawww!.`;
}


function game(userChoice){
    const ComputerChoice = getComputerChoice();
    switch(userChoice + ComputerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice , ComputerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loose(userChoice , ComputerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice , ComputerChoice);
            break;
    }
}
function main() {
        rock_div.addEventListener('click', function () {
            game("r");
        });
        pap_div.addEventListener('click', function () {
            game("p");
        });
        sci_div.addEventListener('click', function () {
            game("s");
        });
    }


    main();
