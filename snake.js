const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetButton = document.querySelector("resetButton");
const boardStyles = window.getComputedStyle(gameBoard);
const boardBackground = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX, foodY;
let score = 0;
let snake = [
    {x:unitSize * 4, y:0}, // Head
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0} // tail
]

window.addEventListener("keydown", changeDirection);

resetGame(click);
gameStart();

function gameStart(){};
function nextTick(){};
function clearBoard(){};
function createFood(){
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unitsize) * unitsize;
        return randNum;
    }

    foodX = randomFood(0, boardStyles.width - unitSize);
    foody = randomFood(0, boardStyles.width - unitSize);
};
function drawFood(){};
function moveSnake(){};
function drawSnake(){};
function changeDirection(){};
function checkGameOver(){};
function resetGame(){};