import React, { useEffect, useState } from "react";
import "./active.css";
import Button from "react-bootstrap/Button";
import Applicants from "./Applicants";
import Modal from "react-bootstrap/Modal";
import axios from "axios"

const ActiveDrives = () => {
    
  const applied = [
    {
        drive_id: "1bb07f0c-605c-436a-ace2-4d57ae1287b8",
        name: "tcs",
        lpa: 10.0,
        description: "jdfvh",
        lastdate: "2024-06-24",
        drivedate: "2024-06-30",
        position: "ceo",
        location: "trivandrum",
        skills: "zikuhbvsj",
        gpa_limit: "7.0",
        backlog_limit: "2",
        backlog_history: true
    },
    {
        drive_id: "efe143e8-b2c2-4be3-bd63-d082b667e417",
        name: "ust",
        lpa: 10.0,
        description: "jdfvh",
        lastdate: "2024-06-24",
        drivedate: "2024-06-30",
        position: "ceo",
        location: "trivandrum",
        skills: "zikuhbvsj",
        gpa_limit: "7.0",
        backlog_limit: "0",
        backlog_history: false
    },
    {
        drive_id: "174fb481-f4d1-4826-8522-43b9030d3489",
        name: "Google",
        lpa: 10.0,
        description: "jdfvh",
        lastdate: "2024-06-24",
        drivedate: "2024-06-30",
        position: "ceo",
        location: "trivandrum",
        skills: "zikuhbvsj",
        gpa_limit: "7.0",
        backlog_limit: "0",
        backlog_history: false
    },
    {
        drive_id: "38340154-0b5f-433c-9ce6-bbe4a12a7a18",
        name: "awdq3fd",
        lpa: 48.0,
        description: "awdawd",
        lastdate: "2024-04-12",
        drivedate: "2024-04-12",
        position: "awd",
        location: "kochi",
        skills: "aeaef",
        gpa_limit: "48",
        backlog_limit: "5",
        backlog_history: true
    },
    {
        drive_id: "4fb12b5d-956c-454a-8100-ae5f92d9fe9e",
        name: "Bosch",
        lpa: 67.0,
        description: "Bleh",
        lastdate: "2024-04-12",
        drivedate: "2024-04-12",
        position: "Manager",
        location: "kochi",
        skills: "Javascript",
        gpa_limit: "56",
        backlog_limit: "6",
        backlog_history: true
    }
]

  const [latestID, setLatestID] = useState("");

  const [showApplicantsBar, setShowApplicantsBar] = useState({});
  const [showApplicants, setShowApplicants] = useState(
    applied.reduce((acc, item) => {
      acc[item.id] = {
          name: "Google",
          lpa: 10.0,
          description: "jdfvh",
          lastdate: "2024-06-24",
          drivedate: "2024-06-30",
          position: "ceo",
          location: "trivandrum",
          skills: "zikuhbvsj",
          gpa_limit: "7.0",
          backlog_limit: 0,
          backlog_history: false
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
    axios
      .patch(`${process.env.REACT_APP_API_URL}/drives/drive/`,
      {
      name: showApplicantsBar.name,
      lpa: showApplicantsBar.lpa,
      description: showApplicantsBar.description,
      lastdate: showApplicantsBar.lastdate,
      drivedate: showApplicantsBar.drivedate,
      position: showApplicantsBar.position,
      location: showApplicantsBar.location,
      skills: showApplicantsBar.skills,
      gpa_limit: showApplicantsBar.gpa_limit,
      backlog_limit: showApplicantsBar.backlog_limit,
      backlog_history: showApplicantsBar.backlog_history
      }
      )
      .then((response) => {
      console.log(response);
      setShowApplicantsBar(response.data); // Assuming the response contains the updated drive data
      })
      .catch((error) => {
      console.log(error);
      });

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
    <div className="active-main">
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
              <h6>Company Name:{drive.name}</h6>
              <h6>Position: {drive.position}</h6>
               <h6>Package: {drive.package} lpa</h6>
              <h6>Location: {drive.location}</h6>
              <h6>Skills:{drive.skills}</h6>
              <h6>GPA Required{drive.gpa_limit}</h6>
              <h6>Backlogs: {drive.backlogs}</h6>
              <h6>backlog History:{String(drive.backlog_history)}</h6>
              <h6>Last Date: {drive.lastdate}</h6>
              <h6>Drive Date: {drive.drivedate}</h6>
              <h6>Description:{drive.description}</h6>

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
                  value={showApplicantsBar.name}
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
                  value={showApplicantsBar.lpa}
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
                <label>Skills:</label>
                <input
                  type="text"
                  value={showApplicantsBar.skills}
                  onChange={(e) =>
                  setShowApplicantsBar((prevState) => ({
                    ...prevState,
                    skills: e.target.value,
                  }))
                  }
                />
                <label>GPA Limit:</label>
                <input
                  type="text"
                  value={showApplicantsBar.gpa_limit}
                  onChange={(e) =>
                  setShowApplicantsBar((prevState) => ({
                    ...prevState,
                    gpa_limit: e.target.value,
                  }))
                  }
                />
                <label>Backlog Limit:</label>
                <input
                  type="text"
                  value={showApplicantsBar.backlog_limit}
                  onChange={(e) =>
                  setShowApplicantsBar((prevState) => ({
                    ...prevState,
                    backlogs: e.target.value,
                  }))
                  }
                />
                <label>Backlogs allowed:</label>
                <select
                  type="text"
                  value={showApplicantsBar.backlog_history}
                  onChange={(e) =>
                  setShowApplicantsBar((prevState) => ({
                    ...prevState,
                    backlog_history: e.target.value,
                  }))
                  }
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <label>Last date:</label>
                <input
                  type="date"
                  value={showApplicantsBar.lastdate}
                  placeholder="Last date"
                  onChange={(e) =>
                  setShowApplicantsBar((prevState) => ({
                    ...prevState,
                    lastdate: e.target.value,
                  }))
                  }
                />
                <label>Drive date:</label>
                <input
                  type="date"
                  value={showApplicantsBar.drivedate}
                  placeholder="Last date"
                  onChange={(e) =>
                  setShowApplicantsBar((prevState) => ({
                    ...prevState,
                    drivedate: e.target.value,
                  }))
                  }
                />
                <label>Description:</label>
                <textarea
                  type="text"
                  rows="4"
                  value={showApplicantsBar.description}
                  placeholder="Description"
                  onChange={(e) =>
                  setShowApplicantsBar((prevState) => ({
                    ...prevState,
                    description: e.target.value,
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
