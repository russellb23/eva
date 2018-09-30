<template>
	<div>
		<player-name></player-name>
		<game-daemons />
		<game-reset />
	</div>
</template>

<script>
  import playerName from './playerName.vue'
  import gameDaemons from './gameDaemons.vue'
  import gameReset from './gameReset.vue'

  export default {
    name: 'left-pane',
    components: { playerName, gameDaemons, gameReset },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
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
		
