<template>
  <div id="app">
    <TitleBar></TitleBar>
    <Feature></Feature>
    <Theme></Theme>
    <Sponsor></Sponsor>
    <Footer></Footer>
  </div>
</template>

<script>
import TitleBar from './components/titleBar.vue'
import Feature from './components/feature.vue'
import Theme from './components/theme.vue'
import Sponsor from './components/sponsor.vue'
import Footer from './components/footer.vue'
import './app.global.css'

export default {
  name: 'app',
  components: {
    TitleBar,
    Feature,
    Theme,
    Footer,
    Sponsor
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
