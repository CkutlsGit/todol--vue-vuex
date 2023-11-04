<template>
  <div class="todo">
    <h1>Todo page</h1>
    <a href="#" @click="$router.push({ name: 'home' })">go home</a>
  </div>
  <button type="button" @click="isModalOpen = !isModalOpen">{{ isModalOpen ? 'Close' : 'Open' }}</button>
  <modal v-if="isModalOpen" @send="acceptDatafromData"></modal>
  <ul>
    <li
        v-for="mission in $store.state.List"
        :key="mission.id"
    >
      {{ mission.title }}
      {{ mission.description }}
    </li>
  </ul>
</template>

<script>
import modal from "@/components/Modal.vue";

export default {
  components: { modal },
  data() {
    return {
      isModalOpen: false,
      todoList: []
    }
  },
  methods: {
    acceptDatafromData(data) {
      this.isModalOpen = false

      this.todoList.push(data)
      this.$store.commit('updList', this.todoList)
    }
  }
}
</script>

<style scoped>

</style>