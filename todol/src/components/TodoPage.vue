<template>
  <header-element></header-element>
  <div class="todo">
    <div class="todo__content">
      <h1>Todo page</h1>
      <div class="todo__btn--home">
        <a href="#" @click="$router.push({ name: 'home' })">go home</a>
      </div>
      <div class="todo__btn--open-modal">
        <button type="button" id="open-modal__btn" :class="{ 'open-modal__btn' : isModalOpen }" @click="isModalOpen = !isModalOpen">{{ isModalOpen ? 'Close' : 'Write' }}</button>
      </div>
      <div class="modal-window">
        <div class="modal-window__content">
          <modal v-if="isModalOpen" @send="isModalOpen = false"></modal>
        </div>
      </div>
    </div>
    <div class="todo__missions">
      <ul>
        <li v-for="mission in getList" :key="mission.id">
          <div class="mission">
            <div class="mission__content">
              <h1 class="mission__title">{{ mission.title }}</h1>
              <h1 class="mission__description">{{ mission.description }}</h1>
              <button @click="deleteMission(mission.id)">Удалить</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
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

<style scoped>
.todo .todo__content h1,
.todo .todo__content .todo__btn--home a,
.todo .todo__content .todo__btn--open-modal{
  display: flex;
  justify-content: center;
}
.todo__content h1 {
  padding-top: 15px;
  font-size: 34px;
  color: #504625;
  letter-spacing: 5px;
}
.todo__btn--home {
  margin: 20px 0px 10px 0px;
}
.todo__btn--home a {
  text-decoration: none;
  color: #ccb558;
  font-size: 29px;
  background: #504625;
  width: 120px;
  height: 45px;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  text-transform: capitalize;
  transition: .5s;
}
.todo__btn--home a:hover {
  background: #af9d52;
  color: #504625;
}
.todo__btn--open-modal button {
  margin-top: 20px;
  padding: 5px 35px;
  border: none;
  font-size: 32px;
  cursor: pointer;
  transition: .2s;
}
.todo__btn--open-modal button:hover {
  background: #504625;
  color: #ccb558;
}
.modal-window {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.open-modal__btn {
  background: #504625;
  color: #ccb558;
}
.todo__missions ul {
  list-style: none;
}
.mission {
  background: #fff;
  width: 300px;
  height: 190px;
  border-radius: 15px;
  margin: 20px 20px;
}
.mission__content {
  word-break: break-word;
}
.mission__content .mission__title {
  margin: 10px 0px 10px 10px;
}
.mission__content .mission__description {
  font-weight: 400;
}
.mission__content button {
  float: right;
  background: #504625;
  color: #ccb558;
  font-weight: 700;
  border: none;
  padding: 5px 5px;
  transition: 1s;
}
.mission__content button:hover {
  background: #fff;
  color: #000;
}
</style>