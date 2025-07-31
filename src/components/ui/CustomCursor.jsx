import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    const mouseEnter = () => setIsHovering(true)
    const mouseLeave = () => setIsHovering(false)

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .cursor-pointer, .hover-effect')
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', mouseEnter)
      el.addEventListener('mouseleave', mouseLeave)
    })

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', mouseEnter)
        el.removeEventListener('mouseleave', mouseLeave)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      mixBlendMode: 'difference'
    }
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.3
        }}
      />
      
      {/* Trailing dots */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary-500 rounded-full pointer-events-none z-[9998] opacity-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0.1,
          delay: 0.05
        }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-accent-500 rounded-full pointer-events-none z-[9997] opacity-30"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0.15,
          delay: 0.1
        }}
      />
    </>
  )
}

export default CustomCursor
