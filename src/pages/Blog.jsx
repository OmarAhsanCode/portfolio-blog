import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PageTransition from '../components/ui/PageTransition'
import Tag from '../components/ui/Tag'
import { GradientText } from '../components/ui/AnimatedText'
import AnimatedGradientBackground from '../components/ui/AnimatedGradientBackground'
import GeometricBackground from '../components/ui/GeometricBackground'
import InteractiveParticles from '../components/ui/InteractiveParticles'
import ScrollProgress from '../components/ui/ScrollProgress'

// Blog page component - Coming Soon

const Blog = () => {
  return (
    <PageTransition>
      <ScrollProgress />
      <AnimatedGradientBackground variant="subtle" />
      <GeometricBackground density="low" />
      <InteractiveParticles particleCount={20} />
      
      <Helmet>
        <title>Blog - Omar Ahsan</title>
        <meta name="description" content="Read my thoughts on AI, machine learning, automation, and web development. Sharing insights from my journey in technology." />
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
              <GradientText colors={['from-blue-500', 'to-purple-600']}>
                Blog Coming Soon
              </GradientText>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I'm working on creating insightful content about AI, machine learning, automation, and web development. 
              Stay tuned for tutorials, project breakdowns, and technical insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ 
                    opacity: [1, 0.5, 1],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-3 h-3 bg-blue-500 rounded-full"
                />
              </div>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              <GradientText colors={['from-blue-500', 'to-purple-600']}>
                Content in Development
              </GradientText>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm currently working on some exciting articles about AI, machine learning, 
              automation tools, and web development. Stay tuned for in-depth tutorials, 
              project breakdowns, and insights from my development journey.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Planned topics include:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['AI with NEAT', 'Web Scraping', 'React Development', 'Automation Tools', 'Community Leadership'].map((topic) => (
                  <Tag key={topic} variant="default" size="sm" className="bg-gray-100 dark:bg-gray-800">
                    {topic}
                  </Tag>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


    </PageTransition>
  )
}

export default Blog
