import Link from 'next/link'
import { useState } from 'react'
import { NavLink } from './Navlinks'
import Image from 'next/image'
import { motion } from 'framer-motion'

const links = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About' },
  { href: '/projects', title: 'Projects' },
  { href: '/contact', title: 'Contact' }
]

// MENU BUTTON VARIANTS
const menuButtonVariants = {
  firstSpan: {
    closed: { rotate: 0, backgroundColor: 'black' },
    open: { rotate: 45, backgroundColor: 'white' }
  },
  secondSpan: {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  },
  thirdSpan: {
    closed: { rotate: 0, backgroundColor: 'black' },
    open: { rotate: -45, backgroundColor: 'white' }
  }
}

// MENU LIST VARIANTS
const menuListVariants = {
  list: {
    closed: { opacity: 0, x: '-100vw' },
    open: {
      opacity: 1,
      x: 0,
      transition: { when: 'beforeChildren', staggerChildren: 0.1 }
    }
  },
  item: {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  }
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28'>
      {/* DESKTOP MENU */}
      <div className='hidden md:flex gap-4 w-1/3'>
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>

      {/* LOGO */}
      <div className='w-1/3 flex justify-start md:justify-end lg:justify-center'>
        <Link href='/' className='bg-black font-semibold rounded-md p-2'>
          <span className='text-white mr-1'>Omar</span>
          <span className='bg-white text-black rounded py-1 px-2'>dev</span>
        </Link>
      </div>

      {/* SOCIAL MEDIA */}
      <div className='hidden md:flex gap-4 w-1/3 justify-end'>
        <Link href='https://github.com/OneOmar' target='_blank'>
          <Image src='/github.png' width={24} height={24} alt='Github' />
        </Link>
        <Link
          href='https://www.linkedin.com/in/omar-el-manssouri/'
          target='_blank'
        >
          <Image src='/linkedin.png' width={24} height={24} alt='LinkedIn' />
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div className='md:hidden'>
        {/* MENU BUTTON */}
        <button
          className='relative flex flex-col justify-between w-10 h-8 z-50'
          onClick={toggleMenu}
        >
          <motion.span
            className='w-10 h-1 bg-black rounded origin-left'
            variants={menuButtonVariants.firstSpan}
            animate={isOpen ? 'open' : 'closed'}
          />
          <motion.span
            className='w-10 h-1 bg-black rounded'
            variants={menuButtonVariants.secondSpan}
            animate={isOpen ? 'open' : 'closed'}
          />
          <motion.span
            className='w-10 h-1 bg-black rounded origin-left'
            variants={menuButtonVariants.thirdSpan}
            animate={isOpen ? 'open' : 'closed'}
          />
        </button>

        {/* MENU LIST */}
        {isOpen && (
          <motion.div
            className='absolute top-0 left-0 w-screen h-screen bg-black text-white text-3xl flex flex-col items-center justify-center gap-8 z-40'
            variants={menuListVariants.list}
            initial='closed'
            animate='open'
          >
            {links.map(({ href, title }) => (
              <motion.div
                key={title}
                variants={menuListVariants.item}
                whileHover={{ scale: 1.1 }}
              >
                <Link href={href}>{title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
