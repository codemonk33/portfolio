# Motion System Documentation

## Overview

This document outlines the comprehensive motion system used in Om Tiwari's portfolio. The system is designed to provide purposeful, accessible, and performant animations that enhance user experience without compromising functionality.

## 🎯 Core Principles

1. **Purposeful Motion**: Every animation serves a functional purpose
2. **Accessibility First**: Respects `prefers-reduced-motion` preferences
3. **Performance Optimized**: Uses GPU-accelerated transforms only
4. **Consistent Timing**: Standardized durations and easing across components
5. **Progressive Enhancement**: Core functionality works without animations

## ⏱️ Timing System

### Duration Tokens

```javascript
duration: {
  xs: 0.12,    // 120ms - Quick micro-interactions
  sm: 0.18,    // 180ms - Hover states, small transitions
  md: 0.24,    // 240ms - Standard page transitions
  lg: 0.32,    // 320ms - Complex animations, page loads
  xl: 0.48,    // 480ms - Hero animations, major transitions
}
```

**Usage Guidelines:**
- **xs**: Button taps, icon micro-animations
- **sm**: Hover effects, focus states
- **md**: Component enter/exit, standard transitions
- **lg**: Page transitions, modal animations
- **xl**: Hero text reveals, major section animations

### Easing Functions

```javascript
easing: {
  inout: [0.65, 0, 0.35, 1],     // inout-cubic - Standard transitions
  spring: {                        // Spring physics - Interactive elements
    type: "spring",
    stiffness: 180,
    damping: 20,
  },
  easeOut: [0.25, 0.46, 0.45, 0.94], // easeOutQuart - Enter animations
  easeIn: [0.55, 0.055, 0.675, 0.19], // easeInCubic - Exit animations
}
```

**When to Use:**
- **inout**: Standard UI transitions, form interactions
- **spring**: Buttons, interactive cards, hover effects
- **easeOut**: Elements entering the viewport
- **easeIn**: Elements leaving the viewport

## 📏 Distance System

### Motion Distances

```javascript
distance: {
  fadeUp: 16,      // Standard fade-up distance
  slideUp: 8,      // Subtle slide-up for micro-interactions
  slide: 24,       // Horizontal slide for navigation
  scale: 0.98,     // Scale down for modals, focus states
}
```

**Usage Guidelines:**
- **fadeUp**: Main content sections, cards
- **slideUp**: Subtle text animations, form elements
- **slide**: Navigation items, side panels
- **scale**: Interactive feedback, focus states

### Stagger Delays

```javascript
stagger: {
  xs: 0.06,    // 60ms - Quick sequential animations
  sm: 0.08,    // 80ms - Standard staggered content
  md: 0.1,     // 100ms - List items, grid elements
}
```

**When to Use:**
- **xs**: Quick icon sequences, micro-interactions
- **sm**: Navigation items, button groups
- **md**: Content lists, skill bars, project grids

## 🎭 Animation Variants

### Standard Variants

#### Fade Up
```javascript
const fadeUpVariants = {
  hidden: { 
    opacity: 0, 
    y: motionTokens.distance.fadeUp 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: motionTokens.duration.md,
      ease: motionTokens.easing.inout,
    }
  }
}
```

#### Slide Up
```javascript
const slideUpVariants = {
  hidden: { 
    opacity: 0, 
    y: motionTokens.distance.slideUp 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: motionTokens.duration.sm,
      ease: motionTokens.easing.inout,
    }
  }
}
```

#### Scale In
```javascript
const scaleInVariants = {
  hidden: { 
    opacity: 0, 
    scale: motionTokens.distance.scale 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: motionTokens.duration.md,
      ease: motionTokens.easing.easeOut,
    }
  }
}
```

### Container Variants

#### Stagger Container
```javascript
const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: motionTokens.stagger.md,
      delayChildren: 0.1,
    }
  }
}
```

**Usage:**
```javascript
<motion.div
  variants={staggerContainerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>
  {items.map(item => (
    <motion.div key={item.id} variants={fadeUpVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Interactive Variants

#### Hover Effects
```javascript
const hoverVariants = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: motionTokens.hover.scale, 
    y: motionTokens.hover.y,
    transition: {
      duration: motionTokens.duration.sm,
      ease: motionTokens.easing.easeOut,
    }
  }
}
```

#### Card Hover (3D Effect)
```javascript
const cardHoverVariants = {
  initial: { 
    scale: 1, 
    y: 0,
    rotateY: 0,
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    scale: motionTokens.tilt.scale,
    y: motionTokens.hover.y,
    rotateY: motionTokens.tilt.max,
    boxShadow: motionTokens.hover.shadow,
    transition: {
      duration: motionTokens.duration.md,
      ease: motionTokens.easing.easeOut,
    }
  }
}
```

## ♿ Accessibility & Reduced Motion

### Detection
```javascript
export const prefersReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  return false
}
```

### Reduced Motion Variants
```javascript
export const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.01, // Very fast for reduced motion
    }
  }
}
```

### Usage Pattern
```javascript
import { getMotionVariants, fadeUpVariants, reducedMotionVariants } from '../utils/motion'

<motion.div
  variants={getMotionVariants(fadeUpVariants, reducedMotionVariants)}
  initial="hidden"
  whileInView="visible"
>
  Content
</motion.div>
```

## 🚀 Performance Best Practices

### GPU-Accelerated Properties Only
✅ **Use These Properties:**
- `opacity`
- `transform` (translate, scale, rotate)
- `filter` (blur, brightness)

❌ **Avoid These Properties:**
- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `margin`, `padding`
- `background-color`

### Example Implementation
```javascript
// ✅ Good - GPU accelerated
const goodVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// ❌ Bad - Layout thrashing
const badVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto' }
}
```

### Intersection Observer Usage
```javascript
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ 
    once: true,           // Only animate once
    margin: "-100px",     // Start animation 100px before element enters
    amount: 0.3           // Animate when 30% of element is visible
  }}
  variants={fadeUpVariants}
>
  Content
</motion.div>
```

## 🎨 Component-Specific Animations

### Hero Section
```javascript
// Typewriter effect with staggered letter reveal
const typewriterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // 50ms between letters
      delayChildren: 0.5,
    }
  }
}

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
```

### Navigation
```javascript
// Staggered navigation items
const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
}

const navItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
}
```

### Project Cards
```javascript
// Hover with 3D tilt effect
const projectCardVariants = {
  initial: { scale: 1, rotateY: 0 },
  hover: { 
    scale: 1.02, 
    rotateY: 8,
    transition: { duration: 0.3 }
  }
}
```

## 🔧 Customization Guide

### Adding New Animation Types
```javascript
// In src/utils/motion.js
export const slideInVariants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: motionTokens.duration.md,
      ease: motionTokens.easing.easeOut,
    }
  }
}
```

### Custom Easing Curves
```javascript
easing: {
  // Add custom easing
  bounce: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.175, 0.885, 0.32, 1.275],
}
```

### Component-Specific Timing
```javascript
const componentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5, // Override default timing
      ease: motionTokens.easing.spring,
    }
  }
}
```

## 📱 Responsive Considerations

### Mobile Animations
```javascript
// Reduce motion intensity on mobile
const isMobile = window.innerWidth < 768

const mobileAdjustedVariants = {
  hidden: { opacity: 0, y: isMobile ? 10 : 20 },
  visible: { opacity: 1, y: 0 }
}
```

### Touch Device Optimizations
```javascript
// Disable hover effects on touch devices
const isTouchDevice = 'ontouchstart' in window

const touchAdjustedVariants = {
  hover: isTouchDevice ? {} : {
    scale: 1.05,
    y: -4
  }
}
```

## 🧪 Testing & Debugging

### Animation Debugging
```javascript
// Add debug logging
const debugVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      onStart: () => console.log('Animation started'),
      onComplete: () => console.log('Animation completed'),
    }
  }
}
```

### Performance Monitoring
```javascript
// Monitor animation performance
useEffect(() => {
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.name.includes('animation')) {
        console.log('Animation performance:', entry.duration);
      }
    });
  });
  
  observer.observe({ entryTypes: ['measure'] });
  
  return () => observer.disconnect();
}, []);
```

## 📚 Resources & References

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Web Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [CSS Animation Performance](https://developers.google.com/web/fundamentals/design-and-ux/animations)
- [Reduced Motion Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/reduced-motion.html)

## 🎯 Best Practices Summary

1. **Always respect `prefers-reduced-motion`**
2. **Use GPU-accelerated properties only**
3. **Keep animations under 500ms for optimal UX**
4. **Provide fallbacks for reduced motion users**
5. **Test animations on various devices and connection speeds**
6. **Use consistent timing and easing across components**
7. **Animate with purpose - enhance, don't distract**
8. **Optimize for 60fps performance**
9. **Consider mobile and touch device limitations**
10. **Document custom animations for team consistency**

---

This motion system ensures that every animation in the portfolio serves a purpose while maintaining accessibility and performance standards. 