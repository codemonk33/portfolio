// EmailJS Configuration
// Replace these with your actual EmailJS credentials from https://www.emailjs.com/

export const emailConfig = {
  // Get these from your EmailJS dashboard
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_1e9bs7l',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_m4rcqy8', 
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'nLNX9U4Cba8MV9Giq',
  
  // Alternative user ID (same as public key for newer EmailJS versions)
  userId: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'nLNX9U4Cba8MV9Giq',
  
  // Contact settings
  contactEmail: 'tiwariomse@gmail.com',
  contactName: 'Om Tiwari',
  
  // reCAPTCHA settings (get from https://www.google.com/recaptcha/admin)
  // Production reCAPTCHA Site Key - configured and ready
  recaptchaSiteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6Le2nq4rAAAAAMY0JzeTmvXB4jOPivy05mWjrtsX',
  
  // Rate limiting settings
  rateLimitSettings: {
    maxSubmissions: 3, // Maximum submissions per time window
    timeWindow: 15 * 60 * 1000, // 15 minutes in milliseconds
    cooldownPeriod: 5 * 60 * 1000, // 5 minutes cooldown after hitting limit
  }
}

// EmailJS Setup Instructions:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new service (Gmail recommended)
// 3. Create a new email template
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the values above or set environment variables

// Template Variables Available:
// {{from_name}} - Sender's name from the form
// {{from_email}} - Sender's email from the form  
// {{subject}} - Subject from the form
// {{message}} - Message from the form
// {{to_name}} - Recipient name (Om Tiwari)
// {{to_email}} - Recipient email (tiwariomse@gmail.com)
// {{reply_to}} - Reply-to email (sender's email)

export default emailConfig