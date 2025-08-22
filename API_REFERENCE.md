# API Reference Guide

## Portfolio API Endpoints & Integrations

### 📧 EmailJS Integration

#### **Service Configuration**
```javascript
// src/config/email.js
export const emailConfig = {
  serviceId: 'service_1e9bs7l',
  templateId: 'template_m4rcqy8', 
  publicKey: 'nLNX9U4Cba8MV9Giq',
  contactEmail: 'tiwariomse@gmail.com',
  contactName: 'Om Tiwari'
}
```

#### **Contact Form Submission**
```javascript
// POST request via EmailJS
const submitForm = async (formData) => {
  try {
    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        submission_time: new Date().toLocaleString()
      },
      emailConfig.publicKey
    )
    return response
  } catch (error) {
    throw new Error('Failed to send message')
  }
}
```

### 🔐 reCAPTCHA Integration

#### **Verification Process**
```javascript
// reCAPTCHA v2 validation
const handleRecaptchaChange = (token) => {
  setRecaptchaToken(token)
  // Token automatically expires after 2 minutes
}

// Form submission with reCAPTCHA
if (!recaptchaToken) {
  throw new Error('Please complete the reCAPTCHA verification')
}
```

### 📊 Google Analytics Events

#### **Tracked Events**
```javascript
// Resume download tracking
gtag('event', 'resume_download', {
  event_category: 'engagement',
  event_label: 'resume_pdf',
  value: 1
})

// Project view tracking  
gtag('event', 'project_view', {
  event_category: 'engagement',
  project_name: projectTitle,
  value: 1
})

// Section navigation
gtag('event', 'section_view', {
  event_category: 'navigation',
  section_name: sectionName
})
```

### 🛡️ Security Features

#### **Rate Limiting**
```javascript
// Rate limit: 3 submissions per 15 minutes
const rateLimitSettings = {
  maxSubmissions: 3,
  timeWindow: 15 * 60 * 1000, // 15 minutes
  cooldownPeriod: 5 * 60 * 1000 // 5 minutes
}
```

#### **Input Validation**
```javascript
// Form validation rules
const validateForm = (data) => {
  const errors = {}
  
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address'
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }
  
  return errors
}
```

### 🎭 Motion System API

#### **Animation Variants**
```javascript
// Fade up animation
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.24, ease: [0.65, 0, 0.35, 1] }
  }
}

// Stagger container
export const staggerContainerVariants = {
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

### 📱 Mobile Optimization API

#### **Device Detection**
```javascript
// Check if device is mobile
export const isMobile = () => {
  return window.innerWidth <= 768 || 
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// Optimize animations for mobile
export const getMobileAnimationConfig = () => {
  if (isMobile()) {
    return { duration: 0.2, ease: 'easeOut', reduce: true }
  }
  return { duration: 0.3, ease: 'easeOut', reduce: false }
}
```

### 🎨 Theme API

#### **Theme Management**
```javascript
// Theme context
const { isDark, toggleTheme } = useTheme()

// CSS variables for themes
:root {
  --color-primary-500: 59 130 246;
  --color-bg-primary: 255 255 255;
}

.dark {
  --color-bg-primary: 17 24 39;
}
```

## 🔗 External Service URLs

- **EmailJS Dashboard**: https://dashboard.emailjs.com/
- **Google reCAPTCHA**: https://www.google.com/recaptcha/admin
- **Google Analytics**: https://analytics.google.com/
- **Vercel Deployment**: https://vercel.com/
- **Netlify Deployment**: https://www.netlify.com/