'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'

const ContactPage = () => {
  const text = 'Say Hello'

  const containerVariants = {
    initial: { y: '-200vh' },
    animate: { y: '0' }
  }

  const letterVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 0 }
  }

  return (
    <motion.div
      className='h-full w-full'
      initial='initial'
      animate='animate'
      variants={containerVariants}
      transition={{ duration: 1 }}
    >
      <div className='h-full w-full flex flex-col md:flex-row px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20'>
        {/* TEXT CONTAINER */}
        <div className='flex flex-1 items-center justify-center text-4xl lg:text-6xl'>
          <div>
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial='initial'
                animate='animate'
                variants={letterVariants}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* FORM CONTAINER */}
        <div className='flex flex-1 items-center justify-center'>
          <ContactForm />
        </div>
      </div>
    </motion.div>
  )
}

export default ContactPage
