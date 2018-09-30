<template>
	<div>
		<button v-on:click="resetGame" class="btn btn-info">Game reset</button>
	</div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'game-reset',
    methods: {
      ...mapMutations('GameStore', [ 'RESET_GAME' ]),
      resetGame: function () {
        this.RESET_GAME()
      }
    }
}
</script>

<style>
  @import url('../../../../../static/bootstrap.css');

	.doc button.info {
		font-size: 0.8em;
		cursor: pointer;
		outline: none;
		padding: 0.75em 2em;
	}
</style>

