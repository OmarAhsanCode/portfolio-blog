import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Github, ExternalLink, Search, Filter } from 'lucide-react'
import Card3D from '../components/ui/Card3D'
import PageTransition from '../components/ui/PageTransition'
import Tag from '../components/ui/Tag'
import { GlassButton } from '../components/ui/GlassComponents'
import { TypewriterText, FadeInWords, GradientText, FloatingText } from '../components/ui/AnimatedText'
import AnimatedGradientBackground from '../components/ui/AnimatedGradientBackground'
import GeometricBackground from '../components/ui/GeometricBackground'
import InteractiveParticles from '../components/ui/InteractiveParticles'
import ScrollProgress from '../components/ui/ScrollProgress'

// Omar's actual projects data
const allProjects = [
  {
    id: 1,
    title: 'Flappy Bird AI with NEAT',
    description: 'AI agents trained using NEAT algorithm to play Flappy Bird with real-time visualizations and performance tracking.',
    longDescription: 'This project demonstrates the power of neural evolution by training AI agents to play Flappy Bird using the NEAT (NeuroEvolution of Augmenting Topologies) algorithm. The system includes real-time visualization of neural networks, fitness tracking, and generation-based evolution. Watch as the AI learns to navigate through pipes with increasing accuracy over successive generations.',
    image: 'https://picsum.photos/600/400?random=10',
    tags: ['Python', 'NEAT', 'AI', 'Machine Learning', 'Pygame', 'Neural Networks'],
    category: 'AI/ML',
    github: 'https://github.com/OmarAhsanCode/Flappy-Bird-Ai',
    demo: null,
    status: 'completed',
    featured: true,
    year: 2024
  },
  {
    id: 2,
    title: 'AI Web Scraper',
    description: 'Intelligent web scraping tool that collects structured data from web sources using Python with advanced parsing capabilities.',
    longDescription: 'An advanced web scraping solution that intelligently extracts structured data from various websites. The tool features adaptive parsing, data cleaning, and export capabilities. Built with Python and BeautifulSoup, it can handle dynamic content and provides robust error handling for reliable data collection.',
    image: 'https://picsum.photos/600/400?random=11',
    tags: ['Python', 'Web Scraping', 'BeautifulSoup', 'Data Processing', 'Automation'],
    category: 'Automation',
    github: 'https://github.com/OmarAhsanCode/AI-WebScraper',
    demo: null,
    status: 'completed',
    featured: true,
    year: 2024
  },
  {
    id: 3,
    title: 'Portfolio Blog Website',
    description: 'Modern portfolio and blog website built with React and TailwindCSS, featuring dark mode, animations, and responsive design.',
    longDescription: 'A fully responsive portfolio website built with React and TailwindCSS. Features include dark/light mode toggle, smooth animations with Framer Motion, project showcase, blog functionality, and optimized performance. The design focuses on clean aesthetics and user experience.',
    image: 'https://picsum.photos/600/400?random=12',
    tags: ['React', 'TailwindCSS', 'Framer Motion', 'JavaScript', 'Responsive Design'],
    category: 'Full Stack',
    github: 'https://github.com/OmarAhsanCode/portfolio-blog',
    demo: null,
    status: 'completed',
    featured: true,
    year: 2024
  },
  {
    id: 4,
    title: 'Task Manager Web App',
    description: 'CRUD application with user authentication, priority-based task management, and responsive design.',
    longDescription: 'A comprehensive task management application featuring user authentication, CRUD operations, task prioritization, and deadline tracking. Built with modern web technologies to provide a seamless user experience for personal productivity.',
    image: 'https://picsum.photos/600/400?random=13',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Authentication'],
    category: 'Full Stack',
    github: 'https://github.com/OmarAhsanCode/TaskManager',
    demo: null,
    status: 'completed',
    featured: false,
    year: 2024
  },
  {
    id: 5,
    title: 'Sorting Algorithm Visualizer',
    description: 'Interactive visualization tool for various sorting algorithms with real-time animations and performance metrics.',
    longDescription: 'An educational tool that visualizes how different sorting algorithms work through interactive animations. Users can compare algorithm performance, adjust array sizes, and control animation speed to better understand algorithmic complexity.',
    image: 'https://picsum.photos/600/400?random=14',
    tags: ['JavaScript', 'HTML', 'CSS', 'Algorithms', 'Visualization'],
    category: 'Frontend',
    github: 'https://github.com/OmarAhsanCode/Sorting-Algorithm-Visualizer',
    demo: null,
    status: 'completed',
    featured: false,
    year: 2024
  },
  {
    id: 6,
    title: 'Tic Tac Toe with AI',
    description: 'Classic Tic Tac Toe game with AI opponent using minimax algorithm and multiple difficulty levels.',
    longDescription: 'A modern take on the classic Tic Tac Toe game featuring an intelligent AI opponent powered by the minimax algorithm. The game includes multiple difficulty levels, clean UI design, and responsive gameplay.',
    image: 'https://picsum.photos/600/400?random=15',
    tags: ['JavaScript', 'HTML', 'CSS', 'Minimax Algorithm', 'Game Development'],
    category: 'Frontend',
    github: 'https://github.com/OmarAhsanCode/TicTacToe',
    demo: null,
    status: 'completed',
    featured: false,
    year: 2024
  },
  {
    id: 7,
    title: 'Calculator Application',
    description: 'Responsive calculator with arithmetic operations and clean, intuitive user interface.',
    longDescription: 'A fully functional calculator application built with vanilla JavaScript. Features include basic arithmetic operations, responsive design, keyboard support, and error handling for edge cases.',
    image: 'https://picsum.photos/600/400?random=16',
    tags: ['JavaScript', 'HTML', 'CSS', 'Responsive Design'],
    category: 'Frontend',
    github: 'https://github.com/OmarAhsanCode/Calculator',
    demo: null,
    status: 'completed',
    featured: false,
    year: 2024
  }
]

const categories = ['All', 'Full Stack', 'AI/ML', 'Automation', 'Frontend']

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
      <ScrollProgress />
      <AnimatedGradientBackground variant="subtle" />
      <GeometricBackground density="medium" />
      <InteractiveParticles particleCount={30} />
      
      <Helmet>
        <title>Projects - Omar Ahsan</title>
        <meta name="description" content="Explore my portfolio of AI/ML projects, automation tools, and web development projects, including AI agents, web scrapers, and full-stack applications." />
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
              <FadeInWords text="My" /> <GradientText colors={['from-purple-500', 'to-blue-600']}>Projects</GradientText>
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
              <FloatingText text="Featured Projects" />
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredProjects.map((project) => (
                <Card3D 
                  key={project.id} 
                  className="overflow-hidden cursor-pointer"
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
                </Card3D>
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
              <TypewriterText text="All Projects" />
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card3D 
                  key={project.id} 
                  delay={index * 0.05}
                  className="overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                  glowColor="cyan"
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
                </Card3D>
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
              <GlassButton 
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchTerm('')
                }}
                className="mt-4 bg-gray-500/20 hover:bg-gray-500/30 border-gray-500/30"
                variant="outline"
              >
                Clear Filters
              </GlassButton>
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
