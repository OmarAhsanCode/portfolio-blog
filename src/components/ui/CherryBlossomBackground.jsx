import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flower2, Settings } from 'lucide-react'

const CherryBlossomBackground = () => {
  const [petals, setPetals] = useState([])
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const containerRef = useRef(null)
  const petalIdRef = useRef(0)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setIsAnimationEnabled(false)
    }
  }, [])

  // Generate random petal
  const createPetal = () => {
    const id = petalIdRef.current++
    const size = Math.random() * 12 + 6 // 6-18px (larger, more realistic)
    const startX = Math.random() * window.innerWidth
    const duration = Math.random() * 6 + 3 // 3-9 seconds (much faster)
    const delay = Math.random() * 2
    const rotation = Math.random() * 360
    const opacity = Math.random() * 0.6 + 0.4 // More visible
    const color = Math.random() > 0.3 ? 'pink' : 'white' // More white petals for realism
    const windStrength = Math.random() * 150 + 50 // Stronger wind effect
    
    return {
      id,
      startX,
      size,
      duration,
      delay,
      rotation,
      opacity,
      color,
      windStrength
    }
  }

  // Generate petals continuously
  useEffect(() => {
    if (!isAnimationEnabled) return

      const generatePetals = () => {
        setPetals(prev => {
          // Keep only recent petals to prevent memory leaks
          const filtered = prev.slice(-50) // More petals for faster flow
          // Add 4-6 new petals for faster, denser flow
          const newPetals = Array.from({ length: Math.floor(Math.random() * 3) + 4 }, createPetal)
          return [...filtered, ...newPetals]
        })
      }

      generatePetals() // Initial petals
      const interval = setInterval(generatePetals, 800) // New petals every 0.8 seconds (faster)

      return () => clearInterval(interval)
  }, [isAnimationEnabled])

  // Petal component with realistic movement
  const Petal = ({ petal }) => (
    <motion.div
      key={petal.id}
      className={`absolute pointer-events-none ${
        petal.color === 'pink' 
          ? 'text-pink-200' 
          : 'text-white'
      }`}
      style={{
        left: petal.startX,
        top: -20,
        fontSize: `${petal.size}px`,
        opacity: petal.opacity,
        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
      }}
      initial={{ 
        y: -20, 
        x: 0, 
        rotate: petal.rotation,
        scale: 0 
      }}
      animate={{ 
        y: window.innerHeight + 100,
        x: [
          0, 
          Math.sin(petal.id * 0.5) * petal.windStrength, 
          Math.sin(petal.id * 1.2) * -petal.windStrength * 0.8, 
          Math.sin(petal.id * 2) * petal.windStrength * 0.6,
          Math.sin(petal.id * 2.8) * -petal.windStrength * 0.4
        ],
        rotate: [petal.rotation, petal.rotation + 180, petal.rotation + 540],
        scale: [0, 1, 1, 1, 0.6]
      }}
      transition={{
        duration: petal.duration,
        delay: petal.delay,
        ease: "easeOut",
        x: {
          duration: petal.duration,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.7, 1]
        },
        rotate: {
          duration: petal.duration,
          ease: "linear"
        }
      }}
      onAnimationComplete={() => {
        setPetals(prev => prev.filter(p => p.id !== petal.id))
      }}
    >
      🌸
    </motion.div>
  )

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Sunset Background Gradient - Light mode only */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100 via-pink-50 to-rose-100 dark:opacity-0 transition-opacity duration-500" />
      
      {/* Cherry Blossom Tree - More Realistic */}
      <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none">
        {/* Tree branches with more realistic structure */}
        <svg 
          className="w-full h-full text-amber-900 dark:opacity-0 transition-opacity duration-500" 
          viewBox="0 0 1200 240"
          preserveAspectRatio="xMidYMin slice"
        >
          {/* Main thick branches */}
          <path 
            d="M0,80 Q150,60 300,70 Q450,50 600,60 Q750,45 900,55 Q1050,65 1200,50" 
            stroke="currentColor" 
            strokeWidth="12" 
            fill="none"
            className="opacity-80"
          />
          
          {/* Secondary thick branches */}
          <path 
            d="M200,75 Q250,100 350,120 Q400,130 450,140" 
            stroke="currentColor" 
            strokeWidth="8" 
            fill="none"
            className="opacity-70"
          />
          <path 
            d="M600,65 Q650,85 750,100 Q800,110 850,125" 
            stroke="currentColor" 
            strokeWidth="8" 
            fill="none"
            className="opacity-70"
          />
          
          {/* Medium branches */}
          <path 
            d="M100,85 Q130,110 170,130" 
            stroke="currentColor" 
            strokeWidth="5" 
            fill="none"
            className="opacity-60"
          />
          <path 
            d="M320,75 Q360,95 400,115" 
            stroke="currentColor" 
            strokeWidth="5" 
            fill="none"
            className="opacity-60"
          />
          <path 
            d="M500,62 Q540,82 580,102" 
            stroke="currentColor" 
            strokeWidth="5" 
            fill="none"
            className="opacity-60"
          />
          <path 
            d="M720,58 Q760,78 800,98" 
            stroke="currentColor" 
            strokeWidth="5" 
            fill="none"
            className="opacity-60"
          />
          <path 
            d="M950,60 Q990,80 1030,100" 
            stroke="currentColor" 
            strokeWidth="5" 
            fill="none"
            className="opacity-60"
          />
          
          {/* Small twigs with more realistic blossom clusters */}
          <g className="text-pink-200">
            {/* Blossom clusters */}
            <circle cx="140" cy="95" r="4" fill="currentColor" opacity="0.9" />
            <circle cx="145" cy="98" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="150" cy="92" r="3.5" fill="currentColor" opacity="0.85" />
            
            <circle cx="340" cy="85" r="4" fill="currentColor" opacity="0.9" />
            <circle cx="345" cy="88" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="350" cy="82" r="3.5" fill="currentColor" opacity="0.85" />
            
            <circle cx="560" cy="72" r="4" fill="currentColor" opacity="0.9" />
            <circle cx="565" cy="75" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="570" cy="69" r="3.5" fill="currentColor" opacity="0.85" />
            
            <circle cx="780" cy="78" r="4" fill="currentColor" opacity="0.9" />
            <circle cx="785" cy="81" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="790" cy="75" r="3.5" fill="currentColor" opacity="0.85" />
            
            <circle cx="1010" cy="80" r="4" fill="currentColor" opacity="0.9" />
            <circle cx="1015" cy="83" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="1020" cy="77" r="3.5" fill="currentColor" opacity="0.85" />
          </g>
          
          {/* White blossoms mixed in */}
          <g className="text-white">
            <circle cx="165" cy="100" r="3" fill="currentColor" opacity="0.9" />
            <circle cx="365" cy="90" r="3" fill="currentColor" opacity="0.9" />
            <circle cx="585" cy="77" r="3" fill="currentColor" opacity="0.9" />
            <circle cx="805" cy="83" r="3" fill="currentColor" opacity="0.9" />
            <circle cx="1035" cy="85" r="3" fill="currentColor" opacity="0.9" />
          </g>
        </svg>
      </div>

      {/* Falling Petals */}
      <div ref={containerRef} className="relative w-full h-full dark:opacity-0 transition-opacity duration-500">
        <AnimatePresence>
          {isAnimationEnabled && petals.map(petal => (
            <Petal key={petal.id} petal={petal} />
          ))}
        </AnimatePresence>
      </div>

      {/* Performance Controls */}
      <div className="fixed top-20 right-4 z-40 pointer-events-auto">
        <div className="relative">
          {/* Toggle Button */}
          <motion.button
            onClick={() => setShowControls(!showControls)}
            className="p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Animation Settings"
          >
            <Settings size={18} />
          </motion.button>

          {/* Controls Panel */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                className="absolute top-12 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 min-w-48"
              >
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <Flower2 size={16} />
                  Cherry Blossoms
                </h3>
                
                <div className="space-y-3">
                  {/* Animation Toggle */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Animation
                    </span>
                    <motion.button
                      onClick={() => setIsAnimationEnabled(!isAnimationEnabled)}
                      className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                        isAnimationEnabled 
                          ? 'bg-pink-500' 
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                        animate={{ 
                          x: isAnimationEnabled ? 20 : 2 
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 30 
                        }}
                      />
                    </motion.button>
                  </div>
                  
                  {/* Info Text */}
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {isAnimationEnabled 
                      ? 'Petals are falling gently' 
                      : 'Animation paused for performance'
                    }
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default CherryBlossomBackground
