import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, CandleSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts'

import { bitcoinChartData, FinancialPrimaryXAxis, BitcoinPrimaryYAxis } from '../data/data'
import { useStateContext } from '../contexts/ContextProvider'
import { ChartsHeader } from '../components/'

const date1 = new Date('2012, 4, 1');

function filterValue(value) {
  if(value.x >= date1) {
    return value.x, value.high, value.low;
  }
}

const returnValue = bitcoinChartData.filter(filterValue);

const Btc = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-[#182b4b] rounded-3xl">
      <ChartsHeader category="Bitcoin" />
      <div className="w-full">
        <ChartComponent
          id="bitcoin-chart"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={BitcoinPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          background={"#182b4b"}
        >
          <Inject services={[CandleSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              name="Bitcoin"
              type="Candle"
              enableSolidCandles="true"
              bullFillColor= "#f23645"
              bearFillColor="#089981"
              low="low"
              high="high"
              open="open"
              close="close"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Btc