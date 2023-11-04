var deck = [];
var getCardArray = [];
var shuffleDone = [];
var getCardArrayX2 = [];

function shuffle() {
  var shuffle52 = document.createElement("p");
  shuffle52.textContent = "牌組: " + cardShuffleX2();
  document.body.appendChild(shuffle52);
}

function getTwoCards() {
  var getTwoCardsElement = document.createElement("p");
  getTwoCardsElement.textContent = "您的手牌: " + giveTwoCards();
  document.body.appendChild(getTwoCardsElement);
}

function getOneCard() {
  var getOneCardElement = document.createElement("p");
  getOneCardElement.textContent = "您的手牌: " + giveOneCard();
  document.body.appendChild(getOneCardElement);
}

function displayRemainingCards() {
  var remainingCardsElement = document.createElement("p");
  remainingCardsElement.textContent = "牌組: " + remainCards();
  document.body.appendChild(remainingCardsElement);
}

for (var i = 0; i < 52; i++) {
  getCardArray[i] = i;
}

function cardShuffle() {
  for (var i = 51; i >= 0; i--) {
    var randomChoose = getCardArray[getRandomInt(i)];
    [getCardArray[i], getCardArray[randomChoose]] = [
      getCardArray[randomChoose],
      getCardArray[i],
    ];
  }
  return getCardArray;
}

function cardShuffleX2() {
  var getCardArrayX2 = cardShuffle();

  for (var i = 51; i >= 0; i--) {
    var randomChooseX2 = getCardArrayX2[getRandomInt(i)];
    [getCardArrayX2[i], getCardArrayX2[randomChooseX2]] = [
      getCardArrayX2[randomChooseX2],
      getCardArrayX2[i],
    ];
  }
  return getCardArrayX2;
}

var getCardArrayX2 = cardShuffleX2();
var playOneDeck = [];
function giveTwoCards() {
  var cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // var cardIndex = [
  //   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  //   21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  //   40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
  // ];
  var cardImages = "";

  for (var i = 0; i < 2; i++) {
    if (getCardArrayX2.length >= 2) {
      var selectedCard = getCardArrayX2.shift();
      var cardIndex = selectedCard;
      var imageUrl = `${cardIndex}.jpg`;
      cardImages += `<img src='${imageUrl}' alt='Card'>`;

      var cardImagesContainer = document.getElementById("cardImages");
      cardImagesContainer.innerHTML = cardImages;

      playOneDeck.push(selectedCard);
    }
  }

  return playOneDeck;
}

function giveOneCard() {
  if (getCardArrayX2.length >= 1) {
    var selectedCards = getCardArrayX2.shift();
    playOneDeck.push(selectedCards);
  }
  return playOneDeck;
}

function remainCards() {
  var remainingCards = getCardArrayX2;
  return remainingCards;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
