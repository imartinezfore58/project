# Quick Customization Guide for Martinien's Portfolio

This guide will help you customize the portfolio with your specific information and deploy it.

## 📋 Quick Start

1. **Run the development server:**
   ```bash
   cd port-folio
   npm install
   npm run dev
   ```
   Visit: `http://localhost:5175`

2. **Make changes** (files auto-reload)

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Customization Steps

### Step 1: Update Hero Section
**File:** `src/components/Hero.jsx`

Change your name, subtitle, and description:
```jsx
<h1 className="hero-title">Your Name Here</h1>
<p className="hero-subtitle">Your Title | Your Location</p>
<p className="hero-description">Your professional summary</p>
```

### Step 2: Update About Section
**File:** `src/components/About.jsx`

- Replace the school names with your schools
- Update your background story
- Add/remove or edit highlight cards

### Step 3: Customize Skills
**File:** `src/components/Skills.jsx`

Add or remove skill categories. Example:
```jsx
{
  category: 'Your Category',
  skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  icon: '🎯'  // Use any emoji as icon
}
```

### Step 4: Update Projects
**File:** `src/components/Projects.jsx`

Modify project information:
```jsx
{
  id: 1,
  title: 'Your Project Title',
  description: 'Project description here',
  tech: ['Tech1', 'Tech2'],
  icon: '🎨'
}
```

### Step 5: Add Contact Information
**File:** `src/components/Contact.jsx`

Update your contact details:
- Phone numbers
- Social media links (update href attributes)
- Add links to your social profiles

### Step 6: Update Social Links
**File:** `src/components/Footer.jsx`

Replace `#` with actual social media URLs:
```jsx
<a href="https://instagram.com/yourprofile">Instagram</a>
<a href="https://facebook.com/yourprofile">Facebook</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

## 🎨 Design Customization

### Change Color Scheme
**File:** `src/index.css`

```css
:root {
  --primary-color: #667eea;      /* Change this */
  --secondary-color: #764ba2;    /* And this */
}
```

### Change Fonts
**File:** `src/index.css`

```css
body {
  font-family: 'Your Font Name', sans-serif;
}
```

## 📱 Testing Responsiveness

- **Desktop:** View at full width
- **Tablet:** Resize browser to ~768px width
- **Mobile:** Resize browser to ~480px width or use DevTools device emulation (F12 → Toggle device toolbar)

## 🚀 Deployment Options

### Option 1: Deploy to Vercel (Easiest)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your GitHub repository
4. Click "Deploy"
5. Your site is live!

### Option 2: Deploy to Netlify
1. Build the project:
   ```bash
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live!

### Option 3: Deploy to Traditional Hosting
1. Build the project:
   ```bash
   npm run build
   ```
2. Upload the `dist` folder via FTP to your hosting provider
3. Configure server routing (most hosting providers handle this automatically)

## 📝 SEO Optimization

**File:** `index.html`

Update meta tags at the top:
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="keyword1, keyword2, keyword3">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your portfolio description">
```

## 🔐 Before Going Live

- [ ] Update all personal information
- [ ] Add your social media links
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Add your resume/CV link (if needed)
- [ ] Set up Google Analytics (optional)
- [ ] Update favicon in `public/` folder (optional)

## 📞 Help & Support

If you need help with:
- **React issues**: Visit [react.dev](https://react.dev)
- **CSS issues**: Visit [MDN Web Docs](https://developer.mozilla.org)
- **Vite issues**: Visit [vitejs.dev](https://vitejs.dev)

## 💡 Pro Tips

1. **Keep it updated** - Regularly update your projects and skills section
2. **Add images** - Consider adding project screenshots in the assets folder
3. **Contact form** - Integrate EmailJS for a working contact form
4. **Analytics** - Add Google Analytics to track visitors
5. **Dark mode** - Consider adding a dark mode toggle for better UX

## 🎉 You're Ready!

Your professional portfolio is now ready to showcase your work. Make it your own and keep it updated as you grow your career!

---

**Contact Information:**
- Phone: +250 792 650 912
- Guardian: +250 788 552 503 / +250 788 830 036

Good luck with your portfolio! 🚀
