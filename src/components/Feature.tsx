import React, { useState, useRef, useEffect } from 'react'
import mermaid from 'mermaid'
import tableMd from '../markdowns/table.md'
import diagramMd from '../markdowns/diagram.md'
import inlineFormatsMd from '../markdowns/inlineFormats.md'
import mathFormulaMd from '../markdowns/mathFormula.md'
import codeBlockMd from '../markdowns/codeBlock.md'
import markdownToHtml from '../utils/markdownToHtml.js'
import 'katex/dist/katex.min.css'
import './Feature.css'

interface FeatureItem {
  title: string
  description: string
  markdown: string
}

const features: FeatureItem[] = [
  {
    title: 'Table Block',
    description: 'Support GFM table block, you can remove/add rows and columns.',
    markdown: tableMd
  },
  {
    title: 'Diagram',
    description: 'Support Flowchart, Sequence diagram, Gantt diagram, Vega chart.',
    markdown: diagramMd
  },
  {
    title: 'Inline Formats',
    description: 'Support CommonMark and GitHub Flavored Markdown Spec.',
    markdown: inlineFormatsMd
  },
  {
    title: 'Math Formula',
    description: 'Markdown extensions math expressions (KaTeX)',
    markdown: mathFormulaMd
  },
  {
    title: 'Code Block',
    description: 'Support GFM code fense, highlight by prismjs.',
    markdown: codeBlockMd
  }
]

const Feature: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem>(features[0])
  const [htmlContent, setHtmlContent] = useState<string>('')
  const muyaContainerRef = useRef<HTMLDivElement>(null)

  // 初始化 mermaid 配置
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default'
    })
  }, [])

  // 延迟生成HTML，避免在模块加载时出错
  const getHtml = (markdown: string) => {
    try {
      return markdownToHtml(markdown)
    } catch (error) {
      console.error('Error generating HTML:', error)
      return '<p>Error rendering content</p>'
    }
  }

  const renderMermaid = () => {
    if (!muyaContainerRef.current) return
    
    const codes = muyaContainerRef.current.querySelectorAll('code.language-mermaid')
    if (codes.length === 0) return
    
    codes.forEach((code) => {
      const preEle = code.parentNode as HTMLElement
      const mermaidContainer = document.createElement('div')
      mermaidContainer.innerHTML = code.innerHTML
      mermaidContainer.classList.add('mermaid')
      preEle.replaceWith(mermaidContainer)
    })
    
    // 使用 mermaid.run() 渲染图表
    const mermaidDivs = muyaContainerRef.current.querySelectorAll('div.mermaid')
    if (mermaidDivs.length > 0) {
      mermaid.run({ nodes: Array.from(mermaidDivs) as HTMLElement[] })
    }
  }

  // 当选中的 feature 改变时，更新 HTML 内容
  useEffect(() => {
    const html = getHtml(selectedFeature.markdown)
    setHtmlContent(html)
    
    // 如果是 Diagram，需要在 DOM 更新后初始化 mermaid
    if (selectedFeature.title === 'Diagram') {
      setTimeout(() => {
        renderMermaid()
      }, 100)
    }
  }, [selectedFeature])

  const handleSelect = (feature: FeatureItem) => {
    setSelectedFeature(feature)
  }

  return (
    <div className="feature">
      <h2 className="slogan" id="features">&lt; Features /&gt;</h2>
      <div className="feature-list">
        <ul>
          {features.map((feature) => (
            <li
              key={feature.title}
              onClick={() => handleSelect(feature)}
              className={feature.title === selectedFeature.title ? 'active' : ''}
            >
              <div className="title">{feature.title}</div>
              <div className="description">{feature.description}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="feature-images">
        <div className="image-list">
          <div className="app-container">
            <div className="app-header">
              <span className="dot red"></span>
              <span className="dot orange"></span>
              <span className="dot green"></span>
              <span className="feature-name">{selectedFeature.title}</span>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              ref={muyaContainerRef}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
