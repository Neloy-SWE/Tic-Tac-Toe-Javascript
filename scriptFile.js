let boxes = document.querySelectorAll(".box");
let buttonRefresh = document.querySelector("#buttonRefresh");
let winner = document.querySelector(".winner");
let winnerCardText = document.querySelector("#winner-card-text");
let buttonNewGame = document.querySelector(".button-new");
// let buttonRefresh = document.querySelector("$buttonRefresh");
let isTurnO = true;
let patterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (isTurnO) {
            box.innerText = "O";
            isTurnO = false;
        }
        else {
            box.innerText = "X";
            isTurnO = true;
        }
        box.disabled = true;
        // if we want to use div rather than button or input we can use this code:
        // box.style.pointerEvents = "none"; 

        checkWinner();
    });
});

const checkWinner = () => {
    for (pattern of patterns) {
        let positionOneValue = boxes[pattern[0]].innerText;
        let positionTwoValue = boxes[pattern[1]].innerText;
        let positionThreeValue = boxes[pattern[2]].innerText;
        if (positionOneValue != "" && positionTwoValue != "" && positionThreeValue != "") {
            if (positionOneValue === positionTwoValue && positionTwoValue === positionThreeValue) {

                winnerCardText.innerHTML = winnerCardText.innerHTML + "<br>Winner is " + positionOneValue;

                winner.style.visibility = "visible";
            }
        }
    }
}

const refreshGame = () => {
    isTurnO = true;
    winnerCardText.innerHTML = "Congratulations !!!";
    winner.style.visibility = "hidden";
    for (box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
}

buttonNewGame.addEventListener("click", refreshGame);
buttonRefresh.addEventListener("click", refreshGame);