let snake = document.getElementById("snake");
let positionDeMonSnakeY = 60;
let positionDeMonSnakeX = 60;

let apple = document.getElementById("apple");
apple.style.left = "100px";
apple.style.top = "100px";

// Création variable pour que le serpent s'agrandisse à chaque fois qu'il touche la pomme
let segments = [snake];


function moveSnakeDown() {
    positionDeMonSnakeY += 10;
    snake.style.top = positionDeMonSnakeY + "px";
    if (positionDeMonSnakeY == 480) {
    positionDeMonSnakeY = 0;
    }
    
}

function moveSnakeUp() {
    positionDeMonSnakeY -= 10;
    snake.style.top = positionDeMonSnakeY + "px";
    if (positionDeMonSnakeY == 0) {
    positionDeMonSnakeY = 490;
    }
}

function moveSnakeLeft() {
    positionDeMonSnakeX -= 10;
    snake.style.left = positionDeMonSnakeX + "px";
    if (positionDeMonSnakeX == 0) {
    positionDeMonSnakeX = 580;
    }
    
}

function moveSnakeRight() {
    positionDeMonSnakeX += 10;
    snake.style.left = positionDeMonSnakeX + "px";
    if (positionDeMonSnakeX == 580) {
    positionDeMonSnakeX = 0;
    }
}



let keydownSave = "";


document.addEventListener('keydown', function (event) {
    keydownSave = event.key
});

setInterval(function () {

    for (let i = segments.length - 1; i > 0; i--) {
        segments[i].style.left = segments[i - 1].style.left;
        segments[i].style.top = segments[i - 1].style.top;
    }

    moveSnake(keydownSave);

    if (
    positionDeMonSnakeX === parseInt(apple.style.left) &&
    positionDeMonSnakeY === parseInt(apple.style.top)
    ) {
    growSnake();
    repositionApple();
    }

}, 190);


function moveSnake(keydown) {
    if (keydown == "ArrowRight") {
        moveSnakeRight();

    }
    if (keydown == "ArrowLeft") {
        moveSnakeLeft();

    }
    if (keydown == "ArrowUp") {
        moveSnakeUp();

    }
    if (keydown == "ArrowDown") {
        moveSnakeDown();

    }
}


function growSnake() {
    let snake = document.getElementById("snake");
    let newSegment = snake.cloneNode(true);
    let lastSegment = segments[segments.length - 1];

    newSegment.style.left = lastSegment.style.left;
    newSegment.style.top = lastSegment.style.top;

    document.querySelector('.game-area').appendChild(newSegment);
    segments.push(newSegment);
}

function repositionApple() {
    let randomX = Math.floor(Math.random() * 60) * 10;
    let randomY = Math.floor(Math.random() * 50) * 10; 

    apple.style.left = randomX + "px";
    apple.style.top = randomY + "px";
}