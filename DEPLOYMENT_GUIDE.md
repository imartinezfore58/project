# Deployment Guide - Deploy Your Portfolio to the Web

Follow this guide to deploy your portfolio online for free or with minimal cost.

## 🚀 Quick Deployment Options

We'll cover three easy options:
1. **Vercel** (Recommended - Best for React/Vite projects)
2. **Netlify** (Also great, very user-friendly)
3. **GitHub Pages** (Free, but requires Git)

---

## Option 1: Deploy to Vercel ⭐ (RECOMMENDED)

### Step 1: Prepare Your Code
```bash
cd port-folio
npm run build
```

### Step 2: Create GitHub Repository (if you don't have one)
1. Go to [github.com](https://github.com)
2. Sign in or create an account
3. Click "New Repository"
4. Name it: `portfolio` or similar
5. Click "Create repository"

### Step 3: Push Your Code to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 4: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account
5. Click "Add New..." → "Project"
6. Select your `portfolio` repository
7. Click "Import"
8. Click "Deploy"
9. Wait for deployment to complete (usually 1-2 minutes)

### Step 5: Get Your URL
Your site will be available at: `https://portfolio-YOUR_USERNAME.vercel.app`

**Done! Your portfolio is live!** 🎉

---

## Option 2: Deploy to Netlify

### Step 1: Build Your Project
```bash
cd port-folio
npm run build
```

### Step 2: Create Account
1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up"
3. Choose your preferred signup method

### Step 3: Deploy
**Method A - Drag & Drop (Easiest)**
1. After login, you'll see "Drag files to deploy" area
2. Open file explorer: `port-folio/dist`
3. Select all files in the `dist` folder
4. Drag them to Netlify
5. Wait for deployment

**Method B - Git Integration**
1. Follow "Prepare Your Code" and "Push to GitHub" steps from Option 1
2. On Netlify, click "New site from Git"
3. Select GitHub
4. Choose your repository
5. Authorize
6. Click "Deploy site"

### Step 4: Get Your URL
Your site will be available at: `https://YOUR_SITE_NAME.netlify.app`

---

## Option 3: Deploy to GitHub Pages (Free)

### Step 1: Update vite.config.js
Edit `vite.config.js` and add:
```js
export default {
  plugins: [react()],
  base: '/portfolio/',  // Change 'portfolio' to your repo name
}
```

### Step 2: Update package.json
Find the `scripts` section and add:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Then install gh-pages:
```bash
npm install --save-dev gh-pages
```

### Step 3: Deploy
```bash
npm run deploy
```

### Step 4: Get Your URL
Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio`

---

## 🔗 Custom Domain (Optional but Recommended)

Once your site is deployed, you can add a custom domain:

### For Vercel:
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Click "Add Domain"
4. Enter your domain (e.g., `martinien.com`)
5. Follow the DNS configuration steps

### For Netlify:
1. In Netlify dashboard, go to your site
2. Click "Domain settings"
3. Click "Add custom domain"
4. Enter your domain
5. Follow the DNS configuration steps

### Buy a Domain:
- [Namecheap.com](https://www.namecheap.com) - Cheap domains
- [GoDaddy.com](https://www.godaddy.com) - Popular choice
- [Google Domains](https://domains.google) - Easy integration with Google services
- [Hostinger](https://www.hostinger.com) - Great for .rw domains

---

## 📝 Post-Deployment Checklist

After deploying, verify everything works:

- [ ] Site loads successfully
- [ ] All navigation links work
- [ ] Page is mobile responsive
- [ ] Images load correctly
- [ ] Social links work
- [ ] Contact info is visible
- [ ] No console errors (Press F12 to check)
- [ ] Page loads quickly
- [ ] SEO meta tags are correct (right-click → View Page Source)

---

## 🔄 Updating Your Portfolio After Deployment

### For Vercel/Netlify (Git Integration):
1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Vercel/Netlify automatically redeploys (1-2 minutes)

### For Netlify (Drag & Drop):
1. Build locally: `npm run build`
2. Open `dist` folder
3. Drag & drop the contents to Netlify again

### For GitHub Pages:
```bash
npm run deploy
```

---

## 🚨 Troubleshooting

### Site shows "Not Found"
- **Vercel/Netlify**: Make sure you built the project (`npm run build`)
- **GitHub Pages**: Check that `base` in `vite.config.js` matches your repo name

### Styles not loading
- Make sure all CSS files are imported in components
- Check that file paths are relative (e.g., `./Hero.css` not `/Hero.css`)

### Images not showing
- Check that image paths are correct in components
- Images should be in `src/assets/` folder

### Site is slow
- Check image sizes (compress if needed)
- Use browser DevTools to identify bottlenecks
- Consider lazy loading images

### Build fails
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors
- Clear cache: `npm cache clean --force`

---

## 📊 Monitor Your Site (Optional)

### Google Analytics
1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Create Account"
3. Follow the setup wizard
4. Copy your Measurement ID
5. Add to `index.html` in the `<head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-YOUR_MEASUREMENT_ID');
   </script>
   ```

### Uptime Monitoring
Services to monitor if your site is online:
- [Uptimerobot.com](https://uptimerobot.com) (Free)
- [Statuspage.io](https://statuspage.io)

---

## 💰 Cost Summary

| Option | Cost | Domain | Speed | Ease |
|--------|------|--------|-------|------|
| Vercel | Free | $10-12/year | ⚡⚡⚡ | ⭐⭐⭐ |
| Netlify | Free | $10-12/year | ⚡⚡ | ⭐⭐⭐ |
| GitHub Pages | Free | $10-12/year | ⚡⚡ | ⭐⭐ |
| Custom Domain | Free hosting | $3-15/year | Varies | Varies |

---

## 🎯 Recommended Setup

**For Martinien:**
1. **Deploy to:** Vercel (best for React, fastest)
2. **Domain:** martinien-portfolio.com or portfolio.martinien.com
3. **Monitoring:** Uptimerobot (free)
4. **Analytics:** Google Analytics (free)

---

## 📞 Need Help?

- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **Netlify Support:** [netlify.com/support](https://netlify.com/support)
- **GitHub Help:** [docs.github.com](https://docs.github.com)
- **General Coding:** [stackoverflow.com](https://stackoverflow.com)

---

## ✨ Final Tips

1. **Keep it updated** - Update your portfolio regularly with new projects
2. **Ask for feedback** - Get feedback from friends on the design
3. **Share it** - Add link to your portfolio on LinkedIn, resume, etc.
4. **Monitor traffic** - Check analytics to see who visits
5. **Optimize SEO** - Add relevant keywords to help people find you

---

**Your portfolio is now ready to impress the world! 🚀**

Good luck, Martinien! 🎉

---

*Last updated: April 2026*
