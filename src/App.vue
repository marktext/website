<template>
  <div id="app">
    <TitleBar></TitleBar>
  </div>
</template>

<script>
import TitleBar from './components/titleBar.vue'

export default {
  name: 'app',
  components: {
    TitleBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
