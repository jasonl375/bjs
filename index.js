let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]; 
let hasBlackjack = false;
let isAlive = true;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let gameImage = document.getElementById("game-image");

let sum = firstCard + secondCard;

let msg = "";

function renderGame() {
    sumEl.textContent = "sum: " + sum;
    cardsEl.textContent = "card: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂";
        gameImage.src = "hmm.png"; 
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackjack = true;
        gameImage.src = "car.jpg"; 
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
        gameImage.src = "sadCar.jpg"; 
    }

    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard();
        sum += card;

        cards.push(card);

        renderGame();
    }
}

function startGame() {
    isAlive = true;
    gameImage.style.display = "block";
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    hasBlackjack = false;

    renderGame();
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber === 1) {
        return 11; 
    } else if (randomNumber > 9) {
        return 10; 
    } else {
        return randomNumber; 
    }
}

console.log(message)
