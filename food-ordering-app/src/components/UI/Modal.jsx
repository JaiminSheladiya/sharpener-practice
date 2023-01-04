import React from 'react'
import './Modal.css'
import { createPortal } from 'react-dom'
const Backdrop = props => {
    return <div className='backdrop' onClick={props.onClose}></div>
}

const ModalOverlay = props => {
    return <div className="modal">
        <div className="content">{ props.children}</div>
     </div>;
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
}

export default Modal