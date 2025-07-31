import { motion } from 'framer-motion'
import { useState } from 'react'
import { Github, ExternalLink, Star, GitBranch, Eye } from 'lucide-react'
import OptimizedImage from './OptimizedImage'

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl"
    >
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-gray-800/10 dark:to-gray-900/5 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-2xl" />
      
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-700 rounded-2xl"
      />
      
      <div className="relative z-10 p-6">
        {/* Project image */}
        <div className="relative overflow-hidden rounded-xl mb-6">
          <OptimizedImage
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay with tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            className="absolute inset-0 bg-black/70 flex items-center justify-center p-4"
          >
            <div className="text-center">
              <p className="text-white font-medium mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Project info */}
        <div className="space-y-4">
          {/* Title and category */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
              {project.description}
            </p>
          </div>
          
          {/* Stats */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Star size={16} />
              <span>{project.stars || '24'}</span>
            </div>
            <div className="flex items-center space-x-1">
              <GitBranch size={16} />
              <span>{project.forks || '8'}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye size={16} />
              <span>{project.views || '156'}</span>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex space-x-3 pt-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 rounded-lg transition-colors group/btn"
            >
              <Github size={16} className="group-hover/btn:text-primary-600 dark:group-hover/btn:text-primary-400 transition-colors" />
              <span className="text-sm font-medium">Code</span>
            </motion.a>
            
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
            >
              <ExternalLink size={16} />
              <span className="text-sm font-medium">Demo</span>
            </motion.a>
          </div>
        </div>
        
        {/* Floating elements */}
        <motion.div
          animate={{
            y: isHovered ? [-2, 2, -2] : 0,
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="absolute top-4 right-4 w-4 h-4 bg-accent-500 rounded-full opacity-60"
        />
        
        <motion.div
          animate={{
            y: isHovered ? [2, -2, 2] : 0,
          }}
          transition={{
            duration: 2.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-4 left-4 w-3 h-3 bg-primary-400 rounded-full opacity-40"
        />
      </div>
    </motion.div>
  )
}

export default ProjectCard
