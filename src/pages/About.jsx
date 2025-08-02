import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Download, MapPin, Calendar, Coffee, Code, Heart, Award, Users } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import Card3D from '../components/ui/Card3D'
import Tag from '../components/ui/Tag'
import { GlassCard, GlassButton } from '../components/ui/GlassComponents'
import { TypewriterText, FadeInWords, GradientText, FloatingText } from '../components/ui/AnimatedText'
import AnimatedGradientBackground from '../components/ui/AnimatedGradientBackground'
import GeometricBackground from '../components/ui/GeometricBackground'
import InteractiveParticles from '../components/ui/InteractiveParticles'
import ScrollProgress from '../components/ui/ScrollProgress'

const skills = [
  { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'Express', 'REST API'] },
  { category: 'AI & Tools', items: ['NEAT', 'Machine Learning', 'GitHub', 'Docker', 'Firebase', 'n8n', 'Figma'] }
]

const timeline = [
  {
    year: '2024',
    title: 'ML Intern',
    company: 'IIT Guwahati',
    description: 'Worked on machine learning models and data handling tasks for 1.5 months.',
    type: 'work'
  },
  {
    year: '2024',
    title: 'President - GeekRoom Integral Chapter',
    company: 'Integral University',
    description: 'Led Lucknow\'s first student tech community; hosted events for 100+ students.',
    type: 'achievement'
  },
  {
    year: '2024',
    title: 'Multiple Certifications',
    company: 'IBM, Google',
    description: 'Completed certifications in ML, Cloud Computing, and Full Stack Development.',
    type: 'achievement'
  },
  {
    year: '2022',
    title: 'B.Tech CSE (Cloud Computing / AI)',
    company: 'Integral University',
    description: 'Currently pursuing Bachelor of Technology in Computer Science Engineering with specialization in Cloud Computing and AI.',
    type: 'education'
  }
]

const stats = [
  { icon: Code, label: 'Projects Completed', value: '15+' },
  { icon: Coffee, label: 'Hackathons Joined', value: '6+' },
  { icon: Users, label: 'Students Reached', value: '100+' },
  { icon: Award, label: 'Certifications', value: '5' }
]

const funFacts = [
  'I trained AI to play Flappy Bird using neural evolution',
  'Built 15+ automation and AI tools in my first year of coding',
  'Self-taught developer from Lucknow, India',
  'Hosted coding sessions for over 100 students as GeekRoom President',
  'Participated in 6+ national-level hackathons including SIH\'24 and Adobe Hackathon 2025',
  'Obsessed with clean UI design and minimalist interfaces'
]

const About = () => {
  return (
    <PageTransition>
      <ScrollProgress />
      <AnimatedGradientBackground variant="subtle" />
      <GeometricBackground density="low" />
      <InteractiveParticles particleCount={25} />
      
      <Helmet>
        <title>About - Omar Ahsan</title>
        <meta name="description" content="Learn more about me, my journey in AI/Cloud Engineering, skills, and what drives my passion for automation and intelligent systems." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                <FadeInWords text="About" /> <GradientText colors={['from-blue-500', 'to-purple-600']}>Me</GradientText>
              </h1>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Hi! I'm a passionate AI/Cloud Engineering student with 1 year of experience creating 
                  automation tools, intelligent agents, and dynamic web applications. I love blending 
                  machine learning with full-stack development to build solutions that solve real-world problems.
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  When I'm not coding, you can find me exploring new AI technologies, leading tech communities 
                  through GeekRoom, or participating in hackathons. I've built AI-powered assistants, 
                  trained neural networks to play games, and created automation workflows that make life easier. 
                  I believe in continuous learning and staying curious about the ever-evolving 
                  intersection of AI, cloud computing, and automation.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
                <div className="flex items-center space-x-1">
                  <MapPin size={16} />
                  <span>Lucknow, India (Ready to Relocate)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>Available for internships</span>
                </div>
              </div>

              <a 
                href="/Omar Resume.pdf" 
                download="Omar_Ahsan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlassButton 
                  icon={<Download size={18} />}
                  size="lg"
                  className="bg-blue-500/20 hover:bg-blue-500/30 border-blue-500/30"
                >
                  Download Resume
                </GlassButton>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white dark:border-dark-800 shadow-2xl">
                  <img 
                    src="/Profile Photo.jpg" 
                    alt="Omar Ahsan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
                >
                  <Heart size={24} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-4">
                    <Icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              <FloatingText text="Skills & Technologies" />
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of the technologies I work with on a regular basis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skills.map((skillGroup, index) => (
              <Card3D key={skillGroup.category} delay={index * 0.1} glowColor="purple" className="mb-4">
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skillGroup.items.map((skill) => (
                      <Tag key={skill} variant="primary">
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              <GradientText colors={['from-green-500', 'to-blue-500']}>My Journey</GradientText>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Key milestones in my professional and educational journey.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300 dark:bg-dark-600" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-6 pb-8"
                >
                  {/* Timeline dot */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    item.type === 'work' ? 'bg-primary-600' :
                    item.type === 'achievement' ? 'bg-accent-600' :
                    'bg-green-600'
                  }`}>
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <GlassCard className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                        {item.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </GlassCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
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
              <TypewriterText text="Fun Facts About Me" />
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Because life isn't just about code (though I do love it).
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 bg-white dark:bg-dark-800 rounded-lg border border-gray-200 dark:border-dark-700"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {fact}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default About
