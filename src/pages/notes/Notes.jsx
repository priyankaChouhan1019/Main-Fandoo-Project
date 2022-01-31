import React, { Component } from 'react'
import TakeNote from '../../components/takeNote/TakeNote'
import '../notes/Notes.scss'
import NoteService from '../../service/notesservice'
import Displaynew from '../../components/displayNote/Displaynew'


// const updateNotesCOntext = React.createContext()

// const contexctProvider =  updateNotesCOntext.Provider
// const contextConsumer = updateNotesCOntext.Consumer

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
    // this.updateDiplayNote();
}


gettheNotes = () => { //for refresh display
    noteService.getNote()
        .then((res) => {
          console.log(res)
          let filterData= res.data.data.data.filter(data=>data.isArchived !==true && data.isDeleted !==true)
          //ARR.filter(data => data.state == "New York" && count === 2);
          //updateing notes
            this.setState({
                // noteArr: res.data.data.data
                noteArr:filterData

            })
           // console.log(this.state.noteArr)
        })
        .catch((err) => {

        })
}

  render() {

    return (
      <div  className="note-box">

{/* <contexctProvider value={this.gettheNotes}>
          <TakeNote />
         <Displaynew notesArray ={this.state.noteArr} />
  </contexctProvider> */}


         <TakeNote refreshDispNote ={this.gettheNotes} />
         <Displaynew notesArray ={this.state.noteArr} refreshDispNote={this.gettheNotes}/> 
      </div>
    )
  }
}

export default Notes
