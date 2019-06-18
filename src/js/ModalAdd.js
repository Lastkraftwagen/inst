import React from 'react';
import '../css/AddingModal.css';


class ModalAdd extends React.Component {

  modalRef = null;


  handleClick = (event) => {
    console.log(this.modalRef);
    
    if (this.modalRef !== null && !this.modalRef.contains(event.target))
      this.props.close();
  }

  render() {
    console.log('here');

    return (
      <div className="modal" onClick={this.handleClick} >
        <div
          className="modal-content"
          ref={param => this.modalRef = param}
        >
          <span className="close" onClick={this.props.close}>&times;</span>
          <p>вщdfvfdvdfvdfvdfvdfvслвлсвщлсщвсвщслв</p>
        </div>  
      </div>
    )
  }
}
export default ModalAdd;