<template>
  <div class="theme">
    <img src="../assets/notes.svg" alt="" class="bg-image">
    <div class="app-container">
      <div class="app-header">
        <span class="dot red"></span>
        <span class="dot orange"></span>
        <span class="dot green"></span>
        <span class="feature-name">title</span>
      </div>
    </div>
    <div class="theme-list">
      hello world
    </div>
  </div>
</template>
<script>
export default {
  name: 'Theme'
}
</script>
<style scoped>
  .theme {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(-45deg, rgba(35,166,213, .1), rgba(35,213,171, .1));
    display: flex;
    padding: 150px 100px;
    overflow: hidden;
    position: relative;
  }
  .theme img.bg-image {
    width: 200px;
    height: 200px;
    position: absolute;
    right: 200px;
    top: 50px;
  }
  .app-container {
    width: 600px;
    height: 500px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, .3);
  }
  .app-container .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 10px;
  }
  .dot.red {
    background: rgb(238, 106, 95);
    left: 10px;
  }

  .dot.orange {
    background: rgb(246, 193, 80);
    left: 32px;
  }

  .dot.green {
    background: rgb(100, 202, 87);
    left: 54px;
  }

  .app-header {
    position: relative;
    height: 32px;
    text-align: center;
    font-size: 12px;
    line-height: 32px;
  }
</style>


