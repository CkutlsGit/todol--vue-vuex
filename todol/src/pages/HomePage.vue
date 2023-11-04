<template>
  <div class="home">
    <h1>Home Page</h1>
    <a href="#" @click="$router.push({ name: 'todol' })">go todol</a>
  </div>
  <aside class="todo-list">
    <h2>Ваши последние задания</h2>
    <ul>
      <li
          v-for="mission in $store.state.List"
          :key="mission.id"
      >
        <h4>{{ mission.title }}</h4>
        <h4>{{ mission.description }}</h4>
      </li>
    </ul>
  </aside>
</template>

<style scoped>

</style>
<script setup>
</script>