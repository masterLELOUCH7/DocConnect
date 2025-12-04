import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'John Doe',
    image: assets.profile_pic,
    email: 'qwertyuiop@gmail.com',
    phone: '9876543210',
    address: {
      line1: '123, Main Street',
      line2: 'Apt 4B',
    },
    gender: 'male',
    dob: '2000-01-01',
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='max-w-3xl mx-auto p-6 bg-white rounded-3xl shadow-lg mt-10 text-gray-800'>

      <div className='flex flex-col items-center gap-3 mb-6'>
        <img src={userData.image} alt="Profile" className='w-32 h-32 rounded-full object-cover shadow-md' />

        {isEdit ? (
          <input
            type='text'
            className='border p-2 w-64 rounded-xl text-center shadow-sm'
            value={userData.name}
            onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
          />
        ) : (
          <p className='text-2xl font-semibold'>{userData.name}</p>
        )}
      </div>

      <hr className='my-5 border-gray-300' />

      <div className='space-y-2'>
        <p className='font-semibold text-lg'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-3 gap-3 items-center'>
          <p className='font-medium'>Email:</p>
          <p className='col-span-2'>{userData.email}</p>

          <p className='font-medium'>Phone:</p>
          {isEdit ? (
            <input
              type='text'
              className='col-span-2 border p-2 rounded-xl shadow-sm'
              value={userData.phone}
              onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
            />
          ) : (
            <p className='col-span-2'>{userData.phone}</p>
          )}

          <p className='font-medium'>Address:</p>
          {isEdit ? (
            <div className='col-span-2 space-y-2'>
              <input
                type='text'
                className='border p-2 w-full rounded-xl shadow-sm'
                value={userData.address.line1}
                onChange={e => setUserData(prev => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value }
                }))}
              />
              <input
                type='text'
                className='border p-2 w-full rounded-xl shadow-sm'
                value={userData.address.line2}
                onChange={e => setUserData(prev => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value }
                }))}
              />
            </div>
          ) : (
            <p className='col-span-2 whitespace-pre-line'>{userData.address.line1 + '\n' + userData.address.line2}</p>
          )}
        </div>
      </div>

      <hr className='my-5 border-gray-300' />

      <div className='space-y-2'>
        <p className='font-semibold text-lg'>BASIC INFORMATION</p>
        <div className='grid grid-cols-3 gap-3 items-center'>
          <p className='font-medium'>Gender:</p>
          {isEdit ? (
            <select
              value={userData.gender}
              className='border p-2 col-span-2 rounded-xl shadow-sm'
              onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
            >
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          ) : (
            <p className='col-span-2'>{userData.gender}</p>
          )}

          <p className='font-medium'>Birthday:</p>
          {isEdit ? (
            <input
              type='date'
              className='border p-2 col-span-2 rounded-xl shadow-sm'
              value={userData.dob}
              onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
            />
          ) : (
            <p className='col-span-2'>{userData.dob}</p>
          )}
        </div>
      </div>

      <div className='flex justify-center mt-6'>
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className='px-6 py-2 bg-green-500 text-white rounded-xl shadow-md hover:bg-green-600 transition'
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className='px-6 py-2 bg-red-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition'
          >
            Edit Profile
          </button>
        )}
      </div>

    </div>
  )
}

export default MyProfile