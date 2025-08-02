import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Download, Github, ExternalLink, Calendar, Clock } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import Card3D from '../components/ui/Card3D'
import Tag from '../components/ui/Tag'
import AnimatedGradientBackground from '../components/ui/AnimatedGradientBackground'
import GeometricBackground from '../components/ui/GeometricBackground'
import { TypewriterText, FadeInWords, GradientText, FloatingText } from '../components/ui/AnimatedText'
import { GlassCard, GlassButton } from '../components/ui/GlassComponents'
import InteractiveParticles from '../components/ui/InteractiveParticles'
import ScrollProgress from '../components/ui/ScrollProgress'

// Mock data - replace with your actual data
const featuredProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    image: 'https://picsum.photos/400/250?random=1',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.com',
    status: 'completed'
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Real-time chat app with AI integration using OpenAI API.',
    image: 'https://picsum.photos/400/250?random=2',
    tags: ['React', 'Socket.io', 'OpenAI', 'Express'],
    github: 'https://github.com/yourusername/ai-chat',
    demo: 'https://ai-chat-demo.com',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates.',
    image: 'https://picsum.photos/400/250?random=3',
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
      <ScrollProgress color="purple" />
      <GeometricBackground density="medium" interactive={true} />
      <Helmet>
        <title>Your Name - Full Stack Developer & Blogger</title>
        <meta name="description" content="Welcome to my portfolio and blog. I'm a full-stack developer passionate about creating amazing web experiences." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 section-padding overflow-hidden">
        {/* Interactive Particles */}
        <InteractiveParticles particleCount={30} color="purple" />
        
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <AnimatedGradientBackground variant="hero">
            <div className="w-full h-full bg-white/30 dark:bg-gray-900/30" />
          </AnimatedGradientBackground>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 mb-6"
              >
                <GlassCard className="flex items-center px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Available for freelance work</span>
                </GlassCard>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="block text-gray-900 dark:text-gray-100">
                  <FadeInWords text="Hi, I'm" />
                </span>
                <span className="block">
                  <GradientText 
                    text="Your Name" 
                    gradient="purple-pink"
                    className="text-4xl md:text-6xl lg:text-7xl font-bold"
                  />
                </span>
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto text-balance"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <TypewriterText 
                  text="Full-stack developer passionate about building beautiful, functional web applications. I love turning ideas into reality through clean code and intuitive design."
                  speed={25}
                />
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <GlassButton 
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                  className="bg-blue-500/20 hover:bg-blue-500/30"
                >
                  <Link to="/projects">View My Work</Link>
                </GlassButton>
                
                <GlassButton 
                  variant="outline"
                  size="lg"
                  icon={<Download size={20} />}
                  className="border-white/30 hover:bg-white/10"
                >
                  Download Resume
                </GlassButton>
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
              <FloatingText text="Featured Projects" />
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work showcasing different technologies and approaches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card3D 
                key={project.id} 
                delay={index * 0.1}
                glowColor="blue"
                className="group"
              >
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
              </Card3D>
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
              <GlassButton 
                variant="outline"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="border-white/30 hover:bg-white/10"
              >
                View All Projects
              </GlassButton>
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
              <FloatingText text="Latest Blog Posts" />
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights from my development journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <GlassCard key={post.id} delay={index * 0.1}>
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
              </GlassCard>
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
              <GlassButton 
                variant="outline"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="border-white/30 hover:bg-white/10"
              >
                View All Posts
              </GlassButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated background with multiple layers */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-pink-600" />
          
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(6,182,212,0.3) 0%, rgba(59,130,246,0.3) 50%, rgba(147,51,234,0.3) 100%)',
                'linear-gradient(225deg, rgba(147,51,234,0.3) 0%, rgba(236,72,153,0.3) 50%, rgba(6,182,212,0.3) 100%)',
                'linear-gradient(45deg, rgba(6,182,212,0.3) 0%, rgba(59,130,246,0.3) 50%, rgba(147,51,234,0.3) 100%)'
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-400/20 rounded-xl rotate-45 blur-lg"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [45, 135, 45]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-400/20 rounded-full blur-md"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0" style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)
            `
          }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8 shadow-2xl"
            >
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full mr-2"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-white/90 text-sm font-medium">Available for new projects</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              <FadeInWords text="Ready to Create Something" stagger={0.1} />
              <br />
              <GradientText 
                colors={['from-cyan-200', 'to-pink-200']}
                className="text-4xl md:text-6xl font-bold"
              >
                Extraordinary?
              </GradientText>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Let's collaborate to transform your vision into a digital masterpiece. 
              From concept to deployment, I'll help bring your ideas to life with cutting-edge technology 
              and thoughtful design.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link to="/contact">
                <GlassButton
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 text-lg px-8 py-4"
                >
                  Start a Project
                </GlassButton>
              </Link>
              
              <GlassButton
                size="lg"
                icon={<Calendar size={20} />}
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 text-lg px-8 py-4"
              >
                Schedule a Call
              </GlassButton>
            </motion.div>

            {/* Social proof or quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {[
                { value: '50+', label: 'Projects Completed' },
                { value: '30+', label: 'Happy Clients' },
                { value: '5+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom glow effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-white/20 to-transparent blur-3xl" />
      </section>
    </PageTransition>
  )
}

export default Home
