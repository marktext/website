<template>
  <div class="feature">
    <h2 class="slogan" id="features">&lt; Features /&gt;</h2>
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
          <div v-html="selectedFeature.html" ref="muyaContainer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mermaid from 'mermaid'
import tableMd from 'markdown/table.md'
import diagramMd from 'markdown/diagram.md'
import inlineFormatsMd from 'markdown/inlineFormats.md'
import mathFormulaMd from 'markdown/mathFormula.md'
import codeBlockMd from 'markdown/codeBlock.md'
import markdownToHtml from '../utils/markdownToHtml.js'

const features = [{
  title: 'Table Block',
  description: 'Support GFM table block, you can remove/add rows and columns.',
  html: markdownToHtml(tableMd)
}, {
  title: 'Diagram',
  description: 'Support Flowchart, Sequence diagram, Gantt diagram, Vega chart.',
  html: markdownToHtml(diagramMd)
}, {
  title: 'Inline Formats',
  description: 'Support CommonMark and GitHub Flavored Markdown Spec.',
  html: markdownToHtml(inlineFormatsMd)
}, {
  title: 'Math Formula',
  description: 'Markdown extensions math expressions (KaTeX)',
  html: markdownToHtml(mathFormulaMd)
}, {
  title: 'Code Block',
  description: 'Support GFM code fense, highlight by prismjs.',
  html: markdownToHtml(codeBlockMd)
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
      if (feature.title === 'Diagram') {
        this.$nextTick(() => {
          this.renderMermaid()
        })
      }
    },
    renderMermaid () {
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
  .app-container {
    width: 600px;
    height: 500px;
    background: var(--editorBgColor);
    color: var(--editorColor);
    border-radius: 5px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, .3);
    overflow: hidden;
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
  .app-container article.markdown-body p img {
    width: 100%;
    border-radius: 4px;
  }
  @media screen and (max-width: 768px) {
    .app-container {
      width: 100%;
      height: 65.1vw;
    }
    .app-container .dot {
      width: 1.5625vw;
      height: 1.5625vw;
      top: 1.3vw;
    }
    .dot.red {
      left: 1.3vw;
    }

    .dot.orange {
      background: rgb(246, 193, 80);
      left: 4.166vw;
    }

    .dot.green {
      background: rgb(100, 202, 87);
      left: 7.031vw;
    }

    .app-header {
      height: 4.166vw;
      font-size: 1.5625vw;
      line-height: 4.166vw;
    }
    .markdown-body h4 {
      font-size: 3.125vw;
    }
    article.markdown-body {
      font-size: 1.8229vw;
    }
    article.markdown-body p,
    article.markdown-body span,
    article.markdown-body code,
    article.markdown-body table {
      font-size: 1.8229vw;
    }
    article.markdown-body table tr th {
      padding: 0.78125vw 1.6927vw;
    }
  }
</style>

<style scoped>
  .feature {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: rgba(245, 245, 245, .6);
    background-image: url(../assets/developing_code.image.svg);
    background-repeat: no-repeat;
    background-position: 50% 100%;
    background-size: 400px 400px;
    display: flex;
    padding: 150px 100px;
    overflow: hidden;
  }
  @media screen and (max-width: 768px) {
    .feature {
      height: auto;
      flex-direction: column;
      padding: 150px 30px 400px;
    }
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
  @media screen and (max-width: 768px) {
    .feature-list {
      padding: 0;
    }
    .feature-list li {
      margin-bottom: 15px;
    }
    .feature-list .title {
      font-size: 18px;
    }
    .feature-list .description {
      font-size: 14px;
    }
    .feature-images {
      width: 100%;
      margin-right: 0;
      height: auto;
    }
  }
</style>


