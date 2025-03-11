let boxes = document.querySelectorAll(".box");
let buttonRefresh = document.querySelector("#buttonRefresh");
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

boxes.forEach((box)=>{
box.addEventListener("click", ()=>{
    if (isTurnO){
        box.innerText = "O";
        isTurnO = false;
    }
    else{
        box.innerText = "X";
        isTurnO = true;
    }
    box.disabled = true;
});
});