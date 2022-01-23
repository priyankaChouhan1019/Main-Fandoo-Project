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
  render() {
    return (
      <div  className="note-box">


         {/* <TakeNote /> */}
         <TakeNote refreshDispNote ={this.gettheNotes}/>
         {/* <DisplayNote notesArray ={this.state.noteArr}/> */}
         <Displaynew notesArray ={this.state.noteArr}/>
      </div>
    )
  }
}

export default Notes
