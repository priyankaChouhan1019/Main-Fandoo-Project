import React, { Component } from 'react'
import '../displayNote/DisplayNote.scss'
import Icons from '../icons/Icons';

export class DisplayNote extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (

      <div className="disp-container">
        {/* {this.props.notesArray.map((item, index) => (
          <div >
            {item.title}
            {item.description} */}
            <input type="text" name="note" placeholder='title'/>
            <input type="text" name="note" placeholder='description'/>

            <div className="disp-icons">
              <div className="icons-list">
                <Icons />

              </div>
            </div>
          {/* </div>
        ))} */}
      </div>


    )
  }
}

export default DisplayNote
