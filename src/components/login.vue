<template>
  <form @submit.prevent="submit">
    <div class="login-form">
      <label for="pin">PIN:</label>
      <input v-model="pin" type="text" id="pin" class="form-control" />
    </div>
    <button @click="getPrivateToken">Solicitar token</button>
    <div class="login-form">
      <label for="token">Token privado:</label>
      <input
        v-model="privateToken"
        type="text"
        id="token"
        class="form-control"
      />
    </div>
    <button class="btn btn-primary" type="submit">Iniciar sesión</button>
    <p v-if="error" class="error-message">{{ error }}</p>
  </form>
</template>
<script>
import privateToken from './plugins/privateToken.js';
import { getPrivateToken } from './plugins/api.js';

export default {
  data() {
    return {
      pin: '',
      privateToken: '',
      error: '',
    };
  },
  created() {
    this.getPrivateToken = localStorage.getItem('privateToken');
  },
  methods: {
    getPrivateToken() {
      getPrivateToken().then((response) => {
        console.log(response.data.token);
      });
    },

    async submit() {
      try {
        this.error = '';
        const response = this.$authenticate(this.pin, this.getPrivateToken);
        if (response.success) {
          this.$router.push({ name: 'dashboard' });
        } else {
          this.error = response.message;
        }
      } catch (error) {
        this.error = 'Ha ocurrido un error inesperado';
      }
    },
  },
};
</script>

<style>
@import './Login.css';
</style>
