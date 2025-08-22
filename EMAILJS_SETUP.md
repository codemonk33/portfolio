# EmailJS Setup Guide for Om Tiwari's Portfolio

This guide will help you set up real email functionality for the contact form using EmailJS.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or your preferred email provider
4. Connect your Gmail account (`tiwariomse@gmail.com`)
5. Note down your **Service ID** (e.g., `service_abc1234`)

### Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```html
Subject: New Portfolio Contact: {{subject}}

Hi {{to_name}},

You have a new message from your portfolio contact form:

---
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
---

Submission Details:
- Time: {{submission_time}}
- Count: #{{submission_count}}

Reply-To: {{reply_to}}

Best regards,
Portfolio Contact Form
```

4. Set **Template Variables**:
   - `from_name`, `from_email`, `subject`, `message`
   - `to_name`, `to_email`, `reply_to`
   - `submission_time`, `submission_count`

5. Note down your **Template ID** (e.g., `template_xyz5678`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcDEF123ghiJKL`)

### Step 5: Update Configuration
1. Open `src/config/email.js`
2. Replace the placeholder values:

```javascript
export const emailConfig = {
  serviceId: 'your_actual_service_id',        // from Step 2
  templateId: 'your_actual_template_id',      // from Step 3  
  publicKey: 'your_actual_public_key',        // from Step 4
  // ... rest stays the same
}
```

### Step 6: Optional - Add reCAPTCHA
1. Go to [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
2. Create a new site with reCAPTCHA v2
3. Add your domain (localhost for development)
4. Get your **Site Key**
5. Update `recaptchaSiteKey` in the config

## 🎯 Testing

1. Start your dev server: `npm run dev`
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email (`tiwariomse@gmail.com`) for the message
5. Check browser console for any errors

## 📊 Features Included

- ✅ **Real Email Delivery** via EmailJS
- ✅ **Spam Protection** with reCAPTCHA 
- ✅ **Form Validation** with friendly error messages
- ✅ **Draft Saving** in localStorage
- ✅ **Character Counter** for message field
- ✅ **Analytics Tracking** with Google Analytics events
- ✅ **Auto-populated Recipient** (Om's info)
- ✅ **Professional Email Templates**
- ✅ **Mobile-friendly** form design
- ✅ **Accessibility** compliance

## 🔧 Advanced Configuration

### Custom Email Template
You can customize the email template in EmailJS dashboard:
- Add your branding/logo
- Change the formatting
- Add automatic responses
- Set up email filters

### Environment Variables (Optional)
Create a `.env.local` file for better security:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_key
```

### Analytics Integration
The form automatically tracks:
- Successful submissions (`form_submit` event)
- Failed submissions (`form_error` event)
- Works with Google Analytics if `gtag` is available

## 🚨 Troubleshooting

### "Email sending failed"
- Check your EmailJS service is connected
- Verify service ID, template ID, and public key
- Check browser console for specific error
- Test with EmailJS dashboard first

### reCAPTCHA not showing
- Verify your site key is correct
- Check domain is added in reCAPTCHA admin
- For localhost, use `localhost` as domain

### Emails not received
- Check spam folder
- Verify Gmail connection in EmailJS
- Test template in EmailJS dashboard
- Check EmailJS usage limits (free plan: 200 emails/month)

## 📱 Demo Mode

If you haven't set up EmailJS yet, the form will work in demo mode:
- Shows simulated success/error states
- All validation still works
- No actual emails are sent
- Perfect for development and showcasing

## 🔗 Useful Links

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Gmail SMTP Setup](https://www.emailjs.com/docs/email-services/gmail/)
- [reCAPTCHA v2 Setup](https://developers.google.com/recaptcha/docs/display)
- [React Google reCAPTCHA](https://github.com/dozoisch/react-google-recaptcha)

---

💡 **Pro Tip**: Start with the basic EmailJS setup first, then add reCAPTCHA later. The form will work perfectly without reCAPTCHA in development!