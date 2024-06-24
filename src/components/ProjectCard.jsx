import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubLink
}) => (
  <motion.div
    className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow'
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <div className='w-full h-[200px] relative'>
      <Image src={image} alt={title} fill className='object-cover' />
    </div>
    <div className='p-6'>
      <h2 className='text-2xl font-semibold mb-2'>{title}</h2>
      <p className='text-gray-700 mb-4'>{description}</p>
      <div className='flex flex-wrap gap-3 mb-6'>
        {technologies?.map((tech) => (
          <span
            key={tech}
            className='px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm'
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={githubLink}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md font-medium'
      >
        View on GitHub
      </Link>
    </div>
  </motion.div>
)

export default ProjectCard
