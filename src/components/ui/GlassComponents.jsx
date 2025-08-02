import { motion } from 'framer-motion'

export const GlassCard = ({ 
  children, 
  className = '', 
  blur = 'md', 
  opacity = 10,
  border = true,
  glow = false,
  ...props 
}) => {
  const blurIntensity = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  }

  return (
    <motion.div
      className={`
        relative
        bg-white/${opacity} dark:bg-gray-800/${opacity}
        ${blurIntensity[blur]}
        ${border ? 'border border-white/20 dark:border-gray-700/20' : ''}
        rounded-xl
        shadow-xl
        ${glow ? 'shadow-2xl shadow-blue-500/10' : ''}
        ${className}
      `}
      whileHover={{
        scale: 1.02,
        boxShadow: glow 
          ? '0 25px 50px -12px rgba(59, 130, 246, 0.25)' 
          : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
      
      {/* Glass reflection */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 via-white/5 to-transparent pointer-events-none" />
    </motion.div>
  )
}

export const GlassButton = ({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'md',
  ...props 
}) => {
  const variants = {
    primary: 'bg-blue-500/20 border-blue-400/30 text-blue-900 dark:text-blue-100 hover:bg-blue-500/30',
    secondary: 'bg-gray-500/20 border-gray-400/30 text-gray-900 dark:text-gray-100 hover:bg-gray-500/30',
    accent: 'bg-purple-500/20 border-purple-400/30 text-purple-900 dark:text-purple-100 hover:bg-purple-500/30'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      className={`
        relative
        ${variants[variant]}
        ${sizes[size]}
        backdrop-blur-md
        border
        rounded-lg
        font-medium
        transition-all duration-200
        shadow-lg
        ${className}
      `}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)'
      }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
      
      {/* Glass shine effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/20 via-white/5 to-transparent pointer-events-none" />
    </motion.button>
  )
}

export const GlassNavbar = ({ children, className = '' }) => {
  return (
    <motion.nav
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-white/10 dark:bg-gray-900/10
        backdrop-blur-xl
        border-b border-white/20 dark:border-gray-700/20
        shadow-lg
        ${className}
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
      
      {/* Glass reflection */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
    </motion.nav>
  )
}

export const GlassModal = ({ 
  children, 
  isOpen, 
  onClose, 
  className = '' 
}) => {
  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Modal */}
      <motion.div
        className={`
          relative
          bg-white/20 dark:bg-gray-800/20
          backdrop-blur-xl
          border border-white/20 dark:border-gray-700/20
          rounded-2xl
          shadow-2xl
          max-w-lg w-full
          ${className}
        `}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        
        {/* Glass reflection */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 via-white/5 to-transparent pointer-events-none" />
      </motion.div>
    </motion.div>
  )
}

export const GlassInput = ({ 
  className = '', 
  placeholder = '',
  type = 'text',
  ...props 
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className={`
          w-full
          bg-white/10 dark:bg-gray-800/10
          backdrop-blur-md
          border border-white/20 dark:border-gray-700/20
          rounded-lg
          px-4 py-3
          text-gray-900 dark:text-gray-100
          placeholder-gray-500 dark:placeholder-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500/50
          focus:border-blue-500/50
          transition-all duration-200
          ${className}
        `}
        {...props}
      />
      
      {/* Glass shine effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/10 via-white/5 to-transparent pointer-events-none" />
    </div>
  )
}
