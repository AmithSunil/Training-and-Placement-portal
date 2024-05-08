// DriveCard.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import { Button } from "react-bootstrap";

const DriveCard = ({ detail, buttonClicked, setApplied }) => {
 
  const handleClick = () => {
    window.localStorage.setItem("APPLIED", detail.drive_id);
    setApplied(detail.drive_id);
     // Set the selected drive details to be shown in the modal
    buttonClicked(); // Call the function received from Drives component to show the modal
  };

  return (
    <div>
      <div className="card">
        <div className="titleimg">
          <img src={logo} alt="pic" style={{ width: 70 }} />
          <h1>{detail.name}</h1>
        </div>
 
        <div className='drivedetails'>
 <h6>Company Name: {detail.name}</h6>
        <h6>Position: {detail.position}</h6>
        <h6>Package: {detail.lpa}</h6>
        <h6>Location: {detail.location}</h6>
        <h6>Skills: {detail.skills}</h6>
        <h6>GPA Required: {detail.gpa_limit}</h6>
        <h6>Backlog Limit:{detail.backlog_limit}</h6>
        <h6>
          Backlog history:{" "}
          {String(detail.backlog_history)  === "true" ? "Allowed" : "Not Allowed"}
        </h6>
        <h6>Last date to Apply:{detail.lastdate.split("-").reverse().join("-")}</h6>
        <h6>Drive date:{detail.drivedate.split("-").reverse().join("-")}</h6>
        <p>{detail.description}</p>
        </div>
        <div className="button">
          <button type="button" className="but" onClick={handleClick}>Apply</button>
 
        </div>
      </div>
    </div>
  );
};

export default DriveCard;
