import React from 'react'

const ChartsHeader = ({ category }) => {
  return (
    <div className="mb-10">
      <div>
        <p className="text-lg text-gray-400">Chart</p>
        <p className="text-3xl font-extrabold tracking-tight text-gray-200">{category}</p>
      </div>
    </div>
  )
}

export default ChartsHeader