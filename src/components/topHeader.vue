<template>
  <div class="top-header">
    <div class="logo">
      <img src="../assets/images/logo.png" alt="">
      <svg id="logo" ref="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260.63 53.27"><defs></defs><path class="cls-1" d="M278,259.8h4.53l20.09,47.88h.15l19.87-47.88h4.53v51.4H324V263.68h-.15L304.23,311.2h-3.17l-19.8-47.52h-.14V311.2H278Z" transform="translate(-277.45 -259.3)"/><path class="cls-1" d="M360.24,303.86h-.14a11.5,11.5,0,0,1-1.87,3.13,13.19,13.19,0,0,1-3,2.63,14.74,14.74,0,0,1-4,1.8,17.53,17.53,0,0,1-4.89.65c-3.94,0-7-.86-9.15-2.56s-3.24-4.33-3.24-7.88a9.25,9.25,0,0,1,4.58-8.53,13.94,13.94,0,0,1,4.39-1.7,46.09,46.09,0,0,1,4.64-.72l4.25-.36a24.78,24.78,0,0,0,4.64-.68,5.86,5.86,0,0,0,2.56-1.3,3.64,3.64,0,0,0,1.08-2.12,20.57,20.57,0,0,0,.22-3.24,6.93,6.93,0,0,0-.58-2.81,6.21,6.21,0,0,0-1.8-2.3,9.06,9.06,0,0,0-3.17-1.59,17.06,17.06,0,0,0-4.75-.57,12.43,12.43,0,0,0-8,2.45c-2,1.63-3.15,4.1-3.35,7.41h-2.73q.29-6.12,3.92-9.18t10.33-3.06q6.7,0,9.76,2.63a8.62,8.62,0,0,1,3.06,6.88v21.52c0,.53,0,1.06,0,1.59a4.92,4.92,0,0,0,.25,1.44,2.09,2.09,0,0,0,.72,1,2.23,2.23,0,0,0,1.44.4,12.4,12.4,0,0,0,2-.22v2.31a8.68,8.68,0,0,1-2.23.28,6.58,6.58,0,0,1-2.63-.43,3.46,3.46,0,0,1-1.47-1.15,4.19,4.19,0,0,1-.69-1.69,11.75,11.75,0,0,1-.18-2.13Zm0-13.68a5.17,5.17,0,0,1-3.06,1.66,38.73,38.73,0,0,1-4.57.64l-4.61.44c-1.34.14-2.68.34-4,.61a11.73,11.73,0,0,0-3.63,1.33,7.41,7.41,0,0,0-2.63,2.56,7.88,7.88,0,0,0-1,4.21q0,4.1,2.59,6.08a11.5,11.5,0,0,0,7.13,2,14,14,0,0,0,7.42-1.69,13.1,13.1,0,0,0,4.17-3.89,12,12,0,0,0,1.84-4.25,18.24,18.24,0,0,0,.39-2.77Z" transform="translate(-277.45 -259.3)"/><path class="cls-1" d="M374.43,282.4h.21a9.07,9.07,0,0,1,1.84-3.38,12.94,12.94,0,0,1,3.24-2.74,16.31,16.31,0,0,1,4.25-1.76,17,17,0,0,1,4.86-.54v2.74a12.76,12.76,0,0,0-4.93.43,11.91,11.91,0,0,0-5.3,3.17,25.36,25.36,0,0,0-1.76,2.08,10.62,10.62,0,0,0-1.26,2.24,13.5,13.5,0,0,0-.79,2.73,24.53,24.53,0,0,0-.36,3.6V311.2h-2.74v-37h2.74Z" transform="translate(-277.45 -259.3)"/><path class="cls-1" d="M391.85,259.8h2.74v34.05l22.82-19.65h4L405.17,288l17.35,23.18h-3.74L403,290.11l-8.42,7.13v14h-2.74Z" transform="translate(-277.45 -259.3)"/><path class="cls-1" d="M420,262.53V259.8h39.39v2.73H441.24V311.2h-3.16V262.53Z" transform="translate(-277.45 -259.3)"/><path class="cls-1" d="M456.51,293.06v.43a21.74,21.74,0,0,0,.87,6.19,15.75,15.75,0,0,0,2.56,5.19,12.2,12.2,0,0,0,4.26,3.53,13,13,0,0,0,5.95,1.29c3.71,0,6.64-1,8.81-2.91a15.29,15.29,0,0,0,4.48-8.1h2.73q-1.21,6.48-5.29,9.93t-10.76,3.46a16.39,16.39,0,0,1-7.17-1.48,14.58,14.58,0,0,1-5.11-4,17,17,0,0,1-3.06-6.05,27.07,27.07,0,0,1-1-7.52,26.2,26.2,0,0,1,1.05-7.45,18.65,18.65,0,0,1,3.13-6.27,15.48,15.48,0,0,1,5.22-4.32,15.87,15.87,0,0,1,7.38-1.62,15.63,15.63,0,0,1,6.87,1.44,14.37,14.37,0,0,1,5,3.93,17.47,17.47,0,0,1,3.06,5.76,23.14,23.14,0,0,1,1,7c0,.24,0,.51,0,.82s0,.57,0,.76Zm27.21-2.38a21.76,21.76,0,0,0-1-5.72,14.05,14.05,0,0,0-2.56-4.75,12.77,12.77,0,0,0-4.11-3.28,12.19,12.19,0,0,0-5.53-1.22,12.91,12.91,0,0,0-5.84,1.26,13.08,13.08,0,0,0-4.26,3.31,14.54,14.54,0,0,0-2.67,4.79,22,22,0,0,0-1.16,5.61Z" transform="translate(-277.45 -259.3)"/><path class="cls-1" d="M502.08,291.76,488.55,274.2h3.81L504,289.68l11.66-15.48h3.53l-13.39,17.56,14.61,19.44h-3.74L504,293.85,491,311.2h-3.46Z" transform="translate(-277.45 -259.3)"/><path class="cls-1" d="M537.58,276.57h-8.06v25.85A9.94,9.94,0,0,0,530,306a4,4,0,0,0,1.55,2,5.57,5.57,0,0,0,2.52.83,26.52,26.52,0,0,0,3.42.07v2.37a25.07,25.07,0,0,1-4.07,0,8.18,8.18,0,0,1-3.49-1.08,6.25,6.25,0,0,1-2.41-2.7,10.06,10.06,0,0,1-.76-5V276.57h-6.84V274.2h6.84V262.68h2.74V274.2h8.06Z" transform="translate(-277.45 -259.3)"/></svg>
    </div>
    <div class="text">
      Mark Text is a Markdown editor for Mac, Windows, and Linux. It is a concise text editor, dedicated to improving your editing efficiency.
    </div>
    <a href="https://github.com/marktext/marktext/releases" target="blank">Download</a>
    <div href="https://github.com/marktext/marktext" class="github">
      <a href="https://github.com/marktext/marktext" target="blank"><img src="../assets/icons/github.svg"/></a>
    </div>
    <a href="https://issuehunt.io/repos/110446844" target="_blank" style="border: none;width: 84px; height: 100px; margin: 0; position: absolute; top: 50px; right: 0px; z-index: 9999; background: transparent url('https://issuehunt.io/static/embed/issuehunt-ribbon-v1.svg') 140% center no-repeat"></a>
  </div>
</template>

<script>
  import anime from 'animejs'
  export default {
    created () {
      this.$nextTick(() => {
        anime({
          targets: this.$refs.logo.querySelectorAll('path'),
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 1500,
          delay: function(el, i) { return i * 300 },
          direction: 'alternate',
          loop: false
        })        
      })
    }
  }
</script>

<style scoped>
  .github {
    width: 35px;
    height: 35px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
    transition: all .3s ease-in-out;
  }
  .github img {
    width: 100%;
  }
  .github:hover {
    transform: scale(1.1);
  }
  .top-header {
    text-align: center;
  }
  .logo {
    width: 350px;
    margin: 0 auto;
    margin-top: 100px;
  }
  .logo img {
    width: 120px;
    height: 120px;
    margin-bottom: 35px;
  }
  .logo > svg {
    width: 100%;
  }
  .text {
    max-width: 39rem;
    font-size: 1.25rem;
    line-height: 1.6;
    color: #303133;
    margin: 35px auto;
    text-align: center;
  }
  .top-header > a {
    text-decoration: none;
    color: #fff;
    padding: 8px 8px;
    border-radius: 4px;
    font-weight: 600;
    background: rgb(39, 39, 39);
    border: 1px solid rgb(39, 39, 39);
    transition: all .3s ease-in-out;
    box-sizing: border-box;
  }
  .top-header > a:hover {
    background: #fff;
    color: rgb(39, 39, 39);
  }
  .cls-1{
    fill: none;
    stroke: #000;
    stroke-width: 1px;
    stroke-miterlimit: 10;
  }
</style>
