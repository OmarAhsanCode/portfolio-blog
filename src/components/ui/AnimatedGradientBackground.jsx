import { motion } from 'framer-motion'

const AnimatedGradientBackground = ({ children, variant = 'default' }) => {
  const gradientVariants = {
    default: {
      background: [
        'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
      ]
    },
    hero: {
      background: [
        'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 50%, #667eea 100%)',
        'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
      ]
    },
    subtle: {
      background: [
        'linear-gradient(45deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
        'linear-gradient(45deg, rgba(240, 147, 251, 0.1) 0%, rgba(245, 87, 108, 0.1) 100%)',
        'linear-gradient(45deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%)',
        'linear-gradient(45deg, rgba(67, 233, 123, 0.1) 0%, rgba(56, 249, 215, 0.1) 100%)',
        'linear-gradient(45deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'
      ]
    }
  }

  return (
    <motion.div
      className="relative w-full h-full"
      animate={gradientVariants[variant]}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedGradientBackground
