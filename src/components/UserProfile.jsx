import React from 'react'
import { MdClose } from 'react-icons/md'

import { userProfileData } from '../data/data'
import { useStateContext } from '../contexts/ContextProvider'
import avatar from '../data/avatar.jpg'

const UserProfile = () => {
  const { setIsClicked } = useStateContext();

  const handleCloseUserProfile = () => {
    setIsClicked(false);
  }

  return (
    <div className='nav-item absolute right-1 top-16 bg-[#182b4b] p-8 rounded-lg w-96'>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-lg text-gray-200'>User Profile</p>
        <button
          type='button'
          onClick={handleCloseUserProfile}
          className='text-2xl text-white p-3 hover:drop-shadow-xl hover:bg-[#111e35]'
        >
          <MdClose />
        </button>
      </div>
      <div className='flex gap-5 items-center mt-6 border-gray-400 border-b-1 pb-6'>
        <img className='rounded-full h-24 w-24' src={avatar} alt='user-profile' />
        <div>
          <p className='font-semibold text-xl text-gray-200'>Franck Castle</p>
          <p className='text-gray-400 text-sm'>Crypto Maximalist</p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className='flex gap-5 border-b-1 border-gray-400 p-4 hover:bg-[#111e35] cursor-pointer'>
            <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg}} className='text-xl rounded-lg p-3'>
              {item.icon}
            </button>
            <div>
              <p className='font-semibold text-gray-200'>{item.title}</p>
              <p className='text-gray-400 text-sm'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-5'>
        <button type='button' className='text-white bg-[#fb9678] rounded-xl p-3 w-full hover:drop-shadow-xl'>Logout</button>
      </div>
    </div>
  )
}

export default UserProfile