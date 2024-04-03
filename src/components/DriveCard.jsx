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
          <h1>{detail.title}</h1>
        </div>
        <h6>JOB TITLE: {detail.job}</h6>
        <h6>PACKAGE: {detail.package}</h6>
        <p>{detail.description}</p>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Apply</button>
      </div>
    </div>
  );
};

export default DriveCard;
