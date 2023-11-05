<template>
  <header-element></header-element>
  <div class="todo">
    <div class="todo__content">
      <h1>Todo page</h1>
      <div class="todo__btn--home">
        <a href="#" @click="$router.push({ name: 'home' })">go home</a>
      </div>
      <div class="todo__btn--open-modal">
        <button type="button" @click="isModalOpen = !isModalOpen">{{ isModalOpen ? 'Close' : 'Open' }}</button>
      </div>
    </div>
  </div>
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
import headerElement from "@/pages/headerElement.vue";
import { mapGetters } from "vuex";

export default {
  components: { modal, headerElement },
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
