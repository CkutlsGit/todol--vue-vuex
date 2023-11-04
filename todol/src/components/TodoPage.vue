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
      <h1>{{ mission.title }}</h1>
      <h1>{{ mission.description }}</h1>
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
    }
  },
  methods: {
    acceptDatafromData(data) {
      this.isModalOpen = false

      const mission = { title: data[0], description: data[1] }
      this.$store.commit('updList', mission)
    }
  }
}
</script>

<style scoped>

</style>