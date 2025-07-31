import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: Twitter },
  { name: 'Email', url: 'mailto:your.email@example.com', icon: Mail },
]

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link 
              to="/" 
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-200 inline-block"
            >
              YourName
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Full-stack developer passionate about creating beautiful, functional web experiences. 
              Always learning, always building.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 shadow-sm hover:shadow-md transition-all duration-200"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Get notified about new blog posts and projects.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
            >
              <Mail size={16} />
              <span>Get in touch</span>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-600 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 text-sm">
            <span>© {new Date().getFullYear()} YourName. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart size={16} className="text-red-500" fill="currentColor" />
            </motion.div>
            <span>using React & TailwindCSS</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md:mt-0 flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
            <span className="text-sm font-medium">Back to top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
