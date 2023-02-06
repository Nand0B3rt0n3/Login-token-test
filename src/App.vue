<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="https://imgs.search.brave.com/FMBTjvSlia0P8qjgHtcrfZ2f5J9vMB_vVeQe2sXEeCU/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Y/eTctUTNMX1hsOTdm/QV9nTXhTV0pBSGFF/SyZwaWQ9QXBp"
    />
    <HelloWorld msg="SEPE APP TEST " />
  </div>
</template>

<script>
import HelloWorld from './components/login.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style>
@import './components/Login.css';
</style>
