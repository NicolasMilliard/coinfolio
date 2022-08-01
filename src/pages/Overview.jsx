import React from 'react'
import { LineChart, PieChart } from '../components'
import { SiBitcoin, SiEthereum, SiBinance, SiDogecoin } from 'react-icons/si'
import { BiTrendingUp, BiTrendingDown } from 'react-icons/bi'

import { useStateContext } from '../contexts/ContextProvider'

const Overview = () => {
  return (
    <>
      <div className='m-3 p-7'>
        <h1 className='text-4xl font-extrabold text-white'>My Assets</h1>
      </div>
      <div className='flex m-3 px-7 flex-wrap gap-8 items-center'>
        {/* Bitcoin */}
        <div className='bg-[#182b4b] h-43 rounded-xl w-80 p-7'>
          <div className='flex items-center mb-4 justify-between'>
            <div className='flex items-center'>
              <SiBitcoin className='text-white' />
              <p className='text-white font-semibold text-2xl ml-3'>BTC</p>
            </div>              
            <div className='flex items-center ml-12 p-2 bg-[#15c46d] rounded-3xl'>
              <BiTrendingUp className='text-white text-sm' />
              <p className='text-white text-sm ml-2'>+1.13%</p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-2xl font-semibold text-white'>0.1246</p>
            <p className='text-sm text-white'>$2,895.48</p>
          </div>
        </div>
        {/* Ethereum */}
        <div className='bg-[#182b4b] h-43 rounded-xl w-80 p-7'>
          <div className='flex items-center mb-4 justify-between'>
            <div className='flex items-center'>
              <SiEthereum className='text-white' />
              <p className='text-white font-semibold text-2xl ml-3'>ETH</p>
            </div>              
            <div className='flex items-center ml-12 p-2 bg-[#15c46d] rounded-3xl'>
              <BiTrendingUp className='text-white text-sm' />
              <p className='text-white text-sm ml-2'>+1.37%</p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-2xl font-semibold text-white'>1.6146</p>
            <p className='text-sm text-white'>$2,678.44</p>
          </div>
        </div>
        {/* Binance Coins */}
        <div className='bg-[#182b4b] h-43 rounded-xl w-80 p-7'>
          <div className='flex items-center mb-4 justify-between'>
            <div className='flex items-center'>
              <SiBinance className='text-white' />
              <p className='text-white font-semibold text-2xl ml-3'>BNB</p>
            </div>              
            <div className='flex items-center ml-12 p-2 bg-[#dd1547] rounded-3xl'>
              <BiTrendingDown className='text-white text-sm' />
              <p className='text-white text-sm ml-2'>-0.52%</p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-2xl font-semibold text-white'>7.8695</p>
            <p className='text-sm text-white'>$2,124.76</p>
          </div>
        </div>
        {/* Dogecoin */}
        <div className='bg-[#182b4b] h-43 rounded-xl w-80 p-7'>
          <div className='flex items-center mb-4 justify-between'>
            <div className='flex items-center'>
              <SiDogecoin className='text-white' />
              <p className='text-white font-semibold text-2xl ml-3'>DOGE</p>
            </div>
            <div className='flex items-center ml-12 p-2 bg-[#dd1547] rounded-3xl'>
              <BiTrendingUp className='text-white text-sm' />
              <p className='text-white text-sm ml-2'>-1.47%</p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-2xl font-semibold text-white'>17'327.07</p>
            <p className='text-sm text-white'>$1,224.57</p>
          </div>
        </div>
      </div>
      <div className='m-3 p-7'>
        <h2 className='text-4xl font-extrabold text-white'>Portfolio Stats</h2>
        <div className='flex gap-8 flex-wrap'>
          <div className="mt-8 p-10 bg-[#182b4b] rounded-3xl">
            <LineChart />
          </div>
          <div className="mt-8 p-10 bg-[#182b4b] rounded-3xl">
            <PieChart />
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview