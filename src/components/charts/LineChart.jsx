import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'

import { lineCustomSeries, linePrimaryXAxis, linePrimaryYAxis } from '../../data/data'

const LineChart = () => {
  return (
    <ChartComponent
        id="line-chart"
        height="320px"
        primaryXAxis={linePrimaryXAxis}
        primaryYAxis={linePrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background='#fff'
        legendSettings={{ background: 'white'}}
    >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
            {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart