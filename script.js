const stone = document.getElementById("stone")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const userSelect = document.querySelectorAll(".select");
const selected = document.getElementById("selected");
const compSelected = document.getElementById("comp-selected");
const result = document.getElementById("result");
const outer = document.getElementById("outer");
const button = document.getElementById("button");
const elem = document.getElementById(`intro`);
const myScore = document.getElementById("score")
const compScore = document.getElementById("comp-score")
const heading3Parent = elem.parentElement;



userSelect.forEach((selection) => selection.addEventListener("click", function () {
    console.log("this is selected:", selection.textContent)
    selected.classList.add("selected");
    if(elem){
        const heading3Parent = elem.parentElement;
        if(heading3Parent!== null)
        heading3Parent.removeChild(elem)
    }
    compSelected.classList.add("comp-selected");
    selected.textContent = selection.textContent;

    setTimeout(() => {
        const comp = compSelect()
        displayresult(selection,comp)
    }, 1000);
}
))

function compSelect() {
    const options = [stone, paper, scissor];
    const compChoice = options[Math.floor(Math.random() * (2 + 1) )];

    compSelected.textContent = compChoice.textContent
    return compChoice;
}

function displayresult(userChoice, compChoice) {
    let possibility = 0;

    result.classList.add("display-result");
    if (userChoice.innerHTML === compChoice.innerHTML) {
        result.textContent = "That's a draw!"
    }
    else if (compChoice === stone) {
        if (userChoice.textContent === "✌️") {
            result.textContent = "You lose !, Stone beats Scissor"
            compScore.textContent++;
            possibility = 'L'
        }
        else if (userChoice.textContent === "🤚") {
            result.textContent = "You won !, Paper beats Stone"
            myScore.textContent++;
            possibility = 'W'
        }
    }
    else if (compChoice === paper) {
        if (userChoice.textContent === "✌️") {
            result.textContent = "You won !, Sciccor beats Paper"
            myScore.textContent++;
            possibility = 'W'

        }
        else if (userChoice.textContent === "✊") {
            result.textContent = "You lose !, Paper beats Stone"
            compScore.textContent++;
            possibility = 'L'

        }
    }
    else if (compChoice === scissor) {
        if (userChoice.textContent === "✊") {
            result.textContent = "You won !, Stone beats Scissor"
            myScore.textContent++;
            possibility = 'W'

        }
        else if (userChoice.textContent === "🤚") {
            result.textContent = "You lose !, Scissor beats Paper"
            compScore.textContent++;
            possibility = 'L'
        }
    }
    changeBackground(possibility);
}

function changeBackground(possibility) {
    if (possibility === 'L') {
        selected.style.backgroundColor = "rgba(247, 52, 52, 0.96)";
        compSelected.style.backgroundColor = "rgba(8, 248, 8, 0.95)";
        result.setAttribute("class", "result-outer-lose");
    }
    else if (possibility === 'W') {
        selected.style.backgroundColor = "rgba(8, 248, 8, 0.96)";
        compSelected.style.backgroundColor = "rgba(247, 52, 52, 0.88)";
        result.setAttribute("class", "result-outer-won");
    }
    else {
        selected.style.backgroundColor = "rgba(110, 121, 110, 0.79)";
        compSelected.style.backgroundColor = "rgba(104, 113, 111, 0.79)";
        result.setAttribute("class", "result-outer-draw");
    }
}

function initial() {
    heading3Parent.appendChild(elem)
    myScore.textContent = "0"
    compScore.textContent="0"
    selected.textContent = null;
    compSelected.textContent = null;
    selected.classList.remove("selected");
    compSelected.classList.remove("comp-selected");
    result.classList.remove("display-result");
    result.textContent = null;
}








