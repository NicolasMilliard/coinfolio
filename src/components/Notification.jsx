import React from 'react'
import { MdClose } from 'react-icons/md'
import { HiOutlineClock } from 'react-icons/hi'

import { useStateContext } from '../contexts/ContextProvider'
import { notificationData } from '../data/data'

const Notification = () => {
  const { setIsClicked } = useStateContext();

  const handleCloseNotifications = () => {
    setIsClicked(false);
  }

  return (
    <div className='nav-item absolute right-1 top-16 bg-[#182b4b] p-8 rounded-lg w-96'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
          <p className='font-semibold text-lg text-gray-200'>Notifications</p>
          <button type='button' className='text-white text-xs rounded p-1 px-2 bg-[#fb9678]'>5 New</button>
        </div>
        <button
          type='button' 
          onClick={handleCloseNotifications}
          className='text-2xl p-3 hover:drop-shadow-xl rounded-full hover:bg-[#fb9678] text-white hover:text-[#182b4b]'
        >
          <MdClose/>
        </button>
      </div>
      <div className='mt-5'>
        {notificationData?.map((item, index) => (
          <div key={index} className='flex items-center leading-8 gap-5 border-b-1 border-gray-400 p-3 cursor-pointer hover:bg-[#111e35]'>
            <img className='h-10 w-10' src={item.image} alt={item.message} />
            <div>
              <p className='font-semibold text-gray-200'>{item.message}</p>
              <div className='flex flex-wrap items-center'>
                <HiOutlineClock className='text-gray-400 text-sm' />
                <p className='text-gray-400 text-sm ml-2'>{item.time}</p>
              </div>              
            </div>
          </div>
        ))}
        <div className='mt-5'>
          <button type='button' className='text-white hover:text-[#182b4b] bg-[#fb9678] rounded-xl p-3 w-full hover:drop-shadow-xl'>See all notifications</button>
        </div>
      </div>
    </div>
  )
}

export default Notification