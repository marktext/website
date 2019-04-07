<template>
  <div id="app">
    <TitleBar></TitleBar>
    <Feature></Feature>
  </div>
</template>

<script>
import TitleBar from './components/titleBar.vue'
import Feature from './components/feature.vue'
import './app.global.css'

export default {
  name: 'app',
  components: {
    TitleBar,
    Feature
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
