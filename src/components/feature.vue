<template>
  <div class="feature">
    <h2 class="slogan">&lt; Features /&gt;</h2>
    <div class="feature-list">
      <ul>
        <li v-for="feature in features" :key="feature.title"
          @click="select(feature)"
          :class="{active: feature.title === selectedFeature.title}"
        >
          <div class="title">{{feature.title}}</div>
          <div class="description">{{feature.description}}</div>
        </li>
      </ul>
    </div>
    <div class="feature-images">
      <div class="image-list">
        <div class="app-container">
          <div class="app-header">
            <span class="dot red"></span>
            <span class="dot orange"></span>
            <span class="dot green"></span>
            <span class="feature-name">{{selectedFeature.title}}</span>
          </div>
          <img :src="selectedFeature.img" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tableImage from '../assets/features/table-block.png'
import emojiImage from '../assets/features/emoji.png'
import inlineImage from '../assets/features/inline-format.png'
import mathImage from '../assets/features/math.png'
import codeImage from '../assets/features/code-block.png'

const features = [{
  title: 'Table Block',
  description: 'Support GFM table block, you can remove/add rows and columns.',
  img: tableImage
}, {
  title: 'Emoji',
  description: 'Support GFM extention emoji, type :emoji: and auto-coplete.',
  img: emojiImage
}, {
  title: 'Inline Formats',
  description: 'Support CommonMark and GitHub Flavored Markdown Spec.',
  img: inlineImage
}, {
  title: 'Math Fomula',
  description: 'Markdown extensions math expressions (KaTeX)',
  img: mathImage
}, {
  title: 'Code Block',
  description: 'Support GFM code fense, highlight by prismjs.',
  img: codeImage
}]

export default {
  name: 'Feature',
  data () {
    this.features = features
    return {
      selectedFeature: features[0]
    }
  },
  methods: {
    select (feature) {
      this.selectedFeature = feature
    }
  }
}
</script>
<style>
.slogan {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50px;
  color: var(--themeColor);
  border-bottom: 2px var(--highlightColor) dashed;
  font-weight: 300;
  text-transform: uppercase;
}
</style>

<style scoped>
  .feature {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: rgba(245, 245, 245, .6);
    background-image: url(../assets/developing_code.svg);
    background-repeat: no-repeat;
    background-position: 50% 100%;
    background-size: 400px 400px;
    display: flex;
    padding: 150px 100px;
    overflow: hidden;
  }
  .feature-list {
    flex: 1;
    padding-left: 30px;
    padding-right: 30px;
  }
  .feature-list ul {
    margin: 0;
    padding: 0;
  }
  .feature-list li {
    cursor: pointer;
    list-style: none;
    margin-bottom: 20px;
    border-radius: 8px;
    padding: 8px 10px;
    color: #666;
  }
  .feature-list li.active {
    background: linear-gradient(30deg, #efefef, rgba(245, 245, 245, .2));
    color: var(--themeColor);
  }
  .feature-list .title {
    font-size: 26px;
    font-weight: 600;
  }
  .feature-list .description {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .feature-images {
    flex: 0;
    flex-shrink: 0;
    width: 600px;
    margin-right: 50px;
    height: 100vh;
  }

  .app-container {
    width: 600px;
    height: 500px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, .3);
  }
  .app-container img {
    margin-left: 25px;
    margin-top: 50px;
    width: 550px;
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


