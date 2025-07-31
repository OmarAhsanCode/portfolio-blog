import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, User, ArrowLeft, Twitter, Linkedin, Facebook, Link as LinkIcon, Heart, MessageCircle } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import Tag from '../components/ui/Tag'
import Button from '../components/ui/Button'
import LoadingSpinner from '../components/ui/LoadingSpinner'

// Mock blog posts data - in a real app, this would come from your CMS or MDX files
const blogPosts = {
  'building-scalable-react-applications': {
    id: 1,
    title: 'Building Scalable React Applications',
    excerpt: 'Learn best practices for structuring large React applications with performance in mind.',
    slug: 'building-scalable-react-applications',
    author: 'Your Name',
    date: '2024-01-15',
    readingTime: 8,
    tags: ['React', 'Performance', 'Architecture'],
    category: 'Frontend',
    image: '/api/placeholder/1200/600',
    content: `
# Building Scalable React Applications

React has become the go-to library for building user interfaces, but as applications grow in size and complexity, maintaining scalability becomes a significant challenge. In this comprehensive guide, we'll explore proven strategies and best practices for building React applications that can scale efficiently.

## Table of Contents

1. [Component Architecture](#component-architecture)
2. [State Management](#state-management)
3. [Performance Optimization](#performance-optimization)
4. [Code Organization](#code-organization)
5. [Testing Strategies](#testing-strategies)

## Component Architecture

The foundation of a scalable React application lies in its component architecture. Here are key principles to follow:

### 1. Single Responsibility Principle

Each component should have a single, well-defined purpose. This makes components easier to test, debug, and reuse.

\`\`\`jsx
// Bad: Component doing too many things
function UserDashboard({ user }) {
  const [posts, setPosts] = useState([])
  const [notifications, setNotifications] = useState([])
  
  // Fetching posts logic
  // Fetching notifications logic
  // Rendering user info
  // Rendering posts
  // Rendering notifications
  
  return (
    <div>
      {/* Complex JSX mixing concerns */}
    </div>
  )
}

// Good: Separated concerns
function UserDashboard({ user }) {
  return (
    <div>
      <UserProfile user={user} />
      <UserPosts userId={user.id} />
      <UserNotifications userId={user.id} />
    </div>
  )
}
\`\`\`

### 2. Composition over Inheritance

React favors composition over inheritance. Build complex components by combining simpler ones.

\`\`\`jsx
// Flexible Card component
function Card({ children, className, ...props }) {
  return (
    <div className={\`card \${className}\`} {...props}>
      {children}
    </div>
  )
}

// Compose specific cards
function UserCard({ user }) {
  return (
    <Card className="user-card">
      <Card.Header>
        <Avatar src={user.avatar} />
        <h3>{user.name}</h3>
      </Card.Header>
      <Card.Body>
        <p>{user.bio}</p>
      </Card.Body>
    </Card>
  )
}
\`\`\`

## State Management

Effective state management is crucial for scalable applications. Choose the right tool for the job:

### Local State vs Global State

Not everything needs to be in global state. Use the principle of "lift state up" judiciously.

\`\`\`jsx
// Local state for UI concerns
function Modal({ isOpen, onClose, children }) {
  const [isAnimating, setIsAnimating] = useState(false)
  
  // Animation state stays local
  const handleClose = () => {
    setIsAnimating(true)
    setTimeout(() => {
      onClose()
      setIsAnimating(false)
    }, 300)
  }
  
  return isOpen ? (
    <div className="modal">
      {children}
    </div>
  ) : null
}
\`\`\`

### Context API Best Practices

Use Context API for truly global state, but avoid overuse:

\`\`\`jsx
// Theme context - good use case
const ThemeContext = createContext()

// User context - another good use case
const UserContext = createContext()

// Don't put everything in one massive context
// Split concerns into separate contexts
\`\`\`

## Performance Optimization

Performance is key to scalability. Here are essential optimization techniques:

### 1. React.memo and useMemo

Prevent unnecessary re-renders with memoization:

\`\`\`jsx
// Memoize expensive calculations
function ExpensiveComponent({ data, filter }) {
  const filteredData = useMemo(() => {
    return data.filter(item => item.category === filter)
  }, [data, filter])
  
  return (
    <div>
      {filteredData.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}

// Memoize components that render frequently
const Item = React.memo(({ item }) => {
  return <div>{item.name}</div>
})
\`\`\`

### 2. Code Splitting

Split your code to reduce initial bundle size:

\`\`\`jsx
// Route-based code splitting
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  )
}
\`\`\`

### 3. Virtual Scrolling

For large lists, implement virtual scrolling:

\`\`\`jsx
import { FixedSizeList as List } from 'react-window'

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      <Item item={items[index]} />
    </div>
  )
  
  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={80}
    >
      {Row}
    </List>
  )
}
\`\`\`

## Code Organization

A well-organized codebase is essential for scalability:

### Folder Structure

\`\`\`
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── forms/        # Form components
│   └── layout/       # Layout components
├── pages/            # Page components
├── hooks/            # Custom hooks
├── utils/            # Utility functions
├── contexts/         # React contexts
├── services/         # API services
└── types/            # TypeScript types
\`\`\`

### Custom Hooks

Extract reusable logic into custom hooks:

\`\`\`jsx
// useApi custom hook
function useApi(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [url])
  
  return { data, loading, error }
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useApi(\`/api/users/\${userId}\`)
  
  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage error={error} />
  
  return <div>{user.name}</div>
}
\`\`\`

## Testing Strategies

Comprehensive testing ensures your application remains maintainable as it scales:

### Unit Testing

Test individual components in isolation:

\`\`\`jsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })
  
  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
\`\`\`

### Integration Testing

Test how components work together:

\`\`\`jsx
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

describe('App Integration', () => {
  it('renders home page by default', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    expect(screen.getByRole('heading', { name: /welcome/i })).toBeInTheDocument()
  })
})
\`\`\`

## Conclusion

Building scalable React applications requires careful planning and adherence to best practices. By following the principles outlined in this guide, you'll be well-equipped to create applications that can grow with your needs while maintaining performance and maintainability.

Remember, scalability isn't just about handling more users or data—it's about creating a codebase that your team can work with efficiently as your application evolves.

### Key Takeaways

1. **Component Architecture**: Keep components focused and composable
2. **State Management**: Use the right tool for each type of state
3. **Performance**: Optimize early and measure impact
4. **Organization**: Structure your code for team collaboration
5. **Testing**: Invest in comprehensive test coverage

What's your experience with scaling React applications? Share your thoughts and challenges in the comments below!
    `
  },
  'modern-css-techniques-2024': {
    id: 2,
    title: 'Modern CSS Techniques for 2024',
    excerpt: 'Explore the latest CSS features and how to use them in your projects.',
    slug: 'modern-css-techniques-2024',
    author: 'Your Name',
    date: '2024-01-10',
    readingTime: 6,
    tags: ['CSS', 'Web Design', 'Frontend'],
    category: 'Frontend',
    image: '/api/placeholder/1200/600',
    content: `
# Modern CSS Techniques for 2024

CSS continues to evolve rapidly, bringing powerful new features that make styling more intuitive and efficient. In this article, we'll explore the cutting-edge CSS techniques that are shaping web development in 2024.

## Container Queries: The Game Changer

Container queries allow you to style elements based on their container's size rather than the viewport size.

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

## CSS Grid Subgrid

Subgrid allows nested grids to participate in their parent's grid layout.

\`\`\`css
.parent-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.child-grid {
  display: grid;
  grid-column: span 2;
  grid-template-columns: subgrid;
}
\`\`\`

This article would continue with more CSS techniques...
    `
  }
}

const BlogPost = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(42)

  useEffect(() => {
    // Simulate loading a blog post
    const loadPost = async () => {
      setLoading(true)
      // In a real app, this would fetch from your CMS or load an MDX file
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const foundPost = blogPosts[slug]
      setPost(foundPost)
      setLoading(false)
    }

    loadPost()
  }, [slug])

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(prev => liked ? prev - 1 : prev + 1)
  }

  const shareUrl = window.location.href
  const shareTitle = post?.title || ''

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      // You could show a toast notification here
    } catch (err) {
      console.error('Failed to copy URL:', err)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <LoadingSpinner size="lg" text="Loading article..." />
      </div>
    )
  }

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <PageTransition>
      <Helmet>
        <title>{post.title} - Your Name</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={shareUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <article className="pt-32 pb-16">
        <div className="container-custom">
          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              to="/blog"
              className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {post.tags.map((tag) => (
                  <Tag key={tag} variant="primary">{tag}</Tag>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-balance">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <User size={18} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={18} />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="max-w-6xl mx-auto">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-8"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {/* Convert markdown to JSX here - in a real app you'd use a markdown processor */}
                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-4"
            >
              <div className="sticky top-32 space-y-8">
                {/* Share Buttons */}
                <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Share this article
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={shareLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <Twitter size={16} />
                      <span>Twitter</span>
                    </a>
                    <a
                      href={shareLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors duration-200"
                    >
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={shareLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                    >
                      <Facebook size={16} />
                      <span>Facebook</span>
                    </a>
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                    >
                      <LinkIcon size={16} />
                      <span>Copy</span>
                    </button>
                  </div>
                </div>

                {/* Like Button */}
                <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Enjoyed this article?
                  </h3>
                  <Button
                    onClick={handleLike}
                    variant={liked ? 'primary' : 'outline'}
                    className="w-full"
                    icon={<Heart size={18} fill={liked ? 'currentColor' : 'none'} />}
                  >
                    {liked ? 'Liked' : 'Like'} ({likeCount})
                  </Button>
                </div>

                {/* Table of Contents would go here */}
                <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#component-architecture" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                      Component Architecture
                    </a>
                    <a href="#state-management" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                      State Management
                    </a>
                    <a href="#performance-optimization" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                      Performance Optimization
                    </a>
                    <a href="#code-organization" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                      Code Organization
                    </a>
                    <a href="#testing-strategies" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                      Testing Strategies
                    </a>
                  </nav>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Author Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img 
                src="/api/placeholder/120/120" 
                alt={post.author}
                className="w-20 h-20 rounded-full"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  About {post.author}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Full-stack developer passionate about creating amazing web experiences. 
                  When not coding, you can find me writing about technology and sharing knowledge with the community.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Comments Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-8">
              <div className="flex items-center space-x-2 mb-6">
                <MessageCircle size={24} className="text-primary-600 dark:text-primary-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Comments & Discussion
                </h3>
              </div>
              
              <div className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Comments are powered by GitHub Discussions. 
                  Join the conversation and share your thoughts!
                </p>
                <a
                  href={`https://github.com/yourusername/portfolio-blog/discussions/new?category=blog&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <MessageCircle size={18} />
                  <span>Start Discussion</span>
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </article>
    </PageTransition>
  )
}

export default BlogPost
