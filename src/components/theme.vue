<template>
  <div class="theme">
    <h2 class="slogan" id="themes">{ Themes }</h2>
    <img src="../assets/notes.image.svg" alt="" class="bg-image">
    <div class="app-container">
      <div class="app-header">
        <span class="dot red"></span>
        <span class="dot orange"></span>
        <span class="dot green"></span>
        <span class="feature-name">{{currentTheme.name}}</span>
      </div>
      <div v-html="themeHtml" ref="muyaContainer"></div>
    </div>
    <div class="theme-list">
      <div class="light-themes">
        <h5>Light themes</h5>
        <ul>
          <li v-for="theme of lightThemes" :key="theme.name"
            :class="{active: theme.name === currentTheme.name}"
            @click="selectTheme(theme)"
          >
            <span :style="{background: theme.color, 'box-shadow': `0 3px 12px 0 ${theme.color}`}"></span>
            <span>{{theme.name}}</span>
          </li>
        </ul>
      </div>
      <div class="dark-themes">
        <h5>Dark themes</h5>
        <ul>
          <li v-for="theme of darkThemes" :key="theme.name"
            :class="{active: theme.name === currentTheme.name}"
            @click="selectTheme(theme)"
          >
            <span :style="{background: theme.color, 'box-shadow': `0 3px 12px 0 ${theme.color}`}"></span>
            <span>{{theme.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import themeMd from 'markdown/themes.md'
import mermaid from 'mermaid'
import { addThemeStyle } from '../utils/theme.js'
import markdownToHtml from '../utils/markdownToHtml.js'

import 'katex/dist/katex.min.css'
import 'themes/default.css'

const lightThemes = [{
  name: 'Cadmium Light',
  label: 'light',
  color: 'rgba(33, 181, 111, 1)'
}, {
  name: 'Graphite Light',
  label: 'graphite',
  color: 'rgb(104, 134, 170)'
}, {
  name: 'Ulysses Light',
  label: 'ulysses',
  color: 'rgb(12, 139, 186)'
}]

const darkThemes = [{
  name: 'Dark',
  label: 'dark',
  color: '#409eff'
}, {
  name: 'Material Dark',
  label: 'material-dark',
  color: '#f48237'
}, {
  name: 'One Dark',
  label: 'one-dark',
  color: '#e2c08d'
}]

export default {
  name: 'Theme',
  data () {
    this.themeHtml = markdownToHtml(themeMd)
    this.darkThemes = darkThemes
    this.lightThemes = lightThemes
    return {
      currentTheme: lightThemes[0]
    }
  },
  created () {
    this.$nextTick(() => {
      const codes = this.$refs.muyaContainer.querySelectorAll('code.language-mermaid')
      for (const code of codes) {
        const preEle = code.parentNode
        const mermaidContainer = document.createElement('div')
        mermaidContainer.innerHTML = code.innerHTML
        mermaidContainer.classList.add('mermaid')
        preEle.replaceWith(mermaidContainer)
      }
      mermaid.init({
      }, this.$refs.muyaContainer.querySelectorAll('div.mermaid'))
    })
  },
  methods: {
    selectTheme (theme) {
      if (/dark/i.test(theme.label)) {
        mermaid.initialize({
          theme: 'dark'
        })
      } else {
        mermaid.initialize({
          theme: 'default'
        })
      }
      addThemeStyle(theme.label)
      this.currentTheme = theme
    }
  }
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
    right: 320px;
    top: 100px;
  }
  @media screen and (max-width: 768px) {
    .theme {
      flex-direction: column;
      flex-flow: column-reverse;
      height: auto;
      padding: 150px 30px 300px;
    }
    .theme img.bg-image {
      left: 0;
      right: 0;
      top: auto;
      bottom: 60px;
      margin: auto;
    }
  }
  .theme-list {
    padding: 150px 50px 0 50px;
    flex: 1;
    color: #666;
  }
  .theme-list h5 {
    text-align: center;
    font-size: 26px;
    font-weight: 600;
  }
  .light-themes,
  .dark-themes {
    margin-top: 50px;
  }
  .light-themes ul,
  .dark-themes ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
  .theme-list li {
    width: 160px;
    height: 40px;
    padding: 5px 8px 5px 30px;
    margin-right: 20px;
    list-style: none;
    text-align: center;
    position: relative;
    line-height: 30px;
    cursor: pointer;
    border-radius: 5px;
    user-select: none;
  }
  .theme-list li.active {
    background: linear-gradient(30deg, #efefef, rgba(245, 245, 245, .2));
    color: var(--themeColor);
  }
  .theme-list li > span:first-of-type {
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
    position: absolute;
    left: 5px;
    top: 10px;
  }
  .theme-list li.active > span:first-of-type::before {
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    left: 5px;
    width: 8px;
    height: 4px;
    border: 2px solid #fff;
    border-top: transparent;
    border-right: transparent;
    transform: rotate(-45deg);
  }
  @media screen and (max-width: 768px) {
    .theme-list {
      margin-bottom: 60px;
      padding: 0;
    }
    .theme-list h5 {
      font-size: 20px;
    }
    .light-themes {
      margin-top: 0;
    }
    .dark-themes {
      margin-top: 60px;
    }
    .theme-list li {
      width: 160px;
      height: 40px;
      padding: 5px 8px 5px 30px;
      margin-right: 10px;
    }
    .theme-list li > span:first-of-type {
      width: 18px;
      height: 18px;
    }
    .theme-list li > span {
      font-size: 12px;
    }
    .theme-list li.active > span:first-of-type::before {
      top: 6px;
      width: 6px;
      height: 3px;
    }
  }
</style>


