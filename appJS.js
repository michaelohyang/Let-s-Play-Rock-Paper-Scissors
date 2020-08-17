var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("computer_score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const reset_button_div = document.getElementById("rest");

function game(userChoice) {
    var userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    const compChoice = getCompChoice();
    // console.log("computer choice ==> " + compChoice);
    // console.log("user choice ==> " + userChoice);
    switch (userChoice + compChoice) {
        case "RockScissor":
        case "ScissorPaper":
        case "PaperRock":
            userScore++;
            userScore_span.innerHTML = userScore;
            result_p.innerHTML = `🔥 ${userChoice}${smallUserWord} beats ${compChoice}${smallCompWord}. You WIN! 🔥`;
            userChoice_div.classList.add('green-glow');
            setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300);
            break;
        case "ScissorRock":
        case "PaperScissor":
        case "RockPaper":
            compScore++;
            compScore_span.innerHTML = compScore;
            result_p.innerHTML = `💀 ${compChoice}${smallCompWord} beats ${userChoice}${smallUserWord}. You LOST! 💀`;
            userChoice_div.classList.add('red-glow');
            setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 300);
            break;
        case "ScissorScissor":
        case "RockRock":
        case "PaperPaper":
            result_p.innerHTML = `😑 ${userChoice}${smallUserWord} vs ${compChoice}${smallCompWord}. It's a DRAW!  😑`;
            userChoice_div.classList.add('gray-glow');
            setTimeout(function() {userChoice_div.classList.remove('gray-glow')}, 300);
            break;
    }
}

function getCompChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum]
}

function resetI() {
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = 0;
    compScore_span.innerHTML = 0;
    result_p.innerHTML = 'Click the buttons below to begin game!';
}


function main() {
    rock_div.addEventListener('click', function() {
        game("Rock")
    })

    paper_div.addEventListener('click', function() {
        game("Paper")
    })

    scissor_div.addEventListener('click', function() {
        game("Scissor")
    })

    reset_button_div.addEventListener('click', function() {
        resetI()
    })
}

main();
