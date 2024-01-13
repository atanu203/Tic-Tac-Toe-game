let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//Initializing game for player-O.
let turnO = true;

//Storing winning condition for fetching later.
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Function for "Reset Game" button.
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

//Letting users to play game by adding O or X.
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO == true){
            //player-O
            box.innerText = "O";
            turnO = false;
        }
        else{
            //player-X
            box.innerText = "X";
            turnO = true;
        }
        box.ariaDisabled = true;

        checkWinner();
    });
});

//Function for displaying the winner.
const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is Player - ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

//Function to disable boxes after gettinf a spacific winner.
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

//Function to enable boxes on click of "Reset Game" & "New Game".
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

//Function to check who is winner (player-O or player-X).
const checkWinner = () => {
    for(let pattern of winPatterns){

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
}

//New Game
newGameBtn.addEventListener("click", resetGame);

//Reset Game
resetBtn.addEventListener("click", resetGame);