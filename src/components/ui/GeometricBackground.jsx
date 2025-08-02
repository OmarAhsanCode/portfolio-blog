import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const GeometricBackground = ({ density = 'medium', interactive = true }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [shapes, setShapes] = useState([])

  useEffect(() => {
    const densityMap = {
      low: 15,
      medium: 25,
      high: 40
    }
    
    const generateShapes = () => {
      const newShapes = []
      const count = densityMap[density] || 25

      for (let i = 0; i < count; i++) {
        newShapes.push({
          id: i,
          type: Math.random() > 0.5 ? 'circle' : 'square',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 40 + 10,
          rotation: Math.random() * 360,
          opacity: Math.random() * 0.1 + 0.02,
          animationDelay: Math.random() * 5,
          speed: Math.random() * 20 + 10
        })
      }
      setShapes(newShapes)
    }

    generateShapes()
  }, [density])

  useEffect(() => {
    if (!interactive) return

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [interactive])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating geometric shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size
          }}
          animate={{
            y: [0, -100, 0],
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [1, 1.2, 1],
            x: interactive ? [
              0, 
              (mousePosition.x - shape.x) * 0.1,
              0
            ] : [0, Math.sin(shape.id) * 20, 0]
          }}
          transition={{
            duration: shape.speed,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.animationDelay
          }}
        >
          {shape.type === 'circle' ? (
            <div 
              className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600"
              style={{ opacity: shape.opacity }}
            />
          ) : (
            <div 
              className="w-full h-full bg-gradient-to-br from-pink-500 to-orange-500 rotate-45"
              style={{ opacity: shape.opacity }}
            />
          )}
        </motion.div>
      ))}

      {/* Interactive particles that follow mouse */}
      {interactive && (
        <>
          <motion.div
            className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm"
            animate={{
              x: mousePosition.x + '%',
              y: mousePosition.y + '%',
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              mass: 0.1
            }}
            style={{ opacity: 0.3 }}
          />
          <motion.div
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-sm"
            animate={{
              x: mousePosition.x + '%',
              y: mousePosition.y + '%',
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 0.2
            }}
            style={{ opacity: 0.4 }}
          />
        </>
      )}

      {/* Animated mesh gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 70%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)
          `
        }}
        animate={{
          backgroundPosition: [
            '20% 20%, 80% 80%, 40% 70%',
            '80% 20%, 20% 80%, 70% 40%',
            '20% 20%, 80% 80%, 40% 70%'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default GeometricBackground
