'use client'

import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { ScrollSvg } from '@/components/ScrollSvg'
import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'
import BrainSvg from '@/components/BrainSvg'
import Image from 'next/image'

const AboutPage = () => {
  const containerRef = useRef()
  const { scrollYProgress } = useScroll({ container: containerRef })

  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0' }}
      transition={{ duration: 1 }}
    >
      {/* Main Container */}
      <div className='h-full lg:flex overflow-y-auto' ref={containerRef}>
        {/* Text Container */}
        <div className='flex flex-col gap-24 lg:w-2/3 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-24 lg:pr-0'>
          {/* Biography Container */}
          <div className='flex flex-col gap-12 justify-center'>
            {/* Biography Image */}
            <Image
              src='/avatar.jpeg'
              alt='profile-image'
              width={100}
              height={100}
              className='rounded-full object-cover'
            />

            {/* Biography Title */}
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>

            {/* Biography Description */}
            <p className='text-base sm:text-lg'>
              I am a passionate frontend developer with a specialization in
              ReactJS, dedicated to crafting efficient and intuitive user
              interfaces. My work focuses on creating seamless user experiences
              and bringing innovative ideas to life through code. Always eager
              to learn and tackle new challenges.
            </p>

            {/* Biography Scroll SVG */}
            <ScrollSvg />
          </div>

          {/* Skills Container */}
          <Skills />

          {/* Experience Container */}
          <Experience />
        </div>

        {/* SVG Container */}
        <div className='hidden lg:block sticky top-0 w-1/3 xl:w-1/2 z-30'>
          <BrainSvg scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage
