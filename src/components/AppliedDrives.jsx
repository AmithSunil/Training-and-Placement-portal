import React, { useEffect, useState } from "react";
import "./applied.css";
import axios from "axios";

const AppliedDrives = () => {
  const [applied, setApplied] = useState([
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
  ]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/drives/apply-drive`, {
      params: {
        st_id: window.localStorage.getItem("USER_ID")
      }
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }, []);


  return (
    <div className="main">
      <div className="title-body">
        <h1>APPLIED DRIVES</h1>
      </div>
      <div className="applied-body">
        {applied.map((drive, index) => (
          <div key={index} className="drive-card">
            <h6>Position: {drive.position}</h6>
            <h6>Company Name: {drive.name}</h6>
            <div className="status"></div>
             <h6>Drive Date: {drive.drivedate}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedDrives;
