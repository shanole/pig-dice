function Player() {
  this.score = 0;
  this.lastRoll;
  this.turn = true;
}

Player.prototype.hold = function() {
  this.turn = false;
}

Player.prototype.roll = function() {
  let currentRoll = Math.floor(Math.random() * 6)+1;
  this.lastRoll = currentRoll;
  if (currentRoll === 1) {
    this.hold();
  }
  else {
    this.score += currentRoll;
  }
}

let playerOne = new Player();
let playerTwo = new Player();

function playerRoll(player1, player2) {
  if (player1.turn === true && player2.turn === false) {
    player1.roll();
    if (player1.turn === false) {
      player2.turn = true;
    }
  }
  else if (player1.turn === false && player2.turn === true) {
    player2.roll();
    if (player2.turn === false) {
      player1.turn = true;
    }
  }
  return [player1.score, player2.score];
}

function declareWinner(player1,player2) {
  let currentResults = [player1.score, player2.score];
  if (currentResults[0] >= 100) {
    return "Player one is the winner!"
  }
  if (currentResults[1] >= 100) {
    return "Player two is the winner!"
  }
}

let testPlayer = new Player();
let testPlayer2 = new Player();
testPlayer2.hold();

playerRoll(testPlayer,testPlayer2);
declareWinner(testPlayer,testPlayer2);