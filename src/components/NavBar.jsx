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
      <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'></span>
      {icon}      
    </button>
  </TooltipComponent>
)

const NavBar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return() => window.removeEventListener('resize', handleResize);
  }, []);

  // Hide Navbar by default on screen width below 840px
  useEffect(() => {
    if(screenSize <= 840) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true)
    }
  }, [screenSize]);

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
          customFunc={() => handleClick('notification')}
          color='blue'
          dotColor='red'
          icon={<RiNotification2Line />}
        />
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('userProfile')}>
            <img src={avatar} className='rounded-full w-8 h-8' />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span> {' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>John</span>
            </p>
            <RiArrowDownSLine className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>
        {/* Display component notification and user profile if icons are clicked */}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default NavBar