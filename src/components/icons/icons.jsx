import React, { Component } from 'react'
import '../icons/Icons.scss'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';

export class Icons extends Component {
  render() {
    return (
      <div cl>
              <AddAlertOutlinedIcon />
              <PersonAddAltOutlinedIcon />
              <ColorLensOutlinedIcon />
              <PhotoOutlinedIcon />
              <ArchiveOutlinedIcon />
              <MoreVertOutlinedIcon />
      </div>
    )
  }
}

export default Icons
