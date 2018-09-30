var globe = {
  titleName: 'Welcome to RoBo',
  daemons: ['Rock', 'Scissors', 'Paper'],
  name: ''
}

var getters = {
  getTitleName: globe => {
    return globe.titleName
  },

  getState: globe => {
    return globe.daemons
  },

  countState: globe => {
    return globe.daemons.length
  },

  getName: globe => {
    return globe.name
  }
}

var mutations = {
  ADD_PLAYER_NAME: name => {
    globe.name = name
  }
}

var actions = {
  setName (context, name) {
    context.commit('ADD_PLAYER_NAME', name)
  }
}
export default {
  globe,
  getters,
  mutations,
  actions
}
