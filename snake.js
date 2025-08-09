const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetButton = document.querySelector("resetButton");
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

//resetGame(click);
gameStart();

function gameStart(){
    running = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
};
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 75)
    }
    else{
        displayGameOver();
    }
};
function clearBoard(){};
function createFood(){
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    }

    foodX = randomFood(0, gameBoard.width - unitSize);
    foodY = randomFood(0, gameBoard.height - unitSize);

};
function drawFood(){
    context.fillStyle = foodColor;
    context.fillRect(foodX, foodY, unitSize, unitSize);
};
function moveSnake(){};
function drawSnake(){
    snake.fillStyle = snakeColor;
    snake.fillRect = snake;
};
function changeDirection(){};
function checkGameOver(){};
function resetGame(){};