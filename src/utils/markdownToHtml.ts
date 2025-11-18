import ExportHtml from 'muya/lib/utils/exportHtml.js'

const markdownToHtml = (markdown: string): string => {
  return `<article class="markdown-body">${new ExportHtml(markdown).renderHtml()}</article>`
}

export default markdownToHtml
