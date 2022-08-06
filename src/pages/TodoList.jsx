import React from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective, Kanban } from '@syncfusion/ej2-react-kanban'

import { todoData, todoGrid } from '../data/data'
import { Header } from '../components'

function columnTemplate(props) {
  return(
    <div className='text-xl font-semibold'>{props.headerText}</div>
  )
}

const TodoList = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-[#182b4b] rounded-3xl'>
      <Header category='Tools' title='Todo List' />
      <KanbanComponent
        id='kanban'
        dataSource={todoData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id'}}
        keyField='Status'
        swimlaneSettings={{keyField: 'Assignee'}}
      >
        <ColumnsDirective>
          {todoGrid.map((item, index) =>
            <ColumnDirective key={index} {...item} template={(props) => columnTemplate(props)} />)}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default TodoList