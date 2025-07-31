import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Github, ExternalLink, Search, Filter } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import Card from '../components/ui/Card'
import Tag from '../components/ui/Tag'
import Button from '../components/ui/Button'

// Mock projects data - replace with your actual projects
const allProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.',
    longDescription: 'This comprehensive e-commerce platform was built to handle everything from product catalog management to order processing. The frontend uses React with Redux for state management, while the backend is powered by Node.js and Express. The application includes features like real-time inventory updates, secure payment processing with Stripe, email notifications, and a comprehensive admin panel.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express'],
    category: 'Full Stack',
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.com',
    status: 'completed',
    featured: true,
    year: 2024
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI integration using OpenAI API. Supports multiple chat rooms, file sharing, and AI-powered message suggestions.',
    longDescription: 'A modern chat application that combines real-time messaging with AI capabilities. Users can create chat rooms, share files, and get AI-powered suggestions for responses. The application uses Socket.io for real-time communication and integrates with OpenAI\'s API for intelligent features.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Socket.io', 'OpenAI', 'Express', 'MongoDB'],
    category: 'Full Stack',
    github: 'https://github.com/yourusername/ai-chat',
    demo: 'https://ai-chat-demo.com',
    status: 'completed',
    featured: true,
    year: 2024
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting.',
    longDescription: 'A comprehensive task management system designed for teams. Features include project boards, task assignments, time tracking, file attachments, and real-time collaboration. The application provides detailed analytics and reporting to help teams track productivity and project progress.',
    image: '/api/placeholder/600/400',
    tags: ['Vue.js', 'Firebase', 'TailwindCSS', 'Chart.js'],
    category: 'Frontend',
    github: 'https://github.com/yourusername/task-manager',
    demo: null,
    status: 'wip',
    featured: false,
    year: 2024
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    longDescription: 'A comprehensive weather dashboard that provides detailed weather information with beautiful visualizations. The app includes features like location-based forecasts, weather maps, historical data, and customizable widgets.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'TypeScript', 'Chart.js', 'Weather API'],
    category: 'Frontend',
    github: 'https://github.com/yourusername/weather-dashboard',
    demo: 'https://weather-dashboard-demo.com',
    status: 'completed',
    featured: false,
    year: 2023
  },
  {
    id: 5,
    title: 'Blog CMS API',
    description: 'RESTful API for a content management system with authentication, role-based permissions, and media handling.',
    longDescription: 'A robust CMS API built with Node.js and Express. Features include user authentication with JWT, role-based access control, content versioning, media upload handling, and comprehensive API documentation with Swagger.',
    image: '/api/placeholder/600/400',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
    category: 'Backend',
    github: 'https://github.com/yourusername/blog-cms-api',
    demo: null,
    status: 'completed',
    featured: false,
    year: 2023
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'This very website! Built with React, TailwindCSS, and Framer Motion for smooth animations.',
    longDescription: 'A modern portfolio and blog website built with React and TailwindCSS. Features include dark/light mode, smooth animations with Framer Motion, MDX blog support, and responsive design. The site is optimized for performance and SEO.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'TailwindCSS', 'Framer Motion', 'MDX', 'Vite'],
    category: 'Frontend',
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://yourname.dev',
    status: 'completed',
    featured: true,
    year: 2024
  }
]

const categories = ['All', 'Full Stack', 'Frontend', 'Backend']

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  const featuredProjects = filteredProjects.filter(project => project.featured)
  const otherProjects = filteredProjects.filter(project => !project.featured)

  return (
    <PageTransition>
      <Helmet>
        <title>Projects - Your Name</title>
        <meta name="description" content="Explore my portfolio of web development projects, including full-stack applications, frontend interfaces, and backend systems." />
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
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of projects showcasing my skills in web development, 
              from concept to deployment. Each project represents a unique challenge 
              and learning opportunity.
            </p>
          </motion.div>

          {/* Filters and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12"
          >
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-500 dark:text-gray-400" />
              <div className="flex flex-wrap gap-2">
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
            </div>

            {/* Search */}
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 w-64"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="pb-16">
          <div className="container-custom">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8"
            >
              Featured Projects
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  delay={index * 0.1}
                  className="overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.status === 'wip' && (
                        <Tag variant="warning" size="sm">WIP</Tag>
                      )}
                      <Tag variant="primary" size="sm">{project.year}</Tag>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Tag key={tag} variant="default" size="sm">{tag}</Tag>
                      ))}
                      {project.tags.length > 4 && (
                        <Tag variant="default" size="sm">+{project.tags.length - 4}</Tag>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
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
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                          >
                            <ExternalLink size={16} />
                            <span className="text-sm">Demo</span>
                          </a>
                        )}
                      </div>
                      <Tag variant="primary" size="sm">{project.category}</Tag>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="pb-16">
          <div className="container-custom">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8"
            >
              All Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  delay={index * 0.05}
                  className="overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      {project.status === 'wip' && (
                        <Tag variant="warning" size="sm">WIP</Tag>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Tag key={tag} variant="default" size="sm">{tag}</Tag>
                      ))}
                      {project.tags.length > 3 && (
                        <Tag variant="default" size="sm">+{project.tags.length - 3}</Tag>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        >
                          <Github size={14} />
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{project.year}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <section className="pb-16">
          <div className="container-custom">
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found matching your criteria.
              </p>
              <Button 
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchTerm('')
                }}
                className="mt-4"
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-dark-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
                >
                  ×
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {selectedProject.title}
                  </h2>
                  <div className="flex gap-2">
                    {selectedProject.status === 'wip' && (
                      <Tag variant="warning">Work in Progress</Tag>
                    )}
                    <Tag variant="primary">{selectedProject.category}</Tag>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <Tag key={tag} variant="default">{tag}</Tag>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center space-x-2"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center space-x-2"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}

export default Projects
