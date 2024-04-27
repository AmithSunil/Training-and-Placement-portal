import React from "react";
import "./drives.css";
import DriveCard from "./DriveCard";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const Drives = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [drives,setDrives] = useState([])
  
 

    useEffect(() => {
      axios
      .get("https://tpc-backend.onrender.com/drives/drive")
        .then((response) => {
          // setDrives(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      }, []);
    

 


  return (
    <div className="drive">
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Hey</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to apply?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Apply
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      <div className="title-body">
        <h1>DRIVES</h1>
      </div>
      <div className="drive-body">
        {drives.map((drive, index) => {
          return (
            <DriveCard
              key={index}
              detail={drives[index]}
              buttonClicked={handleShow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Drives;




 