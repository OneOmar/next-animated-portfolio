import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    title: 'Digital Marketer and Web Designer',
    desc: 'I Design, develop, and maintain websites using YouCan. And optimize digital campaigns for brand awareness and conversions.',
    date: '2023 - 2024',
    company: 'COD Network'
  },
  {
    title: 'Web Developer',
    desc: 'I developed and maintained web applications using ReactJS and Bootstrap.',
    date: '2021 - 2023',
    company: 'Naitup'
  },
  {
    title: 'Geotechnical Engineer  Intern',
    desc: 'Assisted senior engineers in geotechnical site investigations and analysis.',
    date: '2018',
    company: 'Jacobs Engineering SA'
  }
]

const ExperienceItem = ({ title, desc, date, company, isLeft }) => (
  <div className='flex flex-col sm:flex-row justify-between mb-8 sm:mb-0'>
    {isLeft ? (
      <>
        <ExperienceContent
          title={title}
          desc={desc}
          date={date}
          company={company}
        />
        <TimelineDot isLeft={isLeft} />
        <div className='w-1/3'></div>
      </>
    ) : (
      <>
        <div className='w-1/3'></div>
        <TimelineDot isLeft={isLeft} />
        <ExperienceContent
          title={title}
          desc={desc}
          date={date}
          company={company}
        />
      </>
    )}
  </div>
)

const ExperienceContent = ({ title, desc, date, company }) => (
  <div className='max-w-sm sm:w-1/3 m-auto sm:m-0'>
    <div className='bg-white p-3 font-semibold rounded'>{title}</div>
    <div className='p-3 text-sm italic'>{desc}</div>
    <div className='p-3 text-red-400 text-sm font-semibold'>{date}</div>
    <div className='px-3 py-1 rounded bg-white text-sm font-semibold w-fit'>
      {company}
    </div>
  </div>
)

const TimelineDot = ({ isLeft }) => (
  <div className='hidden sm:flex justify-center w-1/6'>
    <div className='w-1 h-full bg-gray-600 rounded relative'>
      <div
        className={`absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white ${
          isLeft ? '-left-2' : '-right-2'
        }`}
      ></div>
    </div>
  </div>
)

export const Experience = () => {
  const ref = useRef()
  const isExperienceRefInView = useInView(ref, { margin: '-100px' })

  return (
    <div className='flex flex-col justify-center pb-32' ref={ref}>
      <motion.h1
        className='mb-10 font-bold text-2xl text-center sm:text-left'
        initial={{ x: '-300px' }}
        animate={isExperienceRefInView ? { x: '0' } : {}}
        transition={{
          delay: 0.2,
          duration: 0.8,
          type: 'spring',
          stiffness: 50
        }}
      >
        EXPERIENCE
      </motion.h1>
      <motion.div
        initial={{ x: '-300px' }}
        animate={isExperienceRefInView ? { x: '0' } : {}}
        transition={{
          delay: 0.2,
          duration: 0.8,
          type: 'spring',
          stiffness: 50
        }}
      >
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            desc={exp.desc}
            date={exp.date}
            company={exp.company}
            isLeft={index % 2 === 0}
          />
        ))}
      </motion.div>
    </div>
  )
}
