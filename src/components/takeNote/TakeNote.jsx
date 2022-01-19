import React, { Component } from 'react'

import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';

import '../takeNote/TakeNote.scss'

export class TakeNote extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       open :true
    }
  }

  handleOpen = () =>{
    this.setState({
      open :false
    })   
  }

  handleClose = () =>{
    this.setState({
      open :true
    })   
  }
  
  render() {
    return (
      <div>
        {
          this.state.open ?
        <div className="title-container">
          <input type="text" name="note" placeholder='Take a Note' onClick={this.handleOpen}/>
          <div className="title-icons">
            <AssignmentTurnedInOutlinedIcon />
            <BrushOutlinedIcon />
            <InsertPhotoOutlinedIcon />
          </div>
        </div>
        :
        <div className="discp-container">
          <input type="text" name="note" placeholder='Take a Note' />
          <input type="text" name="discription" placeholder='Discription' />

          <div className="discp-icons">
            <div className="icon-list">
              <AddAlertOutlinedIcon />
              <PersonAddAltOutlinedIcon />
              <ColorLensOutlinedIcon />
              <PhotoOutlinedIcon />
              <ArchiveOutlinedIcon />
              <MoreVertOutlinedIcon />
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
