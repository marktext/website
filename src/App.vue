<template>
  <div id="app">
    <top-header></top-header>
    <div class="main-image">
      <img src="./assets/images/summary.jpg" alt="">
    </div>
    <feature></feature>
    <theme></theme>
  </div>
</template>

<script>
import topHeader from './components/topHeader.vue'
import feature from './components/feature.vue'
import theme from './components/theme.vue'

export default {
  name: 'app',
  components: {
    topHeader,
    feature,
    theme
  }
}
</script>

<style>
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .main-image {
    max-width: 920px;
    margin: 50px auto;
  }
  .main-image img {
    width: 100%;
  }
</style>
