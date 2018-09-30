<template>
	<div>
		<button class="btn btn-group-vertical">
			<button v-on:click="goGame(1)" class="btn-info">Rock</button>
			<button v-on:click="goGame(2)" class="btn-info">Scissors</button>
			<button v-on:click="goGame(3)" class="btn-info">Paper</button>
		</button>
	</div>
</template>

<script>
// import { goGame } from './../../../utils/Game.js'
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      daemon: 0
    }
  },
  name: 'game-states',
  methods: {
    ...mapMutations('GameStore', [ 'SET_PLAYER_STATE' ]),
    ...mapMutations('GameStore', [ 'GO_GAME' ]),
    goGame: function (daemon) {
      this.GO_GAME(daemon)
      console.log(daemon)
    },
    setDaemon: function (daemon) {
      this.SET_PLAYER_STATE(daemon)
      console.log(daemon)
    }
  }
}
</script>

<style>
  @import url('../../../../../static/bootstrap.css');

  .doc button {
    font-size: 0.8em;
    cursor: outline;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
	}

	.doc button.alt {
		color: #42b983;
	}
</style>
