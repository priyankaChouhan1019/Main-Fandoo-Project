import React, { Component } from 'react'
import '../displayNote/DisplayNote.scss'
import Icons from '../icons/Icons';

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';




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
                    <CloseIcon />
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
            description: this.props.notesArray.description

            
        };
    }
            
    handleOpenTitle = (item) => {
        this.setState({
            open: true,
            title: item.title,
            description: item.description
        })
        console.log(this.state.title)
    }

    handleClose = () => {
        this.setState({
            open: false,
        })
    }

    howerTitleDesc = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    render() {

    
        return (

            <div className="disp-container">
                {this.props.notesArray.map((item, index) => (
                    <div className="display-box" onClick={() => this.handleOpenTitle(item)}>
                        <div >
                            {item.title}<br></br>
                            {item.description}
                            <div className="disp-icons">
                                <div className="icons-list">
                                    <Icons />

                                </div>
                            </div>
                            
                        </div>
                       
                    </div>
                ))}

                <BootstrapDialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
                    <div style={{ width: "100%", overflow: "hidden"}}>
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={this.handleClose} >
                            <div className='hower-title'>
                            <input type="text" style={{ border: "none", outline: "none" }} value={this.state.title} name="title" onChange={(e) => this.howerTitleDesc(e)} />
                            </div>
                        </BootstrapDialogTitle>
                        <DialogContent>
                            <div className='hower-desp'>
                            <input type="text" style={{ border: "none", outline: "none" }} value={this.state.description} name="description" onChange={(e) => this.howerTitleDesc(e)} />
                            </div>
                        </DialogContent>
                        <DialogContent className="close-Icon" >

                            <Icons />
                            <button autoFocus onClick={(title, description) => this.handleClose(title, description)}> Close</button>
                        </DialogContent>

                    </div>
                    
                </BootstrapDialog>

               
            </div>


        )
    }
}

export default DisplayNote
