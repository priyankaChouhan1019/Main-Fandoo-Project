import React, { Component } from 'react'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import { Button} from "@material-ui/core";
import '../displayNote/DisplayNote.scss'

export class DisplayNote extends Component {
  render() {
    return (
     
        <div className="disp-container">
          <input type="text" name="note" placeholder='Take a Note' />

          <div className="disp-icons">
            <div className="icons-list">
              <AddAlertOutlinedIcon />
              <PersonAddAltOutlinedIcon />
              <ColorLensOutlinedIcon />
              <PhotoOutlinedIcon />
              <ArchiveOutlinedIcon />
              <MoreVertOutlinedIcon />
              <Button className="secondCButton" variant="text" onClick={this.handleClose}>Close</Button>
             
            </div>
          </div>

        </div>
    
    )
  }
}

export default DisplayNote
