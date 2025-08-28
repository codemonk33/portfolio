# Om Tiwari - Modern Interactive Portfolio

A cutting-edge, fully-functional portfolio website showcasing modern web development practices. Built with React, Framer Motion, and Tailwind CSS, featuring real email integration, analytics, security, and comprehensive mobile optimization.

![Portfolio Preview](https://tiwariom.netlify.app)

## 🌟 Live Demo

🔗 **[View Live Portfolio](https://tiwariom.netlify.app)** | 📧 **Contact: tiwariomse@gmail.com** | 📱 **+91 63947 28539**

## ✨ Features Overview

### 🎯 **Fully Functional Portfolio**
- ✅ **Real Email Integration** with EmailJS
- ✅ **Google Analytics** tracking & insights
- ✅ **Spam Protection** with reCAPTCHA v2
- ✅ **Resume Download** functionality
- ✅ **Rate Limiting** for form submissions
- ✅ **Mobile Optimization** for all devices
- ✅ **Working Contact Form** with validation
- ✅ **Social Media Integration** (GitHub, LinkedIn, LeetCode, Codeforces, CodeChef)

### 🎨 **Motion-First Design**
- **Purposeful Animations**: Every motion enhances UX clarity
- **3D Flip Cards**: Interactive experience showcase
- **Typewriter Effect**: Animated hero text reveal
- **Scroll Animations**: Intersection Observer triggers
- **Reduced Motion Support**: Accessibility-first approach
- **Smooth Transitions**: Page and section transitions

### 🚀 **Performance & Security**
- **Lighthouse Score**: 90+ across all metrics
- **Mobile Performance**: Optimized for touch devices
- **Security**: reCAPTCHA spam protection & rate limiting
- **Analytics**: Google Analytics 4 integration
- **SEO Optimized**: Meta tags, Open Graph, Schema.org
- **Accessibility**: WCAG 2.1 AA compliant

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks
- **Vite** - Fast development & build tool
- **Framer Motion** - Professional animations
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icon library

### **Integrations & Services**
- **EmailJS** - Client-side email service
- **Google reCAPTCHA v2** - Spam protection
- **Google Analytics 4** - User tracking & insights
- **Vercel/Netlify** - Deployment ready

### **Features & Utilities**
- **React Context** - Theme management
- **Intersection Observer** - Scroll animations
- **Local Storage** - Form drafts & rate limiting
- **Responsive Design** - Mobile-first approach

## 📦 Quick Start

### **Prerequisites**
- Node.js 16+ 
- npm or yarn
- Git

### **1. Clone Repository**
```bash
git clone https://github.com/codemonk33/portfolio.git
cd portfolio
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Environment Setup**
Create `.env` file in root directory:
```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Google reCAPTCHA
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key

# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### **4. Start Development**
```bash
npm run dev
```
🚀 Portfolio opens at `http://localhost:3000`

### **5. Build for Production**
```bash
npm run build
npm run preview
```

## 🎯 Complete Setup Guides

### 📧 **EmailJS Setup**
```bash
# See detailed guide
cat EMAILJS_SETUP.md
```
1. Create EmailJS account
2. Setup email service (Gmail/Outlook)
3. Create email template
4. Get service credentials
5. Update environment variables

### 🔒 **reCAPTCHA Setup**
```bash
# See detailed guide
cat RECAPTCHA_SETUP.md
```
1. Visit Google reCAPTCHA Admin
2. Create new site (v2 "I'm not a robot")
3. Add your domain
4. Get site key & secret key
5. Update configuration

### 📊 **Google Analytics Setup**
```bash
# See detailed guide
cat ANALYTICS_SETUP.md
```
1. Create Google Analytics 4 property
2. Get Measurement ID
3. Configure tracking events
4. Set up conversion goals
5. Monitor portfolio performance

## 🎨 Customization Guide

### **Personal Information**
Update your details in:
- `src/components/Hero.jsx` - Name, bio, social links
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer contact details
- `src/config/email.js` - Email configuration

### **Content Updates**

#### **Projects** (`src/components/Projects.jsx`)
```javascript
const projectsData = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Brief description",
    longDescription: "Detailed description",
    image: "project-image-url",
    techStack: ["React", "Node.js", "MongoDB"],
    features: ["Feature 1", "Feature 2"],
    github: "https://github.com/yourusername/project",
    live: "https://yourproject.com",
    category: "Full-Stack",
    status: "Completed"
  }
]
```

#### **Skills** (`src/components/Skills.jsx`)
```javascript
const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    icon: Code,
    color: 'from-blue-500 to-purple-600',
    skills: [
      { name: 'React', level: 90, projects: ['Project 1', 'Project 2'] },
      { name: 'JavaScript', level: 85, projects: ['Project 3'] }
    ]
  }
]
```

#### **Experience** (`src/components/Experience.jsx`)
```javascript
const experienceData = [
  {
    id: 1,
    role: "Your Job Title",
    company: "Company Name",
    location: "City, Country",
    duration: "Month Year - Month Year",
    type: "Internship", // or "Full-time", "Freelance"
    frontContent: {
      description: "Brief role description",
      techStack: ["Tech1", "Tech2"],
      achievements: ["Achievement 1", "Achievement 2"]
    },
    backContent: {
      responsibilities: [
        "Responsibility 1",
        "Responsibility 2"
      ],
      impact: "Impact statement"
    }
  }
]
```

### **Theme Customization** (`tailwind.config.js`)
```javascript
colors: {
  primary: {
    50: '#eff6ff',   // Light blue
    100: '#dbeafe',
    // ... customize your brand colors
    900: '#1e3a8a',  // Dark blue
  },
  accent: {
    50: '#f0f9ff',   // Light accent
    // ... accent colors
    900: '#0c4a6e',  // Dark accent
  }
}
```

## 📱 Mobile Optimization Features

### **Touch Interactions**
- **44px+ Touch Targets** - Easy tapping on mobile
- **Touch Manipulation** - Optimized touch events
- **No 300ms Delay** - Instant touch response
- **Smooth Scrolling** - Native momentum scrolling

### **Performance**
- **Viewport Height Fix** - iOS Safari compatibility
- **Reduced Shadows** - Better mobile performance
- **Optimized Animations** - Faster mobile transitions
- **Battery Efficient** - Minimal resource usage

### **Responsive Design**
```css
/* Custom breakpoints */
xs: '475px',    /* Small phones */
sm: '640px',    /* Large phones */
md: '768px',    /* Tablets */
lg: '1024px',   /* Desktop */
xl: '1280px',   /* Large desktop */
2xl: '1536px'   /* Extra large */
```

## 🎭 Motion System

### **Design Tokens**
```javascript
// Duration tokens
duration: {
  xs: 0.12,    // 120ms - Quick interactions
  sm: 0.18,    // 180ms - Hover states  
  md: 0.24,    // 240ms - Standard transitions
  lg: 0.32,    // 320ms - Page transitions
  xl: 0.48,    // 480ms - Complex animations
}

// Easing functions
easing: {
  inout: [0.65, 0, 0.35, 1],           // Smooth in-out
  spring: { stiffness: 180, damping: 20 }, // Spring physics
  easeOut: [0.25, 0.46, 0.45, 0.94],  // Natural ease out
}
```

### **Animation Variants**
```javascript
// Fade up animation
const fadeUpVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.24, ease: [0.65, 0, 0.35, 1] }
  }
}

// Stagger children animation
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

## 🚀 Advanced Features

### **Form Functionality**
- **Real-time Validation** - Instant feedback
- **Draft Saving** - Auto-save to localStorage
- **Rate Limiting** - Prevents spam submissions
- **Character Counter** - Message length tracking
- **Success/Error States** - Clear user feedback

### **Analytics Events**
```javascript
// Tracked user interactions
- Resume downloads
- Project views
- Section navigation
- Social link clicks
- Form submissions
- Contact attempts
```

### **Security Features**
- **reCAPTCHA v2** - "I'm not a robot" verification
- **Rate Limiting** - 3 submissions per 15 minutes
- **Input Sanitization** - XSS protection
- **CSRF Protection** - Secure form submissions

## 📊 Performance Metrics

### **Lighthouse Scores (Target)**
- **Performance**: 90+ 
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### **Core Web Vitals**
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── resume/
│   │   └── RESUME.pdf           # Your resume file
│   └── vite.svg
├── src/
│   ├── components/              # React components
│   │   ├── Header.jsx          # Navigation with mobile menu
│   │   ├── Hero.jsx            # Hero with typewriter effect
│   │   ├── Education.jsx       # Education timeline
│   │   ├── Experience.jsx      # 3D flip cards
│   │   ├── Skills.jsx          # Interactive skills display
│   │   ├── Projects.jsx        # Project showcase with modals
│   │   ├── Certifications.jsx  # Certifications grid
│   │   ├── Contact.jsx         # Functional contact form
│   │   ├── Footer.jsx          # Footer with links
│   │   ├── ThemeToggle.jsx     # Dark/light mode toggle
│   │   └── ScrollToTop.jsx     # Scroll to top button
│   ├── context/
│   │   └── ThemeContext.jsx    # Theme state management
│   ├── utils/
│   │   ├── motion.js           # Animation utilities
│   │   ├── analytics.js        # Google Analytics functions
│   │   ├── rateLimiter.js      # Rate limiting utility
│   │   └── mobile.js           # Mobile optimization utils
│   ├── config/
│   │   └── email.js            # EmailJS & reCAPTCHA config
│   ├── hooks/
│   │   └── useIntersectionObserver.js # Scroll animations
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles + utilities
├── docs/                       # Setup documentation
│   ├── EMAILJS_SETUP.md       # Email integration guide
│   ├── RECAPTCHA_SETUP.md     # reCAPTCHA setup guide
│   ├── ANALYTICS_SETUP.md     # Google Analytics guide
│   ├── SECURITY_GUIDE.md      # Security implementation
│   ├── FUNCTIONALITY_GUIDE.md # All features overview
│   └── HOW_TO_ADD_RESUME.md   # Resume setup guide
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js             # Vite configuration  
├── package.json               # Dependencies & scripts
└── README.md                  # This file
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Setup helpers
npm run setup:email  # EmailJS setup wizard (if implemented)
npm run setup:analytics # Analytics setup wizard (if implemented)
```

## 🎯 Deployment Options

### **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy with single command
vercel

# Or connect GitHub repo for auto-deploys
```

### **Netlify**
```bash
# Install Netlify CLI  
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### **GitHub Pages**
```bash
# Build the project
npm run build

# Deploy dist/ folder to gh-pages branch
# Use GitHub Actions for automated deployments
```

## ♿ Accessibility Features

- **Keyboard Navigation** - Full keyboard support
- **Screen Readers** - ARIA labels and semantic HTML
- **Focus Management** - Visible focus indicators
- **Color Contrast** - WCAG 2.1 AA compliant
- **Reduced Motion** - Respects user preferences
- **Skip Links** - Quick navigation for screen readers
- **Alt Text** - Descriptive image alternatives

## 🔮 Upcoming Features

- [ ] **Blog Integration** - Technical articles
- [ ] **CMS Integration** - Easy content management
- [ ] **Advanced Analytics** - Custom event tracking
- [ ] **PWA Support** - Offline functionality
- [ ] **Multi-language** - Internationalization
- [ ] **API Integration** - Dynamic content
- [ ] **Performance Dashboard** - Real-time metrics

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Framer Motion](https://www.framer.com/motion/)** - Powerful React animations
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework  
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[EmailJS](https://www.emailjs.com/)** - Client-side email service
- **[React](https://reactjs.org/)** - JavaScript library for UIs
- **[Vite](https://vitejs.dev/)** - Fast build tool

## 📞 Contact & Connect

### **Om Tiwari**
- 📧 **Email**: [tiwariomse@gmail.com](mailto:tiwariomse@gmail.com)
- 📱 **Phone**: [+91 63947 28539](tel:+916394728539)
- 🌍 **Location**: Mumbai, Maharashtra, India

### **Social & Professional**
- 💼 **LinkedIn**: [omtiwari666](https://www.linkedin.com/in/omtiwari666/)
- 💻 **GitHub**: [codemonk33](https://github.com/codemonk33)
- 🏆 **LeetCode**: [codemonk33](https://leetcode.com/u/codemonk33/)
- 🎯 **Codeforces**: [codemonk33](https://codeforces.com/profile/codemonk33)
- ⚡ **CodeChef**: [codemonk33](https://www.codechef.com/users/codemonk33)

### **Portfolio Stats**
- 🎓 **Computer Engineering Student** - Mumbai University
- 🚀 **Competitive Programming Enthusiast**
- 💡 **Problem Solver & Builder**
- 🌱 **Lifelong Learner**

---

<div align="center">

**Built with ❤️ and modern web technologies**

⭐ **Star this repo if you like it!** ⭐

![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>
