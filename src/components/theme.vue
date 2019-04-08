<template>
  <div class="theme">
    <h2 class="slogan">{ Themes }</h2>
    <img src="../assets/notes.image.svg" alt="" class="bg-image">
    <div class="app-container">
      <div class="app-header">
        <span class="dot red"></span>
        <span class="dot orange"></span>
        <span class="dot green"></span>
        <span class="feature-name">{{currentTheme.name}}</span>
      </div>
      <div v-html="html"></div>
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
import html from './article.html'
import { addThemeStyle } from '../utils/theme.js'

import 'katex/dist/katex.min.css'

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
    this.html = html
    this.darkThemes = darkThemes
    this.lightThemes = lightThemes
    return {
      currentTheme: lightThemes[0]
    }
  },
  methods: {
    selectTheme (theme) {
      addThemeStyle(theme.label)
      this.currentTheme = theme
    }
  }
}
</script>
<style scoped>
  @import url(../themes/default.css);
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
  .app-container {
    width: 600px;
    height: 500px;
    background: var(--editorBgColor);
    color: var(--editorColor);
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
    width: 150px;
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
</style>


