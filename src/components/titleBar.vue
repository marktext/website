<template>
  <div class="title-bar">
    <div class="nav">
      <h1>
        <img src="../assets/logo.png" alt="marktext">
        Mark Text
      </h1>
      <div class="nav-group">
        <a href="javascript:;">Features</a>
        <a href="javascript:;">Themes</a>
        <a href="javascript:;">Sponsors</a>
      </div>
    </div>
    <div class="title-content">
      <div class="des">
        <div class="slogan">Simple and Elegant Markdown Editor</div>
        <div class="slogan">Focused on speed and usability.</div>
        <div class="download-group">
          <div class="download-info">Available for maxOs, Windows and Linux.</div>
          <div class="button-group">
            <a href="https://github.com/marktext/marktext/releases" target="_blank">
              <img src="../assets/mac.svg" alt="">
              <span>macOs</span>
            </a>
            <a href="https://github.com/marktext/marktext/releases" target="_blank">
              <img src="../assets/windows.svg" alt="">
              <span>Windows</span>
            </a>
            <a href="https://github.com/marktext/marktext/releases" target="_blank">
              <img src="../assets/linux.svg" alt="">
              <span>Linux</span>
            </a>
          </div>
        </div>
      </div>
      <div class="image">
        <img src="../assets/drink_coffee.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title-bar {
    width: 100vw;
    height: 100vh;
    position: relative;
    top: 0;
    color: #fff;
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
    background-size: 400% 400%;
    animation: Gradient 15s ease infinite;
    overflow: hidden;
  }
  .nav {
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, .5);
    height: 60px;
    display: flex;
    justify-content: space-between;
  }
  .nav h1 {
    font-size: 30px;
    color: #000;
    margin-left: 30px;
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    text-shadow: 0 12px 12px rgba(0, 0, 0, .3);
  }
  .nav img {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
  .nav .nav-group {
    display: flex;
    height: 100%;
    margin-right: 30px;
    align-items: center;
  }
  .nav .nav-group a {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    text-decoration: none;
    color: #333;
    opacity: .75;
    display: inline-block;
    padding: 5px 8px;
    height: 40px;
    line-height: 30px;
    margin-right: 30px;
    font-weight: 600;
  }
  .nav .nav-group a:hover {
    color: var(--themeColor);
  }
  .title-content {
    margin-top: 60px;
    display: flex;
  }
  .des {
    width: 60vw;
    margin-top: 180px;
    padding: 50px 100px;
    font-family: 'Roboto';
    font-size: 30px;
    flex-shrink: 0;
  }
  .des .slogan {
    text-shadow: 0 5px 8px rgba(0, 0, 0, .3);
  }
  .des div:first-of-type {
    font-size: 40px;
  }
  .des div {
    margin-bottom: 10px;
    font-size: 35px;
  }
  .des .download-group {
    margin-top: 100px;
  }
  .des .download-group .download-info {
    font-size: 16px;
  }
  .des .download-group a {
    text-decoration: none;
    width: 120px;
    height: 40px;
    display: inline-block;
    line-break: 40px;
    border-radius: 5px;
    background: #fff;
    color: #666;
    font-size: 18px;
    display: flex;
    align-items: center;
  }
  .des .download-group a:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
  }
  .des .download-group a img {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .image {
    position: relative;
    flex: 1;
    padding-top: 150px;
  }
  .image img {
    width: 450px;
    height: 450px;
  }
  .button-group {
    margin-top: 20px;
    width: 400px;
    display: flex;
    justify-content: space-between;
  }
  @keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
</style>
