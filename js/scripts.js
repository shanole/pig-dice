// Business logic for Pig Dice ------ 

function Player(num) {
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

let playerOne = new Player(1);
let playerTwo = new Player(2);
playerTwo.turn = false;

$(document).ready(function() {
  $(".roll").click(function() {
    let id = $(this).attr('id');
    let player;
    if (id === "1") {
      player = playerOne;    }
    else if (id === "2") {
      player = playerTwo;
    }
    player.roll();
  });

  $(".hold").click(function() {
    let id = $(this).attr('id');
    let player;
    if (id === "1") {
      player = playerOne;    }
    else if (id === "2") {
      player = playerTwo;
    }
    player.hold();
  });
})

// // Shannon thinking out what may happen when you hit the ROLL button ------------
// playerOne.roll();
// if (playerOne.roll() === undefined) {
//   alert()
// }
// else {
//   // Display your roll, turn score, and total score;
//   if (isWinner(playerOne)) {
//     // Declare Player One as the winner and stop the game!
//   }
//   // Will switch player if 1 is hit, otherwise this does nothing
//   playerSwitch(playerOne,playerTwo);
// }

// // Shannon thinking out what may happen when you hit the HOLD button ------------
// playerOne.hold();
// if (playerOne.roll() === undefined) {
//   // ERROR it not ur turn
// }
// else {
//   // Display your roll, turn score, and total score;
//   if (isWinner(playerOne)) {
//     // Declare Player One as the winner and stop the game!
//   }
//   playerSwitch(playerOne,playerTwo);
// }