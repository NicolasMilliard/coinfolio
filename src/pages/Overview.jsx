import React from 'react'
import { LineChart, PieChart } from '../components'
import { SiBitcoin, SiEthereum, SiBinance } from 'react-icons/si'
import { IoLogoUsd } from 'react-icons/io'
import { BiTrendingUp, BiTrendingDown } from 'react-icons/bi'

import { useStateContext } from '../contexts/ContextProvider'

const Overview = () => {
  return (
    <>
      <div className='m-3 p-7'>
        <h1 className='text-4xl font-extrabold text-slate-900'>My Assets</h1>
      </div>
      <div className='flex m-3 px-7 flex-wrap gap-8 items-center'>
        {/* Bitcoin */}
        <div className='bg-gradient-to-r from-[#f7931a75] to-[#f7931a95] h-43 rounded-xl lg:w-80 p-7'>
          <div className='flex items-center mb-4 justify-between'>
            <div className='flex items-center'>
              <SiBitcoin className='text-slate-900' />
              <p className='text-slate-900 font-semibold text-2xl ml-3'>BTC</p>
            </div>              
            <div className='flex items-center ml-12 p-2 bg-[#15c46d] rounded-3xl'>
              <BiTrendingUp className='text-white text-sm' />
              <p className='text-white text-sm ml-2'>+1.13%</p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-2xl font-semibold'>0.1246</p>
            <p className='text-sm'>$2,895.48</p>
          </div>
        </div>
        {/* Ethereum */}
        <div className='bg-gradient-to-r from-[#7986cb75] to-[#7986cb95] h-43 rounded-xl lg:w-80 p-7'>
          <div className='flex items-center mb-4 justify-between'>
            <div className='flex items-center'>
              <SiEthereum className='text-slate-900' />
              <p className='text-slate-900 font-semibold text-2xl ml-3'>ETH</p>
            </div>              
            <div className='flex items-center ml-12 p-2 bg-[#15c46d] rounded-3xl'>
              <BiTrendingUp className='text-white text-sm' />
              <p className='text-white text-sm ml-2'>+1.37%</p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-2xl font-semibold'>1.6146</p>
            <p className='text-sm'>$2,678.44</p>
          </div>
        </div>
        {/* Binance Coins */}
        <div className='bg-gradient-to-r from-[#f0b90b75] to-[#f0b90b95] h-43 rounded-xl lg:w-80 p-7'>
          <div className='flex items-center mb-4 justify-between'>
            <div className='flex items-center'>
              <SiBinance className='text-slate-900' />
              <p className='text-slate-900 font-semibold text-2xl ml-3'>BNB</p>
            </div>              
            <div className='flex items-center ml-12 p-2 bg-[#dd1547] rounded-3xl'>
              <BiTrendingDown className='text-white text-sm' />
              <p className='text-white text-sm ml-2'>-0.52%</p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-2xl font-semibold'>7.8695</p>
            <p className='text-sm'>$2,124.76</p>
          </div>
        </div>
        {/* USDC */}
        <div className='bg-gradient-to-r from-[#2775ca75] to-[#2775ca95] h-43 rounded-xl lg:w-80 p-7'>
          <div className='flex items-center mb-4 justify-between'>
            <div className='flex items-center'>
              <IoLogoUsd className='text-slate-900' />
              <p className='text-slate-900 font-semibold text-2xl ml-3'>USDC</p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-2xl font-semibold'>1224.57</p>
            <p className='text-sm'>$1,224.57</p>
          </div>
        </div>
      </div>
      <div className='m-3 p-7'>
        <h2 className='text-4xl font-extrabold text-slate-900'>Portfolio Stats</h2>
        <div className='flex'>
          <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-[#182b4b] rounded-3xl">
            <LineChart />
          </div>
          <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-[#182b4b] rounded-3xl">
            <PieChart />
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview