<template>
  <div id="app">
    <top-header></top-header>
    <div class="main-image">
      <img src="./assets/images/summary.jpg" alt="">
    </div>
    <feature></feature>
    <theme></theme>
    <mode></mode>
    <footer>
      <div>© 2017 - 2018 <a href="https://github.com/Jocs" target="blank">@jocs</a>.</div>
    </footer>
  </div>
</template>

<script>
import topHeader from './components/topHeader.vue'
import feature from './components/feature.vue'
import theme from './components/theme.vue'
import mode from './components/mode.vue'

export default {
  name: 'app',
  components: {
    topHeader,
    feature,
    theme,
    mode
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
  footer {
    margin-top: 50px;
    width: 100%;
    height: 100px;
    background: rgb(245, 245, 245);
    padding-top: 32px;
    box-sizing: border-box;
  }
  footer div {
    width: 200px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    margin: 0 auto;
    background: rgb(39, 39, 39);
    color: #efefef;
  }
  footer div a {
    color: rgb(245, 245, 245);
  }
</style>
