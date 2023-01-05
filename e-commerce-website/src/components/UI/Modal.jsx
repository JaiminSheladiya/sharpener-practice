import { Button , Modal } from "react-bootstrap";
import React, { useState } from "react";

const ModalUI = ({title , body}) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

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
