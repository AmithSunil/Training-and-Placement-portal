import React from "react";
import "./drives.css";
import DriveCard from "./DriveCard";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Drives = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [show, setShow] = useState(false);
  const [applied, setApplied] = useState("");
  const handleClose = () => setShow(false);

  const handleShow = () => {
    axios
      .post(`${apiUrl}/drives/drive/`, {
        id: "2",
        drive_id: applied,
      })
      .then((response) => {
        setDrives(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });

    setShow(true);
  };

  const [drives, setDrives] = useState([]);

  useEffect(() => getDrives, []);

  const getDrives = () => {
    axios
      .get(`${apiUrl}/drives/drive/`)
      .then((response) => {
        setDrives(response.data);
        console.log(response.data);
        console.log(apiUrl);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

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
              setApplied={setApplied}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Drives;
