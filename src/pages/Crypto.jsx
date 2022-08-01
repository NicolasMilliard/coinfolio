import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, Edit, Inject } from '@syncfusion/ej2-react-grids'

import { cryptoData, cryptoGrid } from '../data/data'

import { Header } from '../components'

const Crypto = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 rounded-3xl bg-[#182b4b]'>
      <Header category='Page' title='All assets' />
      <GridComponent
        id="gridcomp"
        dataSource={cryptoData}
        allowPaging
        allowSorting
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

export default Crypto