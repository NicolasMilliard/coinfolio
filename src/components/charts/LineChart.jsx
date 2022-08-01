import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'

import { lineCustomSeries, linePrimaryXAxis, linePrimaryYAxis } from '../../data/data'

const LineChart = () => {
  return (
    <ChartComponent
        id="line-chart"
        height="320px"
        primaryXAxis={linePrimaryXAxis}
        primaryYAxis={linePrimaryYAxis}
        chartArea={{ border: { width: 0 }, borderColor: 'white' }}
        tooltip={{ enable: true }}
        background='#182b4b'
    >
        <Inject services={[LineSeries, DateTime, Tooltip]} />
        <SeriesCollectionDirective>
            {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart