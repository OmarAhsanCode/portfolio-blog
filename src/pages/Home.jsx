import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Download, Github, ExternalLink, Calendar, Clock } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import Card from '../components/ui/Card'
import Tag from '../components/ui/Tag'
import Button from '../components/ui/Button'

// Mock data - replace with your actual data
const featuredProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    image: '/api/placeholder/400/250',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.com',
    status: 'completed'
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Real-time chat app with AI integration using OpenAI API.',
    image: '/api/placeholder/400/250',
    tags: ['React', 'Socket.io', 'OpenAI', 'Express'],
    github: 'https://github.com/yourusername/ai-chat',
    demo: 'https://ai-chat-demo.com',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates.',
    image: '/api/placeholder/400/250',
    tags: ['Vue.js', 'Firebase', 'TailwindCSS'],
    github: 'https://github.com/yourusername/task-manager',
    demo: null,
    status: 'wip'
  }
]

const latestPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    excerpt: 'Learn best practices for structuring large React applications with performance in mind.',
    slug: 'building-scalable-react-applications',
    date: '2024-01-15',
    readingTime: 8,
    tags: ['React', 'Performance', 'Architecture']
  },
  {
    id: 2,
    title: 'Modern CSS Techniques for 2024',
    excerpt: 'Explore the latest CSS features and how to use them in your projects.',
    slug: 'modern-css-techniques-2024',
    date: '2024-01-10',
    readingTime: 6,
    tags: ['CSS', 'Web Design', 'Frontend']
  },
  {
    id: 3,
    title: 'Deploying with Docker and CI/CD',
    excerpt: 'A complete guide to containerizing your applications and setting up automated deployments.',
    slug: 'deploying-docker-cicd',
    date: '2024-01-05',
    readingTime: 12,
    tags: ['Docker', 'DevOps', 'CI/CD']
  }
]

const Home = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Your Name - Full Stack Developer & Blogger</title>
        <meta name="description" content="Welcome to my portfolio and blog. I'm a full-stack developer passionate about creating amazing web experiences." />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="block text-gray-900 dark:text-gray-100">Hi, I'm</span>
                <span className="block gradient-text">Your Name</span>
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto text-balance"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Full-stack developer passionate about building beautiful, functional web applications. 
                I love turning ideas into reality through clean code and intuitive design.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button 
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                >
                  <Link to="/projects">View My Work</Link>
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  icon={<Download size={20} />}
                >
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            {/* Floating Animation */}
            <motion.div
              className="mt-16"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work showcasing different technologies and approaches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={project.id} delay={index * 0.1}>
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {project.status === 'wip' && (
                    <div className="absolute top-3 right-3">
                      <Tag variant="warning" size="sm">WIP</Tag>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Tag key={tag} variant="primary" size="sm">{tag}</Tag>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/projects">
              <Button 
                variant="outline"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                View All Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights from my development journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <Card key={post.id} delay={index * 0.1}>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Tag key={tag} variant="default" size="sm">{tag}</Tag>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                  >
                    <span>Read more</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/blog">
              <Button 
                variant="outline"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                View All Posts
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
            </p>
            <Link to="/contact">
              <Button 
                className="bg-white text-primary-600 hover:bg-gray-100"
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Home
