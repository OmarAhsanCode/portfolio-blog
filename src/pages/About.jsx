import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Download, MapPin, Calendar, Coffee, Code, Heart, Award, Users } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import Card from '../components/ui/Card'
import Tag from '../components/ui/Tag'
import Button from '../components/ui/Button'

const skills = [
  { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'TailwindCSS', 'Next.js'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL'] },
  { category: 'Tools & Other', items: ['Git', 'Docker', 'AWS', 'Figma', 'Jest'] }
]

const timeline = [
  {
    year: '2024',
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    description: 'Leading development of scalable web applications using React and Node.js.',
    type: 'work'
  },
  {
    year: '2023',
    title: 'AWS Certified Developer',
    company: 'Amazon Web Services',
    description: 'Achieved AWS Certified Developer - Associate certification.',
    type: 'achievement'
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    company: 'Startup XYZ',
    description: 'Built multiple web applications from concept to deployment.',
    type: 'work'
  },
  {
    year: '2021',
    title: 'Computer Science Degree',
    company: 'University Name',
    description: 'Bachelor of Science in Computer Science with honors.',
    type: 'education'
  }
]

const stats = [
  { icon: Code, label: 'Projects Completed', value: '50+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
  { icon: Users, label: 'Happy Clients', value: '25+' },
  { icon: Award, label: 'Awards Won', value: '5' }
]

const funFacts = [
  'I can solve a Rubik\'s cube in under 2 minutes',
  'I\'ve traveled to 15 different countries',
  'I make the best coffee in the office (self-proclaimed)',
  'I once debugged code in my sleep and woke up with the solution',
  'I speak 3 programming languages fluently: JavaScript, Python, and TypeScript'
]

const About = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>About - Your Name</title>
        <meta name="description" content="Learn more about me, my journey, skills, and what drives my passion for development." />
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
                About <span className="gradient-text">Me</span>
              </h1>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Hi! I'm a passionate full-stack developer with over 3 years of experience creating 
                  digital experiences that make a difference. I love the challenge of turning complex 
                  problems into simple, beautiful solutions.
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open source projects, or sharing knowledge through blog posts and mentoring. 
                  I believe in continuous learning and staying curious about the ever-evolving 
                  world of technology.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
                <div className="flex items-center space-x-1">
                  <MapPin size={16} />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>Available for work</span>
                </div>
              </div>

              <Button 
                icon={<Download size={18} />}
                size="lg"
              >
                Download Resume
              </Button>
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
                    src="/api/placeholder/320/320" 
                    alt="Your Name"
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
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of the technologies I work with on a regular basis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={skillGroup.category} delay={index * 0.1}>
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
              </Card>
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
              My Journey
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
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                        {item.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </Card>
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
              Fun Facts About Me
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
