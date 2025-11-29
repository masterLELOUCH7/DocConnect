import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10' >
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ' >

        {/* Left Section */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            We are dedicated to making healthcare simple, accessible, and reliable for everyone.
            Our platform connects you with trusted doctors across multiple specialties for easy appointment booking.
            Browse profiles, check availability, and schedule consultations with just a few clicks.
            Your health and convenience are our top priority, and we’re here to support you every step of the way.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div >
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 9876543210</li>
            <li>testdosctor@gmail.com</li>
          </ul>
        </div>

      </div>
       {/* ---------- Copyright Text------------*/} 
      <div>
        <hr />
        <p className='py-5 text-sm text-center'> Copyright 2025@ DocConnect - All Rights Reserved. </p>
      </div>
    </div>
  );
};

export default Footer;
