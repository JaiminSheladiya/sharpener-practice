import React from 'react'
import './Modal.css'
import { createPortal } from 'react-dom'
const Backdrop = props => {
    return <div className='backdrop'></div>
}

const ModalOverlay = props => {
    return <div className="modal">
        <div className="content">{ props.children}</div>
     </div>;
}

const portalElement = document.getElementById('overlays')

const Modal = ({children}) => {
  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
}

export default Modal