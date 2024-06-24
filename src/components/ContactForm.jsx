import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export const ContactForm = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const formRef = useRef()

  // Handles the email sending process
  const sendEmail = async (e) => {
    e.preventDefault()
    setSuccess(false)
    setError(false)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_KEY
      )
      setSuccess(true)
      formRef.current.reset()
    } catch (err) {
      console.error('Email sending failed:', err)
      setError(true)
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className='h-[90%] p-8 sm:p-16 w-full max-w-lg bg-white shadow-lg rounded-xl text-base sm:text-lg flex flex-col justify-center gap-6 sm:gap-8'
    >
      <span className='font-medium text-xl sm:text-2xl text-gray-800'>
        Dear Omar,
      </span>
      <textarea
        rows={6}
        className='p-4 bg-gray-100 border border-gray-300 rounded-md outline-none resize-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500'
        name='user_message'
        placeholder='Type your message here...'
        required
      />
      <input
        name='user_email'
        type='email'
        className='p-4 bg-gray-100 border border-gray-300 rounded-md outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500'
        placeholder='Your email address'
        required
      />
      <span className='font-medium text-lg sm:text-xl text-gray-800'>
        Best Regards.
      </span>
      <button
        type='submit'
        className='w-full bg-purple-500 hover:bg-purple-600 text-white rounded-md font-semibold py-3'
      >
        Send
      </button>
      {success && (
        <span className='text-green-600 text-sm font-semibold'>
          Your message has been sent successfully!
        </span>
      )}
      {error && (
        <span className='text-red-600 text-sm font-semibold'>
          Something went wrong!
        </span>
      )}
    </form>
  )
}
