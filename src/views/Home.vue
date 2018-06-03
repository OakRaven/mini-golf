<template>
  <div class="home">
    <h1>Mini-Golf Scorecard</h1>

    <button class="btn btn-primary btn-block"
      @click="goToNewGame">New Game</button>
    <button class="btn btn-primary btn-block"
      @click="goToPastGames">Past Games</button>
    <button class="btn btn-primary btn-block"
      @click="goToAbout">About Mini-Golf Scorecard</button>
  </div>
</template>

<script>
export default {
  name: 'home',

  methods: {
    goToNewGame () {
      this.$router.push('/new-game')
    },
    goToPastGames () {
      this.$router.push('/past-games')
    },
    goToAbout () {
      this.$router.push('/about')
    }
  }
}
</script>
