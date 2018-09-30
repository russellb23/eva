<template>
	<div class="doc">
	<div >
			<score-board/>
		</div>
	<button v-on:click="resetScore" class="btn btn-primary">Reset Scores</button>
	</div>
</template>

<script>
  import ScoreBoard from './ScoreBoard.vue'
  import { mapMutations } from 'vuex'

  export default {
    name: 'right-page',
    components: { ScoreBoard },
    methods: {
      ...mapMutations('GameStore', [ 'SCORE_RESET' ]),
      resetScore: function () {
        this.SCORE_RESET()
      }
    }
  }
</script>

<style>
   @import url('../../../../../static/bootstrap.css');
  
	 .doc button.secondary {
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
</style>
