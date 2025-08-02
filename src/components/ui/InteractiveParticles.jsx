import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const InteractiveParticles = ({ 
  particleCount = 50, 
  connectionDistance = 100, 
  mouseRadius = 150,
  color = 'blue' 
}) => {
  const [particles, setParticles] = useState([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef(null)

  // Check if device is mobile for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const colors = {
    blue: {
      particle: 'rgba(59, 130, 246, 0.6)',
      connection: 'rgba(59, 130, 246, 0.2)'
    },
    purple: {
      particle: 'rgba(147, 51, 234, 0.6)',
      connection: 'rgba(147, 51, 234, 0.2)'
    },
    pink: {
      particle: 'rgba(236, 72, 153, 0.6)',
      connection: 'rgba(236, 72, 153, 0.2)'
    },
    green: {
      particle: 'rgba(34, 197, 94, 0.6)',
      connection: 'rgba(34, 197, 94, 0.2)'
    }
  }

  // Initialize particles
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      originalSize: Math.random() * 3 + 1
    }))

    setParticles(newParticles)
  }, [particleCount, dimensions])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let { x, y, vx, vy } = particle

          // Move particle
          x += vx
          y += vy

          // Bounce off walls
          if (x <= 0 || x >= dimensions.width) vx *= -1
          if (y <= 0 || y >= dimensions.height) vy *= -1

          // Keep in bounds
          x = Math.max(0, Math.min(dimensions.width, x))
          y = Math.max(0, Math.min(dimensions.height, y))

          // Mouse interaction
          const dx = mousePosition.x - x
          const dy = mousePosition.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          let size = particle.originalSize
          if (distance < mouseRadius) {
            const force = (mouseRadius - distance) / mouseRadius
            size = particle.originalSize * (1 + force * 2)
            
            // Repel from mouse
            const angle = Math.atan2(dy, dx)
            vx -= Math.cos(angle) * force * 0.1
            vy -= Math.sin(angle) * force * 0.1
          }

          // Add some damping
          vx *= 0.99
          vy *= 0.99

          return { ...particle, x, y, vx, vy, size }
        })
      )
    }

    const interval = setInterval(animateParticles, 16) // 60fps
    return () => clearInterval(interval)
  }, [mousePosition, dimensions, mouseRadius])

  // Calculate connections
  const getConnections = () => {
    const connections = []
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < connectionDistance) {
          const opacity = 1 - (distance / connectionDistance)
          connections.push({
            x1: particles[i].x,
            y1: particles[i].y,
            x2: particles[j].x,
            y2: particles[j].y,
            opacity: opacity * 0.5
          })
        }
      }
    }
    return connections
  }

  const connections = getConnections()

  // Don't render particles on mobile devices for better performance
  if (isMobile) {
    return <div className="absolute inset-0 pointer-events-none" />
  }

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <svg className="w-full h-full">
        {/* Connection lines */}
        {connections.map((connection, index) => (
          <motion.line
            key={index}
            x1={connection.x1}
            y1={connection.y1}
            x2={connection.x2}
            y2={connection.y2}
            stroke={colors[color]?.connection || colors.blue.connection}
            strokeWidth="1"
            opacity={connection.opacity}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
        
        {/* Particles */}
        {particles.map(particle => (
          <motion.circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill={colors[color]?.particle || colors.blue.particle}
            animate={{
              cx: particle.x,
              cy: particle.y,
              r: particle.size
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15
            }}
          />
        ))}
        
        {/* Mouse cursor effect */}
        <motion.circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r={mouseRadius}
          fill="none"
          stroke={colors[color]?.particle || colors.blue.particle}
          strokeWidth="1"
          opacity="0.1"
          animate={{
            cx: mousePosition.x,
            cy: mousePosition.y
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
        />
      </svg>
    </div>
  )
}

export default InteractiveParticles
