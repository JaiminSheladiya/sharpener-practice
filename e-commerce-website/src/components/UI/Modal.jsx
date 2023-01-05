import { Button , Modal } from "react-bootstrap";
import React, { useContext, useState } from "react";
import CartContext from "../../store/CartContext";

const ModalUI = ({title , body}) => {
    const { show, setShow } = useContext(CartContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
                  <Modal.Title>
                      {title}
           </Modal.Title>
        </Modal.Header>
              <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUI;
