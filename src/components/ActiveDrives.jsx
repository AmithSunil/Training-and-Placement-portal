import React, { useEffect, useState } from "react";
import "./active.css";
import Button from "react-bootstrap/Button";
import Applicants from "./Applicants";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (text) => toast(text);

const ActiveDrives = () => {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/drives/drive/`)
      .then((response) => {
        console.log(response.data);
        setShowApplicants(
          response.data.reduce((acc, item) => {
            acc[item.drive_id] = {
              drive_id: item.drive_id,
              show: false,
              name: item.name,
              position: item.position,
              lpa: item.lpa,
              skills: item.skills,
              location: item.location,
              drivedate: item.drivedate,
              backlog_limit: item.backlog_limit,
              backlog_history: item.backlog_history,
              lastdate: item.lastdate,
              drivedate: item.drivedate,
              description: item.description,
            };
            return acc;
          }, {})
        );
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  const [latestID, setLatestID] = useState(0);

  const [showApplicantsBar, setShowApplicantsBar] = useState({});
  const [showApplicants, setShowApplicants] = useState({});

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
      Object.values(showApplicants).find((item) => item.drive_id === driveID)
    );
    console.log(showApplicantsBar);
    setEditing(true);
  };

  const makeEdit = () => {
    // Handle saving the edited drive

    console.log(showApplicantsBar);

    axios
      .put(`${process.env.REACT_APP_API_URL}/drives/drive/`,showApplicantsBar)
      .then((response) => {
        console.log(response);
        notify("User Updated Successfully!");
      })
      .catch((error) => {
        console.log(error);
        notify("Error Updating User!");
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
    axios
    .delete(`${process.env.REACT_APP_API_URL}/drives/drive/`,
    {
      data: {
          drive_id : latestID
      }
    })
    .then((response) => {
      console.log(response);
      notify("Drive Closing Successfully!");
    })
    .catch((error) => {
      console.log(error);
      notify("Error Closing Drive!");
    });


    setShowApplicants((prevShowApplicants) => {
      const updatedShowApplicants = { ...prevShowApplicants };
      delete updatedShowApplicants[latestID];
      console.log("ID",latestID)
      return updatedShowApplicants;
    });

    console.log(showApplicants);
    console.log("Drive Closed");
  };

  return (
    <div className="active-main">
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
        <h1>CREATED DRIVES</h1>
      </div>
      {!editing && (
        <div className="active-body">
          {Object.values(showApplicants).map((drive) => (
            <div key={drive.drive_id} className="active-drive-card">
              <h4>{drive.name}</h4>
              <div className="status"></div>
              <div className="details">
              <h6>Title: {drive.name}</h6>
              <h6>Position: {drive.position}</h6>
              <h6>Drive Date: {drive.drivedate}</h6>
              <h6>Package: {drive.lpa} lpa</h6>
              <h6>Location: {drive.location}</h6>
              <h6>Skills:{drive.skills}</h6>
              <h6>Backlogs: {drive.backlog_limit}</h6>
              <h6>backlog_limit History:{String(drive.backlog_history)}</h6>
              <h6>Last Date: {drive.lastdate}</h6>
              <h6>Drive Date: {drive.drivedate}</h6>
              <h6>Description:{drive.description}</h6>
              </div>
              

              <div className="active-buttons">
                <Button
                  onClick={() => {
                    toggleApplicants(drive.drive_id);
                  }}
                >
                  View Applicants
                </Button>
                <Button
                  onClick={() => {
                    editDrive(drive.drive_id);
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    handleShow(drive.drive_id);
                  }}
                >
                  Close Drive
                </Button>
              </div>

              {/* Check if the drive's applicants should be shown */}
              {showApplicants[drive.drive_id]?.show && (
                <Applicants id={drive.drive_id} />
              )}
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
                  name: e.target.value,
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
                  lpa: e.target.value,
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
            <label>Backlogs:</label>
            <input
              type="text"
              value={showApplicantsBar.backlog_limit}
              onChange={(e) =>
                setShowApplicantsBar((prevState) => ({
                  ...prevState,
                  backlog_limit: e.target.value,
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
