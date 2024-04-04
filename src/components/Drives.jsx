import React from "react";
import "./drives.css";
import DriveCard from "./DriveCard";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Drives = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [drives,setDrives] = useState([])
   
    useEffect(() => {
      axios
        .get("https://660e2d256ddfa2943b35fefd.mockapi.io/DRIVE")
        .then((response) => {
          setDrives(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

 


  return (
    <div className="drive">
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Hey</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to apply?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Apply
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      <div className="title-body">
        <h1>DRIVES</h1>
      </div>
      <div className="drive-body">
        {drives.map((drive, index) => {
          return (
            <DriveCard
              key={index}
              detail={drives[index]}
              buttonClicked={handleShow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Drives;




// [
//   {
//     title: "TATA",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!",
//     job: "Software Developer",
//     package: "5 LPA",
//   },
//   {
//     title: "WIPRO",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!",
//     job: "Software Developer",
//     package: "5 LPA",
//   },
//   {
//     title: "Blae",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!",
//     job: "Software Developer",
//     package: "5 LPA",
//   },
//   {
//     title: "Blae",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!",
//     job: "Software Developer",
//     package: "5 LPA",
//   },
// ];