# Contributing Guidelines

## 🤝 Contributing to Om Tiwari Portfolio

Thank you for your interest in contributing to this portfolio project! This document provides guidelines for contributing to the codebase.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contribution Types](#contribution-types)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)

## 🤝 Code of Conduct

### **Our Pledge**
We are committed to providing a welcoming and inspiring community for all.

### **Expected Behavior**
- ✅ Be respectful and inclusive
- ✅ Focus on constructive feedback
- ✅ Accept responsibility for mistakes
- ✅ Show empathy towards other contributors

### **Unacceptable Behavior**
- ❌ Harassment or discriminatory language
- ❌ Personal attacks or trolling
- ❌ Spam or irrelevant content
- ❌ Publishing private information

## 🚀 Getting Started

### **Ways to Contribute**
1. **Bug Reports** - Found an issue? Let us know!
2. **Feature Requests** - Have an idea? Share it!
3. **Documentation** - Help improve guides and docs
4. **Code Contributions** - Fix bugs or add features
5. **Design Improvements** - Enhance UI/UX
6. **Performance Optimization** - Make it faster!

### **Before Contributing**
- Check existing issues and pull requests
- Read through the documentation
- Test the current functionality
- Understand the project structure

## 🛠️ Development Setup

### **Prerequisites**
```bash
# Required versions
Node.js >= 16.0.0
npm >= 8.0.0
Git >= 2.20.0
```

### **Setup Steps**

1. **Fork & Clone**
```bash
# Fork the repository on GitHub
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

2. **Install Dependencies**
```bash
npm install
```

3. **Environment Setup**
```bash
# Copy environment template
cp .env.example .env.local

# Add your own API keys for testing
VITE_EMAILJS_SERVICE_ID=your_test_service_id
VITE_EMAILJS_TEMPLATE_ID=your_test_template_id
VITE_EMAILJS_PUBLIC_KEY=your_test_public_key
VITE_RECAPTCHA_SITE_KEY=your_test_recaptcha_key
```

4. **Start Development Server**
```bash
npm run dev
```

5. **Create Feature Branch**
```bash
git checkout -b feature/your-feature-name
```

## 🎯 Contribution Types

### **🐛 Bug Reports**

#### **Template**
```markdown
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment**
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 96]
- Device: [e.g. iPhone 12]
```

### **✨ Feature Requests**

#### **Template**
```markdown
**Feature Description**
Clear description of the feature.

**Problem it Solves**
What problem does this feature address?

**Proposed Solution**
How should this feature work?

**Alternatives Considered**
Other solutions you've considered.

**Additional Context**
Any other context or screenshots.
```

### **📝 Documentation**

#### **Areas for Improvement**
- Setup guides clarity
- Code comments
- API documentation
- Troubleshooting guides
- Performance tips

### **💻 Code Contributions**

#### **Focus Areas**
- Performance optimizations
- Accessibility improvements
- Mobile responsiveness
- Security enhancements
- Animation refinements
- Component reusability

## 🔄 Pull Request Process

### **1. Pre-submission Checklist**
- [ ] Code follows project standards
- [ ] All tests pass locally
- [ ] Documentation updated if needed
- [ ] No console errors or warnings
- [ ] Mobile responsiveness tested
- [ ] Accessibility features work
- [ ] Performance impact considered

### **2. Branch Naming**
```bash
# Feature branches
feature/add-dark-mode
feature/improve-animations

# Bug fixes
bugfix/contact-form-validation
bugfix/mobile-menu-close

# Documentation
docs/update-setup-guide
docs/add-deployment-info

# Performance
perf/optimize-images
perf/reduce-bundle-size
```

### **3. Commit Messages**
```bash
# Format: type(scope): description

# Examples
feat(contact): add email validation
fix(mobile): resolve menu overlay issue
docs(readme): update installation steps
style(hero): improve button animations
perf(images): optimize loading performance
refactor(utils): simplify motion utilities
```

### **4. Pull Request Template**
```markdown
## 📝 Description
Brief description of changes made.

## 🎯 Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Refactoring

## 🧪 Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested in different browsers
- [ ] All existing tests pass

## 📱 Mobile Testing
- [ ] iPhone Safari
- [ ] Android Chrome
- [ ] Responsive design intact

## ♿ Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast maintained
- [ ] Focus indicators visible

## 🚀 Performance
- [ ] No performance regression
- [ ] Bundle size impact minimal
- [ ] Images optimized
- [ ] Animations smooth

## 📖 Documentation
- [ ] Code is well commented
- [ ] README updated if needed
- [ ] API docs updated if needed

## 📸 Screenshots
Include screenshots for UI changes.
```

## 📏 Coding Standards

### **JavaScript/React**
```javascript
// Use modern ES6+ syntax
const MyComponent = () => {
  const [state, setState] = useState(initialValue)
  
  // Prefer const over let, let over var
  const handleClick = useCallback(() => {
    setState(newValue)
  }, [])
  
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
    >
      {/* JSX content */}
    </motion.div>
  )
}

export default MyComponent
```

### **CSS/Tailwind**
```javascript
// Prefer Tailwind utility classes
<div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">

// Custom CSS only when necessary
.custom-animation {
  @apply transition-all duration-300 ease-in-out;
}
```

### **File Structure**
```
src/
├── components/
│   ├── ComponentName.jsx      # PascalCase for components
│   └── index.js              # Barrel exports
├── utils/
│   ├── utilityName.js        # camelCase for utilities
│   └── constants.js          # UPPER_CASE for constants
├── hooks/
│   └── useCustomHook.js      # camelCase starting with 'use'
└── context/
    └── ThemeContext.jsx      # PascalCase for contexts
```

### **Naming Conventions**
- **Components**: PascalCase (`MyComponent`)
- **Functions**: camelCase (`handleSubmit`)
- **Variables**: camelCase (`isVisible`)
- **Constants**: UPPER_CASE (`API_BASE_URL`)
- **Files**: Match component/function name

## 🧪 Testing Guidelines

### **Manual Testing Checklist**

#### **Desktop Testing**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

#### **Mobile Testing**
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Responsive breakpoints: 320px, 768px, 1024px, 1920px

#### **Functionality Testing**
- [ ] Contact form submission
- [ ] Email validation
- [ ] reCAPTCHA verification
- [ ] Resume download
- [ ] Theme toggle
- [ ] Navigation links
- [ ] Project modals
- [ ] Animation performance

#### **Accessibility Testing**
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Color contrast ratios
- [ ] Focus indicators
- [ ] Alt text for images

### **Performance Testing**
```bash
# Build and analyze bundle
npm run build
npm run preview

# Check bundle size
npx vite-bundle-analyzer dist

# Lighthouse audit
npx lighthouse http://localhost:4173 --view
```

## 🎨 Design Guidelines

### **Animation Principles**
- **Purposeful**: Every animation serves a function
- **Consistent**: Use established motion tokens
- **Performant**: Prefer transforms over layout changes
- **Accessible**: Respect `prefers-reduced-motion`

### **Color Usage**
```javascript
// Use design system colors
const colors = {
  primary: 'blue-600',    // Main brand color
  accent: 'blue-400',     // Accent highlights
  success: 'green-500',   // Success states
  error: 'red-500',       // Error states
  warning: 'yellow-500'   // Warning states
}
```

### **Typography**
- **Hierarchy**: Use semantic heading levels
- **Readability**: Maintain proper contrast ratios
- **Responsive**: Scale appropriately on mobile

## 🔍 Code Review Criteria

### **Code Quality**
- ✅ Clean, readable code
- ✅ Proper error handling
- ✅ Performance optimized
- ✅ Security conscious
- ✅ Well documented

### **User Experience**
- ✅ Intuitive interactions
- ✅ Smooth animations
- ✅ Fast loading times
- ✅ Mobile-friendly
- ✅ Accessible to all users

### **Technical Standards**
- ✅ Follows project conventions
- ✅ No console errors
- ✅ Minimal bundle impact
- ✅ Browser compatibility
- ✅ Responsive design

## 📞 Getting Help

### **Community Support**
- **GitHub Issues**: Technical questions
- **GitHub Discussions**: General questions
- **Email**: tiwariomse@gmail.com

### **Resources**
- [React Documentation](https://reactjs.org/docs/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

## 🙏 Recognition

Contributors will be recognized in:
- **README.md** contributors section
- **GitHub** contributor graphs
- **Release notes** for significant contributions

Thank you for contributing to making this portfolio better! 🚀

---

**Happy Coding! 💻✨**