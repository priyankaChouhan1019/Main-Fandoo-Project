import React, { Component } from 'react'

import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';

import '../takeNote/TakeNote.scss'

export class TakeNote extends Component {
  render() {
    return (
      <div>
        <div className="take-container">
                    <div className="title-container">Title</div>
                    <div className="Discp-container">Description
                    <div>
                        <AddAlertOutlinedIcon/>
                        <PersonAddAltOutlinedIcon />
                        <ColorLensOutlinedIcon />
                        <PhotoOutlinedIcon />
                        <ArchiveOutlinedIcon />
                        <MoreVertOutlinedIcon />
                    </div>
                    </div>

                </div>
        
      </div>
    )
  }
}

export default TakeNote
