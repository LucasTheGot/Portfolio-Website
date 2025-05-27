import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const webhookUrl = 'https://discord.com/api/webhooks/1377042382251360307/kfRUo60DjeVosKLBcplTqC1OKk0oiY6i-mot405dwWrE2dYLvT1GY5XVAeWxVoJz9ctS'
      
      const message = {
        content: 'New Contact Form Submission',
        embeds: [{
          title: 'Contact Form Details',
          color: 3447003,
          fields: [
            {
              name: 'Name',
              value: formData.name,
              inline: true
            },
            {
              name: 'Email',
              value: formData.email,
              inline: true
            },
            {
              name: 'Message',
              value: formData.message
            }
          ],
          timestamp: new Date().toISOString()
        }]
      }

      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message)
      })

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="section-title">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let's Talk
            </h3>
            <p className="text-gray-400 mb-8">
              Whether you have a project in mind, job opportunity, or just want to 
              connect, feel free to reach out. I'm always open to discussing new 
              projects and opportunities.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="text-primary-500 text-xl mr-4">
                  <FiMail />
                </div>
                <a
                  href="mailto:contact@lucasfassman.com"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  contact@lucasfassman.com
                </a>
              </div>
              
              <div className="flex items-center">
                <div className="text-primary-500 text-xl mr-4">
                  <FiGithub />
                </div>
                <a
                  href="https://github.com/LucasTheGot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  github.com/LucasTheGot
                </a>
              </div>
              
              <div className="flex items-center">
                <div className="text-primary-500 text-xl mr-4">
                  <FiLinkedin />
                </div>
                <a
                  href="https://www.linkedin.com/in/lucas-fassman-0718aa26a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  linkedin.com/in/lucas-fassman-0718aa26a
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`btn btn-primary w-full flex items-center justify-center ${
                  (isSubmitting || submitted) ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message <FiSend className="ml-2" />
                  </>
                )}
              </button>
              
              {submitted && (
                <p className="text-green-500 text-sm text-center">
                  Thanks for your message! I'll get back to you soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact