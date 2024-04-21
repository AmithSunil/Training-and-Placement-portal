import React,{useState} from "react";
import "./active.css";
import Button from "react-bootstrap/Button";
import Applicants from "./Applicants";

const ActiveDrives = () => {
  const applied = [
    {
      id: 0,
      title: "TATA",
      position: "",
      date: "",
    },
    {
      id: 1,
      title: "WIPRO",
      status: "Passed onto Round 2",
      date: "25/2/24",
    },
    {
      id: 2,
      title: "Blae",
      status: "Passed onto Round 2",
      date: "25/2/24",
    },
    {
      id: 3,
      title: "Blae",
      status: "Passed onto Round 2",
      date: "25/2/24",
    },
  ];

const [showApplicants, setShowApplicants] = useState(
    applied.map((item) => ({
        id: item.id,
        show: false
    }))
);

console.log(showApplicants);

const toggleApplicants = (driveID) => {
    setShowApplicants((prevState) => {
            return prevState.map((item) => {
                    if (item.id === driveID) {
                            return { ...item, show: !item.show };
                    }
                    return item;
            });
    });
};

  return (
    <div className="main">
      <div className="title-body">
        <h1>ACTIVE DRIVES</h1>
      </div>
      <div className="active-body">
        {applied.map((drive) => (
          <div key={drive.id} className="active-drive-card">
            <h4>{drive.title}</h4>
            <div className="status"></div>
            <h6>Status: {drive.status}</h6>
            <h6>Date: {drive.date}</h6>

            <div className="active-buttons">
              <Button onClick={()=>{toggleApplicants(drive.id)}}>View Applicants</Button>
              <Button>Edit</Button>
              <Button>Close Drive</Button>
            </div>
            {showApplicants[drive.id].show && showApplicants[drive.id].id===drive.id && <Applicants />}  
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveDrives;
