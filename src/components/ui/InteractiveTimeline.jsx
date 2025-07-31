import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, MapPin, ExternalLink, Award, Building, GraduationCap } from 'lucide-react'

const timelineData = [
  {
    id: 1,
    type: 'education',
    title: 'Master of Computer Science',
    organization: 'Tech University',
    location: 'San Francisco, CA',
    period: '2018 - 2020',
    description: 'Specialized in Full-Stack Development and UI/UX Design. Graduated Magna Cum Laude with a focus on modern web technologies.',
    achievements: ['Magna Cum Laude', 'Dean\'s List', 'Outstanding Project Award'],
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-500',
    link: 'https://university.edu'
  },
  {
    id: 2,
    type: 'work',
    title: 'Senior Frontend Developer',
    organization: 'TechCorp Innovation',
    location: 'New York, NY',
    period: '2020 - 2022',
    description: 'Led the development of responsive web applications using React, Vue.js, and modern CSS frameworks. Collaborated with cross-functional teams to deliver high-quality user experiences.',
    achievements: ['Team Lead', 'Performance Optimization Expert', 'Mentored 5 Junior Developers'],
    icon: Building,
    color: 'from-green-500 to-emerald-500',
    link: 'https://techcorp.com'
  },
  {
    id: 3,
    type: 'work',
    title: 'Full-Stack Developer',
    organization: 'StartupX',
    location: 'Remote',
    period: '2022 - Present',
    description: 'Building scalable web applications from concept to deployment. Working with React, Node.js, PostgreSQL, and cloud technologies to create innovative solutions.',
    achievements: ['Architecture Design', 'DevOps Implementation', 'Product Strategy'],
    icon: Building,
    color: 'from-purple-500 to-pink-500',
    link: 'https://startupx.com'
  },
  {
    id: 4,
    type: 'achievement',
    title: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    location: 'Online',
    period: '2023',
    description: 'Achieved professional certification in cloud architecture and solutions design. Demonstrates expertise in designing distributed systems on AWS.',
    achievements: ['Professional Certification', 'Cloud Architecture', 'Solutions Design'],
    icon: Award,
    color: 'from-orange-500 to-red-500',
    link: 'https://aws.amazon.com/certification/'
  }
]

const InteractiveTimeline = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Central Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30" />

      {/* Timeline Items */}
      <div className="space-y-16">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            isSelected={selectedItem === item.id}
            isHovered={hoveredItem === item.id}
            onSelect={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
            onHover={() => setHoveredItem(item.id)}
            onLeave={() => setHoveredItem(null)}
          />
        ))}
      </div>
    </div>
  )
}

const TimelineItem = ({ item, index, isSelected, isHovered, onSelect, onHover, onLeave }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.3, once: false })
  const isLeft = index % 2 === 0
  const IconComponent = item.icon

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={{ 
        opacity: isInView ? 1 : 0.3, 
        x: isInView ? 0 : (isLeft ? -50 : 50),
        scale: isInView ? 1 : 0.95
      }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      {/* Content Card */}
      <motion.div
        className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`relative p-6 bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl shadow-xl cursor-pointer overflow-hidden ${
            isSelected ? 'ring-2 ring-blue-500' : ''
          }`}
          onClick={onSelect}
          style={{
            background: `linear-gradient(135deg, ${item.color.includes('blue') ? 'rgba(59, 130, 246, 0.1)' : 
              item.color.includes('green') ? 'rgba(16, 185, 129, 0.1)' : 
              item.color.includes('purple') ? 'rgba(139, 92, 246, 0.1)' : 
              'rgba(249, 115, 22, 0.1)'} 0%, rgba(255,255,255,0.05) 100%)`,
          }}
        >
          {/* Animated Background */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0`}
            animate={{ opacity: isHovered ? 0.1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Header */}
          <div className={`flex items-start ${isLeft ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={isLeft ? 'text-right' : 'text-left'}>
              <motion.h3
                className="text-xl font-bold text-gray-800 dark:text-white mb-1"
                animate={{ color: isHovered ? '#3B82F6' : undefined }}
              >
                {item.title}
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                {item.organization}
              </p>
              
              {/* Period and Location */}
              <div className={`flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-500 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className={`text-gray-700 dark:text-gray-300 mb-4 ${isLeft ? 'text-right' : 'text-left'}`}>
            {item.description}
          </p>

          {/* Achievements */}
          <div className={`flex flex-wrap gap-2 mb-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            {item.achievements.map((achievement, i) => (
              <motion.span
                key={i}
                className={`px-3 py-1 bg-gradient-to-r ${item.color} text-white text-xs rounded-full font-medium shadow-lg`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {achievement}
              </motion.span>
            ))}
          </div>

          {/* Link */}
          {item.link && (
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors ${isLeft ? 'justify-end' : 'justify-start'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">Learn more</span>
              <ExternalLink size={14} />
            </motion.a>
          )}

          {/* Expansion Panel */}
          <AnimatePresence>
            {isSelected && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 pt-4 border-t border-white/20 dark:border-gray-700/20"
              >
                <div className={`space-y-3 ${isLeft ? 'text-right' : 'text-left'}`}>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Key Responsibilities:</h4>
                    <ul className={`space-y-1 text-sm text-gray-600 dark:text-gray-400 ${isLeft ? 'text-right' : 'text-left'}`}>
                      <li>• Led development of responsive web applications</li>
                      <li>• Collaborated with cross-functional teams</li>
                      <li>• Implemented modern development practices</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Technologies Used:</h4>
                    <div className={`flex flex-wrap gap-1 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                      {['React', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Central Icon */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 z-10"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ 
          scale: isInView ? 1 : 0.8, 
          rotate: isInView ? 0 : -90,
          y: isHovered ? -5 : 0
        }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ scale: 1.2, rotate: 10 }}
      >
        <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-full shadow-2xl border-4 border-white dark:border-gray-800`}>
          <IconComponent className="w-8 h-8 text-white" />
        </div>

        {/* Animated Ring */}
        <motion.div
          className={`absolute inset-0 rounded-full border-2 border-gradient-to-r ${item.color} opacity-30`}
          animate={{
            scale: isHovered ? [1, 1.3, 1] : 1,
            opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
          }}
        />
      </motion.div>

      {/* Connecting Line */}
      <div className={`w-5/12 h-px bg-gradient-to-r ${isLeft ? 'from-transparent to-gray-300 dark:to-gray-600' : 'from-gray-300 dark:from-gray-600 to-transparent'} ${isLeft ? 'order-last' : 'order-first'}`} />
    </motion.div>
  )
}

export default InteractiveTimeline
