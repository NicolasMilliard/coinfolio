import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'

import { NotesData }  from '../data/data'
import { Header } from '../components'

const Notes = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-[#182b4b] rounded-3xl'>
      <Header category='Tools' title='Notes' />
      <RichTextEditorComponent>
        <NotesData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Notes