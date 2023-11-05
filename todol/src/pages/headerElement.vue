<template>
  <header class="header">
    <div class="header__logo">
      <h1>ToDo List</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'headerElement'
}
</script>

<style scoped>
.header__logo {
  display: flex;
  justify-content: center;
  padding: 20px 40px;
}

.header__logo h1 {
  font-size: 38px;
  font-weight: 700;
  color: #fff;
}
</style>