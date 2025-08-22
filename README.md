# Om Tiwari - Motion-First Interactive Portfolio

A modern, responsive, and highly interactive portfolio website built with React, Framer Motion, and Tailwind CSS. This portfolio showcases Om Tiwari's skills, projects, and experience with purposeful motion, micro-interactions, and polished UI.

## ✨ Features

### 🎯 Motion-First Design
- **Purposeful Animations**: Every motion enhances clarity and user experience
- **Reduced Motion Support**: Respects user preferences for accessibility
- **Smooth Transitions**: Page and section transitions with shared elements
- **Micro-interactions**: Hover effects, button ripples, and interactive feedback

### 🎨 Modern UI/UX
- **Dark/Light Theme**: Animated crossfade with theme persistence
- **Responsive Design**: Optimized for all devices (≥320px)
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Performance**: Optimized for fast loading and smooth interactions

### 🚀 Interactive Components
- **Typewriter Hero**: Animated text reveal with staggered timing
- **Flip Cards**: 3D flip animations for experience showcase
- **Animated Timeline**: Education journey with scroll-triggered animations
- **Project Modals**: Interactive project showcase with image carousels
- **Skills Visualization**: Animated progress bars and circular charts
- **Contact Form**: Real-time validation with animated feedback

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/omtiwari/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The portfolio will open at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## 🎭 Motion System

### Design Tokens

#### Durations
```javascript
duration: {
  xs: 0.12,    // 120ms - Quick micro-interactions
  sm: 0.18,    // 180ms - Hover states
  md: 0.24,    // 240ms - Standard transitions
  lg: 0.32,    // 320ms - Page transitions
  xl: 0.48,    // 480ms - Complex animations
}
```

#### Easing Functions
```javascript
easing: {
  inout: [0.65, 0, 0.35, 1], // inout-cubic
  spring: { stiffness: 180, damping: 20 },
  easeOut: [0.25, 0.46, 0.45, 0.94],
  easeIn: [0.55, 0.055, 0.675, 0.19],
}
```

#### Distances
```javascript
distance: {
  fadeUp: 16,      // Standard fade-up distance
  slideUp: 8,      // Subtle slide-up
  slide: 24,       // Horizontal slide
  scale: 0.98,     // Scale down for modals
}
```

#### Stagger Delays
```javascript
stagger: {
  xs: 0.06,    // 60ms between siblings
  sm: 0.08,    // 80ms between siblings
  md: 0.1,     // 100ms between siblings
}
```

### Animation Variants

#### Fade Up
```javascript
const fadeUpVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.24, ease: [0.65, 0, 0.35, 1] }
  }
}
```

#### Stagger Container
```javascript
const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
}
```

#### Hover Effects
```javascript
const hoverVariants = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: 1.05, 
    y: -4,
    transition: { duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}
```

### Reduced Motion Support

The portfolio automatically detects and respects `prefers-reduced-motion`:

```javascript
export const prefersReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  return false
}

export const getMotionVariants = (normalVariants, reducedVariants) => {
  return prefersReducedMotion() ? reducedVariants : normalVariants
}
```

## 🎨 Customization

### Theme Colors

Modify colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... more shades
    900: '#1e3a8a',
  },
  accent: {
    50: '#f0f9ff',
    // ... accent colors
  }
}
```

### Motion Customization

Adjust motion tokens in `src/utils/motion.js`:

```javascript
export const motionTokens = {
  duration: {
    xs: 0.12,    // Adjust timing
    sm: 0.18,
    // ...
  },
  easing: {
    inout: [0.65, 0, 0.35, 1], // Custom easing
    // ...
  }
}
```

### Content Updates

#### Personal Information
Update `src/components/Hero.jsx`:
```javascript
const texts = [
  'Software Developer',
  'Computer Engineering Student',
  'Problem Solver',
  'Tech Enthusiast'
]
```

#### Projects
Modify `src/components/Projects.jsx`:
```javascript
const projectsData = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    // ... more fields
  }
]
```

#### Skills
Update `src/components/Skills.jsx`:
```javascript
const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    skills: [
      { name: 'React', level: 90, projects: ['Project 1', 'Project 2'] }
    ]
  }
]
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: ≥320px (default)
- **Tablet**: ≥768px (`md:`)
- **Desktop**: ≥1024px (`lg:`)
- **Large Desktop**: ≥1280px (`xl:`)

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: ARIA labels and semantic HTML
- **Focus Management**: Visible focus states
- **Reduced Motion**: Respects user preferences
- **Color Contrast**: WCAG 2.1 AA compliant
- **Skip Links**: Quick navigation for assistive technology

## 🚀 Performance Optimization

- **Code Splitting**: Lazy-loaded components
- **Image Optimization**: WebP support with fallbacks
- **Animation Performance**: GPU-accelerated transforms
- **Bundle Optimization**: Tree-shaking and minification
- **Lighthouse Score**: Target 90+ across all metrics

## 📊 SEO Features

- **Meta Tags**: Comprehensive meta information
- **Open Graph**: Social media optimization
- **Schema.org**: Structured data markup
- **Sitemap**: Search engine optimization
- **Performance**: Core Web Vitals optimization

## 🎯 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to GitHub Pages
```

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section with typewriter
│   ├── Education.jsx   # Education timeline
│   ├── Experience.jsx  # Experience flip cards
│   ├── Skills.jsx      # Skills visualization
│   ├── Projects.jsx    # Project showcase
│   ├── Certifications.jsx # Certifications grid
│   ├── Contact.jsx     # Contact form
│   ├── Footer.jsx      # Footer section
│   ├── ThemeToggle.jsx # Theme switcher
│   └── ScrollToTop.jsx # Scroll to top button
├── context/            # React context
│   └── ThemeContext.jsx # Theme management
├── utils/              # Utility functions
│   └── motion.js      # Motion system tokens
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Design Principles

1. **Motion with Purpose**: Every animation serves a functional purpose
2. **Progressive Enhancement**: Core functionality works without JavaScript
3. **Performance First**: Smooth 60fps animations on all devices
4. **Accessibility**: Inclusive design for all users
5. **Mobile-First**: Responsive design starting from mobile

## 🔮 Future Enhancements

- [ ] Blog integration
- [ ] CMS for content management
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Advanced animations
- [ ] Performance monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** for powerful animation capabilities
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons
- **Vite** for fast development experience

## 📞 Contact

- **Email**: om.tiwari@example.com
- **LinkedIn**: [omtiwari](https://linkedin.com/in/omtiwari)
- **GitHub**: [omtiwari](https://github.com/omtiwari)
- **Portfolio**: [omtiwari.dev](https://omtiwari.dev)

---

Built with ❤️ by Om Tiwari using modern web technologies. 