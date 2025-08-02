import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Home, ArrowLeft, Search, FileX } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import Button from '../components/ui/Button'

const popularPages = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: null },
  { name: 'Projects', path: '/projects', icon: null },
  { name: 'Blog', path: '/blog', icon: null },
  { name: 'Contact', path: '/contact', icon: null }
]

const NotFound = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>404 - Page Not Found | Omar Ahsan</title>
        <meta name="description" content="The page you're looking for doesn't exist. Let's get you back on track." />
      </Helmet>

      <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.05, 0.95, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-8xl md:text-9xl font-black text-gray-200 dark:text-dark-700"
                >
                  404
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <FileX size={80} className="text-primary-600 dark:text-primary-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Oops! Page not found
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                The page you're looking for doesn't exist. It might have been moved, 
                deleted, or you entered the wrong URL.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link to="/">
                  <Button 
                    size="lg"
                    icon={<Home size={20} />}
                  >
                    Go Home
                  </Button>
                </Link>
                
                <Button 
                  variant="outline"
                  size="lg"
                  icon={<ArrowLeft size={20} />}
                  onClick={() => window.history.back()}
                >
                  Go Back
                </Button>
              </div>
            </motion.div>

            {/* Popular Pages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-50 dark:bg-dark-800 rounded-xl p-8"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Popular pages
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                {popularPages.map((page, index) => {
                  const Icon = page.icon
                  return (
                    <motion.div
                      key={page.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <Link
                        to={page.path}
                        className="block p-4 bg-white dark:bg-dark-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-600 transition-all duration-200 hover:shadow-md group"
                      >
                        <div className="flex flex-col items-center text-center">
                          {Icon && (
                            <Icon size={24} className="text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-200" />
                          )}
                          <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                            {page.name}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Search Suggestion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Looking for something specific?
              </p>
              
              <div className="max-w-md mx-auto relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search the site..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      // In a real app, you'd implement search functionality
                      console.log('Search:', e.target.value)
                    }
                  }}
                />
              </div>
              
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                Or try one of the popular pages above
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fun Animation */}
      <motion.div
        className="fixed bottom-8 right-8 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-20"
        />
      </motion.div>
    </PageTransition>
  )
}

export default NotFound
