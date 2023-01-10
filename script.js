let cards = [0];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messaElement = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
  name: "Per",
  chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRendomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  let firstCard = getRendomCard();
  let secondCard = getRendomCard();
  isAlive = true;
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum:" + sum;
  if (sum <= 20) {
    message = "Do you want a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messaElement.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRendomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}
