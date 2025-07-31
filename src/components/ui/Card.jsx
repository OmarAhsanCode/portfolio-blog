import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  onClick,
  delay = 0,
  ...props 
}) => {
  const hoverProps = hover ? {
    whileHover: { y: -4, scale: 1.02 },
    transition: { duration: 0.2 }
  } : {}

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      {...hoverProps}
      onClick={onClick}
      className={`card ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
