import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { NavBar, Sidebar } from './components'
import { Btc, Eth, Calendar, Notes, Portfolio, Crypto, TodoList, Trending, Watchlist } from './pages'

import { useStateContext } from './contexts/ContextProvider'

import './App.css'

const App = () => {
    const { activeMenu } = useStateContext();

  return (
    <div>
        <BrowserRouter>
            <div className='flex relative'>
                {/* Sidebar */}
                {activeMenu ? (
                    <div className='w-72 fixed sidebar bg-[#182b4b]'>
                        <Sidebar />
                    </div>
                ) : (
                    <div className='w-0'>
                        <Sidebar />
                    </div>
                )}
                {/* Navigation bar */}
                <div className={`bg-[#111e35] min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                    <div className='fixed md:static bg-[#111e35] navbar w-full'>
                        <NavBar />
                    </div>
                    {/* Routes */}
                    <div>
                        <Routes>
                            {/* Dashboard */}
                            <Route path='/' element={<Portfolio />} />
                            <Route path='/portfolio' element={<Portfolio />} />
                            {/* Pages */}
                            <Route path='/crypto' element={<Crypto />} />
                            <Route path='/watchlist' element={<Watchlist />} />
                            <Route path='/trending' element={<Trending />} />
                            {/* Live Charts */}
                            <Route path='/btc-usd' element={<Btc />} />
                            <Route path='/eth-usd' element={<Eth />} />
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