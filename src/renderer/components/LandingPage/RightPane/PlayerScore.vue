<template>
	<div>
		<span class="title">{{ playerName }} Score: {{  playerScore }}</span>
	</div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'player-score',
    computed: {
      ...mapState('GameStore', ['playerScore']),
      ...mapState('GameStore', ['playerName'])
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>
<style>
  @import url('../../../../../static/bootstrap.css');
</style>
