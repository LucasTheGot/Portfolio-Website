import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../data/projectsData'

// Import Swiper styles and components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

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

        {/* YouTube embed */}
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

        {/* Image Carousel */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-6">Photo Gallery</h3>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            className="w-full max-w-4xl mx-auto"
          >
            {Array.from({ length: 13 }).map((_, i) => (
              <SwiperSlide key={i}>
                <img
                  src={`/images/image${i + 1}.jpg`}
                  alt={`Screenshot ${i + 1}`}
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Projects
