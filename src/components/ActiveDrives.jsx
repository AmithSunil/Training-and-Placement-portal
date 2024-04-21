import React, { useEffect, useState } from "react";
import "./active.css";
import Button from "react-bootstrap/Button";
import Applicants from "./Applicants";
import Modal from "react-bootstrap/Modal";

const ActiveDrives = () => {
  const applied = [
    {
      id: 0,
      title: "TATA",
      position: "Engineer",
      date: "",
    },
    {
      id: 1,
      title: "WIPRO",
      position: "Developer",
      date: "25/2/24",
    },
    {
      id: 2,
      title: "Blae",
      position: "Tester",
      date: "25/2/24",
    },
    {
      id: 3,
      title: "Blae",
      position: "Tester",
      date: "25/2/24",
    },
  ];

  const [latestID, setLatestID] = useState(0);
  
  const [showApplicants, setShowApplicants] = useState(
    applied.reduce((acc, item) => {
      acc[item.id] = {
        id: item.id,
        show: false,
        title: item.title,
        position: item.position,
        date: item.date,
      };
      return acc;
    }, {})
  );

  const toggleApplicants = (driveID) => {
    setShowApplicants((prevState) => {
      return {
        ...prevState,
        [driveID]: {
          ...prevState[driveID],
          show: !prevState[driveID]?.show || true,
        },
      };
    });
  };

  useEffect(() => {}, [showApplicants]);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    closeDrive();
    setShow(false);
  };

  const handleShow = (driveID) => {
    setLatestID(driveID);
    setShow(true);
  };

  const closeDrive = () => {
    // Show the confirmation modal

    // Close the modal after closing the drive

    // Filter out the drive with the specified ID
    setShowApplicants((prevShowApplicants) => {
      const updatedShowApplicants = { ...prevShowApplicants };
      delete updatedShowApplicants[latestID];
      return updatedShowApplicants;
    });

    console.log(showApplicants);
    console.log("Drive Closed");
  };

  return (
    <div className="main">
      <>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Hey</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to close the drive?</Modal.Body>
          <Modal.Footer>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "row",
              }}
            >
              <Button
                variant="secondary"
                onClick={() => {
                  setShow(false);
                }}
              >
                No
              </Button>
              <Button variant="primary" onClick={() => handleClose()}>
                Close Drive
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </>
      <div className="title-body">
        <h1>ACTIVE DRIVES</h1>
      </div>
      <div className="active-body">
        {Object.values(showApplicants).map((drive) => (
          <div key={drive.id} className="active-drive-card">
            <h4>{drive.title}</h4>
            <div className="status"></div>
            <h6>Position: {drive.position}</h6>
            <h6>Date: {drive.date}</h6>

            <div className="active-buttons">
              <Button
                onClick={() => {
                  toggleApplicants(drive.id);
                }}
              >
                View Applicants
              </Button>
              <Button>Edit</Button>
              <Button
                onClick={() => {
                  handleShow(drive.id);
                }}
              >
                Close Drive
              </Button>
            </div>

            {/* Check if the drive's applicants should be shown */}
            {showApplicants[drive.id]?.show && <Applicants key={drive.id} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveDrives;
