import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { SiCodio } from 'react-icons/si'
import { MdClose } from 'react-icons/md'

import { links } from '../data/data'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize } = useStateContext();

    // Close SideBar when user clicked on a link (if screen size is below or equal to 840px)
    const handleCloseSideBar = () => {
        if(activeMenu && screenSize <= 840) {
            setActiveMenu(false)
        }
    }

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-200 hover:text-[#fb9678] m-2';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
        {activeMenu && (
            <>
                <div className='flex justify-between items-center'>
                    <Link to='/' onClick={handleCloseSideBar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-[#fb9678]'>
                        <SiCodio className='text-[#fb9678]'/><span>Coinfolio</span>
                    </Link>
                    <TooltipComponent content='Close Menu' position='BottomCenter'>
                        <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className='text-xl rounded-full p-3 text-white hover:text-[#fb9678] mt-4 block'>
                            <MdClose />
                        </button>
                    </TooltipComponent>
                </div>
                <div className='mt-10 '>
                    {links.map((item) => (
                        <div key={item.title}>
                            <p className='text-gray-400 m-3 mt-4 uppercase text-sm tracking-widest'>{item.title}</p>
                            {item.links.map((link) => (
                                <NavLink to={`/${link.link}`} key={link.name} onClick={handleCloseSideBar} className={({ isActive }) => isActive ? activeLink : normalLink}>
                                    {link.icon} <span className='capitalize'>{link.name}</span>
                                </NavLink>
                        ))}
                        </div>
                    ))}
                </div>
            </>
        )}        
    </div>
  )
}

export default Sidebar