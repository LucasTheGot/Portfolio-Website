import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../data/projectsData'

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="section-title">My Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              repo={project.repo}
              demo={project.demo}
              technologies={project.technologies}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* YouTube video embed */}
        <div className="flex justify-center mt-12">
          <div className="w-full max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/UCVMLj6zvOg?si=meOJgaVIvvRvVCqt"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Image grid with 13 photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {Array.from({ length: 13 }).map((_, i) => (
            <img
              key={i}
              src={`/images/image${i + 1}.jpg`}
              alt={`Screenshot ${i + 1}`}
              className="w-full rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects