<template>
  <div class="home">
    <div class="row">
      <button class="col s12 waves-effect waves-light btn blue-grey">Current Game</button>
    </div>
    <div class="row">
      <button class="col s12 waves-effect waves-light btn blue-grey">Completed Games</button>
    </div>
    <div class="row">
      <button @click="onNewGameClicked" class="col s12 waves-effect waves-light btn blue-grey">New Game</button>
    </div>

    <player-editor></player-editor>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import PlayerEditor from '@/components/PlayerEditor'

export default {
  name: 'home',
  components: {
    HelloWorld,
    PlayerEditor
  },

  methods: {
    onNewGameClicked () {
      this.$router.push('new-game')
    }
  }
}
</script>
