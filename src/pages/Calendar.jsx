import React from 'react'
import { ScheduleComponent, Agenda, Inject, ResourcesDirective, ResourceDirective } from '@syncfusion/ej2-react-schedule'

import { scheduleData } from '../data/data'
import { Header } from '../components'

function eventTemplate(props) {
  return(
    <div className='template-wrap' style={{ background: props.CategoryColor}}>
      <div className='Subject text-xl font-semibold text-slate-900 px-3 pt-3'>{props.Subject}</div>
      <div className='Network flex flex-wrap items-center text-slate-900 pl-3 pb-3'>
        <img src={props.NetworkImg} />
        <span className='pl-2'>{props.Network}</span>
      </div>
    </div>
  )
}

const Calendar = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-[#182b4b] rounded-3xl'>
      <Header category='Tool' title='ICO Calendar' />
      <ScheduleComponent
        height='650px'
        eventSettings={{ dataSource: scheduleData, template: (props) => eventTemplate(props) }}     
        selectedDate={new Date(2022, 7, 3)}
        currentView='Agenda'
      >
        <ResourcesDirective>
          <ResourceDirective colorField='CategoryColor' />
        </ResourcesDirective>
        <Inject services={[Agenda]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar