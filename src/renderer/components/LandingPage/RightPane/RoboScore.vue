<template>
	<div>
		<h2>Score::</h2>
		<span class="title">{{ playerName }} :: {{  playerScore }}</span>
		<span class="title">{{ roboName }} :: {{ roboScore }}</span>
		<span class="title">Tie :: {{ tieScore }}</span>
	</div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'robo-score',
    computed: {
      ...mapState('GameStore', ['roboScore']),
      ...mapState('GameStore', ['roboName']),
      ...mapState('GameStore', ['playerScore']),
      ...mapState('GameStore', ['playerName'])
    }
}
</script>
<style>
  @import url('../../../../../static/bootstrap.css');
</style>
