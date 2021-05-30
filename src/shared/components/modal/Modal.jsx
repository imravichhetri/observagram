import React from 'react'

import './styles.scss';

const Modal = props => {
  return (
    <div className="modal-container">
      <div className="close-button">X</div>
      <div className="modal-content-container">
        {props.children}
      </div>
    </div>
  )
}



export default Modal;
