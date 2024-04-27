// DriveCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import { Button } from 'react-bootstrap';

const DriveCard = ({ detail, buttonClicked }) => {

  const handleClick = () => {
    buttonClicked(); // Call the function received from Drives component to show the modal
  };

  return (
    <div>
      <div className='card'>
        <div className='titleimg'>
          <img src={logo} alt="pic" style={{ width: 70 }} />
          <h1>{detail.name}</h1>
        </div>
        <h6>JOB TITLE: {detail.title}</h6>
        <h6>PACKAGE: {detail.package}</h6>
        <h6>Location: {detail.location}</h6>
        <h6>Skills: {detail.skills}</h6>
        <h6>GPA Required: {detail.gpa_limit}</h6>
        <h6>Backlogs:{detail.backlog}</h6>
        <h6>Backlog history:{String(detail.backlog_history)}</h6>
        <h6>Last date to Apply:{detail.lastdate}</h6>
        <h6>Drive date:{detail.drivedate}</h6>
        <p>{detail.description}</p>
        <div className="button">
          <button type="button" className="btn btn-primary" onClick={handleClick}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default DriveCard;
