import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Code, 
  Palette, 
  Server
} from 'lucide-react'

const skillsData = [
  {
    category: 'Frontend',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'Vue.js', level: 85, icon: '🟢' },
      { name: 'TypeScript', level: 90, icon: '🔷' },
      { name: 'TailwindCSS', level: 95, icon: '🎨' },
      { name: 'Next.js', level: 88, icon: '▲' }
    ]
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 92, icon: '🟢' },
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'Express', level: 90, icon: '🚀' },
      { name: 'PostgreSQL', level: 83, icon: '🐘' },
      { name: 'MongoDB', level: 80, icon: '🍃' }
    ]
  },
  {
    category: 'Tools & Design',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Git', level: 95, icon: '📚' },
      { name: 'Docker', level: 78, icon: '🐳' },
      { name: 'AWS', level: 75, icon: '☁️' },
      { name: 'Figma', level: 85, icon: '🎨' },
      { name: 'Jest', level: 82, icon: '🧪' }
    ]
  }
]

const SkillVisualization = () => {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Category Selector */}
      <div className="flex justify-center mb-12">
        <div className="flex space-x-2 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-2xl p-2">
          {skillsData.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.button
                key={category.category}
                onClick={() => setSelectedCategory(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-gray-700/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent size={20} />
                <span>{category.category}</span>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Skills Display */}
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillsData[selectedCategory].skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
            className="group relative"
          >
            {/* 3D Card Container */}
            <motion.div
              className={`relative p-6 bg-gradient-to-br ${skillsData[selectedCategory].color} rounded-2xl shadow-xl overflow-hidden cursor-pointer`}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Background Animation */}
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: hoveredSkill === skill.name 
                    ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)'
                    : 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Skill Icon */}
              <motion.div
                className="text-4xl mb-4 text-center"
                animate={{
                  scale: hoveredSkill === skill.name ? 1.2 : 1,
                  rotate: hoveredSkill === skill.name ? 10 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {skill.icon}
              </motion.div>

              {/* Skill Name */}
              <h3 className="text-white font-bold text-lg text-center mb-4">
                {skill.name}
              </h3>

              {/* Animated Progress Bar */}
              <div className="relative">
                <div className="flex justify-between text-white/80 text-sm mb-2">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                
                <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-white/90 rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ 
                      duration: 1, 
                      delay: index * 0.1 + 0.5,
                      ease: 'easeOut'
                    }}
                  >
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/50 rounded-full"
                      animate={{
                        opacity: hoveredSkill === skill.name ? [0.5, 1, 0.5] : 0.5,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: hoveredSkill === skill.name ? Infinity : 0,
                      }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Floating particles */}
              {hoveredSkill === skill.name && (
                <>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      initial={{ 
                        x: Math.random() * 200 - 100,
                        y: Math.random() * 200 - 100,
                        opacity: 0,
                        scale: 0
                      }}
                      animate={{
                        x: Math.random() * 400 - 200,
                        y: Math.random() * 400 - 200,
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating skill comparison */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-gray-600 dark:text-gray-400">
          Hover over skills to see interactive effects
        </p>
      </motion.div>
    </div>
  )
}

export default SkillVisualization
