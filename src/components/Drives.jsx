import React from "react";
import "./drives.css";
import DriveCard from "./DriveCard";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Drives = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [show, setShow] = useState(false);
  const [applied, setApplied] = useState("");
 
  const notify = (text) => toast(text);

  const handleClose = () => {

    console.log()
    axios
    .post(`${apiUrl}/drives/apply-drive/`, 
    {
      st_id : window.localStorage.getItem("USER_ID"),
      drive: window.localStorage.getItem("APPLIED")
  })
    .then((response) => {
       console.log(response.data);
        notify("Applied Successfully");
      })
    .catch((error) => {
      // console.log(error);
      notify("Application Failed");
    });

    setShow(false)
  };

  const handleShow = () => {

    const appliedDrive = drives.find(drive => drive.drive_id === window.localStorage.getItem("APPLIED"));
    if (appliedDrive) {
      if (JSON.parse(window.localStorage.getItem("PROFILE")).gpa >= appliedDrive.gpa_limit 
      && JSON.parse(window.localStorage.getItem("PROFILE")).backlogs <= appliedDrive.backlog_limit
      && JSON.parse(window.localStorage.getItem("PROFILE")).backlog_history === appliedDrive.backlog_history
    ) {
        setShow(true);
      } else {
        notify("Requirements not met");
      }
    } else {
      notify("Drive not found");
    }
  };
  


  const handleCloseWithout = () => {
    setShow(false);
  }

  const [drives, setDrives] = useState([]);

 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${apiUrl}/drives/drive/`)
      .then((response) => {
        setDrives(response.data.reverse());
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching drives:", error);
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="drive">
            <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <>
        <Modal show={show} onHide={handleCloseWithout}>
          <Modal.Header >
            <Modal.Title>Hey</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to apply?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseWithout}>
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
        {drives.length === 1 ? null :
          drives.map((_, index) => (
            drives[index].is_active &&
            <DriveCard
              key={index}
              detail={drives[index]}
              buttonClicked={handleShow}
              setApplied={setApplied}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Drives;
