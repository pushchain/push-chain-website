# Push Chain Website 🔗

> The official website for Push Chain - the first shared-state blockchain enabling universal apps and seamless cross-chain interactions.

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fpush.org)](https://push.org)
[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-blue)](https://docusaurus.io/)
[![React](https://img.shields.io/badge/React-18+-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)](https://www.typescriptlang.org/)

## 🌟 Overview

This repository contains the complete source code for the Push Chain website, including:

- **Marketing Website**: Landing pages, features, and ecosystem information
- **Knowledge Base**: Technical documentation, tutorials, and guides
- **Developer Resources**: API docs, SDKs, and integration guides
- **Blog System**: Latest news, updates, and technical articles
- **Multilingual Support**: 14 languages with AI-powered translation automation
- **Interactive Components**: Live demos, code playgrounds, and examples
- **Translation Management**: Automated translation system with glossary support

## 📋 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [🛠️ Development](#️-development)
- [🏗️ Architecture](#️-architecture)
- [🌐 Internationalization](#-internationalization)
- [🔄 Translation Management](#-translation-management)
- [📝 Content Management](#-content-management)
- [🎨 Styling & Theming](#-styling--theming)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📚 Resources](#-resources)

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+
- **Yarn** package manager
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/push-protocol/push-website.git
cd push-website

# Install dependencies
yarn install
```

### Development Commands

```bash
# Start development server (full site)
yarn start

# Start development server (lite mode - faster, fewer blog posts)
yarn start:lite

# Translation management
yarn translations:generate          # Generate all language translations
yarn translations:generate:specific <lang>  # Target specific language (e.g., es, fr, de)
yarn translations:nuke              # Clean up auto-translations
yarn translations:help              # Show comprehensive translation help

# Build for production
yarn build

# Serve production build locally
yarn serve

# Deploy to production
yarn deploy
```

## 🛠️ Development

### Development Server

The development server supports hot reloading and provides real-time feedback:

```bash
yarn start
```

- Opens browser at `http://localhost:3000`
- Auto-reloads on file changes
- Supports live editing of React components
- Real-time translation updates

### Lite Development Mode

For faster development with large blog collections:

```bash
yarn start:lite
```

- Temporarily moves all but the 10 most recent blog posts
- Significantly faster startup time
- Automatically restores all blogs when switching back to `yarn start`
- Perfect for development work not involving blog content

### Build Process

```bash
# Production build
yarn build

# Analyze bundle size
yarn build --analyze

# Build with specific locale
yarn build --locale en
```

## 🏗️ Architecture

### Tech Stack

- **Framework**: [Docusaurus 3](https://docusaurus.io/) - Modern static site generator
- **Frontend**: React 18+ with TypeScript
- **Styling**: Styled Components + CSS Modules
- **Internationalization**: react-i18next with 14 languages and automated translation pipeline
- **Content**: MDX for documentation, Markdown for blogs
- **Animations**: GSAP for smooth interactions
- **Build**: Webpack with optimizations

### Project Structure

```
push-website/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Chain/          # Push Chain specific components
│   │   ├── ExploreCollection/ # Knowledge base grid components
│   │   └── SEO/            # SEO and meta components
│   ├── pages/              # Static pages
│   ├── pages-composition/  # Page composition components
│   ├── hooks/              # Custom React hooks
│   ├── css/                # Global styles and themes
│   └── config/             # Configuration files
├── static/
│   ├── assets/             # Images, icons, media
│   └── locales/            # Translation files
├── docs/                   # Documentation content
├── blog/                   # Blog posts
└── content/                # Knowledge base articles
```

### Key Components

- **ExploreCollection**: Flexible grid system for displaying content cards
- **ExplainerIndexList**: Table of contents and content navigation
- **ChainKnowledgeBase**: Knowledge base components with search and filtering
- **SEO Components**: Automatic meta tag generation and schema markup
- **Notification System**: Toast notifications with localization

## 🌐 Internationalization

### Supported Languages

The website supports 14 languages with full localization:

- **English** (en) - Base language
- **Chinese Simplified** (zh-CN)
- **Spanish** (es)
- **Hindi** (hi)
- **Japanese** (ja)
- **Korean** (ko)
- **Portuguese** (pt)
- **Russian** (ru)
- **Turkish** (tr)
- **French** (fr)
- **Indonesian** (id)
- **Vietnamese** (vi)
- **German** (de)
- **Arabic** (ar)

### Language Persistence

Language selection is automatically persisted using localStorage. The i18n system:

- Detects user language from localStorage first
- Falls back to browser language or English
- Saves language selection across sessions
- Supports real-time language switching

### Translation Files Structure

```
static/locales/en/
├── translation.json        # Main translations automatic script merge
└── 01-translate/           # This is where all translations are done and edited
    ├── 01-homepage.json    # Homepage content
    ├── 05-components.json  # Component strings
    └── 06-notifications.json # Notification messages
```

### Using Translations

```jsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();

  return <h1>{t('components.my-component.title')}</h1>;
};
```

## 🔄 Translation Management

The website includes a comprehensive AI-powered translation automation system:

### Quick Commands

```bash
# Generate all language translations
yarn translations:generate

# Target specific language
yarn translations:generate:specific es
yarn translations:generate:specific fr

# Clean up auto-translations and reset
yarn translations:nuke

# Show comprehensive help
yarn translations:help
```

### AI Provider Support

The translation system supports multiple AI providers:

**Windsurf/Anthropic (Default)**:

```bash
AI_PROVIDER=windsurf
REACT_APP_WINDSURF_API_KEY=your_api_key
```

**Local AI (OpenWebUI/Ollama)**:

```bash
AI_PROVIDER=local
LOCAL_AI_BASE_URL=http://localhost:11434
LOCAL_AI_MODEL=llama3.1
```

### Configuration Options

```bash
# Token and rate limiting
AI_MAX_INPUT_TOKENS=100000      # Maximum input tokens
AI_MAX_CHUNK_TOKENS=2000        # Maximum tokens per chunk
AI_RATE_LIMIT_PER_MINUTE=5      # API calls per minute
AI_REQUEST_TIMEOUT=60000        # Request timeout (ms)
```

### Translation Features

- **Automated Translation**: AI-powered translation with glossary support
- **Chunk Management**: Automatic splitting of large translation files
- **Progress Tracking**: Real-time progress with detailed console output
- **Error Handling**: Robust error handling with automatic retries
- **Missing Key Detection**: Identifies and translates missing keys
- **Extra Key Cleanup**: Removes keys not present in English source
- **Rate Limiting**: Respects API limits with automatic throttling

### Glossary System

Translation glossary is managed in `build.translation.automation.glossary.json`:

```json
{
  "Push Protocol": "keep",
  "blockchain": "transliterate",
  "wallet": "transliterate",
  "DeFi": "keep"
}
```

**Glossary Rules**:

- `"keep"`: Keep exactly as in source (brand names, technical terms)
- `"transliterate"`: Convert to local script pronunciation
- No entry: Translate naturally in context

## 📝 Content Management

### Documentation

**Location**: `/docs/`

- Use `.mdx` files for rich interactive content
- Follow numbered folder structure for organization
- Include frontmatter for metadata:

```yaml
---
title: 'Your Doc Title'
description: 'Brief description'
image: '/path/to/preview-image.png'
---
```

**Asset Organization**:

```
static/assets/docs/{product}/{category}/{article}/
```

### Blog Posts

**Location**: `/blog/`

- Folder naming: `yyyy-mm-dd-title-in-kebab-case/`
- Include `index.md` with frontmatter
- Add authors to `/blog/authors.yml`
- Use modern image formats (WebP, AVIF)

### Knowledge Base

**Location**: `/content/`

- Structured content for the knowledge base
- Supports hidden sections and dynamic TOC
- Markdown with custom components support

## 🎨 Styling & Theming

### Design System

- **Colors**: Push Chain brand palette with dark theme
- **Typography**: DM Sans and Glancyr fonts
- **Spacing**: 8px grid system
- **Breakpoints**: Mobile-first responsive design

### Styled Components

```tsx
import styled from 'styled-components';
import { device } from '@site/src/config/globals';

const StyledComponent = styled.div`
  padding: 24px;
  background: #101010;

  @media ${device.mobileL} {
    padding: 16px;
  }
`;
```

### CSS Variables

```css
:root {
  --ifm-color-primary: #e64de9;
  --ifm-color-primary-dark: #d548ec;
  --ifm-background-color: #000;
}
```

## 🚀 Deployment

### Automated Deployment

The website is automatically deployed on:

- **Production**: Push to `main` branch
- **Staging**: Push to `develop` branch
- **Preview**: Pull request previews

### Manual Deployment

```bash
# Deploy to production
yarn deploy

# Deploy with SSH
USE_SSH=true yarn deploy

# Deploy specific locale
yarn deploy --locale en
```

### Environment Variables

```bash
# .env.local
GIT_USER=your-github-username
USE_SSH=true
DEPLOYMENT_BRANCH=gh-pages

# Translation system
AI_PROVIDER=windsurf
REACT_APP_WINDSURF_API_KEY=your_api_key
AI_MAX_INPUT_TOKENS=100000
AI_MAX_CHUNK_TOKENS=2000
AI_RATE_LIMIT_PER_MINUTE=5
AI_REQUEST_TIMEOUT=60000
```

## 🤝 Contributing

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Translation Workflow

1. **Update English content** in `/static/locales/en/01-translate`
2. **Run translation automation**: `yarn translations:generate`
3. **Review generated translations** for accuracy
4. **Update glossary** if needed for consistent terminology
5. **Test language switching** and persistence
6. **Commit all translation files** together

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Enforced code quality
- **Prettier**: Consistent formatting
- **Conventional Commits**: Semantic commit messages

### Testing

```bash
# Run linting
yarn lint

# Fix linting issues
yarn lint:fix

# Type checking
yarn type-check

# Build test
yarn build
```

### Contribution Guidelines

#### Documentation

- Place assets in `/static/assets/docs/{product}/{category}/{article}/`
- Follow existing numbering and folder structure
- Use modern image formats (WebP, AVIF)
- Include live code examples where applicable
- Maintain consistency with existing documentation

#### Blog Posts

- Follow naming convention: `yyyy-mm-dd-title-in-kebab-case/`
- Include proper frontmatter and meta tags
- Add author information to `/blog/authors.yml`
- Optimize images for web

#### Website Features

- Follow component-based architecture
- Implement responsive design
- Add proper TypeScript types
- Include accessibility features
- Test across different browsers and devices

#### Translations

- Use the automated translation system for new content
- Follow glossary guidelines for consistent terminology
- Test language switching and persistence
- Ensure all new keys are properly structured
- Verify translations maintain technical accuracy

## 📚 Resources

### Documentation

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [React Documentation](https://reactjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Styled Components](https://styled-components.com/docs)

### Push Chain Resources

- [Push Chain Docs](https://push.org/docs)
- [Developer Portal](https://push.org/docs/developers)
- [API Reference](https://push.org/docs/api)
- [Community Discord](https://discord.com/invite/pushchain)

### Design Resources

- [Push Chain Brand Guidelines](https://push.org/brand)
- [Figma Design System](https://figma.com/pushchain)
- [Icon Library](https://push.org/icons)

---

## 🆘 Support

Need help? Here's how to get support:

- **Documentation Issues**: Open an issue with the `documentation` label
- **Bug Reports**: Use the bug report template
- **Feature Requests**: Use the feature request template
- **General Questions**: Join our [Discord community](https://discord.com/invite/pushchain)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by the Push Chain team**

- All webpage go in `/src/pages` section.

- All custom components go in `src/components` section.

- You can build `.mdx` markdown page as well. Follow this Docusaurus tutorial on [How to build a page](https://docusaurus.io/docs/creating-pages) for more info.

- Ensure images are of modern format (aivf, webp) and are stored under `/static/assets/website/{relevant_folder}` or for custom components under `/static/assets/src/{relevant_folder}`

- Once you are done with the article, raise a PR and a team member will review -> merge -> deploy the website with your newly added blogs.

### Useful commands

#### Convert all pngs to webp (Mac Terminal)

- Browse to that folder and run `for file in *; do cwebp -q 80 "$file" -o "${file%.*}.webp"; done`

### Useful references

https://theochu.com/docusaurus/styling/

# Credits

This website is built using [Docusaurus 2](https://docusaurus.io/). a modern static website generator.
