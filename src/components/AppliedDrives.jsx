import React from "react";
import "./applied.css";

const AppliedDrives = () => {
  const applied = [
    {
      title: "TATA",
      status: "Passed onto Round 2",
      date: "25/2/24",
    },
    {
      title: "WIPRO",
      status: "Passed onto Round 2",
      date: "25/2/24",
    },
    {
      title: "Blae",
      status: "Passed onto Round 2",
      date: "25/2/24",
    },
    {
      title: "Blae",
      status: "Passed onto Round 2",
      date: "25/2/24",
    },
  ];

  return (
    <div className="main">
      <div className="title-body">
        <h1>APPLIED DRIVES</h1>
      </div>
      <div className="applied-body">
        {applied.map((drive, index) => (
          <div key={index} className="drive-card">
            <h4>{drive.title}</h4>
            <div className="status"></div>
            <h6>Status: {drive.status}</h6>
            <h6>Date: {drive.date}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedDrives;
