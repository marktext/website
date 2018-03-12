<template>
  <div class="edit-mode">
    <h2>Edit Mode</h2>
    <div class="intro">
      Various edit mode: Source Code mode、Typewriter mode、Focus mode.
    </div>
    <h3>Source Code Mode</h3>
    <div class="image-wrapper">
      <img src="../assets/images/source-code-mode.jpg" alt="">
    </div>
    <h3>Focus Mode</h3>
    <div class="image-wrapper">
      <img src="../assets/images/focus-mode.jpg" alt="">
    </div>
    <h2>Issues</h2>
    <div class="intro center">
      If you find any bugs of Mark Text, or have a great idea want to tell us ?
    </div>
    <div class="center issue-button">
      <a href="https://github.com/marktext/marktext/issues" target="blank">Shoot an Issue</a>
    </div>
  </div>
</template>

<script>
  
</script>

<style scoped>
  h2 {
    text-align: center;
    font-size: 2rem;
    color: #333;
  }
  h3 {
    text-align: center;
    font-size: 1.5rem;
    color: #444;
  }
  .intro {
    color: #333;
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.2rem;
    line-height: 1.6;
  }
  .center {
    text-align: center;
  }
  .image-wrapper {
    margin: 0 auto;
    max-width: 800px;
  }
  .image-wrapper img {
    width: 100%;
  }
  .issue-button {
    margin: 50px auto 300px auto;
  }
  .issue-button a {
    padding: 8px 12px;
    background: rgb(39, 39, 39);
    color: rgb(245, 245, 245);
    border-radius: 4px;
    text-decoration: none;
  }
</style>
