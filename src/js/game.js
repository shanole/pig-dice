import $ from 'jquery';

export function playerSwitch(firstPlayer,secondPlayer) {
  if (firstPlayer.turn === false) {
    secondPlayer.turn = true;
  }
}

export function isWinner(player) {
  if (player.score >= 100) {
    return true;
  }
  else {
    return false;
  }
}

export function showResults(id, player) {
  let playerId = id;
  $("#"+ playerId + ".current").text(player.lastRoll);
  $("#"+ playerId + ".turn-score").text(player.turnScore);
  $("#"+ playerId + ".total").text(player.score);
}