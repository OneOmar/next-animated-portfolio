import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollSvg } from './ScrollSvg'

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'SASS',
  'Bootstrap',
  'TailwindCSS',
  'ReactJS',
  'NextJS',
  'Jest',
  'Firebase',
  'NodeJS',
  'MongoDB',
  'Prisma',
  'Problem Solving',
  'Responsive Design'
]

const skillContainerVariants = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, duration: 0.8, type: 'spring', stiffness: 50 }
  }
}

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
}

export const Skills = () => {
  const ref = useRef()
  const isSkillRefInView = useInView(ref, { margin: '-100px' })

  return (
    <div className='flex flex-col gap-12 justify-center' ref={ref}>
      {/* Skill Title */}
      <motion.h1
        className='font-bold text-2xl text-center sm:text-left'
        initial='hidden'
        animate={isSkillRefInView ? 'visible' : 'hidden'}
        variants={skillContainerVariants}
      >
        SKILLS
      </motion.h1>

      {/* Skill List */}
      <motion.div
        className='flex gap-4 flex-wrap'
        initial='hidden'
        animate={isSkillRefInView ? 'visible' : 'hidden'}
        variants={skillContainerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'
            variants={skillItemVariants}
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
      <ScrollSvg />
    </div>
  )
}
