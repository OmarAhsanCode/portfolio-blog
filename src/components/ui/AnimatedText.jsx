import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export const TypewriterText = ({ text, speed = 50, className = '', onComplete }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-6 bg-current ml-1"
      />
    </span>
  )
}

export const FadeInWords = ({ text, children, className = '', stagger = 0.1 }) => {
  const content = text || children
  if (!content) return null
  
  const words = content.split(' ')

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * stagger,
            ease: "easeOut"
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export const GlitchText = ({ text, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={isGlitching ? {
        x: [0, -2, 2, 0],
        textShadow: [
          '0 0 0 transparent',
          '2px 0 0 #ff0000, -2px 0 0 #00ffff',
          '0 0 0 transparent'
        ]
      } : {}}
      transition={{ duration: 0.2 }}
    >
      {text}
      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-red-500 opacity-70"
            animate={{ x: [0, 2, -1, 0] }}
            transition={{ duration: 0.2 }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-cyan-500 opacity-70"
            animate={{ x: [0, -2, 1, 0] }}
            transition={{ duration: 0.2 }}
          >
            {text}
          </motion.span>
        </>
      )}
    </motion.span>
  )
}

export const FloatingText = ({ text, children, className = '' }) => {
  const content = text || children
  if (!content) return null
  
  return (
    <motion.span
      className={className}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {content.split('').map((char, index) => (
        <motion.span
          key={index}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export const GradientText = ({ text, className = '', gradient = 'blue-purple' }) => {
  const gradients = {
    'blue-purple': 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600',
    'pink-orange': 'bg-gradient-to-r from-pink-500 via-red-500 to-orange-500',
    'green-blue': 'bg-gradient-to-r from-green-500 via-teal-500 to-blue-500',
    'purple-pink': 'bg-gradient-to-r from-purple-600 via-pink-600 to-red-500'
  }

  return (
    <motion.span
      className={`${gradients[gradient]} bg-clip-text text-transparent ${className}`}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        backgroundSize: '200% 100%'
      }}
    >
      {text}
    </motion.span>
  )
}

export const ScaleOnHover = ({ children, className = '', scale = 1.05 }) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        transition: { duration: 0.2 }
      }}
      whileTap={{
        scale: scale * 0.95,
        transition: { duration: 0.1 }
      }}
    >
      {children}
    </motion.div>
  )
}
