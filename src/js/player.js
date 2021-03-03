export default function Player(num) {
  this.score = 0;
  this.lastRoll;
  this.turnScore = 0;
  this.turn = true;
  this.id = num;
}

Player.prototype.hold = function() {
  if (this.turn) {
    this.turn = false;
    this.score += this.turnScore;
    this.turnScore = 0;
  }
  else {
    return "no";
  }
}

Player.prototype.roll = function() {
  if (this.turn) {
    let currentRoll = Math.floor(Math.random() * 6)+1;
    this.lastRoll = currentRoll;
    if (currentRoll === 1) {
      this.turnScore = 0;
      this.turn = false;
    }
    else {
      this.turnScore += currentRoll;
    }
    return currentRoll;
  }
  else {
    return "no";
  }
}