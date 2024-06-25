'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Navbar } from './Navbar'

export const TransitionProvider = ({ children }) => {
  const pathName = usePathname()
  const pageTitle = pathName === '/' ? 'Home' : pathName.slice(1)

  return (
    <AnimatePresence mode='wait'>
      <div
        key={pageTitle}
        className='h-screen w-screen bg-gradient-to-b from-blue-100 to-red-100 overflow-y-auto'
      >
        <motion.div
          className='fixed bg-black h-screen w-screen rounded-b-[100px] z-40'
          animate={{ height: '0vh' }}
          exit={{ height: '120vh' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />

        <motion.div
          className='fixed top-0 bottom-0 left-0 right-0 text-6xl font-bold text-white w-fit h-fit m-auto z-50'
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, zIndex: -1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {pageTitle}
        </motion.div>

        <motion.div
          className='fixed h-screen w-screen bottom-0 bg-black rounded-t-[100px] z-40'
          initial={{ height: '120vh' }}
          animate={{ height: '0vh', transition: { delay: 0.5 } }}
        />
        <div className='h-24'>
          <Navbar />
        </div>
        <div className='h-[calc(100vh-6rem)]'>{children}</div>
      </div>
    </AnimatePresence>
  )
}
