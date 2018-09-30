<template>
	<div>
		<h2>Score::</h2>
		<div>
		<span class="title">{{ playerName }} :: {{  playerScore }}</span>
		</div>
		<div>
		<span class="title">{{ roboName }} :: {{ roboScore }}</span>
		</div>
		<div>
		<span class="title">Tie :: {{ tieScore }}</span>
		</div>
	</div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'score-board',
    computed: {
      ...mapState('GameStore', ['roboScore']),
      ...mapState('GameStore', ['roboName']),
      ...mapState('GameStore', ['playerScore']),
      ...mapState('GameStore', ['playerName']),
      ...mapState('GameStore', ['tieScore'])
    }
}
</script>
<style>
  @import url('../../../../../static/bootstrap.css');
</style>
