import React, { Component } from 'react'
import DisplayNote from '../../components/displayNote/DisplayNote'
import TakeNote from '../../components/takeNote/TakeNote'
import '../notes/Notes.scss'
export class Notes extends Component {
  render() {
    return (
      <div  className="note-box">
         <TakeNote/>
         <DisplayNote/>
      </div>
    )
  }
}

export default Notes
