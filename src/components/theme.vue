<template>
  <div class="theme">
    <h2>Theme</h2>
    <div class="button">
      <button @click="toggle" :class="{'light': !theme}">{{theme ? 'Dark' : 'Light'}}</button>
    </div>
    <div class="theme-container">
      <img src="../assets/images/summary.jpg" alt="" v-if="theme">
      <img src="../assets/images/light.jpg" alt="" v-else>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        theme: true
      }
    },
    methods: {
      toggle () {
        this.theme = !this.theme
      }
    }
  }
</script>

<style scoped>
  h2 {
    text-align: center;
    font-size: 2rem;
    color: #333;
  }
  .button {
    margin: 35px auto;
    text-align: center;
  }
  button {
    padding: 8px 12px;
    background: rgb(39, 39, 39);
    color: #efefef;
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    transition: all .3s ease-in-out;
  }
  button.light {
    background: rgb(240, 240, 240);
    color: #333;
  }
  .intro {
    color: #333;
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.2rem;
    line-height: 1.6;
  }
  .theme-container {
    width: 800px;
    border: 1px solid #efefef;
    margin: 0 auto;
  }
  .theme-container img {
    width: 100%;
  }
</style>