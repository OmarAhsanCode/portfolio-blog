import { useEffect } from 'react'

export const usePerformanceMonitoring = (componentName) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.performance) {
      const startTime = performance.now()
      
      return () => {
        const endTime = performance.now()
        const duration = endTime - startTime
        
        // Only log in development
        if (import.meta.env.DEV) {
          console.log(`${componentName} render time: ${duration.toFixed(2)}ms`)
        }
      }
    }
  }, [componentName])
}

export const useIntersectionObserver = (options = {}) => {
  const { threshold = 0.1, rootMargin = '0px' } = options
  
  const observe = (element, callback) => {
    if (!element) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry)
          }
        })
      },
      { threshold, rootMargin }
    )
    
    observer.observe(element)
    
    return () => observer.disconnect()
  }
  
  return { observe }
}
