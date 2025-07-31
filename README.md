# Portfolio & Blog Website

A modern, responsive personal portfolio and blog website built with React, TailwindCSS, and Framer Motion. Features a beautiful design, smooth animations, dark/light mode, and comprehensive blog functionality.

![Portfolio Screenshot](https://via.placeholder.com/800x400/3b82f6/ffffff?text=Portfolio+%26+Blog)

## ✨ Features

### 🎨 Design & UX
- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Modern UI**: Clean, professional design with beautiful typography
- **Accessibility**: Built with accessibility best practices

### 📝 Blog System
- **MDX Support**: Write blog posts in Markdown with React components
- **Syntax Highlighting**: Beautiful code highlighting with PrismJS
- **Search & Filtering**: Find posts by title, content, or tags
- **Reading Time**: Automatic reading time estimation
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Comments**: GitHub Discussions integration
- **Share Buttons**: Social media sharing functionality

### 💼 Portfolio Features
- **Project Showcase**: Filterable project gallery
- **Interactive Cards**: Hover effects and detailed project modals
- **Live Demos**: Links to GitHub repos and live demos
- **Technology Tags**: Organized by tech stack and categories
- **Case Studies**: Detailed project descriptions

### 🚀 Performance
- **Code Splitting**: Lazy-loaded routes for optimal performance
- **Image Optimization**: Responsive images with lazy loading
- **Bundle Optimization**: Minimized JavaScript and CSS
- **Fast Loading**: Optimized for Core Web Vitals

## 🛠️ Tech Stack

- **Frontend**: React 18, TailwindCSS, Framer Motion
- **Routing**: React Router DOM
- **Styling**: TailwindCSS with custom design system
- **Animation**: Framer Motion for smooth transitions
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify

## 📁 Project Structure

```
portfolio-blog/
├── public/                 # Static assets
│   ├── favicon.svg        # Site favicon
│   └── og-image.jpg       # Open Graph image
├── src/
│   ├── components/        # Reusable components
│   │   ├── layout/       # Layout components (Navbar, Footer)
│   │   └── ui/           # UI components (Button, Card, Tag)
│   ├── contexts/         # React contexts (Theme)
│   ├── pages/            # Page components
│   ├── utils/            # Utility functions
│   ├── index.css         # Global styles
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Application entry point
├── content/
│   └── blog/             # Blog posts in MDX format
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # TailwindCSS configuration
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-blog.git
   cd portfolio-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 📝 Content Management

### Adding Blog Posts

1. **Create a new MDX file** in `content/blog/`:
   ```bash
   touch content/blog/my-new-post.mdx
   ```

2. **Add frontmatter and content**:
   ```mdx
   ---
   title: "My New Blog Post"
   excerpt: "A brief description of the post"
   date: "2024-01-20"
   author: "Your Name"
   tags: ["React", "JavaScript"]
   category: "Development"
   featured: false
   image: "/api/placeholder/1200/600"
   readingTime: 5
   ---

   # My New Blog Post

   Your content goes here...
   ```

3. **Update the blog data** in `src/pages/Blog.jsx` and `src/pages/BlogPost.jsx` to include your new post.

### Adding Projects

1. **Update project data** in `src/pages/Projects.jsx`:
   ```javascript
   const newProject = {
     id: 999,
     title: "My New Project",
     description: "Project description",
     image: "/path/to/image.jpg",
     tags: ["React", "Node.js"],
     category: "Full Stack",
     github: "https://github.com/username/repo",
     demo: "https://demo-url.com",
     status: "completed", // or "wip"
     featured: false,
     year: 2024
   }
   ```

### Customizing Content

#### Personal Information
Update the following files with your information:
- `src/pages/Home.jsx` - Hero section, bio
- `src/pages/About.jsx` - About page content, timeline, skills
- `src/components/layout/Navbar.jsx` - Navigation brand name
- `src/components/layout/Footer.jsx` - Footer content, social links

#### Contact Information
Update `src/pages/Contact.jsx`:
```javascript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com'
  },
  // ... other contact details
]
```

#### Social Media Links
Update social links in `src/components/layout/Footer.jsx` and `src/pages/Contact.jsx`:
```javascript
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  // ... other social links
]
```

## 🎨 Customization

### Theme Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  accent: {
    // Your accent color palette
  }
}
```

### Typography
Modify fonts in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
  mono: ['Your Mono Font', 'monospace'],
}
```

### Animations
Customize animations in `src/index.css` or add new ones in `tailwind.config.js`.

## 🔧 Configuration

### Environment Variables
Create a `.env` file for environment-specific configurations:
```env
VITE_SITE_URL=https://yoursite.com
VITE_AUTHOR_EMAIL=your.email@example.com
VITE_FORMSPREE_ID=your-formspree-id
```

### SEO Configuration
Update meta tags in `index.html` and individual pages using React Helmet.

### Form Integration
The contact form is set up to work with services like:
- **Formspree**: Add your form ID to the fetch URL in `src/pages/Contact.jsx`
- **Netlify Forms**: Add `data-netlify="true"` to the form element
- **Custom API**: Replace the form submission logic with your endpoint

### Comments System
The blog is configured for GitHub Discussions. Update the links in `src/pages/BlogPost.jsx`:
```javascript
const discussionUrl = `https://github.com/yourusername/portfolio-blog/discussions/new?category=blog&title=${encodeURIComponent(post.title)}`
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Custom Server
1. Build the project: `npm run build`
2. Serve the `dist` directory with any static file server

## 📊 Performance Optimization

### Bundle Analysis
```bash
npm install -g vite-bundle-analyzer
npx vite-bundle-analyzer
```

### Image Optimization
- Use WebP format when possible
- Implement responsive images
- Add lazy loading for images below the fold

### Code Splitting
Routes are already code-split. For further optimization:
```javascript
const HeavyComponent = lazy(() => import('./HeavyComponent'))
```

## 🔍 SEO Best Practices

### Meta Tags
Each page includes:
- Title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### Structured Data
Consider adding JSON-LD structured data for better search engine understanding.

### Performance
- Optimized Core Web Vitals
- Fast loading times
- Mobile-first approach

## 🧪 Testing

### Component Testing
```bash
npm install @testing-library/react @testing-library/jest-dom
```

### E2E Testing
```bash
npm install cypress
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help customizing the portfolio:

- Create an issue on GitHub
- Email: your.email@example.com
- Twitter: [@yourusername](https://twitter.com/yourusername)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool

---

**Happy coding!** 🚀

If you found this portfolio template helpful, please consider giving it a ⭐ on GitHub!

