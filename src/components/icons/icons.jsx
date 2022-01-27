import React, { Component } from 'react'
import '../icons/Icons.scss'
import TakeNote from '../takeNote/TakeNote';
import NoteService from '../../service/notesservice';

import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';

//poper
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Popover } from '@material-ui/core';
import Colors from '../colors/Colors';

let colorsArray = [
  "#f28b82", "#fbbc04", "#fff475", "#ccff90",
  "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb",
  "#fdcfe8", "#e6c9a8", "#e8eaed", "#aecbfa"
]

//  const service = new UserService();
const service = new NoteService();

export class Icons extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // popover
      anchorEl: false,
      color1: false

    }
  }

  //popover
  handleClick = event => this.setState({ anchorEl: event.currentTarget })
  handleClose = () => this.setState({ anchorEl: false })


  colorOpen = (e) => {
    this.setState({
      color1: e.currentTarget
    })
  }

  colorClose = () => {
    this.setState({
      color1: false
    })
  }

  color = (storeclr) => {
    this.props.changeColor(storeclr);
  }

  checkArchive = () => {
    // this.props.archivebtn(true)

        if(this.mode === "create"){
        this.props.archivebtn(true)
        }
        else{
            console.log("in else")
            // update-part
            let data ={
                "noteIdList":[this.props.noteId],
                "isArchived": true
            }
            service.archiveChange(data)
            .then(res =>{
                console.log(res)
            })
            .catch(err =>{
                console.log( "here is error" + err)
            })
        }
  }


  render() {
    //popover
    const { anchorEl, color1 } = this.state

    return (
      <div className='icons-list'>
        <AddAlertOutlinedIcon />
        <PersonAddAltOutlinedIcon />
        <div>
          {/* //oncick={this.color('#ffffff)} */}
          <ColorLensOutlinedIcon onClick={(e) => this.colorOpen(e)} />
          <Popover
            id="simple-menu"
            anchorEl={color1}
            keepMounted
            open={Boolean(color1)}
            onClose={this.colorClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
          >

            {
              colorsArray.map((item, index) => (
                <div className="colorPallets" onClick={() => this.color(item)}
                  style={{ backgroundColor: item }}>
                  {item.backgroundColor}
                </div>
              ))
            }
            {/* <Colors/> */}
          </Popover>
        </div>

        <PhotoOutlinedIcon />
        <div>
          <ArchiveOutlinedIcon onClick={(e) => this.checkArchive(e)} />
        </div>
        <div>
          <MoreVertOutlinedIcon onClick={this.handleClick} />
          <Popover
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
          >
            <MenuItem onClick={this.handleClose}>Delete note</MenuItem>
            <MenuItem onClick={this.handleClose}>Add label</MenuItem>
            <MenuItem onClick={this.handleClose}>Add drawing</MenuItem>
            <MenuItem onClick={this.handleClose}>Make a copy</MenuItem>
            <MenuItem onClick={this.handleClose}>Show tick boxes</MenuItem>
          </Popover>
        </div>
      </div>
    )
  }
}


export default Icons
