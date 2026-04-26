# Wajim Hussain — Portfolio

A modern React + Tailwind CSS portfolio website with dark neon aesthetic, particle canvas background, custom cursor, and smooth scroll animations.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Navigate to project folder
cd wajim-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open http://localhost:5173 in your browser.

## 📦 Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. Deploy to Netlify, Vercel, or GitHub Pages.

## 🌐 Deploy to Netlify (Free)

1. Run `npm run build`
2. Go to https://netlify.com/drop
3. Drag the `dist/` folder
4. Get your live URL instantly!

## 🗂 Project Structure

```
wajim-portfolio/
├── src/
│   ├── components/
│   │   ├── Cursor.jsx          # Custom animated cursor
│   │   ├── ParticleCanvas.jsx  # Animated particle network
│   │   ├── Navbar.jsx          # Fixed navigation
│   │   ├── Hero.jsx            # Landing section
│   │   ├── About.jsx           # About + info card
│   │   ├── Skills.jsx          # Skill cards with bars
│   │   ├── Experience.jsx      # Timeline experience
│   │   ├── Projects.jsx        # Project showcase
│   │   ├── Education.jsx       # Education + certs
│   │   ├── Contact.jsx         # Contact section
│   │   ├── Footer.jsx          # Footer
│   │   ├── SectionHeader.jsx   # Reusable section header
│   │   └── useScrollReveal.js  # Intersection Observer hook
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind + custom styles
├── index.html
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Tech Stack

- **React 18** — Component architecture
- **Tailwind CSS 3** — Utility-first styling
- **Vite** — Lightning fast dev server
- **Canvas API** — Particle network animation
- **IntersectionObserver** — Scroll-triggered animations

## ✏️ Customization

Edit content in each component file under `src/components/`.
Update colors in `tailwind.config.js` under `theme.extend.colors`.
