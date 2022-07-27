import React, { useEffect } from 'react'
import { FiMenu } from 'react-icons/fi'
import { RiNotification2Line, RiArrowDownSLine } from 'react-icons/ri'

import { Tooltip, TooltipComponent } from '@syncfusion/ej2-react-popups'

import avatar from '../data/avatar.jpg'
import { Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{ color }} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>
        {icon}
      </span>
    </button>
  </TooltipComponent>
)

const NavBar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title='Menu'
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color='blue'
        icon={<FiMenu />}
      />
      <div className='flex'>
        <NavButton
          title='Notifications'
          customFunc={() => {}}
          color='blue'
          icon={<RiNotification2Line />}
        />
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => {}}>
            <img src={avatar} className='rounded-full w-8 h-8' />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span> {' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>John</span>
            </p>
            <RiArrowDownSLine className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>
      </div>
    </div>
  )
}

export default NavBar