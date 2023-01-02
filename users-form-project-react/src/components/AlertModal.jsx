import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { useState } from "react";

const AlertModal = ({ show, setShow, msg }) => {
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} style={{ marginTop: "150px" }} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Invalid input</Modal.Title>
        </Modal.Header>
        <Modal.Body className="my-2">
          { msg}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AlertModal;
