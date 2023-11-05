<template>
  <header-element></header-element>
  <div class="home">
    <div class="home__content">
      <h1>Home Page</h1>
      <a href="#" @click="$router.push({ name: 'todol' })">go todol</a>
    </div>
  </div>
  <aside class="todo-list" @click="$router.push({ name: 'todol' })">
    <h2>Ваши последние задания</h2>
    <ul>
      <li
          v-for="mission in getList"
          :key="mission.id"
      >
        <h4>{{ mission.title }}</h4>
        <h4>{{ mission.description }}</h4>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";
import headerElement from "@/pages/headerElement.vue";

export default {
  components: {headerElement},
  computed: {
    ...mapGetters(['getList'])
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 40px;
}
.home__content h1 {
  font-size: 34px;
  color: #504625;
  letter-spacing: 5px;
}
</style>