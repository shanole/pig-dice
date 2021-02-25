// Business logic for Pig Dice ------ 

function Player() {
  this.score = 0;
  this.lastRoll;
  this.turnScore = 0;
  this.turn = true;
}

Player.prototype.hold = function() {
  if (this.turn) {
    this.turn = false;
    this.score += this.turnScore;
  }
  else {
    return undefined;
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
  }
  else {
    return undefined;
  }
}

// User-interface logic ----------

let playerOne = new Player();
let playerTwo = new Player();
playerTwo.turn = false;

function playerSwitch(firstPlayer,secondPlayer) {
  if (firstPlayer.turn === false) {
    secondPlayer.turn = true;
  }
}

function isWinner(player) {
  if (player.score >= 100) {
    return true;
  }
  else {
    return false;
  }
}

$(document).ready(function() {
  $(".roll").click(function() {
    let id = $(this).attr('id');
    alert(id);
  });

  $(".hold").click(function() {
    let id = $(this).attr('id');
    alert(id);
  });
})

// Shannon thinking out what may happen when you hit the ROLL button ------------
playerOne.roll();
if (playerOne.roll() === undefined) {
  // ERROR it not ur turn
}
else {
  // Display your roll, turn score, and total score;
  if (isWinner(playerOne)) {
    // Declare Player One as the winner and stop the game!
  }
  // Will switch player if 1 is hit, otherwise this does nothing
  playerSwitch(playerOne,playerTwo);
}

// Shannon thinking out what may happen when you hit the HOLD button ------------
playerOne.hold();
if (playerOne.roll() === undefined) {
  // ERROR it not ur turn
}
else {
  // Display your roll, turn score, and total score;
  if (isWinner(playerOne)) {
    // Declare Player One as the winner and stop the game!
  }
  playerSwitch(playerOne,playerTwo);
}