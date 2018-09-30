var player = {
  playerName: 'Alien'
}

var getters = {
  getPlayerName (player) {
    return player.playerName
  }
}

export default {
  player,
  getters
}
