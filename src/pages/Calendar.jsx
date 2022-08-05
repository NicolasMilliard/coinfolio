import React from 'react'
import { ScheduleComponent, Month, Agenda, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule'

import { scheduleData } from '../data/data'
import { Header } from '../components'

const Calendar = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-[#182b4b] rounded-3xl'>
      <Header category='Tool' title='ICO Calendar' />
      <ScheduleComponent
        height='650px'
        eventSettings={{ dataSource: scheduleData }}     
        selectedDate={new Date(2022, 7, 1)}
        currentView='Month'
      >
        <ViewsDirective>
          <ViewDirective option='Month' showWeekend={false} />
        </ViewsDirective>
        <Inject services={[Month, Agenda]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar