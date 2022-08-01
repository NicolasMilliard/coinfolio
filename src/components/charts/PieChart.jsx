import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, Inject } from '@syncfusion/ej2-react-charts'

import { pieChartData } from '../../data/data'

const PieChart = () => {
  return (
    <AccumulationChartComponent
    id='pie-chart'
    legendSettings={{ visible: false }}
    height='320px'
    background='#182b4b'
    tooltip={{ enable: true }}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Assets"
          dataSource={pieChartData}
          xName="x"
          yName="y"
          startAngle={0}
          endAngle={360}
          radius="80%"
          explodeIndex={0}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Outside',
            font: {
              fontWeight: '600',
              color: '#fff'
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default PieChart