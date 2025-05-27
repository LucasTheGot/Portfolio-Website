import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const ProjectCard = ({ title, description, repo, demo, technologies, delay }) => {
  return (
    <motion.div
      className="card hover:shadow-glow group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="mb-4 flex justify-between items-start">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="flex space-x-3">
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-500 transition-colors"
            aria-label={`GitHub repository for ${title}`}
          >
            <FiGithub />
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors"
              aria-label={`Live demo for ${title}`}
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-dark-700 text-primary-300 px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectCard