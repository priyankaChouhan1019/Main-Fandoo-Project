import React, { Component } from 'react'

import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import '../takeNote/TakeNote.scss'
import Icons from '../icons/Icons';
import NoteService from '../../service/notesservice';

const noteService = new NoteService();

export class TakeNote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: true
    }
  }

  handleOpen = () => {
    this.setState({
      open: false
    })
  }

  handleClose = () => {
    this.setState({
      open: true
    })


    let data = {
      "title": this.state.title,
      "description": this.state.description
    }

    noteService.addNote(data)
      .then(() => {
        this.setState({
          open: true,
          title: '',
          description: ''
        })
      })

  }

  getNotesOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        {
          this.state.open ?
            <div className="title-container">
              <input type="text" name="note" placeholder='Take a Note' onClick={this.handleOpen} />
              <div className="title-icons">
                <AssignmentTurnedInOutlinedIcon />
                <BrushOutlinedIcon />
                <InsertPhotoOutlinedIcon />
              </div>
            </div>
            :
            <div className="discp-container">
              <input type="text" name="title" placeholder='Take a Note' />
              <input type="text" name="description" placeholder='Discription' />

              <div className="discp-icons">
                <div className="icon-list">
                  <Icons />
                </div>
                <button onClick={this.handleClose}>close</button>
              </div>

            </div>
        }
      </div>
    )
  }
}

export default TakeNote
