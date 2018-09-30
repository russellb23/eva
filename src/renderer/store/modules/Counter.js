const score = {
  player: 0,
  robo: 0,
  tie: 0
}

const mutations = {
  GO_GAME (playerDaemon) {
    var roboDaemon = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    if (playerDaemon === roboDaemon) {
      score.tie++
    } else if (playerDaemon > roboDaemon) {
      if (playerDaemon === 3 && roboDaemon === 1) {
        score.player++
      } else if (playerDaemon === 3 && roboDaemon === 2) {
        score.robo++
      } else if (playerDaemon === 2 && roboDaemon === 1) {
        score.robo++
      }
    } else if (playerDaemon <= roboDaemon) {
      if (playerDaemon === 1 && roboDaemon === 3) {
        score.robo++
      } else if (playerDaemon === 2 && roboDaemon === 3) {
        score.player++
      } else if (playerDaemon === 1 && roboDaemon === 2) {
        score.player++
      }
    } else {
      console.log('Conditional game logic failure')
    }
  },

  PLAYER_WON (score) {
    score.player++
  },
  ROBO_WON (score) {
    score.robo++
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('PLAYER_WON')
  }
}

export default {
  score,
  mutations,
  actions
}
