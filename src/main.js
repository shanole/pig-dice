import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Player from './js/player.js';
import { playerSwitch, isWinner, showResults } from './js/game.js';

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
    let opponent;
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

