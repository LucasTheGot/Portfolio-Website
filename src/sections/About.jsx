import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiServer, FiTerminal } from 'react-icons/fi'
import SkillCard from '../components/SkillCard'

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Software Developer based in the California Bay Area
            </h3>
            <p className="text-gray-400 mb-6">
              I’m a passionate software developer who loves building reliable and 
              efficient applications. My programming journey began with Java, which
               I’ve used a lot for creating games and practical software projects.
            </p>
            <p className="text-gray-400">
              When I'm not coding, I'm composing music, enjoying a 
              good book, or enjoying the beautiful outdoors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-primary-400 font-medium">Tech Stack</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>C</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
