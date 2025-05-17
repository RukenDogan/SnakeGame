let snake = document.getElementById("snake");
let positionDeMonSnakeY = 40;
let positionDeMonSnakeX = 50;



function mouveSnakeDown() {
    positionDeMonSnakeY += 10;
    snake.style.top = positionDeMonSnakeY + "px";
    if (positionDeMonSnakeY == 580) {
    positionDeMonSnakeY = 0;
    console.log(positionDeMonSnakeY);
    }
    
}

function mouveSnakeUp() {
    positionDeMonSnakeY -= 10;
    snake.style.top = positionDeMonSnakeY + "px";
    if (positionDeMonSnakeY == 0) {
    positionDeMonSnakeY = 580;
    console.log(positionDeMonSnakeY);
    }
}

function mouveSnakeLeft() {
    positionDeMonSnakeX -= 10;
    snake.style.left = positionDeMonSnakeX + "px";
    if (positionDeMonSnakeX == 0) {
    positionDeMonSnakeX = 580;
    }
    
}

function mouveSnakeRight() {
    positionDeMonSnakeX += 10;
    snake.style.left = positionDeMonSnakeX + "px";
    if (positionDeMonSnakeX == 580) {
    positionDeMonSnakeX = 0;
    }
}



let keydownSave = "";


document.addEventListener('keydown', function (event) {
    keydownSave = event.key
    setInterval(mouveSnake(keydownSave), 100);
});


function mouveSnake(keydown) {
    if (keydown == "ArrowRight") {
        mouveSnakeRight();

    }
    if (keydown == "ArrowLeft") {
        mouveSnakeLeft();

    }
    if (keydown == "ArrowUp") {
        mouveSnakeUp();

    }
    if (keydown == "ArrowDown") {
        mouveSnakeDown();

    }
}


