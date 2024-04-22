import React from "react";
import { useState } from "react";
import "./createdrive.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function CreateDrive() {
  const [driveName, setDriveName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [date, setDate] = useState("");
  const [lpa, setLpa] = useState("");

  const notify = (text) => toast(text);

  const handleSubmit = (e) => {
    notify("Drive Created Successfully!");
    e.preventDefault();
    console.log(driveName, jobPosition, date, lpa);
    // Handle form submission here

    axios({
      method: "post",
      url: "https://jsonplaceholder.org/",
      data: {
        driveName: driveName,
        jobPosition: jobPosition,
        date: date,
        lpa: lpa,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <label>Package:</label>
              <input
                type="text"
                placeholder="Package"
                value={lpa}
                onChange={(e) => setLpa(e.target.value)}
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
