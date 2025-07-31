import React from 'react'
import { motion } from 'framer-motion'

const Tag = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  onClick,
  isActive = false,
  className = ''
}) => {
  const variants = {
    default: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300',
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
    accent: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300',
    success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    warning: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
  }

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  }

  const activeStyles = isActive 
    ? 'bg-primary-600 text-white' 
    : variants[variant]

  return (
    <motion.span
      whileHover={onClick ? { scale: 1.05 } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
      onClick={onClick}
      className={`
        inline-flex items-center font-medium rounded-full transition-all duration-200
        ${sizes[size]}
        ${activeStyles}
        ${onClick ? 'cursor-pointer hover:shadow-md' : ''}
        ${className}
      `}
    >
      {children}
    </motion.span>
  )
}

export default Tag
