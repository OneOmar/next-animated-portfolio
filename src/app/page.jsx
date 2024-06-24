'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Homepage = () => {
  return (
    <motion.div
      className='h-full py-8'
      initial={{ y: '-200vh' }}
      animate={{ y: '0' }}
      transition={{ duration: 1 }}
    >
      {/* Main container*/}
      <div className='h-full flex flex-col lg:flex-row gap-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* Image Container */}
        <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
          <Image src='/hero.png' alt='hero' fill className='object-contain' />
        </div>

        {/* Text Container */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
          {/* Title */}
          <h1 className='text-3xl sm:text-4xl font-bold text-center lg:text-left'>
            Building Interactive Frontend Experiences
          </h1>

          {/* Description */}
          <p className='text-base sm:text-lg md:text-xl text-center lg:text-left'>
            Welcome to my portfolio, where design meets functionality. As a
            frontend developer, I specialize in creating visually appealing and
            user-friendly interfaces. Explore my projects to see how I transform
            ideas into engaging web experiences.
          </p>

          {/* Links */}
          <div className='w-full flex gap-5 justify-center lg:justify-start'>
            <Link href='/portfolio'>
              <button className='py-3 px-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black transition-colors'>
                View My Work
              </button>
            </Link>
            <Link href='/contact'>
              <button className='py-3 px-4 rounded-lg ring-1 ring-black hover:bg-black hover:text-white transition-colors'>
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Homepage
