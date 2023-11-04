<template>
  <div class="todo">
    <h1>Todo page</h1>
    <a href="#" @click="$router.push({ name: 'home' })">go home</a>
  </div>
  <button type="button" @click="isModalOpen = !isModalOpen">{{ isModalOpen ? 'Close' : 'Open' }}</button>
  <modal v-if="isModalOpen" @send="isModalOpen = false"></modal>
  <ul>
    <li v-for="mission in getList" :key="mission.id">
      <h1>{{ mission.title }}</h1>
      <h1>{{ mission.description }}</h1>
      <button @click="deleteMission(mission.id)">Удалить</button>
    </li>
  </ul>
</template>

<script>
import modal from "@/components/Modal.vue";
import { mapGetters } from "vuex";

export default {
  components: { modal },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    deleteMission(id) {
      this.$store.commit('DELETE_FROM_LIST', id);
    },
  },
  computed: {
    ...mapGetters(['getList'])
  }
}
</script>
