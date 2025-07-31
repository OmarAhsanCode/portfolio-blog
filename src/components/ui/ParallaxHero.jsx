import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const ParallaxHero = ({ children }) => {
  const ref = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const y3 = useTransform(scrollY, [0, 300], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])
  
  // Mouse parallax
  const springConfig = { stiffness: 150, damping: 30, mass: 0.1 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const xPct = (clientX - innerWidth / 2) / innerWidth
      const yPct = (clientY - innerHeight / 2) / innerHeight
      x.set(xPct * 50)
      y.set(yPct * 50)
      setMousePosition({ x: clientX, y: clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [x, y])

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Animated background layers */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: y3, opacity }}
      >
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 via-accent-50/30 to-primary-50/40 dark:from-primary-900/20 dark:via-accent-900/10 dark:to-primary-800/15" />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full blur-xl"
          style={{ x, y }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-tl from-accent-400/20 to-primary-400/20 transform rotate-45 blur-lg"
          style={{ 
            x: useTransform(x, (value) => value * -0.5),
            y: useTransform(y, (value) => value * -0.3)
          }}
          animate={{
            scale: [1, 0.8, 1],
            rotate: [45, 225, 405],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-primary-300/15 to-accent-300/15 rounded-3xl blur-2xl"
          style={{ 
            x: useTransform(x, (value) => value * 0.7),
            y: useTransform(y, (value) => value * 0.8)
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Particle grid */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{ y: y2, opacity: useTransform(opacity, [0, 1], [0, 0.6]) }}
      >
        <div className="grid grid-cols-12 gap-8 h-full p-8 opacity-30">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-primary-400 rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-20"
        style={{ y: y1, opacity }}
      >
        {children}
      </motion.div>

      {/* Interactive light following cursor */}
      <motion.div
        className="absolute pointer-events-none z-30"
        style={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
      >
        <div className="w-96 h-96 bg-gradient-radial from-primary-300/20 via-accent-200/10 to-transparent rounded-full blur-3xl" />
      </motion.div>
    </div>
  )
}

export default ParallaxHero
