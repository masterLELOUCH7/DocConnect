import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='mt-10'>
      
      {/* Title */}
      <div className='text-center text-2xl text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      {/* Image + Text Section */}
      <div className='my-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-28'>
        
        {/* Image */}
        <img 
          src={assets.contact_image} 
          alt="Contact Us"
          className='w-full md:max-w-[400px] rounded-lg'
        />

        {/* Text Section */}
        <div className='flex flex-col gap-6 text-sm text-gray-600 md:max-w-[350px]'>

          {/* Office Info */}
          <div>
            <h2 className='text-lg font-semibold text-gray-800 mb-2'>OUR OFFICE</h2>
            <p>TIPS</p>
            <p>Sector</p>
            <br />
            <p>Call: 987654321</p>
            <p>Email: vikemail@gmail.com</p>
          </div>

          {/* Careers section */}
          <div>
            <h2 className='text-lg font-semibold text-gray-800 mb-2'>CAREERS AT DOC CONNECT</h2>
            <p>Learn more about our teams and job openings.</p>
            <button className='border border-black mt-3 px-6 py-2 rounded-md hover:bg-gray-800 hover:text-white transition-all'>
              Explore Jobs
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
