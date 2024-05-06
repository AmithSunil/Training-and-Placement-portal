import React, { useState, useEffect } from "react";
import "./applicants.css";
import axios from "axios";

const Applicants = (id) => {
  const [applicants,setApplicants] = useState([
    { id: 1, first_name: "Mark", last_name: "Otto", email: "@mdo" },
    { id: 2, first_name: "John", last_name: "Doe", email: "johndoe@example.com" },
    { id: 3, first_name: "Jane", last_name: "Smith", email: "janesmith@example.com" },
    { id: 4, first_name: "Alice", last_name: "Johnson", email: "alicejohnson@example.com" },
    { id: 5, first_name: "Bob", last_name: "Williams", email: "bobwilliams@example.com" },
    { id: 6, first_name: "Sarah", last_name: "Davis", email: "sarahdavis@example.com" }
  ])

  useEffect(() => {
    axios
      .patch(`${process.env.REACT_APP_API_URL}/drives/apply-drive/`, {drive_id: id})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
 
      });
  }, []);
  

  return (
    <div className="applicants-main">
      <table className="table">
        <thead> 
          <tr>
            <th scope="col">Index</th>
            <th scope="col">Name</th>
            <th scope="col">Branch</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant) => (
            <tr key={applicant.id}>
              <th scope="row">{applicant.id}</th>
              <td>{applicant.first_name+" "+applicant.last_name}</td>
              <td>{applicant.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Applicants;
