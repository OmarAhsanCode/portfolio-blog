import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Lead Designer at TechCorp',
    company: 'TechCorp Inc.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    content: 'Working with this developer was an absolute pleasure. The attention to detail and creative problem-solving skills are exceptional. Delivered beyond expectations!',
    rating: 5,
    project: 'E-commerce Platform Redesign'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupX',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'Incredible technical expertise combined with excellent communication. The project was completed ahead of schedule with outstanding quality. Highly recommended!',
    rating: 5,
    project: 'Full-Stack Web Application'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'Digital Solutions Ltd.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'Professional, reliable, and innovative. The user experience improvements exceeded our goals. A true professional who understands both design and development.',
    rating: 5,
    project: 'Mobile App Development'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Marketing Director',
    company: 'Creative Agency Pro',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    content: 'Outstanding work on our portfolio website. The animations and interactions are smooth and engaging. Definitely hiring again for future projects.',
    rating: 5,
    project: 'Portfolio Website'
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Founder',
    company: 'InnovateLab',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    content: 'Exceptional developer who brings ideas to life with precision and creativity. The final product was exactly what we envisioned, with added improvements we didn\'t even think of.',
    rating: 5,
    project: 'SaaS Platform Development'
  }
]

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
  }

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  }

  const currentTestimonial = testimonialsData[currentIndex]

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto px-4"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main Testimonial Card */}
      <div className="relative min-h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
              rotateY: { duration: 0.4 }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-full">
              {/* Quote Background Effect */}
              <motion.div
                className="absolute -top-8 -left-8 text-9xl text-gradient-primary opacity-10"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Quote />
              </motion.div>

              {/* Main Card */}
              <motion.div
                className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 lg:p-12 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Content */}
                <div className="text-center mb-8">
                  <motion.blockquote
                    className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    "{currentTestimonial.content}"
                  </motion.blockquote>

                  {/* Star Rating */}
                  <motion.div
                    className="flex justify-center space-x-1 mb-6"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ rotate: -180, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                      >
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Author Info */}
                <motion.div
                  className="flex items-center justify-center space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-3 border-white/30 shadow-lg"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>

                  <div className="text-left">
                    <h4 className="font-bold text-lg text-gray-800 dark:text-white">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-sm font-medium text-gradient-primary">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </motion.div>

                {/* Project Tag */}
                <motion.div
                  className="absolute -top-4 right-8"
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    {currentTestimonial.project}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <motion.button
          onClick={goToPrevious}
          className="flex items-center justify-center w-12 h-12 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-300"
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={20} />
        </motion.button>

        <motion.button
          onClick={goToNext}
          className="flex items-center justify-center w-12 h-12 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-300"
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonialsData.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg scale-125'
                : 'bg-white/30 dark:bg-gray-600/30 hover:bg-white/50 dark:hover:bg-gray-500/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Auto-play Indicator */}
      <motion.div
        className="absolute top-4 right-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-gray-400'} animate-pulse`} />
      </motion.div>
    </div>
  )
}

export default TestimonialsCarousel
