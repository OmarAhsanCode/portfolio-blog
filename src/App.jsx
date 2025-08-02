import { Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import ErrorBoundary from './components/ui/ErrorBoundary'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'
import LoadingSpinner from './components/ui/LoadingSpinner'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Preload critical routes
const preloadRoutes = () => {
  import('./pages/About')
  import('./pages/Projects')
  import('./pages/Blog')
}

function App() {
  const location = useLocation()

  useEffect(() => {
    // Preload routes after initial render
    const timer = setTimeout(preloadRoutes, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-white dark:bg-dark-900 transition-colors duration-300">
          <Navbar />
          
          <main className="flex-grow">
            <AnimatePresence mode="wait" initial={false}>
              <Suspense 
                key={location.pathname} 
                fallback={
                  <div className="min-h-screen flex items-center justify-center">
                    <LoadingSpinner />
                  </div>
                }
              >
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
          
          <Footer />
          <ScrollToTop />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
