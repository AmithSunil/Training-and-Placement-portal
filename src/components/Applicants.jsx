import React, { useState, useEffect } from "react";
import "./applicants.css";
import axios from "axios";

const Applicants = (id) => {
  const [applicants,setApplicants] = useState([
    { id: 1, first: "Mark", last: "Otto", handle: "@mdo" },
    { id: 2, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 3, first: "Larry", last: "the Bird", handle: "@twitter" },
  ])

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/drives/drive/`, {
        params: {
          drive_id: id
        }
      })
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
              <td>{applicant.first}</td>
              <td>{applicant.last}</td>
              <td>{applicant.handle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Applicants;
