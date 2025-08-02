import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, Search, User, ArrowRight } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import Card3D from '../components/ui/Card3D'
import Tag from '../components/ui/Tag'
import OptimizedImage from '../components/ui/OptimizedImage'
import { GlassCard } from '../components/ui/GlassComponents'
import { TypewriterText, FadeInWords, GradientText, FloatingText } from '../components/ui/AnimatedText'
import AnimatedGradientBackground from '../components/ui/AnimatedGradientBackground'
import GeometricBackground from '../components/ui/GeometricBackground'
import InteractiveParticles from '../components/ui/InteractiveParticles'
import ScrollProgress from '../components/ui/ScrollProgress'

// Mock blog posts data - replace with your actual blog data
const allPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    excerpt: 'Learn best practices for structuring large React applications with performance in mind. We\'ll cover component architecture, state management, and optimization techniques.',
    slug: 'building-scalable-react-applications',
    content: '', // This would be loaded from MDX files
    author: 'Your Name',
    date: '2024-01-15',
    readingTime: 8,
    tags: ['React', 'Performance', 'Architecture'],
    category: 'Frontend',
    featured: true,
    image: 'https://picsum.photos/800/400?random=20'
  },
  {
    id: 2,
    title: 'Modern CSS Techniques for 2024',
    excerpt: 'Explore the latest CSS features and how to use them in your projects. From container queries to cascade layers, discover what\'s new in CSS.',
    slug: 'modern-css-techniques-2024',
    content: '',
    author: 'Your Name',
    date: '2024-01-10',
    readingTime: 6,
    tags: ['CSS', 'Web Design', 'Frontend'],
    category: 'Frontend',
    featured: true,
    image: 'https://picsum.photos/800/400?random=21'
  },
  {
    id: 3,
    title: 'Deploying with Docker and CI/CD',
    excerpt: 'A complete guide to containerizing your applications and setting up automated deployments. Learn Docker best practices and CI/CD workflows.',
    slug: 'deploying-docker-cicd',
    content: '',
    author: 'Your Name',
    date: '2024-01-05',
    readingTime: 12,
    tags: ['Docker', 'DevOps', 'CI/CD'],
    category: 'DevOps',
    featured: false,
    image: 'https://picsum.photos/800/400?random=22'
  },
  {
    id: 4,
    title: 'TypeScript Best Practices',
    excerpt: 'Improve your TypeScript skills with these advanced patterns and best practices. Learn about utility types, generics, and effective type design.',
    slug: 'typescript-best-practices',
    content: '',
    author: 'Your Name',
    date: '2023-12-28',
    readingTime: 10,
    tags: ['TypeScript', 'JavaScript', 'Development'],
    category: 'Development',
    featured: false,
    image: 'https://picsum.photos/800/400?random=23'
  },
  {
    id: 5,
    title: 'Building RESTful APIs with Node.js',
    excerpt: 'Learn how to create robust and scalable REST APIs using Node.js and Express. We\'ll cover authentication, validation, and error handling.',
    slug: 'building-restful-apis-nodejs',
    content: '',
    author: 'Your Name',
    date: '2023-12-20',
    readingTime: 15,
    tags: ['Node.js', 'Express', 'API', 'Backend'],
    category: 'Backend',
    featured: false,
    image: 'https://picsum.photos/800/400?random=24'
  },
  {
    id: 6,
    title: 'Database Design Principles',
    excerpt: 'Master the fundamentals of database design with practical examples. Learn about normalization, indexing, and query optimization.',
    slug: 'database-design-principles',
    content: '',
    author: 'Your Name',
    date: '2023-12-15',
    readingTime: 9,
    tags: ['Database', 'SQL', 'Backend'],
    category: 'Backend',
    featured: false,
    image: 'https://picsum.photos/800/400?random=25'
  }
]

const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'Development']

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  const featuredPosts = useMemo(() => filteredPosts.filter(post => post.featured), [filteredPosts])
  const regularPosts = useMemo(() => filteredPosts.filter(post => !post.featured), [filteredPosts])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <PageTransition>
      <ScrollProgress />
      <AnimatedGradientBackground variant="subtle" />
      <GeometricBackground density="low" />
      <InteractiveParticles particleCount={20} />
      
      <Helmet>
        <title>Blog - Your Name</title>
        <meta name="description" content="Read my latest thoughts on web development, programming, and technology. Tutorials, insights, and technical deep-dives." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              <FadeInWords text="My" /> <GradientText colors={['from-green-500', 'to-cyan-600']}>Blog</GradientText>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Thoughts, tutorials, and insights from my journey in web development. 
              Sharing knowledge and learning experiences to help fellow developers.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12"
          >
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Tag
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  isActive={selectedCategory === category}
                  className="cursor-pointer"
                >
                  {category}
                </Tag>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="pb-16">
          <div className="container-custom">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8"
            >
              <FloatingText text="Featured Articles" />
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Card3D 
                  key={post.id} 
                  delay={index * 0.1}
                  className="overflow-hidden group"
                  glowColor="green"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative overflow-hidden">
                      <OptimizedImage 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{post.readingTime} min read</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Tag key={tag} variant="primary" size="sm">{tag}</Tag>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center space-x-1 text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-200">
                          <span>Read article</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </span>
                        <Tag variant="accent" size="sm">{post.category}</Tag>
                      </div>
                    </div>
                  </Link>
                </Card3D>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section className="pb-16">
          <div className="container-custom">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8"
            >
              <TypewriterText text="All Articles" />
            </motion.h2>

            <div className="space-y-6">
              {regularPosts.map((post, index) => (
                <GlassCard 
                  key={post.id} 
                  delay={index * 0.05}
                  className="overflow-hidden group"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative overflow-hidden">
                        <OptimizedImage 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      
                      <div className="flex-1 p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock size={14} />
                            <span>{post.readingTime} min read</span>
                          </div>
                          <Tag variant="accent" size="sm">{post.category}</Tag>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Tag key={tag} variant="default" size="sm">{tag}</Tag>
                            ))}
                            {post.tags.length > 3 && (
                              <Tag variant="default" size="sm">+{post.tags.length - 3}</Tag>
                            )}
                          </div>
                          
                          <span className="inline-flex items-center space-x-1 text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-200">
                            <span>Read more</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <section className="pb-16">
          <div className="container-custom">
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchTerm('')
                }}
                className="btn-outline"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  )
}

export default Blog
