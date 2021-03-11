<template>
  <div id="app">
    <Formulari />
  </div>
</template>

<script>
import Formulari from './components/Formulari.vue'

export default {
  name: 'App',
  components: {
    Formulari
  }
}
</script>

<style>
body {
    background-color: rgb(139, 199, 218);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
