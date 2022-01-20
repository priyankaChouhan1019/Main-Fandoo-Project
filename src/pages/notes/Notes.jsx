import React, { Component } from 'react'
import DisplayNote from '../../components/displayNote/DisplayNote'
import TakeNote from '../../components/takeNote/TakeNote'
import '../notes/Notes.scss'
import NoteService from '../../service/notesservice'

const noteService = new NoteService();
export class Notes extends Component {

  constructor(props){
    super(props)

    this.state={
      noteArr:[]
    }
  }

  componentDidMount(){
    noteService.getNote()
    .then((res)=>{

      this.setState({
        noteArr:res.data
      })

    })
    .catch((err)=>{

    })

  }
  render() {
    return (
      <div  className="note-box">
         <TakeNote/>
         <DisplayNote notearray ={ this.state.noteArr }/>
      </div>
    )
  }
}

export default Notes
