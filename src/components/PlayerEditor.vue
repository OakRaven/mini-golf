<template>
  <div class="player-editor">
    <div class="row">
      <div class="input-field col s12">
          <input type="text" name="" id="player_name" class="validate" placeholder="Enter your name" v-model="player.name">
          <label for="player_name" class="control-label col-xs-6">Player name:</label>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <label>Avatar</label>
      <table class="col s12">
        <tr>
          <td>
            <img :src="avatarUrl" class="avatar" />
          </td>
          <td>
            <button class="btn blue-grey" @click="displayAvatarList">Change</button>
          </td>
        </tr>
      </table>
      </div>
    </div>
    <div class="row avatar-list" style="margin-top: 3em;" v-show="shouldDisplayAvatarList">
      <a href=""  @click.prevent="selectAvatar(item.image)" class="btn col s1 avatar white" v-for="item in displayPics" :key="item.image">
        <img :src="getAvatarPath(item.image)" :alt="item.name" />
      </a>
    </div>
  </div>
</template>

<script>
import displayPicData from '@/diaply-pics'

export default {
  name: 'PlayerEditor',

  data () {
    return {
      displayPics: displayPicData,
      shouldDisplayAvatarList: false,

      player: {
        name: '',
        avatar: ''
      }
    }
  },

  computed: {
    avatarUrl () {
      return `/img/display-pics/${this.player.avatar}`
    }
  },

  methods: {
    getAvatarPath (imgFilename) {
      return `/img/display-pics/${imgFilename}`
    },

    displayAvatarList () {
      this.shouldDisplayAvatarList = true
    },

    selectAvatar (imgFilename) {
      this.player.avatar = imgFilename
      this.shouldDisplayAvatarList = false
    }
  },

  created () {
    this.player.name = 'MIKE'
    this.player.avatar = this.displayPics[Math.floor(Math.random() * this.displayPics.length)].image
  }
}
</script>

<style lang="scss" scoped>
.avatar-list {
  margin-top: 1em;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: auto;

  .avatar {
    padding: 5px;
    height: 90px;
    min-width: 90px;
    margin: 2px;
  }
}
</style>
