import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { readFileSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 处理 markdown 文件的插件
const markdownPlugin = () => ({
  name: 'vite-plugin-markdown',
  transform(code, id) {
    if (id.endsWith('.md')) {
      // 读取 markdown 文件内容并作为字符串导出
      const content = readFileSync(id, 'utf-8')
      return {
        code: `export default ${JSON.stringify(content)}`,
        map: null
      }
    }
  }
})

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    markdownPlugin(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'assets': resolve(__dirname, './src/assets'),
      'markdown': resolve(__dirname, './src/markdowns'),
      'themes': resolve(__dirname, './src/themes'),
      'muya': resolve(__dirname, './src/muya')
    },
  },
  server: {
    port: 8080,
    open: true,
  },
  build: {
    outDir: 'build',
  },
  assetsInclude: ['**/*.md']
})
