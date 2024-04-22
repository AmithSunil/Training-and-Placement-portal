import React, { useEffect, useState } from "react";
import "./active.css";
import Button from "react-bootstrap/Button";
import Applicants from "./Applicants";
import Modal from "react-bootstrap/Modal";

const ActiveDrives = () => {
  const [applied, setApplied] = useState([
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
  ]);

  const [latestID, setLatestID] = useState(0);

  const [showApplicantsBar, setShowApplicantsBar] = useState({});
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
          show: !prevState[driveID]?.show,
        },
      };
    });
  };
  const [show, setShow] = useState(false);
  const [editedDrive, setEditedDrive] = useState("");
  const handleClose = () => {
    closeDrive();
    setShow(false);
  };

  const [editing, setEditing] = useState(false);

  const editDrive = (driveID) => {
    setEditedDrive(driveID);
    // Handle editing the drive
    setShowApplicantsBar(
      Object.values(showApplicants).find((item) => item.id === driveID)
    );
    console.log(applied, showApplicantsBar);
    setEditing(true);
  };

  const makeEdit = () => {
    // Handle saving the edited drive
    setShowApplicants(
      Object.values(showApplicants).map((item) => {
        if (item.id === editedDrive) {
          console.log(editedDrive);
          return showApplicantsBar;
        }
        return item;
      })
    );
    setEditing(false);
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
      {!editing && (
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
                <Button
                  onClick={() => {
                    editDrive(drive.id);
                  }}
                >
                  Edit
                </Button>
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
      )}
      {editing && (
        <div className="edit-main">
          <h1>EDIT</h1>
          <div className="edit-text">
            <label>Title:</label>
            <input
              type="text"
              value={showApplicantsBar.title}
              onChange={(e) =>
                setShowApplicantsBar((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }))
              }
            />
            <label>Postition:</label>
            <input
              type="text"
              value={showApplicantsBar.position}
              onChange={(e) =>
                setShowApplicantsBar((prevState) => ({
                  ...prevState,
                  position: e.target.value,
                }))
              }
            />
          </div>
          <div className="edit-buttons">
            <Button
            variant="secondary"
              onClick={() => {
                setEditing(false);
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                makeEdit();
              }}
            >
              Save Changes
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActiveDrives;
