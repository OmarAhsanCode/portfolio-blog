import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgress = ({ color = 'blue', position = 'top' }) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const colors = {
    blue: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    purple: 'bg-gradient-to-r from-purple-500 to-pink-500',
    green: 'bg-gradient-to-r from-green-500 to-emerald-500',
    orange: 'bg-gradient-to-r from-orange-500 to-yellow-500'
  }

  const positions = {
    top: 'top-0',
    bottom: 'bottom-0'
  }

  return (
    <motion.div
      className={`fixed left-0 right-0 h-1 ${colors[color]} origin-left z-50 ${positions[position]}`}
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
