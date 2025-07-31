import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'

const Card3D = ({ children, className = '', intensity = 0.1, ...props }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${25 * intensity}deg`, `${-25 * intensity}deg`])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`${-25 * intensity}deg`, `${25 * intensity}deg`])

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
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      className={`relative transform-gpu hover:shadow-2xl transition-shadow duration-300 ${className}`}
      {...props}
    >
      {/* 3D layers */}
      <div 
        style={{ 
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d'
        }}
        className="relative"
      >
        {children}
      </div>
      
      {/* Reflection effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          transform: 'translateZ(1px)',
        }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        style={{
          transform: 'translateZ(-10px)',
        }}
        animate={{
          opacity: isHovered ? 0.3 : 0,
        }}
      />
    </motion.div>
  )
}

export default Card3D
