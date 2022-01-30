import React, { Component } from 'react'
import Displaynew from '../../components/displayNote/Displaynew';
import NoteService from '../../service/notesservice';

const noteService = new NoteService();

export class TrashNotes extends Component {
    constructor(props){
        super(props)
    
        this.state={
          noteArr:[]
        }
      }
    
      componentDidMount() {
        noteService.gettrashNotes();
        this.updateDiplayNote();
    }
    
    gettheNotes = () => { //for refresh display
        noteService.gettrashNotes()
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
      <div>
          <Displaynew notesArray ={this.state.noteArr} updateDiplayNote={this.updateDiplayNote}/>       
      </div>
    )
  }
}

export default TrashNotes
