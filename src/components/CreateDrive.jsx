import React from "react";
import { useState } from "react";
import "./createdrive.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// import { response } from "express";

function CreateDrive() {
  const [driveName, setDriveName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [lastdate, setLastDate] = useState("");
  const [lpa, setLpa] = useState("");
  const [drivedate, setDriveDate] = useState("");
  const [backlogs, setBacklogs] = useState("");
  const [backlogHistory, setBacklogHistory] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [description,setDescription] = useState("")
  const [skills,setSkills] =useState("");
  const [gpaLimit,setGpaLimit] = useState("");

  const notify = (text) => toast(text);

  const handleSubmit = (e) => {
    notify("Drive Created Successfully!");
    e.preventDefault();

    axios.post("http://localhost:3001/drive", {
      name: driveName,
      position: jobPosition,
      lpa:lpa,
      description:description,
      lastdate:lastdate,
      drivedate:drivedate,
      backlogs:backlogs,
      backlog_history: backlogHistory,
      gpa_limit:gpaLimit,
      location:workLocation,
      skills:skills,      
    // Handle form submission here
  }).then(response=>{console.log(response)}).catch(error=>{console.log(error)});
  }

  return (
    <div className="main">
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

      <div className="createdrive">
        <div className="title-body">
          <h1>CREATE DRIVE</h1>
        </div>
        <div className="form-container">
          <div className="form-box">
            <form onSubmit={handleSubmit}>
              <label>Company name:</label>
              <input
                type="text"
                placeholder="Company name"
                value={driveName}
                onChange={(e) => setDriveName(e.target.value)}
              />
              <label>Job Position:</label>
              <input
                type="text"
                placeholder="Job Position"
                value={jobPosition}
                onChange={(e) => setJobPosition(e.target.value)}
              />
              <label>Last date:</label>
              <input
                type="date"
                placeholder="Last date"
                value={lastdate}
                onChange={(e) => setLastDate(e.target.value)}
              />
              <label>Drive date:</label>
              <input
                type="date"
                placeholder="Last date"
                value={drivedate}
                onChange={(e) => setDriveDate(e.target.value)}
              />
              <label>Package:</label>
              <input
                type="text"
                placeholder="Package"
                value={lpa}
                onChange={(e) => setLpa(e.target.value)}
              />
              <label>Skills Required:</label>
              <input
                type="text"
                placeholder="Skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
              <label>GPA Required:</label>
              <input
                type="text"
                placeholder="GPA required"
                value={gpaLimit}
                onChange={(e) => setGpaLimit(e.target.value)}
              />
              <label>Number of Backlogs:</label>
              <input
                type="text"
                placeholder="Backlogs"
                value={backlogs}
                onChange={(e) => setBacklogs(e.target.value)}
              />
              <label>Backlog History</label>
              <select
                onChange={(e) => setBacklogHistory(e.target.value === "Yes")}
                style={{ width: "100%", padding: "7px" ,marginBottom:"10px"}}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <label>Work Location:</label>
              <input
                type="text"
                placeholder="Work Location"
                value={workLocation}
                onChange={(e) => setWorkLocation(e.target.value)}
              />
              <label>Description:</label>
              <textarea
                type="textarea"
                placeholder="Job description"
                value={description}
                rows="4"
                onChange={(e) => setDescription(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateDrive;