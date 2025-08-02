import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Calendar, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { GlassCard } from '../components/ui/GlassComponents'
import { FadeInWords, GradientText, FloatingText } from '../components/ui/AnimatedText'
import AnimatedGradientBackground from '../components/ui/AnimatedGradientBackground'
import GeometricBackground from '../components/ui/GeometricBackground'
import InteractiveParticles from '../components/ui/InteractiveParticles'
import ScrollProgress from '../components/ui/ScrollProgress'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/OmarAhsanCode',
    icon: Github,
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/omarahsan360',
    icon: Linkedin,
    color: 'hover:text-blue-600'
  },
  {
    name: 'Twitter',
    url: 'https://x.com/omarahsan_',
    icon: Twitter,
    color: 'hover:text-blue-400'
  }
]

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: null
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState(null) // 'success', 'error', 'loading'

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('loading')

    try {
      // Replace this with your actual form submission logic
      // Example: Formspree, Netlify Forms, or your own API
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For demo purposes, we'll just show success
      // In reality, you'd send to your form handler:
      /*
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setFormStatus('error')
      }
      */
      
      setFormStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setFormStatus('error')
    }
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <PageTransition>
      <ScrollProgress />
      <AnimatedGradientBackground variant="hero" />
      <GeometricBackground density="medium" />
      <InteractiveParticles particleCount={25} />
      
      <Helmet>
        <title>Contact - Your Name</title>
        <meta name="description" content="Get in touch with me for collaboration, project inquiries, or just to say hello. I'd love to hear from you!" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              <FadeInWords text="Let's" /> <GradientText colors={['from-pink-500', 'to-orange-600']}>Connect</GradientText>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Have a project in mind? Want to collaborate? Or just want to say hello? 
              I'd love to hear from you. Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassCard className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  <FloatingText text="Send me a message" />
                </h2>

                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3"
                  >
                    <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
                    <div>
                      <p className="text-green-800 dark:text-green-200 font-medium">
                        Message sent successfully!
                      </p>
                      <p className="text-green-600 dark:text-green-400 text-sm">
                        I'll get back to you as soon as possible.
                      </p>
                    </div>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3"
                  >
                    <AlertCircle size={20} className="text-red-600 dark:text-red-400" />
                    <div>
                      <p className="text-red-800 dark:text-red-200 font-medium">
                        Failed to send message
                      </p>
                      <p className="text-red-600 dark:text-red-400 text-sm">
                        Please try again or email me directly.
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project, idea, or just say hello!"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!isFormValid}
                    loading={formStatus === 'loading'}
                    icon={<Send size={18} />}
                    iconPosition="right"
                    className="w-full"
                  >
                    {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </GlassCard>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Get in touch
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon
                    const content = (
                      <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-200">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center">
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.label}
                          </p>
                          <p className="text-gray-900 dark:text-gray-100 font-medium">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )

                    return item.href ? (
                      <a key={index} href={item.href} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    )
                  })}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Follow me
                </h3>
                <div className="flex space-x-4">
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
                        className={`flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 ${social.color} rounded-lg transition-all duration-200 hover:shadow-lg`}
                      >
                        <Icon size={20} />
                      </motion.a>
                    )
                  })}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Quick actions
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:your.email@example.com"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-200 group"
                  >
                    <Mail size={20} className="text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      Send direct email
                    </span>
                  </a>
                  <a
                    href="https://calendly.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-200 group"
                  >
                    <Calendar size={20} className="text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      Schedule a call
                    </span>
                  </a>
                  <a
                    href="https://github.com/yourusername/portfolio-blog/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-200 group"
                  >
                    <MessageCircle size={20} className="text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      Start a discussion
                    </span>
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Quick answers to common questions about working together.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What types of projects do you work on?",
                answer: "I specialize in full-stack web applications, from simple landing pages to complex SaaS platforms. I work with React, Node.js, and modern web technologies to create scalable, performant solutions."
              },
              {
                question: "What's your typical response time?",
                answer: "I usually respond to emails within 24 hours during weekdays. For project inquiries, I'll provide a detailed response within 2-3 business days."
              },
              {
                question: "Do you work with remote teams?",
                answer: "Absolutely! I have extensive experience working with distributed teams across different time zones. I'm comfortable with async communication and modern collaboration tools."
              },
              {
                question: "What's your preferred way to communicate?",
                answer: "For initial contact, email works best. For ongoing projects, I'm flexible with Slack, Discord, or video calls depending on your team's preferences."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact
