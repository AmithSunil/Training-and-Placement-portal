import React, { useEffect, useState } from "react";
import "./active.css";
import Button from "react-bootstrap/Button";
import Applicants from "./Applicants";
import Modal from "react-bootstrap/Modal";

const ActiveDrives = () => {
  const applied = [
    {
      id: 0,
      title: "New Title 1",
      position: "New Position 1",
      package: 8,
      lastdate: "01/01/2025",
      drivedate: "01/02/2025",
      cgpa: 9,
      location: "New Location 1",
      backlogs: 2,
    },
    {
      id: 1,
      title: "New Title 2",
      position: "New Position 2",
      package: 9,
      lastdate: "02/01/2025",
      drivedate: "02/02/2025",
      cgpa: 8,
      location: "New Location 2",
      backlogs: 3,
    },
    {
      id: 2,
      title: "New Title 3",
      position: "New Position 3",
      package: 10,
      lastdate: "03/01/2025",
      drivedate: "03/02/2025",
      cgpa: 7,
      location: "New Location 3",
      backlogs: 4,
    },
    {
      id: 3,
      title: "New Title 4",
      position: "New Position 4",
      package: 11,
      lastdate: "04/01/2025",
      drivedate: "04/02/2025",
      cgpa: 6,
      location: "New Location 4",
      backlogs: 5,
    },
  ];

  const [latestID, setLatestID] = useState(0);

  const [showApplicantsBar, setShowApplicantsBar] = useState({});
  const [showApplicants, setShowApplicants] = useState(
    applied.reduce((acc, item) => {
      acc[item.id] = {
        id: item.id,
        show: false,
        title: item.title,
        position: item.position,
        package: item.package,
        location: item.location,
        drivedate: item.drivedate,
        backlogs: item.backlogs,
        lastdate: item.lastdate,
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
              <h6>Drive Date: {drive.drivedate}</h6>
              <h6>Package: {drive.package} lpa</h6>
              <h6>Location: {drive.location}</h6>
              <h6>Backlogs: {drive.backlogs}</h6>
              <h6>Last Date: {drive.lastdate}</h6>
              <h6>Drive Date: {drive.drivedate}</h6>

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
            <label>Package:</label>
            <input
              type="text"
              value={showApplicantsBar.package}
              onChange={(e) =>
                setShowApplicantsBar((prevState) => ({
                  ...prevState,
                  package: e.target.value,
                }))
              }
            />
            <label>Location:</label>
            <input
              type="text"
              value={showApplicantsBar.location}
              onChange={(e) =>
                setShowApplicantsBar((prevState) => ({
                  ...prevState,
                  location: e.target.value,
                }))
              }
            />
            <label>Backlogs allowed:</label>
            <input
              type="text"
              value={showApplicantsBar.backlogs}
              onChange={(e) =>
                setShowApplicantsBar((prevState) => ({
                  ...prevState,
                  backlogs: e.target.value,
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
