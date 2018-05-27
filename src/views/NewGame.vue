<template>
  <div class="new-game">
    <p>Complete the information below then click the start button.</p>

    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Player</th>
          <th class="action-item">&nbsp;</th>
          <th class="action-item">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="player in players" :key="player.id">
          <td>{{ player.name }}</td>
          <td class="action-item">
            Edit
          </td>
          <td class="action-item">
            Delete
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-default btn-block btn-add">Add</button>
    <button class="btn btn-default btn-block btn-start">Start</button>
  </div>
</template>

<script>
export default {
  name: 'new-game',

  data () {
    return {
      players: [{ id: 1, name: 'Mike' }, { id: 2, name: 'Tracy' }]
    }
  }
}
</script>

<style scoped>
.action-item {
  width: 80px;
  text-align: center;
}
button.btn-start {
  position: absolute;
  bottom: 1em;
}
</style>
