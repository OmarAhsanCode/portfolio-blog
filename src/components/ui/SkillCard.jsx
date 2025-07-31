import { motion } from 'framer-motion'
import { useState } from 'react'

const SkillCard = ({ skill, level, icon: Icon, color, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className={`relative p-6 rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${color}`}>
        {/* Background gradient on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl"
        />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0
            }}
            className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color} text-white`}
          >
            <Icon size={24} />
          </motion.div>
          
          {/* Skill name */}
          <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">
            {skill}
          </h3>
          
          {/* Progress bar */}
          <div className="mb-2">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
              <span>Proficiency</span>
              <span>{level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, delay: delay + 0.3 }}
                className={`h-2 rounded-full bg-gradient-to-r ${color === 'bg-blue-500' ? 'from-blue-400 to-blue-600' : color === 'bg-green-500' ? 'from-green-400 to-green-600' : 'from-purple-400 to-purple-600'}`}
              />
            </div>
          </div>
        </div>
        
        {/* Hover effect overlay */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0
          }}
          className="absolute top-2 right-2 w-3 h-3 bg-accent-500 rounded-full"
        />
      </div>
    </motion.div>
  )
}

export default SkillCard
