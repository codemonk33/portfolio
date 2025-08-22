# Deployment Guide

## 🚀 Complete Deployment Guide for Om Tiwari Portfolio

### 📋 Pre-Deployment Checklist

#### **✅ Required Setup**
- [ ] Environment variables configured
- [ ] EmailJS service active
- [ ] reCAPTCHA keys valid
- [ ] Google Analytics property created
- [ ] Resume PDF added to `/public/resume/`
- [ ] All personal information updated
- [ ] Production build tested locally

#### **🔧 Environment Variables**
```env
# Required for production
VITE_EMAILJS_SERVICE_ID=service_1e9bs7l
VITE_EMAILJS_TEMPLATE_ID=template_m4rcqy8
VITE_EMAILJS_PUBLIC_KEY=nLNX9U4Cba8MV9Giq
VITE_RECAPTCHA_SITE_KEY=6Le2nq4rAAAAAMY0JzeTmvXB4jOPivy05mWjrtsX
VITE_GA_MEASUREMENT_ID=G-02S25N93PW
```

## 🌐 Deployment Options

### **Option 1: Vercel (Recommended)**

#### **Why Vercel?**
- ✅ **Zero-config** deployment
- ✅ **Automatic HTTPS**
- ✅ **Global CDN**
- ✅ **Perfect for React/Vite**
- ✅ **Free tier available**

#### **Step-by-Step Deployment**

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy from Local**
```bash
# From project root
vercel

# Follow prompts:
# ? Set up and deploy "~/Portfolio"? [Y/n] y
# ? Which scope do you want to deploy to? Your Account
# ? Link to existing project? [y/N] n
# ? What's your project's name? om-tiwari-portfolio
# ? In which directory is your code located? ./
```

4. **Set Environment Variables**
```bash
# Add each environment variable
vercel env add VITE_EMAILJS_SERVICE_ID
vercel env add VITE_EMAILJS_TEMPLATE_ID
vercel env add VITE_EMAILJS_PUBLIC_KEY
vercel env add VITE_RECAPTCHA_SITE_KEY
vercel env add VITE_GA_MEASUREMENT_ID
```

5. **Deploy Production**
```bash
vercel --prod
```

#### **GitHub Integration (Recommended)**
1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Connect GitHub repo
4. Add environment variables in settings
5. Auto-deploy on every push

### **Option 2: Netlify**

#### **Manual Deployment**

1. **Build Project**
```bash
npm run build
```

2. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

3. **Login to Netlify**
```bash
netlify login
```

4. **Deploy**
```bash
netlify deploy --prod --dir=dist
```

#### **Git-based Deployment**
1. **Create `netlify.toml`**
```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. **Connect Repository**
- Go to Netlify dashboard
- Click "New site from Git"
- Choose your repository
- Add environment variables in site settings

### **Option 3: GitHub Pages**

#### **Setup GitHub Actions**

1. **Create `.github/workflows/deploy.yml`**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      env:
        VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
        VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
        VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}
        VITE_RECAPTCHA_SITE_KEY: ${{ secrets.VITE_RECAPTCHA_SITE_KEY }}
        VITE_GA_MEASUREMENT_ID: ${{ secrets.VITE_GA_MEASUREMENT_ID }}
        
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. **Configure Repository**
- Add secrets in repository settings
- Enable GitHub Pages
- Set source to `gh-pages` branch

### **Option 4: Custom Server**

#### **Using PM2 & Nginx**

1. **Build Project**
```bash
npm run build
```

2. **Serve with PM2**
```bash
npm install -g pm2 serve
pm2 serve dist 3000 --spa
pm2 startup
pm2 save
```

3. **Nginx Configuration**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔧 Post-Deployment Configuration

### **1. Domain Setup**

#### **Custom Domain (Vercel)**
```bash
vercel domains add yourdomain.com
```

#### **DNS Configuration**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

### **2. SSL Certificate**
- **Vercel/Netlify**: Automatic SSL
- **Custom Server**: Use Let's Encrypt

### **3. Analytics Verification**
1. Deploy and test live site
2. Verify Google Analytics tracking
3. Test email form functionality
4. Check reCAPTCHA on production domain

### **4. Performance Optimization**

#### **Vercel Settings**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options", 
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## 🐛 Troubleshooting

### **Common Issues**

#### **Environment Variables Not Working**
```bash
# Check if variables are set
vercel env ls

# Pull environment to local
vercel env pull .env.local
```

#### **Build Failures**
```bash
# Test build locally first
npm run build

# Check build logs in deployment dashboard
# Common fixes:
# - Update Node.js version
# - Clear build cache
# - Check environment variables
```

#### **Email Form Not Working**
- Verify EmailJS service is active
- Check reCAPTCHA site key for correct domain
- Test in incognito mode
- Check browser console for errors

#### **Analytics Not Tracking**
- Verify measurement ID format: `G-XXXXXXXXXX`
- Check if ad blockers are interfering
- Test in Google Analytics Real-time reports

## 📊 Monitoring & Maintenance

### **Performance Monitoring**
- **Vercel Analytics**: Built-in performance insights
- **Google PageSpeed Insights**: Core Web Vitals
- **Lighthouse CI**: Automated performance testing

### **Uptime Monitoring**
- **UptimeRobot**: Free uptime monitoring
- **Pingdom**: Advanced monitoring
- **StatusCake**: Multi-location testing

### **Error Tracking**
- **Sentry**: Real-time error tracking
- **LogRocket**: Session replay
- **Google Analytics**: Enhanced ecommerce events

## 🔄 Continuous Deployment

### **Automated Workflow**
1. **Code Push** → GitHub repository
2. **Build Trigger** → Vercel/Netlify detects changes
3. **Build Process** → Install dependencies, run build
4. **Deploy** → Serve from global CDN
5. **Invalidate Cache** → Fresh content globally
6. **Notify** → Slack/email notifications

### **Deployment Best Practices**
- ✅ Test locally before pushing
- ✅ Use staging environment for major changes
- ✅ Monitor deployment logs
- ✅ Have rollback plan ready
- ✅ Update documentation with changes

---

## 🎯 Quick Deploy Commands

```bash
# Vercel
vercel --prod

# Netlify  
netlify deploy --prod --dir=dist

# GitHub Pages (via Actions)
git push origin main

# Manual build
npm run build && npm run preview
```

**Your portfolio is now ready for production deployment! 🚀**