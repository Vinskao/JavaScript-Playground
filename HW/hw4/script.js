// 發撲克牌(52張)，分為四組列印出來。
// 提示：使用Math.Random() -- 產生大於0.0小於1.0的浮點數
// (int)(Math.Random() * 52) -- 會產生0至51的值

var deck = [];
var getCardArray = [];
var shuffleDone = [];

function addNewElement2() {
  var shuffle52 = document.createElement("p");
  shuffle52.textContent = cardShuffleX2();
  document.body.appendChild(shuffle52);
}
for (i = 0; i < 52; i++) {
  getCardArray[i] = i;
}
function cardShuffle() {
  for (i = 51; i >= 0; i--) {
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

  for (i = 51; i >= 0; i--) {
    var randomChooseX2 = getCardArrayX2[getRandomInt(i)];
    [getCardArrayX2[i], getCardArrayX2[randomChooseX2]] = [
      getCardArrayX2[randomChooseX2],
      getCardArrayX2[i],
    ];
  }
  return getCardArrayX2;
}

function giveCard(index) {
  var cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var cardIndex = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
  ];
  var cardImages = "";

  for (i = 1; i < getCardArrayX2.length; i++) {
    var selectCard = getCardArrayX2.shift();

    i += 1;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
