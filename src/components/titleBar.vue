<template>
  <div class="title-bar">
    <div class="bg"></div>
  </div>
</template>

<script>
export default {
  name: 'TitleBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg {
    width: 400vw;
    min-width: 1000px;
    height: 400vw;
    min-height: 600px;
    position: absolute;
    top: -20%;
    right: 20%;
    border-radius: 10%;
    transform: rotate(-40deg) translateX(50%) translateY(50%);
    color: #fff;
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
    background-size: 400% 400%;
    animation: Gradient 15s ease infinite;
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
