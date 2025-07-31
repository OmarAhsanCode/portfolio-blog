# 🚀 Portfolio & Blog Setup Guide

Welcome to your new portfolio and blog! Follow these steps to get everything set up and customized.

## ✅ Quick Setup Checklist

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Your site will be available at http://localhost:3000

### 3. Customize Personal Information

#### Update Contact Information
Edit `src/pages/Contact.jsx`:
- Replace email addresses
- Update phone number
- Modify location
- Update social media links

#### Update About Page
Edit `src/pages/About.jsx`:
- Add your bio and description
- Update skills and technologies
- Modify timeline/experience
- Add your photo
- Update fun facts

#### Update Navigation Brand
Edit `src/components/layout/Navbar.jsx`:
- Change "YourName" to your actual name

#### Update Footer
Edit `src/components/layout/Footer.jsx`:
- Update brand name
- Modify social links
- Change contact information

### 4. Add Your Projects
Edit `src/pages/Projects.jsx`:
- Replace mock project data with your actual projects
- Add project images to `public` folder
- Update GitHub and demo links

### 5. Customize Colors and Branding
Edit `tailwind.config.js`:
- Modify primary and accent colors
- Update font choices
- Customize spacing and sizing

### 6. Add Your Blog Posts
- Create new `.mdx` files in `content/blog/`
- Update blog post data in `src/pages/Blog.jsx` and `src/pages/BlogPost.jsx`

### 7. Update Site Metadata
Edit `index.html`:
- Update title, description, and author
- Replace placeholder URLs and images
- Add your favicon

### 8. Set Up Environment Variables
Copy `.env.example` to `.env` and update:
```bash
cp .env.example .env
```
Update with your actual values:
- Site URL
- Social media URLs
- Form service IDs (Formspree, etc.)

## 🎨 Customization Guide

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/layout/Navbar.jsx`

### Changing Color Scheme
1. Update colors in `tailwind.config.js`
2. Test in both light and dark modes
3. Update any hardcoded colors in components

### Adding Blog Posts
1. Create `.mdx` file in `content/blog/`
2. Add frontmatter with metadata
3. Write content in Markdown
4. Update blog data arrays in components

### Contact Form Setup
Choose one of these services:
- **Formspree**: Update form action URL in `src/pages/Contact.jsx`
- **Netlify Forms**: Add `data-netlify="true"` to form
- **Custom API**: Replace form submission logic

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Deploy `dist` folder to Netlify
3. Or connect Git repository

### Custom Server
1. Build: `npm run build`
2. Serve `dist` folder with any static server

## 📝 Content Guidelines

### Blog Posts
- Use descriptive titles
- Add relevant tags
- Include reading time estimation
- Optimize images for web
- Use proper heading structure

### Projects
- Include clear descriptions
- Add technology tags
- Provide demo links when possible
- Use high-quality screenshots

### Images
- Optimize for web (WebP format recommended)
- Use appropriate sizes for different devices
- Add descriptive alt text for accessibility

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 🆘 Troubleshooting

### Common Issues

**Build Errors**
- Check for TypeScript errors
- Verify all imports are correct
- Ensure all required props are provided

**Styling Issues**
- Clear browser cache
- Check TailwindCSS classes are valid
- Verify dark mode classes

**Performance Issues**
- Optimize images
- Check for memory leaks in useEffect
- Use React DevTools for performance analysis

## 📚 Resources

- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Vite Documentation](https://vitejs.dev)

## 🤝 Support

If you need help:
1. Check the documentation above
2. Search existing GitHub issues
3. Create a new issue with details
4. Join our community discussions

Happy coding! 🎉
