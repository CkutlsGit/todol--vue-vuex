<template>
  <header-element></header-element>
  <div class="home">
    <div class="home__container">
      <div class="home__content">
        <h1>Home Page</h1>
        <a href="#" @click="$router.push({ name: 'todol' })">go todol</a>
      </div>
    </div>
    <div class="missions__content">
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
    </div>
  </div>
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
.home__container {
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 40px;
}
.home__content h1 {
  font-size: 34px;
  color: #504625;
  letter-spacing: 5px;
  margin-bottom: 20px;
}
.home__content a {
  text-transform: capitalize;
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
  transition: .5s;
  padding: 5px 5px;
}
.missions__content {
  display: flex;
  align-items: end;
  justify-content: end;
}
</style>