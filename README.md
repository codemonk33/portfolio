# Om Tiwari - Modern Interactive Portfolio

A cutting-edge, fully-functional portfolio website showcasing modern web development practices. Built with React, Framer Motion, and Tailwind CSS, featuring real email integration, analytics, security, and comprehensive mobile optimization.



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
