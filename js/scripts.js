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
playerTwo.hold();