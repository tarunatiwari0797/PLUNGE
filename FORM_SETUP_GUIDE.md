# FORM SETUP GUIDE

Complete guide for setting up form submission on the PLUNGE E-Commerce Website.

---

## Overview

The website has two forms that need backend integration:

1. **Contact Form** (contact.html) - General inquiries
2. **Product Inquiry Form** (contact.html) - Wholesale/dealer/partnership inquiries

Currently, both forms only show a JavaScript success message. This guide explains how to make them actually send emails.

---

## Option 1: FormSubmit (Recommended for Ease)

**Website:** https://formsubmit.co/

### How It Works
- No backend code required
- Simply change the form action to your email address
- Free tier: 250 submissions/month

### Setup Steps
1. Go to formsubmit.co
2. Enter your email address
3. You'll receive a confirmation email
4. Click the confirmation link
5. Add this to your form tag:

```html
<form action="https://formsubmit.co/your@email.com" method="POST">
```

### Configuration Options
```html
<input type="hidden" name="_captcha" value="true">
<input type="hidden" name="_next" value="https://yourwebsite.com/thank-you.html">
<input type="hidden" name="_subject" value="New Contact Form Submission">
<input type="hidden" name="_template" value="table">
```

### Pros
- Zero backend code
- Free tier available
- Built-in CAPTCHA
- Custom redirect after submission

### Cons
- Requires email confirmation
- Limited to 250 submissions/month on free tier
- Third-party dependency

---

## Option 2: Web3Forms (Recommended for Production)

**Website:** https://web3forms.com/

### How It Works
- Uses Web3 technology
- No backend required
- Free tier: Unlimited submissions

### Setup Steps
1. Go to web3forms.com
2. Enter your email address
3. Get your access key
4. Add this to your form:

```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```

### Configuration Options
```html
<input type="hidden" name="subject" value="New Contact Form Submission">
<input type="hidden" name="from_name" value="PLUNGE Website">
<input type="hidden" name="redirect" value="https://yourwebsite.com/thank-you.html">
```

### Pros
- Unlimited free submissions
- No backend required
- Web3 technology
- Custom redirects

### Cons
- Requires access key setup
- Third-party dependency

---

## Option 3: EmailJS (Recommended for JavaScript)

**Website:** https://www.emailjs.com/

### How It Works
- Client-side email sending
- Requires JavaScript SDK
- Free tier: 200 emails/month

### Setup Steps
1. Create account at emailjs.com
2. Add EmailJS SDK to your HTML:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

3. Initialize EmailJS:
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```

4. Send email:
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
  to_name: 'PLUNGE Team',
  from_name: document.getElementById('name').value,
  message: document.getElementById('message').value,
});
```

### Pros
- Client-side only
- No backend required
- Template system
- Good documentation

### Cons
- Limited free tier (200/month)
- Requires JavaScript
- API key exposed in client code

---

## Option 4: Formspree (Recommended for Simplicity)

**Website:** https://formspree.io/

### How It Works
- Simple form endpoint
- No backend required
- Free tier: 50 submissions/month

### Setup Steps
1. Create account at formspree.io
2. Create a new form
3. Get your form endpoint
4. Add this to your form:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Configuration Options
```html
<input type="hidden" name="_subject" value="New Contact Form Submission">
<input type="hidden" name="_next" value="https://yourwebsite.com/thank-you.html">
<input type="hidden" name="_captcha" value="true">
```

### Pros
- Very simple setup
- Free tier available
- Built-in spam protection
- Custom redirects

### Cons
- Limited free tier (50/month)
- Third-party dependency
- Requires account

---

## Option 5: Netlify Forms (Recommended for Netlify Deployment)

**Website:** https://www.netlify.com/products/forms/

### How It Works
- Works with Netlify deployment
- No backend required
- Free tier: 100 submissions/month

### Setup Steps
1. Deploy your site to Netlify
2. Add `netlify` attribute to your form:

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact">
```

### Configuration Options
```html
<input type="hidden" name="_subject" value="New Contact Form Submission">
<input type="hidden" name="_next" value="https://yourwebsite.com/thank-you.html">
```

### Pros
- Free tier available
- No backend required
- Built-in spam protection
- Works with Netlify deployment

### Cons
- Requires Netlify deployment
- Limited free tier (100/month)
- Only works with Netlify

---

## Option 6: Cloudflare Pages Forms (Recommended for Cloudflare Deployment)

**Website:** https://developers.cloudflare.com/pages/configuration/forms/

### How It Works
- Works with Cloudflare Pages deployment
- No backend required
- Free tier: Unlimited submissions

### Setup Steps
1. Deploy your site to Cloudflare Pages
2. Add `cf-turnstile` for CAPTCHA (optional):

```html
<form method="POST" enctype="multipart/form-data">
  <div class="cf-turnstile" data-sitekey="YOUR_SITE_KEY"></div>
```

### Configuration Options
```html
<input type="hidden" name="_subject" value="New Contact Form Submission">
<input type="hidden" name="_redirect" value="https://yourwebsite.com/thank-you.html">
```

### Pros
- Free unlimited submissions
- No backend required
- Built-in spam protection
- Works with Cloudflare Pages

### Cons
- Requires Cloudflare Pages deployment
- Limited configuration options

---

## Option 7: Free SMTP (Recommended for Full Control)

### Gmail SMTP
**Setup:**
1. Enable 2-Factor Authentication on Gmail
2. Create App Password
3. Use SMTP settings:
   - Host: smtp.gmail.com
   - Port: 587
   - Username: your-email@gmail.com
   - Password: your-app-password

### Brevo (formerly Sendinblue)
**Website:** https://www.brevo.com/
**Free Tier:** 300 emails/day

**Setup:**
1. Create account at brevo.com
2. Get SMTP credentials
3. Use SMTP settings:
   - Host: smtp-relay.brevo.com
   - Port: 587
   - Username: your-email@example.com
   - Password: your-smtp-key

### SendGrid
**Website:** https://sendgrid.com/
**Free Tier:** 100 emails/day

**Setup:**
1. Create account at sendgrid.com
2. Create API key
3. Use SMTP settings:
   - Host: smtp.sendgrid.net
   - Port: 587
   - Username:apikey
   - Password:your-api-key

### Resend
**Website:** https://resend.com/
**Free Tier:** 100 emails/day

**Setup:**
1. Create account at resend.com
2. Create API key
3. Use API instead of SMTP (recommended)

### Mailgun
**Website:** https://www.mailgun.com/
**Free Tier:** 5,000 emails/month (first 3 months)

**Setup:**
1. Create account at mailgun.com
2. Get SMTP credentials
3. Use SMTP settings:
   - Host: smtp.mailgun.org
   - Port: 587
   - Username: postmaster@your-domain.mailgun.org
   - Password: your-smtp-password

---

## Comparison Table

| Service | Free Tier | Setup Difficulty | Backend Required | Best For |
|---------|-----------|------------------|------------------|----------|
| FormSubmit | 250/month | Easy | No | Quick setup |
| Web3Forms | Unlimited | Easy | No | Production |
| EmailJS | 200/month | Medium | No | JavaScript apps |
| Formspree | 50/month | Easy | No | Simple forms |
| Netlify Forms | 100/month | Easy | No | Netlify sites |
| Cloudflare Forms | Unlimited | Easy | No | Cloudflare sites |
| SMTP | Varies | Hard | Yes | Full control |

---

## Recommendation

**For PLUNGE website, I recommend Web3Forms because:**

1. **Unlimited free submissions** - No monthly limits
2. **No backend required** - Works with static HTML
3. **Easy setup** - Just add access key
4. **Production-ready** - Reliable and secure
5. **Custom redirects** - Can redirect to thank-you page

### Implementation Steps

1. Go to https://web3forms.com/
2. Enter your email: info@plungefaucets.in
3. Get your access key
4. Update the forms in contact.html:

```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
  <input type="hidden" name="subject" value="New Contact Form Submission">
  <input type="hidden" name="from_name" value="PLUNGE Website">
  <input type="hidden" name="redirect" value="https://yourwebsite.com/thank-you.html">
  
  <!-- Form fields -->
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  
  <button type="submit">Submit</button>
</form>
```

5. Create a thank-you.html page for redirect
6. Test the form submission

---

## Additional Resources

- [FormSubmit Documentation](https://formsubmit.co/documentation)
- [Web3Forms Documentation](https://docs.web3forms.com/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Formspree Documentation](https://formspree.io/docs)
- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Cloudflare Pages Forms](https://developers.cloudflare.com/pages/configuration/forms/)
