import React, { Component } from 'react'
import TakeNote from '../../components/takeNote/TakeNote'
import '../notes/Notes.scss'
import NoteService from '../../service/notesservice'
import Displaynew from '../../components/displayNote/Displaynew'


const noteService = new NoteService();
export class Notes extends Component {

  constructor(props){
    super(props)

    this.state={
      noteArr:[]
    }
  }

  componentDidMount() {
    this.gettheNotes();
    this.updateDiplayNote();
}

gettheNotes = () => { //for refresh display
    noteService.getNote()
        .then((res) => {
          console.log(res)
          //updateing notes
            this.setState({
                noteArr: res.data.data.data
            })
            console.log(this.state.noteArr)
        })
        .catch((err) => {

        })
}

updateDiplayNote=()=>{
  noteService.getNote()
  .then(res =>{
      this.setState({
          noteArr:res.data.data.data
      })
      console.log(res)
  })
  .catch(err =>{
      console.log(err)
  })
}
  render() {
    return (
      <div  className="note-box">


         <TakeNote refreshDispNote ={this.gettheNotes} />
         <Displaynew notesArray ={this.state.noteArr} updateDiplayNote={this.updateDiplayNote}/>
      </div>
    )
  }
}

export default Notes
