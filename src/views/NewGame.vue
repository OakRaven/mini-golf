<template>
  <div class="new-game">
    <h1>New Game</h1>
    <p>To begin a new game, add your players and select the number of holes.</p>

    <hr>
    <h2>Players</h2>
    <b-alert variant="danger" :show="players.length == 0">You must add at least one player.</b-alert>
    <b-button @click="onAddPlayerClicked" variant="primary" size="sm">Add</b-button>

    <hr>
    <h2>Course Type</h2>
    <b-form-group>
      <b-form-radio-group v-model="courseType">
        <b-form-radio value="9-hole">9-Holes</b-form-radio>
        <b-form-radio value="18-hole">18-Holes</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <hr>

    <div class="row">
      <div class="col-sm">
        <b-button @click="onBackClicked" variant="secondary" block>Back</b-button>
      </div>
      <div class="col-sm">
        <b-button variant="primary" block :disabled="players.length == 0">Begin</b-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'new-game',

  data () {
    return {
      players: [],
      courseType: '9-hole'
    }
  },

  methods: {
    onAddPlayerClicked () {
      this.$router.push('/edit-player', { mode: 'adding' })
    },

    onBackClicked () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
</style>
