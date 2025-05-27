import { motion } from 'framer-motion'

const SkillCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="card hover:shadow-glow hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-start">
        <div className="text-primary-500 text-3xl mr-4">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default SkillCard