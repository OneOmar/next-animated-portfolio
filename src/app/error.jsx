'use client'

import Link from 'next/link'

const Error = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <h1 className='text-6xl font-bold text-gray-800'>500</h1>
      <p className='mt-4 text-xl text-gray-600'>Internal Server Error</p>
      <p className='mt-2 text-center text-gray-500'>
        Oops! Something went wrong on our end.
      </p>
      <Link
        href='/'
        className='mt-6 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md font-medium'
      >
        Go back home
      </Link>
    </div>
  )
}

export default Error
