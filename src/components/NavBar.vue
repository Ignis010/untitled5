<template>
  <div class="navbar">
    <h2>Админ-панель</h2>
      <v-button @click="$router.push('/MyGame')">Игры</v-button>
      <v-button @click="$router.push('/MyWorkers')">Сотрудники</v-button>
      <v-button @click="$emit('logOut', false)">Выход</v-button>
  </div>
</template>

<script>
export default {
  name: "v-nav"
};
</script>

<style>
.navbar {
  width: 20%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14%;
  border-radius: 20%;
  border: 5px solid #3399FF;
  background-color: #66CCFF;
  box-shadow: 0px 10px 60px black ;
}
</style>