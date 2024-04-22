import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./applicants.css";

const Applicants = () => {
  const applicants = [
    { id: 1, first: "Mark", last: "Otto", handle: "@mdo" },
    { id: 2, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 3, first: "Larry", last: "the Bird", handle: "@twitter" },
  ];

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
