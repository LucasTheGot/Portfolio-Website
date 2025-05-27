import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
               Lucas Fassman
            </h1>
            <div className="text-xl md:text-2xl text-primary-400 font-medium h-8">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'Musician',
                  2000,
                  'Idea Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          <motion.p
            className="text-gray-400 max-w-2xl mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Combining technical depth with creativity and collaboration <br /> 
            to build impactful software solutions.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="btn btn-primary"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="btn btn-outline"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a
              href="https://github.com/LucasTheGot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-all text-2xl"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-fassman-0718aa26a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-all text-2xl"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="text-primary-500 cursor-pointer"
          aria-label="Scroll down"
        >
          <FiChevronDown className="text-3xl" />
        </Link>
      </div>
    </section>
  )
}

export default Hero