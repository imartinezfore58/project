# Professional Portfolio Website - Iradukunda Nshimyeyo Martinien

A modern, responsive portfolio website built with **React**, **Vite**, and **CSS3**. Showcasing skills, projects, and experience.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Scrolling** - Navigation with smooth scroll to sections
- **Modern UI** - Professional gradient design with smooth animations
- **Mobile Menu** - Hamburger navigation for mobile devices
- **Dynamic Content** - Easy to customize with your own information
- **Performance Optimized** - Built with Vite for fast development and production builds

## 📁 Project Structure

```
port-folio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Sticky navigation bar with smooth scrolling
│   │   ├── Hero.jsx            # Landing/home section with CTA buttons
│   │   ├── About.jsx           # About section with highlights
│   │   ├── Skills.jsx          # Skills categories with tags
│   │   ├── Projects.jsx        # Featured projects showcase
│   │   ├── Contact.jsx         # Contact information and social links
│   │   └── Footer.jsx          # Footer with links and copyright
│   ├── styles/
│   │   ├── Navigation.css      # Navigation styles
│   │   ├── Hero.css            # Hero section with animations
│   │   ├── About.css           # About section styles
│   │   ├── Skills.css          # Skills grid layout
│   │   ├── Projects.css        # Project cards styling
│   │   ├── Contact.css         # Contact section styles
│   │   └── Footer.css          # Footer styling
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global app styles
│   ├── index.css               # Global CSS variables and resets
│   ├── main.jsx                # Entry point
│   └── index.html              # HTML template
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design Features

### Color Scheme
- **Primary**: `#667eea` (Purple)
- **Secondary**: `#764ba2` (Dark Purple)
- **Text Dark**: `#333`
- **Background Light**: `#f8f9fa`

### Responsive Breakpoints
- **Mobile**: < 480px
- **Tablet**: < 768px
- **Desktop**: ≥ 1024px

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

1. **Navigate to project directory**
   ```bash
   cd port-folio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The portfolio will be available at `http://localhost:5175` (or the next available port)

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📋 Sections

### 1. **Navigation** (`Navigation.jsx`)
- Sticky navigation bar
- Smooth scrolling to sections
- Mobile hamburger menu
- Responsive design

### 2. **Hero Section** (`Hero.jsx`)
- Welcome message with name and title
- Call-to-action buttons
- Info cards (age, projects, location)
- Smooth animations

### 3. **About Section** (`About.jsx`)
- Personal introduction
- Background and education
- Highlights with icons
- Professional summary

### 4. **Skills Section** (`Skills.jsx`)
- Organized by category:
  - Frontend (HTML, CSS, JavaScript, React)
  - Backend (Node.js, PHP)
  - Programming (Python)
  - Design & Tools (Figma, UML)
  - Database (MySQL)
  - Emerging Tech (Web3, System Design)

### 5. **Projects Section** (`Projects.jsx`)
- 5 Featured projects with:
  - Project icons
  - Descriptions
  - Technology stack badges
  - Hover animations

### 6. **Contact Section** (`Contact.jsx`)
- Contact information
  - Phone: +250 792 650 912
  - Guardian contacts
- Social media links
- Call-to-action section

### 7. **Footer** (`Footer.jsx`)
- Quick navigation links
- Social links
- Copyright information

## 🎯 Customization Guide

### Update Personal Information

1. **Hero Section** - Edit `src/components/Hero.jsx`
   ```jsx
   <h1 className="hero-title">Your Name</h1>
   <p className="hero-subtitle">Your Title | Your Location</p>
   ```

2. **About Section** - Edit `src/components/About.jsx`
   - Update personal story
   - Add/remove highlight cards

3. **Skills Section** - Edit `src/components/Skills.jsx`
   - Add/remove skill categories
   - Update skill tags

4. **Projects Section** - Edit `src/components/Projects.jsx`
   - Add/remove projects
   - Update project descriptions and tech stack

5. **Contact Section** - Edit `src/components/Contact.jsx`
   - Update phone numbers
   - Add social media links

### Customize Colors

Edit `src/index.css` CSS variables:
```css
:root {
  --primary-color: #667eea;      /* Main color */
  --secondary-color: #764ba2;    /* Accent color */
  --text-dark: #333;              /* Dark text */
  --text-light: #666;             /* Light text */
  --bg-light: #f8f9fa;           /* Light background */
}
```

### Add Custom Fonts

Update in `src/index.css`:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

## 📱 Mobile Responsiveness

The portfolio is fully responsive with breakpoints at:
- **768px** - Tablet layout
- **480px** - Mobile layout

All components adapt their layout, font sizes, and spacing automatically.

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect repository to Vercel
3. Vercel will automatically build and deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Deploy to Traditional Hosting
1. Build: `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure server to serve `index.html` for SPA routing

## 📚 Dependencies

- **React** 19.2.5 - UI library
- **Vite** 8.0.9 - Build tool
- **CSS3** - For styling and animations

## 🎓 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [CSS Grid & Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS)

## 📝 License

© 2026 Iradukunda Nshimyeyo Martinien. All rights reserved.

## 💡 Tips

1. **SEO Optimization** - Add meta tags in `index.html` for better SEO
2. **Performance** - Images can be optimized and lazy-loaded
3. **Analytics** - Consider adding Google Analytics
4. **Forms** - For contact form, integrate with EmailJS or similar service
5. **Updates** - Update package dependencies regularly: `npm update`

## ✨ Features to Consider Adding

- [ ] Dark mode toggle
- [ ] Contact form with email integration
- [ ] Blog section
- [ ] Downloadable resume/CV
- [ ] GitHub projects integration
- [ ] Testimonials section
- [ ] Achievement/Award section
- [ ] Language switcher

---

**Happy coding! 🎉**

For questions or improvements, feel free to reach out to Martinien at +250 792 650 912
