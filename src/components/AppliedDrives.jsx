import React,{useEffect, useState} from "react";
import "./applied.css";
import axios from "axios";


const AppliedDrives = () => {
  
  useEffect(() => {
    axios
      .get("https://660e2d256ddfa2943b35fefd.mockapi.io/DRIVE")
      .then((response) => {
        setApplied(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [applied,setApplied] = useState([
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
  ])

  return (
    <div className="main">
      <div className="title-body">
        <h1>ACTIVE DRIVES</h1>
      </div>
      <div className="applied-body">
        {applied.map((drive, index) => (
          <div key={index} className="drive-card">
            <h6>Position: {drive.title}</h6>
            <h6>Company Name: {drive.title}</h6>
            <div className="status"></div>
            <h6>Status: {drive.status}</h6>
            <h6>Drive Date: {drive.date}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedDrives;
