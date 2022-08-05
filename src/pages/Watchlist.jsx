import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, Edit, Inject } from '@syncfusion/ej2-react-grids'

import { favoritesCryptoData, cryptoGrid } from '../data/data'

import { Header } from '../components'

const Watchlist = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 rounded-3xl bg-[#182b4b]'>
      <Header category='Page' title='Your Favorites assets' />
      <GridComponent
        id='watchlistgridcomp'
        dataSource={favoritesCryptoData}
        allowPaging
        allowSorting
        style={{ backgroundColor: '#111e35'}}
      >
        <ColumnsDirective>
          {cryptoGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Sort, Filter, Page]} />
      </GridComponent>
    </div>
  )
}

export default Watchlist