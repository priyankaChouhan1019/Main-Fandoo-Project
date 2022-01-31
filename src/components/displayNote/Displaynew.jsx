import React, { Component } from 'react'
import '../displayNote/DisplayNote.scss'
import Icons from '../icons/Icons';
import NoteService from '../../service/notesservice';

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Notes from '../../pages/notes/Notes';

import Button from '@mui/material/Button';

const noteService = new NoteService();


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
        width: theme.spacing(80)
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
        width: theme.spacing(100)
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    {/* <CloseIcon /> */}
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export class DisplayNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            title: this.props.notesArray.title,
            description: this.props.notesArray.description,
            // color: this.props.color,
            color:'#ffffff',
          //  id: ' '
          id:this.props.notesArray.id,
          archive:false,
          delete:false

        };
    }

    handleOpenTitle = (item) => {
        this.setState({
            open: true,
            title: item.title,
            description: item.description,
            id: item.id
        })
    }

    changeColor=(value)=>{
        this.setState({
            color:value
        })
    }

    changeArchive = (val) => {
        this.setState({
            checkArchive: val
        })
    }

    changeDelete = (val) => {
        this.setState({
            handleDelete: val
            
        })
    }

    handleClose = () => {
        
        const formData = new FormData();
        formData.append("title", this.state.title)
        formData.append("description", this.state.description)
        formData.append("noteId", this.state.id)
        // formData.append("color", this.state.color)
       // formData.append("isArchived", this.state.archive)


        noteService.getNote(formData)
            .then(res => {
                // refreshDisplaynote
                this.props.refreshDispNote();
                this.setState({
                    open: false,
                    title: '',
                    description: '',
                    id:' ',
                    // color: '#ffffff',
                    //  archive: true
                })
            })
            .catch(err => {
                console.log(err)
            })

    }

    howerTitleDesc = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {


        return (

            <div className="disp-container">
                {this.props.notesArray.map((item, index) => (
                    <div className="display-box" style={{ backgroundColor: item.color }}>
                        <div className="descp-title" onClick={() => this.handleOpenTitle(item)}>
                            {item.title} <br></br>
                            {item.description}
                        </div>
                        <div className="icons-list">
                            <Icons mode="update" noteId={item.id} changeColor={this.changeColor} refreshDispNote={this.props.refreshDispNote}
                            changeArchive={this.changeArchive} changeDelete={this.changeDelete} />
                        </div>

                    </div>
                ))
                }

                <BootstrapDialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
                    <div style={{ width: "100%", overflow: "hidden" }}>
                        <div style={{backgroundColor: this.state.color}}>
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={this.handleClose} >
                            <div className='hower-title'>
                                <input type="text" style={{ border: "none", outline: "none",backgroundColor: this.state.color }} value={this.state.title} name="title" onChange={(e) => this.howerTitleDesc(e)} />
                            </div>
                        </BootstrapDialogTitle>
                        <DialogContent>
                            <div className='hower-desp'>
                                <input type="text" style={{ border: "none", outline: "none",backgroundColor: this.state.color}} value={this.state.description} name="description" onChange={(e) => this.howerTitleDesc(e)} />
                            </div>
                        </DialogContent>
                        <DialogContent className="close-Icon" >

                            <Icons mode="update" noteId={this.state.id} changeColor={this.changeColor} refreshDispNote={this.props.refreshDispNote}  changeArchive={this.changeArchive} changeDelete={this.changeDelete}/>
                            <Button autoFocus onClick={(title, description) => this.handleClose(title, description)} changeColor={this.changeColor}> Close </Button>

                        </DialogContent>
                        </div>
                    </div>

                </BootstrapDialog>


            </div>


        )
    }
}

export default DisplayNote
