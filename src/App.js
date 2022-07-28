import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { NavBar, Sidebar, ThemeSettings } from './components'
import { Bnb, Btc, Eth, Calendar, Notes, Overview, Portfolio, TodoList, Trending, Watchlist } from './pages'

import { useStateContext } from './contexts/ContextProvider'

import './App.css'

const App = () => {
    const { activeMenu } = useStateContext();

  return (
    <div>
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                {/* Settings */}
                <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                    <TooltipComponent content='Settings' position='Top'>
                        <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-full' style={{ background: 'blue' }}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {/* Sidebar */}
                {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar />
                    </div>
                ) : (
                    <div className='w-0'>
                        <Sidebar />
                    </div>
                )}
                {/* Navigation bar */}
                <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <NavBar />
                    </div>
                    {/* Routes */}
                    <div>
                        <Routes>
                            {/* Dashboard */}
                            <Route path='/' element={<Overview />} />
                            <Route path='/overview' element={<Overview />} />
                            {/* Pages */}
                            <Route path='/portfolio' element={<Portfolio />} />
                            <Route path='/watchlist' element={<Watchlist />} />
                            <Route path='/trending' element={<Trending />} />
                            {/* Live Charts */}
                            <Route path='/btc-usd' element={<Btc />} />
                            <Route path='/eth-usd' element={<Eth />} />
                            <Route path='/bnb-usd' element={<Bnb />} />
                            {/* Tools */}
                            <Route path='/calendar' element={<Calendar />} />
                            <Route path='/todo-list' element={<TodoList />} />
                            <Route path='/notes' element={<Notes />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App