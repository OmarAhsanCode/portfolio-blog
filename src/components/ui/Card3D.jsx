import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { useState } from 'react'

const Card3D = ({ children, className = '', intensity = 0.3, glowColor = 'blue', ...props }) => {
  const [isHovered, setIsHovered] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 })
  
  // Reduce intensity for users who prefer reduced motion
  const effectiveIntensity = shouldReduceMotion ? 0.1 : intensity
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${25 * effectiveIntensity}deg`, `${-25 * effectiveIntensity}deg`])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`${-25 * effectiveIntensity}deg`, `${25 * effectiveIntensity}deg`])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const glowColors = {
    blue: 'from-blue-500/30 via-cyan-500/30 to-blue-600/30',
    purple: 'from-purple-500/30 via-pink-500/30 to-purple-600/30',
    pink: 'from-pink-500/30 via-rose-500/30 to-pink-600/30',
    green: 'from-green-500/30 via-emerald-500/30 to-green-600/30',
    orange: 'from-orange-500/30 via-yellow-500/30 to-orange-600/30'
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        scale: isHovered ? 1.02 : 1,
        zIndex: isHovered ? 10 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      className={`relative transform-gpu group isolate ${className}`}
      {...props}
    >
      {/* Enhanced Glow effect */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${glowColors[glowColor] || glowColors.blue} rounded-xl blur-lg pointer-events-none`}
        style={{
          transform: 'translateZ(-20px)',
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.05 : 0.95,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Secondary glow */}
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r ${glowColors[glowColor] || glowColors.blue} rounded-xl blur-md pointer-events-none`}
        style={{
          transform: 'translateZ(-10px)',
        }}
        animate={{
          opacity: isHovered ? 0.4 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* 3D layers */}
      <motion.div 
        style={{ 
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d'
        }}
        className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 dark:border-gray-700/20"
        animate={{
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        }}
      >
        {children}
        
        {/* Enhanced reflection effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/5 to-transparent rounded-xl"
          style={{
            transform: 'translateZ(1px)',
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl"
          style={{
            transform: 'translateX(-100%)',
          }}
          animate={{
            transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default Card3D
