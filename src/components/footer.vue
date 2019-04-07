<template>
  <div class="footer">
    <div class="container hero">
    <div class="inner">
      <img src="../assets/new_message.svg" alt="">
      <h1>&lt; Have Something to say? /&gt;</h1>
      <p>
        Send us an email: <a href="mailto:ransixi@gmail.com">ransixi@gamil.com</a>
      </p>
      <p class="follow">
        <span>You can also follow us by:</span>
        <a href="https://twitter.com/marktextapp">
          <img src="../assets/twitter.svg" alt="twitter">
        </a>
        <a href="https://github.com/marktext/marktext">
          <img src="../assets/github.svg" alt="github">
        </a>
      </p>
      <p class="small">All Right Reserved © 2017-2019 <a href="https://github.com/Jocs">@jocs</a></p>
    </div>
    <div class="overlay"></div>
    <div class="background">
      <canvas id="hero-canvas" width="1920" height="1080" ref="canvas"></canvas>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  created () {
    this.$nextTick(() => {
      // ===========================================
      // Hero Animated Canvas Background
      // by Mário Duarte
      // (╭☞ ͡ ͡°͜ ʖ ͡ ͡°)╭☞
      // Thanks for stoping by, don't forget to like
      // and follow to stay up to date with new 
      // doodles and cools stuff
      // Twitter: https://twitter.com/MDesignsuk
      //  (づ｡◕‿‿◕｡)づ
      // ===========================================

    // pure javascrip random function ============
    function random(min, max) {
      return Math.random() * (max - min) + min
    }

    function init() {} //end init

    function animate() {
      requestAnimationFrame(animate)
      draw()
    }

    const draw = () => {

      //setup canvas enviroment
      let time = new Date().getTime() * 0.002
      //console.log(time)
      const color1 = 'rgba(238, 119, 82, .3)'
      const color2 = 'rgba(231, 60, 126, 0.4)'
      let canvas = this.$refs.canvas
      let ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()

      // random float to be used in the sin & cos
      let randomX = random(.2, .9)
      let randomY = random(.1, .2)

      // sin & cos for the movement of the triangles in the canvas
      let rectX = Math.cos(time * 1) * 1.5 + randomX
      let rectY = Math.sin(time * 1) * 1.5 + randomY
      let rectX2 = Math.cos(time * .7) * 3 + randomX
      let rectY2 = Math.sin(time * .7) * 3 + randomY
      let rectX3 = Math.cos(time * 1.4) * 4 + randomX
      let rectY3 = Math.sin(time * 1.4) * 4 + randomY

      //console.log(rectX + '-' + rectY + '-' + rectX2 + '-' + rectY2 + '-' + rectX3 + '-' + rectY3)

      //triangle gradiente ==========================================
      var triangle_gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      triangle_gradient.addColorStop(0, color1)
      triangle_gradient.addColorStop(1, color2)

      //triangle group 1 ===========================================
      // triangle 1.1
      ctx.beginPath()
      ctx.moveTo(rectX2 + 120, rectY2 - 100)
      ctx.lineTo(rectX2 + 460, rectY2 + 80)
      ctx.lineTo(rectX2 + 26, rectY2 + 185)
      ctx.fillStyle = triangle_gradient
      ctx.fill()

      //triangle 1.2
      ctx.beginPath()
      ctx.moveTo(rectX - 50, rectY - 25)
      ctx.lineTo(rectX + 270, rectY + 25)
      ctx.lineTo(rectX - 50, rectY + 195)
      ctx.fillStyle = triangle_gradient
      ctx.fill()

      //triangle 1.3
      ctx.beginPath()
      ctx.moveTo(rectX3 - 140, rectY3 - 150)
      ctx.lineTo(rectX3 + 180, rectY3 + 210)
      ctx.lineTo(rectX3 - 225, rectY3 - 50)
      ctx.fillStyle = triangle_gradient
      ctx.fill()

      //triangle group 2 ===========================================
      // triangle 2.1
      ctx.beginPath()
      ctx.moveTo(rectX + (canvas.width - 40), rectY - 30)
      ctx.lineTo(rectX + (canvas.width + 40), rectY + 190)
      ctx.lineTo(rectX + (canvas.width - 450), rectY + 120)
      ctx.fillStyle = triangle_gradient
      ctx.fill()
      
      // triangle 2.2
      ctx.beginPath()
      ctx.moveTo(rectX3 + (canvas.width - 200), rectY3 - 240)
      ctx.lineTo(rectX3 + (canvas.width + 80), rectY3 - 240)
      ctx.lineTo(rectX3 + (canvas.width - 50), rectY3 + 460)
      ctx.fillStyle = triangle_gradient
      ctx.fill()
      
      // triangle 2.3
      ctx.beginPath()
      ctx.moveTo(rectX2 + (canvas.width - 400), rectY2 + 140)
      ctx.lineTo(rectX2 + (canvas.width + 20), rectY2 + 200)
      ctx.lineTo(rectX2 + (canvas.width - 350), rectY2 + 370)
      ctx.fillStyle = triangle_gradient
      ctx.fill()
      
      //triangle group 3 ===========================================
      // triangle 3.1
      ctx.beginPath()
      ctx.moveTo(rectX3 - 50, rectY3 + (canvas.height - 350))
      ctx.lineTo(rectX3 + 350, rectY3 + (canvas.height - 220))
      ctx.lineTo(rectX3 - 100, rectY3 + (canvas.height - 120))
      ctx.fillStyle = triangle_gradient
      ctx.fill()
      
      // triangle 3.2
      ctx.beginPath()
      ctx.moveTo(rectX + 100, rectY + (canvas.height - 380))
      ctx.lineTo(rectX + 320, rectY + (canvas.height - 180))
      ctx.lineTo(rectX - 275, rectY + (canvas.height + 150))
      ctx.fillStyle = triangle_gradient
      ctx.fill()
      
      // triangle 3.3
      ctx.beginPath()
      ctx.moveTo(rectX2 - 230, rectY2 + (canvas.height - 50))
      ctx.lineTo(rectX2 + 215, rectY2 + (canvas.height - 110))
      ctx.lineTo(rectX2 + 250, rectY2 + (canvas.height + 130))
      ctx.fillStyle = triangle_gradient
      ctx.fill()
      
      //triangle group 4 ===========================================
      // triangle 4.1
      ctx.beginPath()
      ctx.moveTo(rectX3 + (canvas.width - 80), rectY3 + (canvas.height - 320))
      ctx.lineTo(rectX3 + (canvas.width + 250), rectY3 + (canvas.height + 220))
      ctx.lineTo(rectX3 + (canvas.width - 200), rectY3 + (canvas.height + 140))
      ctx.fillStyle = triangle_gradient
      ctx.fill()
      
      // triangle 4.2
      ctx.beginPath()
      ctx.moveTo(rectX + (canvas.width - 100), rectY + (canvas.height - 160))
      ctx.lineTo(rectX + (canvas.width - 30), rectY + (canvas.height + 90))
      ctx.lineTo(rectX + (canvas.width - 420), rectY + (canvas.height + 60))
      ctx.fillStyle = triangle_gradient
      ctx.fill()
      
      // triangle 4.3
      ctx.beginPath()
      ctx.moveTo(rectX2 + (canvas.width - 320), rectY2 + (canvas.height - 200))
      ctx.lineTo(rectX2 + (canvas.width - 50), rectY2 + (canvas.height - 20))
      ctx.lineTo(rectX2 + (canvas.width - 420), rectY2 + (canvas.height + 120))
      ctx.fillStyle = triangle_gradient
      ctx.fill()

      ctx.restore()

    } //end function draw

    //call init
    init()
    animate()
    })
  }
}
</script>

<style scoped>
.footer {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(-45deg, #eeeeee, #efefef);
  display: flex;
  overflow: hidden;
  position: relative;
}
#hero-canvas {
	width: 100%;
	height: 100%;
	position: relative;
}

.inner {
	position: relative;
	max-width: 960px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 40px;
	box-sizing: padding-box;
	z-index: 4;
}

.inner img {
  width: 200px;
  height: 200px;
}

.inner	p {
	color: #666;
	margin-bottom: 0;
	font-size: 16px;
	line-height: 150%;
	max-width: 550px;
}

.inner p.follow {
  display: flex;
  align-items: center;
}

.inner p.follow a {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin: 0 5px;
}

.inner p a img {
  width: 100%;
  height: 100%;
}

.inner p.small {
	font-size: 12px;
}

.inner a {
	display: inline-block;
  margin: 0 10px;
  color: rgba(163, 32, 109, 0.6);
  text-decoration: none;
}

.inner h1 {
	color: rgba(163, 32, 109, 0.6);
	font-weight: 300;
	text-transform: uppercase;
	margin-bottom: 0;
	border-bottom: 2px rgba(163, 32, 109, 0.6) dashed;
}

.overlay {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: transparent;
  background: linear-gradient(to bottom,  rgba(114,81,109,0.2) 0%,rgba(238,238,238,1) 100%);
	z-index: 3;
}

.background {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: #EEEEEE;
	z-index: 1;
}

.hero {
	background-color: #EEEEEE;
	width: 100%;
	height: 100%;
	max-height: calc(100% - 50px);
}
</style>


