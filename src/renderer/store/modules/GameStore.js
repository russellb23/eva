var state = {
  title: 'Welcome to BooR',
  playerName: '',
  roboName: 'BooR',
  playerScore: 0,
  roboScore: 0,
  tieScore: 0,
  playerState: 0,
  roboState: 0,
  nameField: true
}

var getters = {
  getPlayerName (state) {
    return state.playerName
  },
  getRoboName (state) {
    return state.roboName
  },
  getPlayerState (state) {
    return state.playerState
  },
  getRoboState (state) {
    return state.roboState
  },
  getNameField (state) {
    return state.nameField
  }
}

var setters = {
  setRoboState (state, daemon) {
    state.roboState = daemon
  }
}

var mutations = {
  GAME_PLAYER (state) {
    state.playerScore++
  },
  GAME_ROBO (state) {
    state.roboScore++
  },
  GAME_TIE (state) {
    state.tieScore++
  },
  SCORE_RESET (state) {
    state.playerScore = 0
    state.roboScore = 0
    state.tieScore = 0
  },
  SET_PLAYER_NAME (state, name) {
    state.playerName = name
  },
  RESET_GAME (state) {
    state.playerScore = 0
    state.roboScore = 0
    state.tieScore = 0
    state.playerState = 0
    state.roboState = 0
    state.playerName = ''
    state.nameField = true
  },
  SET_NAME_FIELD (state) {
    state.nameField = false
  },
  SET_PLAYER_STATE (state, daemon) {
    state.playerState = daemon
  },

  GO_GAME (state, playerState) {
    var roboState = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    if (playerState === roboState) {
      state.tieScore++
    } else if (playerState !== roboState) {
      if (playerState < roboState) {
        if (playerState === 1 && roboState === 2) {
          state.playerScore++
        } else if (playerState === 2 && roboState === 3) {
          state.playerScore++
        } else if (playerState === 1 && roboState === 3) {
          state.roboScore++
        }
      } else if (playerState > roboState) {
        if (playerState === 3 && roboState === 2) {
          state.roboScore++
        } else if (playerState === 3 && roboState === 1) {
          state.playerScore++
        } else if (playerState === 2 && roboState === 1) {
          state.roboScore++
        }
      } else {
        console.log('Choosen states are not valid')
      }
    }
  }
}

var actions = {
  PLAYER_WON (context) {
    context.commit('GAME_PLAYER')
  },
  ROBO_WON (context) {
    context.commit('GAME_ROBO')
  },
  TIE_WON (context) {
    context.commit('GAME_TIE')
  },
  RESET_SCORE (context) {
    context.commit('SCORE_RESET')
  },
  GAME_RESET (context) {
    context.commit('RESET_GAME')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
  setters
}
