'use client'

import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import { motion } from 'framer-motion'

const PortfolioPage = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0' }}
      transition={{ duration: 1 }}
    >
      <div className='container mx-auto py-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28'>
        <h1 className='text-4xl font-bold text-center mb-12'>My Projects</h1>
        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioPage
