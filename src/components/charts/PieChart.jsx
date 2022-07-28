import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject } from '@syncfusion/ej2-react-charts'

import { pieChartData } from '../../data/data'

const PieChart = () => {
  return (
    <AccumulationChartComponent
    id='pie-chart'
    legendSettings={{ visible: true, background: 'white' }}
    height='320px'
    background='#fff'
    tooltip={{ enable: true}}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Assets"
          dataSource={pieChartData}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="90%"
          explodeIndex={0}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
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