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

function showResults(id, player) {
  let playerId = id;
  $("#"+ playerId + ".current").text(player.lastRoll);
  $("#"+ playerId + ".turn-score").text(player.turnScore);
  $("#"+ playerId + ".total").text(player.score);
}

let playerOne = new Player(1);
let playerTwo = new Player(2);
playerTwo.turn = false;

$(document).ready(function() {
  $(".roll").click(function() {
    let id = $(this).attr('id');
    let player;
    let opponent;
    if (id === "1") {
      player = playerOne;
      opponent = playerTwo;    
    }
    else if (id === "2") {
      player = playerTwo;
      opponent = playerOne;
    }
    player.roll();
    showResults(id,player);
    playerSwitch(player,opponent);
    if (player.roll() === "no") {
      alert("Please wait your turn!");
    }
    else {
      if (isWinner(player)) {
        // Declare Player One as the winner and stop the game!
      };
    };
  });

  $(".hold").click(function() {
    let id = $(this).attr('id');
    let player;
    if (id === "1") {
      player = playerOne;
      opponent = playerTwo;    
    }
    else if (id === "2") {
      player = playerTwo;
      opponent = playerOne;
    }
    player.hold();
    showResults(id,player);
    playerSwitch(player,opponent);
    if (player.hold() === "no") {
      alert("Please wait your turn!");
    }
    else {
       if (isWinner(player)) {
        // Declare Player One as the winner and stop the game!
      }
    }
  });
});

