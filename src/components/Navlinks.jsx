'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavLink = ({ link }) => {
  const pathName = usePathname()
  const isActive = pathName === link.href

  return (
    <Link
      className={`text-base rounded py-2 px-4 ${
        isActive ? 'bg-black text-white' : 'hover:scale-110'
      }`}
      href={link.href}
    >
      {link.title}
    </Link>
  )
}
