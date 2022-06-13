<template>
  <div class="sign-in-form">
    <form class="login" @submit.prevent="login">
      <h1>Вход в панель администратора</h1>
      <v-input required v-bind:value="login" @input="login = $event.target.value" type="text"
               placeholder="Логин" />
      <v-input required v-bind:value="password" @input="password = $event.target.value" type="password"
               placeholder="Пароль" />
      <v-button @click="checkLogin" type="submit">Вход</v-button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'sign-in',
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    checkLogin() {
      if ((this.login == "ignis") && (this.password == "ignis")) {
        this.$emit('logIn', true);
      } else {
        alert("Неверный логин или пароль!")
      }
    }
  }
}
</script>

<style>
.sign-in-form {
  position: absolute;
  width: 20%;
  height: 40%;
  margin-left: 40%;
  margin-top: 9%;
  border-radius: 20%;
  border: 5px solid #3399FF;
  box-shadow: 0px 10px 60px black ;
  background-color:#66CCFF;
  display: flex
}

.login {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>