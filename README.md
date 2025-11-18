# MarkText Website

[![Built with React](https://img.shields.io/badge/React-brightgreen?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-purple?logo=vite&logoColor=white)](https://vitejs.dev/)

The official website for [MarkText](https://github.com/marktext/marktext) - A simple and elegant markdown editor.

## ✨ Features

- 🚀 **Modern Stack**: Built with React 18 + TypeScript + Vite
- 📝 **Live Preview**: Interactive markdown editor with real-time rendering
- 🎨 **Multiple Themes**: Support for Dark, Graphite, Material Dark, One Dark, and Ulysses themes
- 📊 **Diagram Support**: Mermaid diagrams integration for flowcharts, sequence diagrams, and more
- 🧮 **Math Rendering**: KaTeX support for mathematical formulas
- 💅 **Syntax Highlighting**: Prism.js integration for code blocks
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: >= 16.0.0 (recommended: LTS version)
- **pnpm**: >= 8.0.0 (recommended package manager)

To install pnpm globally:

```bash
npm install -g pnpm
```

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/marktext/website.git
cd website
```

2. Install dependencies:

```bash
pnpm install
```

### Development

Start the development server with hot-reload:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Building for Production

Build the application for production:

```bash
pnpm build
```

The optimized files will be generated in the `build/` directory.

### Preview Production Build

Preview the production build locally:

```bash
pnpm preview
```

### Code Quality

Run TypeScript type checking:

```bash
pnpm type-check
```

Run ESLint to check code quality:

```bash
pnpm lint
```

## 📁 Project Structure

```
website/
├── src/
│   ├── assets/          # Static assets (images, SVGs)
│   │   └── sponsor/     # Sponsor logos
│   ├── components/      # React components
│   │   ├── Feature.tsx  # Main feature showcase with markdown preview
│   │   ├── Footer.tsx   # Website footer
│   │   ├── Sponsor.tsx  # Sponsors section
│   │   ├── Theme.tsx    # Theme switcher
│   │   └── TitleBar.tsx # Navigation bar
│   ├── markdowns/       # Markdown demo files
│   ├── muya/            # Muya editor library
│   ├── themes/          # Theme CSS files
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   │   ├── markdownToHtml.ts  # Markdown to HTML converter
│   │   ├── scrollTo.ts        # Smooth scrolling utilities
│   │   ├── theme.ts           # Theme management
│   │   └── themeColor.ts      # Theme color definitions
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Application entry point
│   └── app.global.css   # Global styles
├── public/              # Public static files
├── build/               # Production build output (generated)
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## 🛠️ Tech Stack

### Core

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server

### Libraries

- **Mermaid** - Diagram and flowchart rendering
- **KaTeX** - Math typesetting
- **Prism.js** - Syntax highlighting
- **DOMPurify** - HTML sanitization
- **Axios** - HTTP client
- **GitHub Markdown CSS** - Markdown styling

### Development Tools

- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite Plugin SVGR** - SVG to React component conversion

## 🎨 Themes

The website supports multiple editor themes:

- **Cadmium Light** (Default)
- **Dark** - Dark theme with high contrast
- **Graphite** - Elegant dark gray theme
- **Material Dark** - Material Design inspired dark theme
- **One Dark** - Atom One Dark theme
- **Ulysses** - Minimalist theme inspired by Ulysses app

## 📝 Markdown Features

The editor preview supports:

- ✅ **CommonMark** and **GitHub Flavored Markdown**
- ✅ Task lists with checkboxes
- ✅ Tables with alignment
- ✅ Code blocks with syntax highlighting
- ✅ Math equations (inline and block)
- ✅ Mermaid diagrams
- ✅ HTML sanitization for security
- ✅ Auto-linking URLs
- ✅ Emoji support

## 🔧 Configuration

### Vite Configuration

The `vite.config.js` includes:

- Custom markdown plugin for `.md` file imports
- SVGR plugin for SVG component generation
- Optimized build settings

### TypeScript Configuration

Two TypeScript configs are used:

- `tsconfig.json` - App source code configuration
- `tsconfig.node.json` - Build tools configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Main Project**: [MarkText Editor](https://github.com/marktext/marktext)
- **Website**: [https://marktext.me](https://marktext.me)
- **Documentation**: [MarkText Docs](https://github.com/marktext/marktext/tree/develop/docs)

## 💖 Sponsors

Special thanks to all our sponsors for supporting the MarkText project!

---

Made with ❤️ by the MarkText Team

