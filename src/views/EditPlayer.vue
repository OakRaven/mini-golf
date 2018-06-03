<template>
  <div class="edit-player">
    <h1>{{ title }}</h1>
    <p>Please enter your name and select your avatar.</p>

    <hr>
    <h2 class="mb-2">Player Information</h2>
    <b-row class="my-1">
      <b-col sm="4"><label for="player-name">Player's name:</label></b-col>
      <b-col sm="8">
        <b-form-input v-model="player.name" id="player-name"
          type="text"
          placeholder="Enter your name"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="4"><label for="player-icon">Selected avatar:</label></b-col>
      <b-col sm="8">
        <img :src="avatarUrl" />
      </b-col>
    </b-row>
    <hr>

    <div class="row">
      <div class="col-sm">
        <b-button @click="onBackClicked" variant="secondary" block>Back</b-button>
      </div>
      <div class="col-sm">
        <b-button variant="primary" block :disabled="!isValid">Ok</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import displayPictures from '../diaply-pics.js'

export default {
  name: 'EditPlayer',

  data () {
    return {
      mode: '',
      player: { name: '', icon: '' }
    }
  },

  methods: {
    onBackClicked () {
      this.$router.go(-1)
    }
  },

  computed: {
    title () {
      return this.mode === 'adding' ? 'Add Player' : 'Edit Player'
    },

    isValid () {
      return this.player.name.length > 0 && this.player.icon.length > 0
    },

    avatarUrl () {
      return '/img/display-pics/' + this.player.icon
    }
  },

  created () {
    this.mode = this.$route.params.mode || 'adding'

    if (this.mode === 'adding') {
      this.player.name = ''
      let displayPic = displayPictures[Math.ceil(Math.random() * displayPictures.length)]
      this.player.icon = displayPic.image
    } else {
      this.player = this.$route.params.player
    }
  }
}
</script>

<style scoped>
</style>
