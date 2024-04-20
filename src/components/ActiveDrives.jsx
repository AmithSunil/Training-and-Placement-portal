import React,{useState} from "react";
import "./active.css";
import Button from "react-bootstrap/Button";
import Applicants from "./Applicants";

const ActiveDrives = () => {
  const [showApp, setShowApp] = useState(true);

  const hideApplicants = () => {
    if (showApp) {
      const applicants = document.querySelector(".applicants-main");
      applicants.style.display = "none";
      setShowApp(false);
    }
    else {
        const applicants = document.querySelector(".applicants-main");
        applicants.style.display = "flex";
        setShowApp(true);
        }
  };

  const applied = [
    {
      title: "TOTA",
      position: "",
      date: "",
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
        <div className="active-body">
            {applied.map((drive, index) => (
                <div key={index} className="active-drive-card">
                    <h4>{drive.title}</h4>
                    <div className="status"></div>
                    <h6>Status: {drive.status}</h6>
                    <h6>Date: {drive.date}</h6>

                    <div className="active-buttons">
                        <Button onClick={hideApplicants}>View Applicants</Button>
                        <Button>Edit</Button>
                        <Button>Close Drive</Button>
                    </div>
                    {index === 0 && <Applicants />}
                </div>
            ))}
        </div>
    </div>
);
};

export default ActiveDrives;
