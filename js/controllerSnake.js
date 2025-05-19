// Variable qui récupère le serpent dans le HTML
let snake = document.getElementById("snake");

// Position initiale du serpent
let positionDeMonSnakeX = parseInt(getComputedStyle(snake).left);
let positionDeMonSnakeY = parseInt(getComputedStyle(snake).top);

let apple = document.getElementById("apple");

// Position initiale de la pomme
apple.style.left = "100px";
apple.style.top = "100px";

// Création variable des segments sous forme de tableau pour que le serpent s'agrandisse à chaque fois qu'il touche la pomme
let segments = [snake];

let score = document.getElementById("score");
let scoreValue = 0;

// Fonctions pour déplacer le serpent et le garder dans la zone de jeu (s'il sort de la zone de jeu, il réapparaît de l'autre côté)
function moveSnakeDown() {
    positionDeMonSnakeY += 20;
    if (positionDeMonSnakeY == 480) {
    positionDeMonSnakeY = 0;
    } else {
    positionDeMonSnakeY = positionDeMonSnakeY;
    }
    snake.style.top = positionDeMonSnakeY + "px";
}

function moveSnakeUp() {
    positionDeMonSnakeY -= 20;
    if (positionDeMonSnakeY == 0) {
    positionDeMonSnakeY = 480;
    } else {
    positionDeMonSnakeY = positionDeMonSnakeY;
    }
    snake.style.top = positionDeMonSnakeY + "px";
}

function moveSnakeLeft() {
    positionDeMonSnakeX -= 20;
    if (positionDeMonSnakeX == 0) {
    positionDeMonSnakeX = 580;
    } else {        
    positionDeMonSnakeX = positionDeMonSnakeX;
    }
    snake.style.left = positionDeMonSnakeX + "px";
}

function moveSnakeRight() {
    positionDeMonSnakeX += 20;
    if (positionDeMonSnakeX == 580) {
    positionDeMonSnakeX = 0;
    snake.style.left = positionDeMonSnakeX + "px";
    } 

    snake.style.left = positionDeMonSnakeX + "px";
}



let keydownSave = "";

// Sauvegarde la dernière touche directionnelle appuyée
document.addEventListener('keydown', function (event) {
    keydownSave = event.key
});

// setInterval a été sorti du addEventListener pour que le serpent puisse se déplacer sans avoir à appuyer sur une touche
setInterval(function () {

    // boucle pour agrandir le serpent (déplacer chaque segment à la position du segment précédent (effet de "suivi"))
    for (let i = segments.length - 1; i > 0; i--) {
        segments[i].style.left = segments[i - 1].style.left;
        segments[i].style.top = segments[i - 1].style.top;
    }

    moveSnake(keydownSave);

    // Si le serpent touche la pomme, il s'agrandit et la pomme se repositionne
    if (
    positionDeMonSnakeX === parseInt(getComputedStyle(apple).left) &&
    positionDeMonSnakeY === parseInt(getComputedStyle(apple).top)
    ) {
    growSnake();
    repositionApple();
    }

}, 190); // Intervalle de déplacement du serpent en millisecondes

// Fonction pour déplacer le serpent en fonction de la touche pressée
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

// Fonction pour agrandir le serpent (en se clonant)
function growSnake() {
    let snake = document.getElementById("snake"); // Récupération du segment du serpent
    let newSegment = snake.cloneNode(true); // Copie le premier segment du serpent
    let lastSegment = segments[segments.length - 1]; // Récupère le dernier segment actuel

    // Positionne le nouveau segment à la même position que le dernier segment
    newSegment.style.left = lastSegment.style.left;
    newSegment.style.top = lastSegment.style.top;

    document.querySelector('.game-area').appendChild(newSegment); // Ajoute le nouveau segment à la zone de jeu
    segments.push(newSegment); // Ajoute le nouveau segment au tableau des segments

    scoreValue = scoreValue + 1;
    score.innerHTML = "Score : " +scoreValue;

    // score++;
    // document.getElementById("score").innerHTML = scoreValue; // Met à jour le score affiché
}

// Fonction pour repositionner la pomme à un endroit aléatoire
function repositionApple() {
    // let gameArea = document.querySelector('.game-area');
    // let apple = document.getElementById('apple');
    
    let randomX = Math.floor(Math.random() * 25) * 20; 
    let randomY = Math.floor(Math.random() * 30) * 20; 

    apple.style.left = randomX + "px";
    apple.style.top = randomY + "px";
}