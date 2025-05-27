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
              Software Developer from Colorado Springs
            </h3>
            <p className="text-gray-400 mb-6">
              I'm a passionate software developer with expertise in creating robust, 
              efficient applications. My journey in programming began with Java, 
              which I've used extensively for game development and enterprise applications.
            </p>
            <p className="text-gray-400">
              When I'm not coding, I'm exploring new technologies, contributing to 
              open-source projects, or enjoying the beautiful Colorado outdoors.
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
                <h4 className="text-primary-400 font-medium">Languages</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Java</li>
                  <li>Python</li>
                  <li>C</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-primary-400 font-medium">Expertise</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Game Development</li>
                  <li>Database Design</li>
                  <li>System Programming</li>
                  <li>API Development</li>
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