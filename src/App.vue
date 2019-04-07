<template>
  <div id="app">
    <TitleBar></TitleBar>
    <Feature></Feature>
    <Theme></Theme>
  </div>
</template>

<script>
import TitleBar from './components/titleBar.vue'
import Feature from './components/feature.vue'
import Theme from './components/theme.vue'
import './app.global.css'

export default {
  name: 'app',
  components: {
    TitleBar,
    Feature,
    Theme
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
