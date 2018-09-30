<template>
	<div v-if="nameField">
			<input type="text" placeHolder="Player Name" v-model="name">
			<button v-on:click="addName" class="btn btn-primary">Set Me!</button>
	</div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        name: ''
      }
    },
    name: 'player-name',
    methods: {
      ...mapState('GameStore', ['nameField']),
      ...mapMutations('GameStore', [ 'SET_PLAYER_NAME' ]),
      ...mapMutations('GameStore', [ 'SET_NAME_FIELD' ]),
      addName: function () {
        this.SET_PLAYER_NAME(this.name)
        this.SET_NAME_FIELD()
      }
    }
}
</script>

<style>
  @import url('../../../../../static/bootstrap.css');

  .doc button.primary {
		font-size: 0.8mm;
		cursor: pointer;
		outline: none;
		padding: 0.75em 2em;
		border-radius: 2em;
		display: inline-block;
		color: #fff;
		background-color: #4fc08d;
		transition: all 0.12s ease;
		box-sizing: border-box;
		border: 1px solid #4fc08d;
	}
